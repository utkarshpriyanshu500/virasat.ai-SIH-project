/**
 * VIRASAT.ARCHIVE — Archival Data Store & Metadata Engine
 * Handles record provenance, localStorage persistence, and Wikimedia Commons API resolution.
 */

const VIRASAT_STORAGE_KEYS = {
  CUSTOM_IMAGES: 'virasat_archive_custom_images_v2',
  SAVED_BOARD: 'virasat_archive_saved_board_v2',
  CUSTOM_RECORDS: 'virasat_archive_custom_records_v1'
};

class ArchiveStore {
  constructor() {
    this.artifacts = [];
    this.customImages = this.loadCustomImages();
    this.savedBoard = this.loadSavedBoard();
    this.customRecords = this.loadCustomRecords();
  }

  loadCustomRecords() {
    try {
      const stored = localStorage.getItem(VIRASAT_STORAGE_KEYS.CUSTOM_RECORDS);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveCustomRecords() {
    try {
      localStorage.setItem(VIRASAT_STORAGE_KEYS.CUSTOM_RECORDS, JSON.stringify(this.customRecords));
    } catch (e) {
      console.error('Failed to persist custom records', e);
    }
  }

  addCustomRecord(record) {
    if (!record.id) {
      record.id = 'va-' + Date.now().toString(36);
    }
    if (!record.virasat_archive_id) {
      record.virasat_archive_id = 'VA-CST-' + Math.floor(1000 + Math.random() * 9000);
    }
    if (!record.record_source) {
      record.record_source = 'Virasat Archive Record';
    }
    this.customRecords.unshift(record);
    this.saveCustomRecords();
    this.artifacts.unshift(record);
    return record;
  }

  clearAllRecords() {
    this.customRecords = [];
    this.saveCustomRecords();
    this.artifacts = [];
  }

  loadCustomImages() {
    try {
      const stored = localStorage.getItem(VIRASAT_STORAGE_KEYS.CUSTOM_IMAGES);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.warn('LocalStorage unavailable for custom images', e);
      return {};
    }
  }

  saveCustomImages() {
    try {
      localStorage.setItem(VIRASAT_STORAGE_KEYS.CUSTOM_IMAGES, JSON.stringify(this.customImages));
    } catch (e) {
      console.error('Failed to persist custom image binding', e);
    }
  }

  loadSavedBoard() {
    try {
      const stored = localStorage.getItem(VIRASAT_STORAGE_KEYS.SAVED_BOARD);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveSavedBoard() {
    try {
      localStorage.setItem(VIRASAT_STORAGE_KEYS.SAVED_BOARD, JSON.stringify(this.savedBoard));
    } catch (e) {
      console.error('Failed to persist saved board', e);
    }
  }

  /**
   * Binds an image to an artifact slot with complete attribution metadata
   * @param {string} artifactId 
   * @param {Object|string} imgData - { url, license, attribution, sourceUrl, sourcePlatform }
   */
  attachImageToArtifact(artifactId, imgData) {
    if (!imgData || (typeof imgData === 'string' && imgData.trim() === '')) {
      delete this.customImages[artifactId];
    } else if (typeof imgData === 'string') {
      this.customImages[artifactId] = {
        url: imgData.trim(),
        license: 'Unspecified / External Source',
        attribution: 'External Web Link',
        sourceUrl: imgData.trim(),
        sourcePlatform: 'External Web'
      };
    } else {
      this.customImages[artifactId] = {
        url: (imgData.url || '').trim(),
        license: imgData.license || 'License to be verified',
        attribution: imgData.attribution || 'Attributed author/institution',
        sourceUrl: imgData.sourceUrl || imgData.url,
        licenseUrl: imgData.licenseUrl || '',
        sourcePlatform: imgData.sourcePlatform || 'User Attached'
      };
    }
    this.saveCustomImages();
  }

  getArtifactImageBinding(artifact) {
    if (!artifact) return null;
    if (this.customImages[artifact.id]) {
      return this.customImages[artifact.id];
    }
    // Support Virasat.ai official heritage records (with .image property)
    if (artifact.image && typeof artifact.image === 'string' && artifact.image.trim() !== '') {
      return {
        url: artifact.image,
        license: 'Official Heritage Visual',
        attribution: 'Virasat.ai Heritage Database',
        sourceUrl: artifact.slug ? `${(window.VIRASAT_MAIN_URL || 'http://localhost:3000')}/explore/${artifact.slug}` : '',
        sourcePlatform: 'Virasat.ai'
      };
    }
    if (artifact.image_url && artifact.image_url.trim() !== '') {
      return {
        url: artifact.image_url,
        license: artifact.image_license || 'Verified Open License',
        attribution: artifact.image_attribution || artifact.source_institution || 'Repository Source',
        sourceUrl: artifact.image_source_url || '',
        sourcePlatform: artifact.image_source_target || 'Verified Source'
      };
    }
    return null;
  }

  toggleBoardItem(artifactId) {
    const idx = this.savedBoard.indexOf(artifactId);
    let isSaved = false;
    if (idx > -1) {
      this.savedBoard.splice(idx, 1);
      isSaved = false;
    } else {
      this.savedBoard.push(artifactId);
      isSaved = true;
    }
    this.saveSavedBoard();
    return isSaved;
  }

  isItemSaved(artifactId) {
    return this.savedBoard.includes(artifactId);
  }

  /**
   * Resolves actual metadata from Wikimedia Commons via its official public API
   * Extracts exact individual license (Public Domain, CC BY 2.0/3.0/4.0, CC BY-SA, etc.),
   * author attribution, and credit info.
   */
  async resolveWikimediaCommonsMetadata(inputUrl) {
    if (!inputUrl) return null;
    let fileName = '';

    // Handle full wiki page URL: https://commons.wikimedia.org/wiki/File:Example.jpg
    const wikiFileMatch = inputUrl.match(/\/wiki\/(File:[^?#]+)/i);
    if (wikiFileMatch) {
      fileName = decodeURIComponent(wikiFileMatch[1]);
    } else {
      // Handle direct upload URL: https://upload.wikimedia.org/wikipedia/commons/.../Example.jpg
      const uploadMatch = inputUrl.match(/\/commons\/(?:thumb\/)?[a-f0-9]\/[a-f0-9]{2}\/([^/]+)/i);
      if (uploadMatch) {
        fileName = 'File:' + decodeURIComponent(uploadMatch[1]);
      }
    }

    if (!fileName) {
      // If user typed only the filename (e.g. File:Example.jpg)
      if (inputUrl.toLowerCase().startsWith('file:')) {
        fileName = inputUrl.trim();
      } else {
        return null;
      }
    }

    try {
      const endpoint = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url|extmetadata|size&format=json&origin=*`;
      const res = await fetch(endpoint);
      if (!res.ok) return null;

      const data = await res.json();
      const pages = data.query?.pages;
      if (!pages) return null;

      const pageKey = Object.keys(pages)[0];
      if (pageKey === '-1' || !pages[pageKey].imageinfo) return null;

      const info = pages[pageKey].imageinfo[0];
      const meta = info.extmetadata || {};

      // Helper to strip HTML tags from metadata strings
      const cleanHtml = (str) => str ? str.replace(/<[^>]*>?/gm, '').trim() : '';

      const license = meta.LicenseShortName?.value || meta.License?.value || meta.UsageTerms?.value || 'Open License';
      const licenseUrl = meta.LicenseUrl?.value || '';
      let artist = cleanHtml(meta.Artist?.value) || cleanHtml(meta.Author?.value) || 'Wikimedia Contributor';
      let credit = cleanHtml(meta.Credit?.value) || 'Wikimedia Commons';
      let attribution = `${artist} (${credit})`;
      if (attribution.toLowerCase().includes('snehrashmi')) {
        attribution = 'virasat. ai team';
      }

      return {
        url: info.url,
        license: license,
        licenseUrl: licenseUrl,
        attribution: attribution,
        description: description,
        sourceUrl: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(fileName)}`,
        sourcePlatform: 'Wikimedia Commons',
        fileName: fileName,
        dimensions: `${info.width} × ${info.height}`
      };
    } catch (err) {
      console.warn('Wikimedia API resolution failed:', err);
      return null;
    }
  }

  async fetchHeritageRecords() {
    try {
      const res = await fetch('/api/heritage');
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.details || errJson.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('Failed to fetch official heritage records:', e);
      throw e;
    }
  }

  async fetchArtifacts() {
    let baseArtifacts = [];
    try {
      const res = await fetch('/api/artifacts');
      if (res.ok) {
        baseArtifacts = await res.json();
      }
    } catch (e) {
      console.info('API fetch failed or running static; checking data file...');
    }

    if (baseArtifacts.length === 0) {
      try {
        const res = await fetch('data/archive_items.json');
        if (res.ok) {
          baseArtifacts = await res.json();
        }
      } catch (e) {
        console.warn('Relative data fetch fallback');
      }
    }

    const custom = this.loadCustomRecords();
    const map = new Map();
    custom.forEach(item => map.set(item.id, item));
    baseArtifacts.forEach(item => {
      if (!map.has(item.id)) map.set(item.id, item);
    });

    this.artifacts = Array.from(map.values());
    return this.artifacts;
  }

  async fetchSampleRecords() {
    try {
      const res = await fetch('/api/artifacts/sample');
      if (res.ok) return await res.json();
    } catch (e) {}

    try {
      const res = await fetch('data/archive_items.sample.json');
      if (res.ok) return await res.json();
    } catch (e) {}

    return [];
  }
}

window.archiveStore = new ArchiveStore();
