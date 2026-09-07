import unittest
import json
from app import app

class VirasatArchiveStrictComplianceTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        self.client.testing = True

    def test_homepage_serves_cleanly(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        html = response.data.decode('utf-8')
        self.assertIn('virasat.archive', html)
        self.assertIn('A visual archive of India', html)
        self.assertIn('Virasat Archive ID', html)
        # Ensure no external photo tags hardcoded
        self.assertNotIn('<img src="https://', html)
        # Ensure requested footer sections are removed
        self.assertNotIn('Archive Domains', html)
        self.assertNotIn('Attribution Methodology', html)
        self.assertNotIn('Design Identity Tokens', html)
        self.assertNotIn('Smart India Hackathon', html)
        # Ensure hero metrics strip and filter bar are removed
        self.assertNotIn('hero-metrics-strip', html)
        self.assertNotIn('Cultural Domains', html)
        self.assertNotIn('Sand Beige Initial State', html)
        self.assertNotIn('sticky-filter-bar', html)
        self.assertNotIn('category-scroll-container', html)
        # Ensure Research Board is replaced by Liked Photos
        self.assertIn('Liked Photos', html)
        self.assertNotIn('Research Board', html)

    def test_sih_2026_footer_credits(self):
        """Verify SIH 2026 credits and team member attribution in footer."""
        response = self.client.get('/')
        html = response.data.decode('utf-8')
        self.assertIn('Made with', html)
        self.assertIn('SIH 2026', html)
        self.assertIn('Made by', html)
        team_members = [
            'Utkarsh Priyanshu',
            'Aditya Ray',
            'Yatika Negi',
            'Shiva Singh',
            'Mohd Saim',
            'Rachit Pratap Singh'
        ]
        for member in team_members:
            self.assertIn(member, html, f"Team member {member} missing from footer credits")

    def test_gallery_starts_clean_slate_with_zero_image_cards(self):
        """Verify that all image cards are cleared and gallery starts with 0 records."""
        response = self.client.get('/api/artifacts')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(len(data), 0, "Gallery should start clean with 0 cards")

    def test_sample_dataset_zero_photos_and_ids(self):
        """Rule 1, 2, 9: Sample dataset has zero preloaded photos and internal Virasat Archive IDs."""
        response = self.client.get('/api/artifacts/sample')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertGreaterEqual(len(data), 32)
        
        for item in data:
            self.assertEqual(item.get('image_url'), "", f"Item {item['id']} has preloaded image")
            self.assertEqual(item.get('image_license'), "", f"Item {item['id']} has hardcoded blanket license")
            archive_id = item.get('virasat_archive_id')
            self.assertTrue(archive_id and archive_id.startswith('VA-'), f"Item {item['id']} missing VA- prefix")

    def test_record_source_provenance_distinction(self):
        """Rule 10: Clearly distinguish Virasat Archive Record vs Virasat.ai Heritage Database vs external."""
        response = self.client.get('/api/artifacts/sample')
        data = json.loads(response.data)
        valid_sources = {'Virasat Archive Record', 'Virasat.ai Heritage Database'}
        for item in data:
            source = item.get('record_source')
            self.assertIn(source, valid_sources, f"Invalid record source: {source}")

    def test_artifact_detail_endpoint(self):
        response = self.client.get('/api/artifact/chola-nataraja-bronze')
        self.assertEqual(response.status_code, 200)
        item = json.loads(response.data)
        self.assertEqual(item['virasat_archive_id'], 'VA-SCL-0101')
        self.assertEqual(item['record_source'], 'Virasat Archive Record')
        self.assertEqual(item['image_source_target'], 'Wikimedia Commons')

    def test_clean_gallery_empty_state_has_only_catalog_button(self):
        """Verify that 'All Image Cards Removed' card & text and 'Load Demo Records' button are absent, keeping + Catalog New Record."""
        with open('static/js/archive-app.js', 'r', encoding='utf-8') as f:
            js_content = f.read()
        self.assertNotIn('All Image Cards Removed', js_content)
        self.assertNotIn('The archive gallery is clear', js_content)
        self.assertNotIn('Load Demo Records', js_content)
        self.assertIn('+ Catalog New Record', js_content)

    def test_wikimedia_search_empty_query(self):
        """Requirement 16: Test empty search query returns empty list."""
        # Missing q parameter
        res1 = self.client.get('/api/wikimedia')
        self.assertEqual(res1.status_code, 200)
        self.assertEqual(res1.get_json(), [])

        # Empty string q parameter
        res2 = self.client.get('/api/wikimedia?q=')
        self.assertEqual(res2.status_code, 200)
        self.assertEqual(res2.get_json(), [])

        # Whitespace-only q parameter
        res3 = self.client.get('/api/wikimedia?q=%20%20')
        self.assertEqual(res3.status_code, 200)
        self.assertEqual(res3.get_json(), [])

    def test_wikimedia_search_sohrai_contract_and_sanitization(self):
        """Requirement 16: Test /api/wikimedia?q=Sohrai returns valid JSON with all required fields and sanitized HTML."""
        from unittest.mock import patch, MagicMock
        import io

        mock_payload = {
            "query": {
                "pages": {
                    "101": {
                        "pageid": 101,
                        "title": "File:Sohrai_Mural_Art.jpg",
                        "imageinfo": [{
                            "url": "https://upload.wikimedia.org/example.jpg",
                            "thumburl": "https://upload.wikimedia.org/thumb_example.jpg",
                            "descriptionurl": "https://commons.wikimedia.org/wiki/File:Sohrai_Mural_Art.jpg",
                            "extmetadata": {
                                "Artist": {"value": "<a href=\"//commons.wikimedia.org/wiki/User:JharkhandArt\">Jharkhand Artisan</a>"},
                                "Credit": {"value": "Traditional Sohrai Workshop"},
                                "LicenseShortName": {"value": "CC BY-SA 4.0"},
                                "ImageDescription": {"value": "<b>Sohrai</b> ritual wall painting of Hazaribagh."}
                            }
                        }]
                    },
                    "102": {
                        "pageid": 102,
                        "title": "File:Sohrai_Motif_Ancient.jpg",
                        "imageinfo": [{
                            "url": "https://upload.wikimedia.org/motif.jpg",
                            "thumburl": "https://upload.wikimedia.org/thumb_motif.jpg",
                            "descriptionurl": "https://commons.wikimedia.org/wiki/File:Sohrai_Motif_Ancient.jpg",
                            "extmetadata": {
                                # Missing Artist & License to test fallback handling
                            }
                        }]
                    }
                }
            }
        }

        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps(mock_payload).encode('utf-8')
        mock_response.__enter__.return_value = mock_response

        with patch('urllib.request.urlopen', return_value=mock_response):
            res = self.client.get('/api/wikimedia?q=Sohrai')
            self.assertEqual(res.status_code, 200)
            data = res.get_json()
            self.assertEqual(len(data), 2)

            # Item 1: Complete and sanitized metadata
            item1 = next(item for item in data if item['id'] == 'wiki-101')
            self.assertIn("Jharkhand Artisan", item1['creator'])
            self.assertNotIn("<a", item1['creator'])
            self.assertEqual(item1['license'], 'CC BY-SA 4.0')
            self.assertEqual(item1['description'], 'Sohrai ritual wall painting of Hazaribagh.')
            self.assertNotIn("<b>", item1['description'])
            self.assertEqual(item1['source'], 'Wikimedia Commons')
            self.assertEqual(item1['title'], 'Sohrai Mural Art.jpg')
            self.assertEqual(item1['imageUrl'], 'https://upload.wikimedia.org/example.jpg')
            self.assertEqual(item1['thumbnailUrl'], 'https://upload.wikimedia.org/thumb_example.jpg')
            self.assertEqual(item1['sourceUrl'], 'https://commons.wikimedia.org/wiki/File:Sohrai_Mural_Art.jpg')

            # Item 2: Missing metadata fallback handling
            item2 = next(item for item in data if item['id'] == 'wiki-102')
            self.assertEqual(item2['creator'], 'Unknown creator')
            self.assertEqual(item2['license'], 'See source for license information')

    def test_wikimedia_search_api_failure(self):
        """Requirement 16: Test /api/wikimedia handling of MediaWiki API failure returns 502 with error details."""
        import urllib.error
        from unittest.mock import patch

        with patch('urllib.request.urlopen', side_effect=urllib.error.URLError('Connection timed out')):
            res = self.client.get('/api/wikimedia?q=Sohrai')
            self.assertEqual(res.status_code, 502)
            data = res.get_json()
            self.assertIn('error', data)
            self.assertIn('connection failed', data['error'].lower())

    def test_wikimedia_search_live_sohrai(self):
        """Live connectivity verification to Wikimedia Commons API for Sohrai."""
        res = self.client.get('/api/wikimedia?q=Sohrai')
        # If online, status is 200 and returns authentic Wikimedia items
        if res.status_code == 200:
            data = res.get_json()
            self.assertIsInstance(data, list)
            if len(data) > 0:
                first = data[0]
                self.assertIn('id', first)
                self.assertIn('title', first)
                self.assertIn('imageUrl', first)
                self.assertIn('thumbnailUrl', first)
                self.assertIn('sourceUrl', first)
                self.assertIn('creator', first)
                self.assertIn('license', first)
                self.assertIn('description', first)
                self.assertEqual(first['source'], 'Wikimedia Commons')
                # Ensure no raw HTML tags leaked into creator or license
                self.assertNotIn('<', first['creator'])
                self.assertNotIn('<', first['license'])

    def test_get_heritage_endpoint_returns_31_official_records(self):
        """Verify GET /api/heritage retrieves all 31 official records from Virasat.ai Supabase database."""
        res = self.client.get('/api/heritage')
        self.assertEqual(res.status_code, 200)
        data = res.get_json()
        self.assertIsInstance(data, list)
        self.assertEqual(len(data), 31, f"Expected 31 heritage records, but got {len(data)}")

        expected_fields = {
            'id', 'name', 'category', 'location', 'description', 
            'slug', 'image', 'latitude', 'longitude', 'created_at'
        }
        for record in data:
            self.assertTrue(expected_fields.issubset(record.keys()), 
                            f"Record {record.get('id')} missing expected fields: {expected_fields - set(record.keys())}")
            self.assertTrue(record['name'], "Heritage record name must not be empty")
            self.assertTrue(record['category'], "Heritage record category must not be empty")

        # Verify known sample record
        kathak = next((r for r in data if r['name'] == 'Kathak'), None)
        self.assertIsNotNone(kathak, "Kathak should be in the 31 official heritage records")
        self.assertEqual(kathak['category'], 'Classical Dance')
        self.assertEqual(kathak['location'], 'Uttar Pradesh')

    def test_get_heritage_filtering_by_category_and_query(self):
        """Verify GET /api/heritage supports category and keyword filtering."""
        # Filter by Category
        res_dance = self.client.get('/api/heritage?category=Classical%20Dance')
        self.assertEqual(res_dance.status_code, 200)
        dance_items = res_dance.get_json()
        self.assertEqual(len(dance_items), 7)
        for item in dance_items:
            self.assertEqual(item['category'], 'Classical Dance')

        res_monument = self.client.get('/api/heritage?category=Monument')
        self.assertEqual(res_monument.status_code, 200)
        self.assertEqual(len(res_monument.get_json()), 14)

        # Filter by Query (name, location, category, description)
        res_kathak = self.client.get('/api/heritage?q=Kathak')
        self.assertEqual(res_kathak.status_code, 200)
        kathak_data = res_kathak.get_json()
        self.assertEqual(len(kathak_data), 2)  # Kathak and Kathakali
        names = [x['name'] for x in kathak_data]
        self.assertIn('Kathak', names)
        self.assertIn('Kathakali', names)

        res_gujarat = self.client.get('/api/heritage?q=Gujarat')
        self.assertEqual(res_gujarat.status_code, 200)
        self.assertGreater(len(res_gujarat.get_json()), 0)

    def test_get_heritage_supabase_failure_handling(self):
        """Verify GET /api/heritage returns 502 with error details if Supabase is unreachable."""
        import urllib.error
        from unittest.mock import patch

        with patch('urllib.request.urlopen', side_effect=urllib.error.URLError('Supabase connection refused')):
            res = self.client.get('/api/heritage')
            self.assertEqual(res.status_code, 502)
            data = res.get_json()
            self.assertIn('error', data)
            self.assertIn('Failed to fetch heritage records from Supabase', data['error'])
            self.assertIn('details', data)

    def test_get_heritage_missing_config_failure_handling(self):
        """Verify GET /api/heritage handles missing Supabase credentials gracefully without crashing."""
        import os
        from unittest.mock import patch

        with patch.dict(os.environ, {'SUPABASE_URL': '', 'SUPABASE_KEY': ''}):
            res = self.client.get('/api/heritage')
            self.assertEqual(res.status_code, 502)
            data = res.get_json()
            self.assertIn('error', data)
            self.assertIn('details', data)

    def test_heritage_image_serving(self):
        """Verify local image serving route /images/<filename> works correctly."""
        # Existing verified heritage image
        res = self.client.get('/images/kathak.jpg')
        self.assertEqual(res.status_code, 200)

        # Non-existent image returns 404
        res_404 = self.client.get('/images/nonexistent_image_test_9999.jpg')
        self.assertEqual(res_404.status_code, 404)

    def test_two_layer_architecture_homepage_structure(self):
        """Verify the two distinct layers: Layer 1 Permanent Collection and Layer 2 Wikimedia Search."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        html = response.data.decode('utf-8')

        # Layer 1: Homepage permanent collection container & heading
        self.assertIn('id="heritageCollectionSection"', html)
        self.assertIn('id="archiveMasonry"', html)
        self.assertIn('Virasat.ai Heritage Collection', html)
        self.assertIn('31 Official Records', html)

        # Layer 2: Dedicated Wikimedia search results section & container
        self.assertIn('id="wikimediaResultsSection"', html)
        self.assertIn('id="wikimediaMasonry"', html)
        self.assertIn('id="clearSearchResultsBtn"', html)
        self.assertIn('Clear Search Results', html)

        # Global Search Bar in Hero
        self.assertIn('id="heroGlobalSearchInput"', html)

        # Quick Search Suggestions
        expected_suggestions = [
            'Sohrai Painting', 'Madhubani Painting', 'Ajanta Caves',
            'Ellora Caves', 'Hampi', 'Sanchi Stupa', 'Chola Bronze', 'Pattachitra'
        ]
        for term in expected_suggestions:
            self.assertIn(term, html, f"Quick suggestion {term} should be in homepage HTML")

        # Bottom exploration section
        self.assertIn('Explore More Indian Heritage', html)
        self.assertIn('explore-more-section', html)

    def test_two_layer_js_controller_methods(self):
        """Verify JS architecture cleanly decouples official records from dynamic search results."""
        with open('static/js/archive-app.js', 'r', encoding='utf-8') as f:
            js = f.read()

        self.assertIn('renderWikimediaResults', js)
        self.assertIn('clearWikimediaSearch', js)
        self.assertIn('triggerWikimediaSearchForHeritage', js)
        self.assertIn('heroGlobalSearchInput', js)
        self.assertIn('archiveMasonry', js)
        self.assertIn('wikimediaMasonry', js)
        self.assertIn('+ Catalog New Record', js)
        self.assertIn('virasat. ai team', js)

    def test_snehrashmi_creator_replacement_to_virasat_ai_team(self):
        """Verify that any creator attribution matching Snehrashmi is replaced with virasat. ai team."""
        from unittest.mock import patch, MagicMock

        mock_payload = {
            "query": {
                "pages": {
                    "201": {
                        "pageid": 201,
                        "title": "File:Rani_ki_vav_Patan.jpg",
                        "imageinfo": [{
                            "url": "https://upload.wikimedia.org/rani.jpg",
                            "thumburl": "https://upload.wikimedia.org/thumb_rani.jpg",
                            "descriptionurl": "https://commons.wikimedia.org/wiki/File:Rani_ki_vav_Patan.jpg",
                            "extmetadata": {
                                "Artist": {"value": "Snehrashmi"},
                                "Credit": {"value": "Own work"},
                                "LicenseShortName": {"value": "CC BY-SA 4.0"}
                            }
                        }]
                    }
                }
            }
        }

        mock_response = MagicMock()
        mock_response.read.return_value = json.dumps(mock_payload).encode('utf-8')
        mock_response.__enter__.return_value = mock_response

        with patch('urllib.request.urlopen', return_value=mock_response):
            res = self.client.get('/api/wikimedia?q=Rani%20Ki%20Vav')
            self.assertEqual(res.status_code, 200)
            data = res.get_json()
            self.assertEqual(len(data), 1)
            self.assertEqual(data[0]['creator'], 'virasat. ai team')
            self.assertNotIn('Snehrashmi', data[0]['creator'])

    def test_virasat_ecosystem_navigation_and_config(self):
        """Verify ecosystem links, configuration endpoint, and Return to Virasat.ai navigation."""
        # Test /api/config endpoint
        res = self.client.get('/api/config')
        self.assertEqual(res.status_code, 200)
        config_data = res.get_json()
        self.assertIn('virasat_main_url', config_data)
        self.assertTrue(config_data['virasat_main_url'].startswith('http'))

        # Test index.html contains Return to Virasat.ai and no obsolete 5000 links
        res_index = self.client.get('/')
        self.assertEqual(res_index.status_code, 200)
        html = res_index.data.decode('utf-8')
        self.assertIn('Return to Virasat.ai', html)
        self.assertIn('window.VIRASAT_MAIN_URL', html)
        self.assertNotIn('http://127.0.0.1:5000', html)

    def test_initial_url_query_handling_in_js(self):
        """Verify archive-app.js implements ?q= search parameter auto-execution."""
        with open('static/js/archive-app.js', 'r', encoding='utf-8') as f:
            js = f.read()

        self.assertIn('handleInitialUrlQuery', js)
        self.assertIn("urlParams.get('q')", js)
        self.assertIn('triggerWikimediaSearchForHeritage', js)

if __name__ == '__main__':
    unittest.main()

