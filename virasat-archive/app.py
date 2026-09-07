#!/usr/bin/env python3
"""
virasat.archive — Visual Cultural Heritage Archive
Visual image-discovery and archival companion to Virasat.ai — Artifacts of India.
"""

import os
import json
import re
import html
import urllib.request
import urllib.parse
import urllib.error
from flask import Flask, render_template, jsonify, send_from_directory, request

app = Flask(
    __name__,
    template_folder='templates',
    static_folder='static'
)

def load_env():
    """Loads environment variables from .env file if present without overriding existing env."""
    env_path = os.path.join(os.path.dirname(__file__), '.env')
    if os.path.exists(env_path):
        with open(env_path, 'r', encoding='utf-8-sig') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    k = k.strip()
                    v = v.strip().strip("'").strip('"')
                    if k not in os.environ:
                        os.environ[k] = v

load_env()

def fetch_supabase_heritage():
    """
    Fetches the official heritage records from Virasat.ai Supabase heritage table.
    Uses SUPABASE_URL and SUPABASE_KEY environment variables.
    """
    supabase_url = os.environ.get('SUPABASE_URL', '').rstrip('/')
    supabase_key = os.environ.get('SUPABASE_KEY', '')

    if not supabase_url or not supabase_key:
        raise ValueError("Supabase configuration missing: SUPABASE_URL and SUPABASE_KEY must be set in environment")

    endpoint = f"{supabase_url}/rest/v1/heritage?select=*&order=id.asc"
    headers = {
        'apikey': supabase_key,
        'Authorization': f"Bearer {supabase_key}",
        'Content-Type': 'application/json'
    }

    req = urllib.request.Request(endpoint, headers=headers)
    with urllib.request.urlopen(req, timeout=12) as resp:
        if resp.status != 200:
            raise RuntimeError(f"Supabase returned status code {resp.status}")
        raw_data = resp.read().decode('utf-8')
        return json.loads(raw_data)

def clean_html_metadata(raw_text):
    """Strips and sanitizes HTML tags and entities from Wikimedia metadata strings."""
    if not raw_text or not isinstance(raw_text, str):
        return ""
    unescaped = html.unescape(raw_text)
    cleaned = re.sub(r'<[^>]+>', '', unescaped)
    return ' '.join(cleaned.split())

# Load dataset once at startup
DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'archive_items.json')
SAMPLE_DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'archive_items.sample.json')

def get_archive_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def get_sample_data():
    if os.path.exists(SAMPLE_DATA_FILE):
        with open(SAMPLE_DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

@app.route('/')
def index():
    """Renders the virasat.archive gallery interface."""
    virasat_main_url = os.environ.get('VIRASAT_MAIN_URL', 'http://localhost:3000').rstrip('/')
    return render_template('index.html', virasat_main_url=virasat_main_url)

@app.route('/api/config')
def get_config():
    """Returns dynamic application configuration."""
    virasat_main_url = os.environ.get('VIRASAT_MAIN_URL', 'http://localhost:3000').rstrip('/')
    return jsonify({
        'virasat_main_url': virasat_main_url
    })

@app.route('/images/<path:filename>')
def serve_heritage_image(filename):
    """Serves official heritage images from local static/images directory."""
    local_dir = os.path.join(os.path.dirname(__file__), 'static', 'images')
    if os.path.exists(os.path.join(local_dir, filename)):
        return send_from_directory(local_dir, filename)
    parent_ai_dir = os.path.join(os.path.dirname(__file__), '..', 'virasat-ai', 'public', 'images')
    if os.path.exists(os.path.join(parent_ai_dir, filename)):
        return send_from_directory(parent_ai_dir, filename)
    return ('', 404)

@app.route('/data/<path:filename>')
def serve_data(filename):
    """Serves raw data files directly."""
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'data'), filename)

@app.route('/bg.jpg')
def serve_bg():
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'static', 'images'), 'bg.jpg')

@app.route('/logo.png')
def serve_logo():
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'static', 'images'), 'logo.png')

@app.route('/api/heritage', methods=['GET'])
def api_heritage():
    """
    Returns official heritage records from Virasat.ai Supabase heritage table.
    Supports optional category and search query filters.
    """
    try:
        data = fetch_supabase_heritage()
    except Exception as e:
        app.logger.error(f"Error fetching Supabase heritage records: {e}")
        return jsonify({
            "error": "Failed to fetch heritage records from Supabase",
            "details": str(e)
        }), 502

    category = request.args.get('category')
    q = request.args.get('q')

    if category and category.lower() != 'all':
        data = [item for item in data if (item.get('category') or '').lower() == category.lower()]

    if q:
        q_clean = q.lower().strip()
        data = [
            item for item in data if (
                q_clean in (item.get('name') or '').lower() or
                q_clean in (item.get('category') or '').lower() or
                q_clean in (item.get('location') or '').lower() or
                q_clean in (item.get('description') or '').lower()
            )
        ]

    return jsonify(data)

@app.route('/api/artifacts', methods=['GET'])
def api_artifacts():
    """Returns the full list of archival records."""
    data = get_archive_data()
    category = request.args.get('category')
    q = request.args.get('q')

    if category and category.lower() != 'all':
        data = [item for item in data if item.get('category', '').lower() == category.lower()]

    if q:
        q_clean = q.lower().strip()
        data = [
            item for item in data if (
                q_clean in item.get('title', '').lower() or
                q_clean in item.get('virasat_archive_id', '').lower() or
                q_clean in item.get('dynasty_era', '').lower() or
                q_clean in item.get('medium', '').lower() or
                q_clean in item.get('record_source', '').lower() or
                any(q_clean in tag.lower() for tag in item.get('tags', []))
            )
        ]

    return jsonify(data)

@app.route('/api/artifacts/sample', methods=['GET'])
def api_sample_artifacts():
    """Returns the pre-indexed sample dataset (32 authentic records)."""
    return jsonify(get_sample_data())

@app.route('/api/artifact/<artifact_id>', methods=['GET'])
def api_artifact_detail(artifact_id):
    """Returns a specific archival record by id or virasat_archive_id."""
    data = get_archive_data() + get_sample_data()
    for item in data:
        if item.get('id') == artifact_id or item.get('virasat_archive_id', '').lower() == artifact_id.lower():
            return jsonify(item)
@app.route('/api/wikimedia', methods=['GET'])
def api_wikimedia():
    """
    Dynamic Wikimedia Commons image search endpoint.
    Calls MediaWiki API and returns authentic licensing, creator, and image URLs.
    """
    query = request.args.get('q', '').strip()
    if not query:
        return jsonify([])

    params = {
        'action': 'query',
        'generator': 'search',
        'gsrsearch': query,
        'gsrnamespace': 6,
        'gsrlimit': 30,
        'prop': 'imageinfo',
        'iiprop': 'url|extmetadata',
        'iiurlwidth': 700,
        'format': 'json'
    }

    api_url = f"https://commons.wikimedia.org/w/api.php?{urllib.parse.urlencode(params)}"
    headers = {
        'User-Agent': 'VirasatArchive/1.0 (https://virasat.ai; visual-heritage-discovery; contact: virasat-archive@example.com)'
    }

    try:
        req = urllib.request.Request(api_url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            raw_data = resp.read().decode('utf-8')
            res_json = json.loads(raw_data)
    except urllib.error.HTTPError as e:
        return jsonify({"error": f"Wikimedia API HTTP error: {e.code}", "details": str(e)}), 502
    except urllib.error.URLError as e:
        return jsonify({"error": "Wikimedia API connection failed", "details": str(e.reason)}), 502
    except Exception as e:
        return jsonify({"error": "Wikimedia API request failed", "details": str(e)}), 502

    pages = res_json.get('query', {}).get('pages', {})
    results = []

    for page_id, page in pages.items():
        imageinfo = page.get('imageinfo', [])
        if not imageinfo:
            continue

        info = imageinfo[0]
        extmetadata = info.get('extmetadata', {})

        # Extract Raw Fields
        raw_artist = extmetadata.get('Artist', {}).get('value') or extmetadata.get('Author', {}).get('value')
        raw_credit = extmetadata.get('Credit', {}).get('value')
        raw_license = (
            extmetadata.get('LicenseShortName', {}).get('value') or
            extmetadata.get('License', {}).get('value') or
            extmetadata.get('UsageTerms', {}).get('value')
        )
        raw_desc = (
            extmetadata.get('ImageDescription', {}).get('value') or
            extmetadata.get('ObjectName', {}).get('value') or
            ''
        )

        # Sanitize HTML from metadata
        clean_artist = clean_html_metadata(raw_artist)
        clean_credit = clean_html_metadata(raw_credit)
        clean_license = clean_html_metadata(raw_license)
        clean_desc = clean_html_metadata(raw_desc)

        # Handle creator fallback
        if clean_artist:
            creator = clean_artist
            if clean_credit and clean_credit.lower() not in clean_artist.lower() and clean_credit.lower() != 'wikimedia commons':
                creator = f"{clean_artist} ({clean_credit})"
        elif clean_credit and clean_credit.lower() != 'wikimedia commons':
            creator = clean_credit
        else:
            creator = "Unknown creator"

        if 'snehrashmi' in creator.lower():
            creator = "virasat. ai team"

        # Handle license fallback (Do NOT hardcode a license)
        license_val = clean_license if clean_license else "See source for license information"

        title = page.get('title', '').replace('File:', '').replace('_', ' ').strip()
        if not title:
            title = page.get('title', 'Untitled Heritage Artifact')

        image_url = info.get('url', '')
        thumb_url = info.get('thumburl') or image_url
        source_url = info.get('descriptionurl') or f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(page.get('title', ''))}"

        results.append({
            "id": f"wiki-{page_id}",
            "title": title,
            "imageUrl": image_url,
            "thumbnailUrl": thumb_url,
            "sourceUrl": source_url,
            "creator": creator,
            "description": clean_desc,
            "license": license_val,
            "source": "Wikimedia Commons"
        })

    return jsonify(results)

@app.route('/api/health', methods=['GET'])
def api_health():
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "service": "virasat.archive",
        "role": "Visual Archival Companion to Virasat.ai",
        "active_records_count": len(get_archive_data()),
        "sample_records_count": len(get_sample_data())
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5050))
    print(f"================================================================")
    print(f" [virasat.archive] Launching on http://127.0.0.1:{port}")
    print(f" Companion to Virasat.ai -- Artifacts of India")
    print(f" Exact 10-Color Heritage Palette & Sand Beige Archival Slots")
    print(f"================================================================")
    app.run(host='127.0.0.1', port=port, debug=True)
