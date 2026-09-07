# 🏛️ virasat.archive — A Visual Archive of India's Cultural Heritage

> **Visual Discovery & Archival Companion to [Virasat.ai — Artifacts of India](http://127.0.0.1:5000)**  
> **Tagline:** *"A visual archive of India's cultural heritage."*  
> **Theme:** Heritage & Culture &bull; **Smart India Hackathon 2026**

---

## 📖 1. Purpose & Ecosystem Alignment

**virasat.archive** is the dedicated visual image-discovery and archival companion to **Virasat.ai — Artifacts of India**.

While **Virasat.ai** organizes Indian cultural traditions across an interactive geospatial map and structured cultural taxonomy, **virasat.archive** provides a **Pinterest-inspired masonry gallery** tailored for visual browsing, curated research collections, and museum-grade artifact inspection.

### 🎯 Key Highlights:
- **Official Heritage Catalog (Virasat.ai Heritage Database)**:
  `virasat.archive` uses the official **31 Virasat.ai Heritage Database** records from Supabase (`heritage` table) as its central archive catalog. Each record includes verified identifiers, categories, locations, descriptions, and verified visual assets.
- **Dynamic Wikimedia Commons Image Discovery**:
  Wikimedia Commons serves as an on-demand, dynamic image discovery engine. Each heritage card includes a **"Find Images"** button that instantly queries Wikimedia Commons for authentic imagery using the item's name (e.g. *Kathak*, *Banarasi Silk*, *Rani Ki Vav*, *Sohrai Painting*).
- **No Automatic Storage of Wikimedia Images**:
  Wikimedia search results remain transient, dynamic discovery items. They are **not** automatically downloaded or stored into the archive database.
- **Museum-Grade Attribution & Licensing**:
  Source, creator, and actual licenses (CC0, CC BY, CC BY-SA, Public Domain) are strictly preserved and visibly displayed for every Wikimedia discovery result, linking directly to the Wikimedia Commons source file page.
- **Pinterest-Inspired Masonry Grid**: Adaptive multi-column layout showcasing varied aspect ratios (`3:4` portraits, `2:3` tall steles, `1:1` square motifs, and `16:9` panoramas).
- **Sand Beige (`#D9C2A3`) Archival Blueprint Slots**: Any heritage item without an existing image automatically displays the Sand Beige archival placeholder with registration stamps and dimension specifications.
- **Strict Distinction of Record Provenance**:
  - **"Virasat.ai Heritage Database"**: Official companion records shared with the main platform.
  - **"Virasat Archive Record"**: User-cataloged or internal archival records.
  - **"Wikimedia Commons"**: Verified open-access dynamic image discovery.
- **Dual Search & Filtering**:
  - **Heritage Database Filter**: Fast client-side searching across `name`, `category`, `location`, and `description`, accompanied by category pills (*Classical Dance*, *Monument*, *Traditional Textile*, *Traditional Embroidery*).
  - **Global Wikimedia Search**: Dynamic search bar querying `/api/wikimedia?q=...` across Wikimedia Commons.

---

## 🌐 2. Heritage Catalog & Wikimedia Commons Integration

### A. Official Heritage Catalog (`GET /api/heritage`)
The Flask backend securely connects to the Virasat.ai Supabase instance via environment variables:
```bash
SUPABASE_URL=https://<your-project>.supabase.co
SUPABASE_KEY=<your-supabase-publishable-or-anon-key>
```
The `/api/heritage` endpoint retrieves the official 31 heritage records, supporting optional `?category=...` and `?q=...` parameters. If Supabase is temporarily unreachable, the frontend gracefully displays a friendly notification without crashing the website, allowing users to continue using Wikimedia search.

### B. Wikimedia Commons Dynamic Image Discovery (`GET /api/wikimedia`)
- **Discovery Mechanism**:
  Users can search any cultural query (e.g., `Sohrai Painting`, `Ajanta Cave`, `Chola Bronze`, `Nataraja`) directly in the search bar or by clicking **"Find Images"** on any heritage card. The interface queries `GET /api/wikimedia?q=<query>` and dynamically populates the masonry gallery with verified images.
- **Hosted Directly by Wikimedia Commons**:
  Images are loaded on-the-fly directly from Wikimedia Commons. No external photographs are preloaded, downloaded, or bundled into the repository.
- **Authentic Provenance & Licensing (`extmetadata`)**:
  Creator, description, and exact license data are read from Wikimedia's actual `extmetadata`. Every image card displays its specific license (e.g. `CC0`, `CC BY 4.0`, `CC BY-SA 4.0`, `Public Domain`), author attribution, and a direct link to the original Wikimedia Commons file page. Blanket licenses are never assumed. If licensing is missing, it safely falls back to `"See source for license information"`.
- **Ephemeral Dynamic Exploration (Not Stored)**:
  Wikimedia search results are transient discovery items and are **not** automatically stored in `archive_items.json` or permanent storage. Permanent records remain strictly controlled through curatorial cataloging (`+ Add Record`).
- **How to Test the Endpoints**:
  ```bash
  # Query the official heritage database
  curl "http://127.0.0.1:5050/api/heritage"

  # Query the live Wikimedia endpoint
  curl "http://127.0.0.1:5050/api/wikimedia?q=Sohrai"

  # Test empty search query (returns empty array [])
  curl "http://127.0.0.1:5050/api/wikimedia?q="

  # Run the automated compliance and unit test suite
  python test_app.py
  ```

---

## 🎨 3. Strict 10-Color Heritage Palette

virasat.archive strictly adheres to the unified Virasat.ai design tokens:

| Color Name | Hex Code | Primary UI Role |
| :--- | :--- | :--- |
| **Deep Brown** | `#3B2416` | Main headings, strong typography, important text, dark elements |
| **Heritage Brown**| `#7B3F00` | Primary buttons, active navigation, key links, calls to action, hover states |
| **Terracotta** | `#A05A2C` | Secondary accents, category labels, highlights, icons, decorative badges |
| **Warm Brown** | `#7B5F4D` | Secondary text, supporting information, metadata, descriptions |
| **Medium Brown** | `#654B3B` | Body text, narrative text, curator appraisals |
| **Warm Cream** | `#F7F1E3` | **Primary page background (dominant)** |
| **Soft Ivory** | `#FFFAF2` | Search bar surface, light buttons, secondary card layers |
| **White** | `#FFFFFF` | Gallery cards, navigation bar, modal dialog panels |
| **Light Beige** | `#E4D4C0` | Borders, dividers, card outlines, input fields |
| **Sand Beige** | `#D9C2A3` | **Image placeholders, subtle decorative areas, loading elements** |

---

## 🖼️ 4. How to Attach Photographs (Populate Later)

Every card displays the **Sand Beige (`#D9C2A3`) archival placeholder** by default. You can attach images at your own pace:

### Method A: Single Card Quick Attach (UI)
1. Hover over any artifact card or click into the **Museum Inspector Modal**.
2. Click **"Attach Photo"** (or **"Change Photo"**).
3. Paste any Wikimedia Commons file URL (e.g. `https://commons.wikimedia.org/wiki/File:...` or `https://upload.wikimedia.org/...`).
4. The built-in **Wikimedia Commons API resolver** automatically fetches the exact license, author, and description.
5. Alternatively, select a local image file from your device (stored strictly in browser `localStorage`).
6. Click **"Save to Slot"**. The photo immediately renders with an active attribution badge and link to the original repository.

### Method B: Edit the Master Data File
Open `data/archive_items.json` and populate the `"image_url"` key for any artifact:
```json
{
  "id": "chola-nataraja-bronze",
  "virasat_archive_id": "VA-SCL-0101",
  "image_url": "https://upload.wikimedia.org/.../Nataraja.jpg",
  "image_license": "CC BY-SA 3.0",
  "image_attribution": "Photographer Name (Wikimedia Commons)"
}
```

---

## 🚀 5. Running virasat.archive Locally

### Option 1: Run with Flask Backend
```bash
cd "C:\CODING RELATED STUFF\virasat-archive"
pip install -r requirements.txt
python app.py
```
Open your browser at:
```
http://127.0.0.1:5050
```

### Option 2: Run as Static Server
```bash
cd "C:\CODING RELATED STUFF\virasat-archive"
python -m http.server 5050
```
Then navigate to `http://127.0.0.1:5050/index.html`.

### Run Compliance Unit Tests
```bash
python test_app.py
```

---

## 🏛️ 6. Cultural Domains Included

1. **Sculpture & Bronzes**: Chola Nataraja Bronze, Didarganj Yakshi, Sarnath Lion Capital, Hoysala Darpana Sundari.
2. **Architecture & Reliefs**: Konark Sun Temple Wheel, Rani ki Vav Stepwell, Brihadisvara Temple Vimana, Unakoti Rock Colossus, Lepakshi Hanging Pillar, Maluti Terracotta Temples.
3. **Paintings & Murals**: Ajanta Cave 1 Padmapani, Kangra Pahari Miniature, Tanjore Gilded Krishna, Mithila Kohbar Wall Art, Bhimbetka Rock Art.
4. **Textiles & Weaves**: Banarasi Shikargah Zari Brocade, Patan Patola Double Ikkat, Kashmiri Kani Pashmina, Chamba Rumal Dorukha, Lucknow Chikankari.
5. **Living Craft & Regalia**: Bastar Dokra Metallurgy, Kathakali Paccha Kireedam, Purulia Chhau Mask, Majuli Sattriya Bhaona Mukha, Yakshagana Mudi Headdress.
6. **Manuscripts & Epigraphy**: Gilgit Lotus Sutra Birch-Bark, Odia Gita Govinda Palm-Leaf, Delhi-Topra Ashokan Pillar Edicts in Brahmi.
7. **Ancient Metallurgy & Craft**: Bidriware Silver Inlay Huqqa, Aranmula Kannadi Front-Surface Mirror, Kanishka Bronze Reliquary.
8. **Numismatics & Epigraphy**: Samudragupta Ashvamedha Gold Dinar.
