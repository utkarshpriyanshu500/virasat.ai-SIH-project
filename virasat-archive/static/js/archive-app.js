/**
 * VIRASAT.ARCHIVE — Main Application Controller
 * Strict Heritage Attribution, Wikimedia API Resolution & Sand Beige Placeholders
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Application State
  const state = {
    allArtifacts: [],
    heritageRecords: [],
    filteredArtifacts: [],
    selectedCategory: 'all',
    searchQuery: '',
    wikimediaQuery: '',
    sortBy: 'default',
    currentView: 'all', // 'all' or 'liked'
    selectedArtifact: null,
    targetPhotoArtifactId: null,
    stagedWikimediaMeta: null,
    isWikimediaSearch: false,
    wikimediaResults: [],
    wikimediaLoading: false,
    wikimediaError: null,
    heritageLoading: false,
    heritageError: null
  };

  // DOM Elements
  const masonryContainer = document.getElementById('archiveMasonry');
  const resultsCounter = document.getElementById('resultsCounter');
  const searchInput = document.getElementById('archiveSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const heroGlobalSearchInput = document.getElementById('heroGlobalSearchInput');
  const heroSearchClearBtn = document.getElementById('heroSearchClearBtn');
  const heroSearchSubmitBtn = document.getElementById('heroSearchSubmitBtn');
  const searchSuggestionsList = document.getElementById('searchSuggestionsList');
  const wikimediaResultsSection = document.getElementById('wikimediaResultsSection');
  const wikimediaMasonry = document.getElementById('wikimediaMasonry');
  const wikimediaSectionTitle = document.getElementById('wikimediaSectionTitle');
  const wikimediaSectionSubtitle = document.getElementById('wikimediaSectionSubtitle');
  const wikimediaStatusMsg = document.getElementById('wikimediaStatusMsg');
  const clearSearchResultsBtn = document.getElementById('clearSearchResultsBtn');
  const exploreSearchScrollBtn = document.getElementById('exploreSearchScrollBtn');
  const heritageSearchInput = document.getElementById('heritageSearchInput');
  const heritageSearchClearBtn = document.getElementById('heritageSearchClearBtn');
  const heritageCategoryPills = document.querySelectorAll('.heritage-pill');
  const heritageDbToolbar = document.getElementById('heritageDbToolbar');
  const categoryPills = document.querySelectorAll('.category-pill');
  const sortSelect = document.getElementById('sortSelect');
  const myLikedBtn = document.getElementById('myLikedBtn') || document.getElementById('myBoardBtn');
  const likedBadgeCount = document.getElementById('likedBadgeCount') || document.getElementById('boardBadgeCount');
  const activeFiltersStrip = document.getElementById('activeFiltersStrip');
  
  // Modals
  const artifactModal = document.getElementById('artifactModal');
  const photoModal = document.getElementById('photoModal');
  const citationModal = document.getElementById('citationModal');
  const addArtifactModal = document.getElementById('addArtifactModal');
  const toastEl = document.getElementById('archiveToast');

  // Navigation & Catalog Elements
  const navAddArtifactBtn = document.getElementById('navAddArtifactBtn');
  const addArtifactForm = document.getElementById('addArtifactForm');

  // Photo Input Elements
  const photoUrlInput = document.getElementById('photoUrlInput');
  const photoLicenseInput = document.getElementById('photoLicenseInput');
  const photoAttributionInput = document.getElementById('photoAttributionInput');
  const wikimediaResolveBox = document.getElementById('wikimediaResolveBox');
  const wikimediaStatusText = document.getElementById('wikimediaStatusText');

  await initData();

  async function initData() {
    state.heritageLoading = true;
    state.heritageError = null;
    if (resultsCounter) {
      resultsCounter.style.display = 'block';
      resultsCounter.textContent = 'Loading official Virasat.ai heritage database...';
    }

    try {
      const heritageData = await window.archiveStore.fetchHeritageRecords();
      state.heritageRecords = (heritageData || []).map(item => ({
        ...item,
        title: item.name,
        dynasty_era: item.category,
        region_state: item.location,
        record_source: 'Virasat.ai Heritage Database',
        image_source_target: 'Wikimedia Commons',
        aspect_ratio: '3:4',
        dimensions_spec: item.location || 'Official Heritage Record',
        curator_notes: item.description,
        virasat_archive_id: `VA-HDB-${String(item.id).padStart(4, '0')}`
      }));
      state.allArtifacts = [...state.heritageRecords];
    } catch (err) {
      console.error('Failed to load official heritage records from Supabase:', err);
      state.heritageError = err.message || 'Unable to connect to Virasat.ai Heritage Database';
      state.allArtifacts = [];
    } finally {
      state.heritageLoading = false;
    }

    // Also include any user-cataloged custom records
    try {
      const custom = window.archiveStore.loadCustomRecords();
      if (custom && custom.length > 0) {
        custom.forEach(c => {
          if (!state.allArtifacts.some(a => a.id === c.id)) {
            state.allArtifacts.unshift(c);
          }
        });
      }
    } catch (e) {}

    updateLikedBadge();
    applyFilters();
    setupDialogDismissFallbacks();
    handleInitialUrlQuery();
  }

  // Handle URL search parameter (e.g. ?q=Kathak from Virasat.ai)
  function handleInitialUrlQuery() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const query = (urlParams.get('q') || urlParams.get('search') || '').trim();
      if (query) {
        triggerWikimediaSearchForHeritage(query);
      }
    } catch (e) {
      console.error('Failed to parse URL query parameters:', e);
    }
  }

  // Cross-browser Dialog Light-Dismiss Fallback
  function setupDialogDismissFallbacks() {
    const dialogs = [artifactModal, photoModal, citationModal, addArtifactModal];
    dialogs.forEach(dialog => {
      if (!dialog) return;
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.addEventListener('click', (event) => {
          if (event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isContent = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isContent) {
            dialog.close();
          }
        });
      }
    });
  }

  function getRatioClass(ratio) {
    switch (ratio) {
      case '3:4': return 'ratio-3-4';
      case '2:3': return 'ratio-2-3';
      case '1:1': return 'ratio-1-1';
      case '4:3': return 'ratio-4-3';
      case '4:5': return 'ratio-4-5';
      case '16:9': return 'ratio-16-9';
      default: return 'ratio-3-4';
    }
  }

  // Filter & Search
  function applyFilters() {
    let list = [...state.allArtifacts];

    if (state.currentView === 'liked' || state.currentView === 'board') {
      list = list.filter(item => window.archiveStore.isItemSaved(item.id));
    }

    if (state.selectedCategory !== 'all') {
      list = list.filter(item => (item.category || '').toLowerCase() === state.selectedCategory.toLowerCase());
    }

    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(item => {
        const nameVal = (item.name || item.title || '').toLowerCase();
        const catVal = (item.category || '').toLowerCase();
        const locVal = (item.location || item.region_state || '').toLowerCase();
        const descVal = (item.description || item.curator_notes || '').toLowerCase();
        const idVal = (item.virasat_archive_id || '').toLowerCase();
        return nameVal.includes(q) || catVal.includes(q) || locVal.includes(q) || descVal.includes(q) || idVal.includes(q);
      });
    }

    if (state.sortBy === 'title-asc') {
      list.sort((a, b) => (a.name || a.title || '').localeCompare(b.name || b.title || ''));
    } else if (state.sortBy === 'code-asc') {
      list.sort((a, b) => (a.id || 0) - (b.id || 0));
    } else if (state.sortBy === 'category') {
      list.sort((a, b) => (a.category || '').localeCompare(b.category || ''));
    }

    state.filteredArtifacts = list;
    renderGallery();
    renderActiveFilterChips();
  }

  // Render Masonry Grid for Official Heritage Collection (31 Records - Never replaced)
  function renderGallery() {
    masonryContainer.innerHTML = '';

    if (state.heritageLoading) {
      resultsCounter.style.display = 'block';
      resultsCounter.innerHTML = `Connecting to Virasat.ai Heritage Database...`;
      masonryContainer.innerHTML = `
        <div class="empty-archive-state" style="padding: 4rem 1rem; width: 100%;">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon" style="width:36px;height:36px;">
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
            </svg>
          </div>
          <h3 class="empty-state-title" style="margin-top: 1rem;">Loading Heritage Database...</h3>
          <p class="empty-state-desc">Retrieving official cultural heritage records from Supabase.</p>
        </div>
      `;
      return;
    }

    if (state.heritageError) {
      resultsCounter.style.display = 'block';
      resultsCounter.innerHTML = `<span style="color:var(--c-terracotta);">Virasat.ai Heritage Database offline</span>`;
      masonryContainer.innerHTML = `
        <div class="empty-archive-state" style="padding: 4rem 1rem; width: 100%;">
          <div class="empty-state-icon" style="color: var(--c-terracotta);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:36px;height:36px;">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3 class="empty-state-title" style="margin-top: 1rem;">Heritage Database Temporarily Unavailable</h3>
          <p class="empty-state-desc">${escapeHtml(state.heritageError)}. You can still explore cultural imagery dynamically using the Wikimedia Commons search bar above.</p>
          <button type="button" class="nav-btn nav-btn-outline" id="retryHeritageBtn">Retry Connection</button>
        </div>
      `;
      const retryBtn = document.getElementById('retryHeritageBtn');
      if (retryBtn) retryBtn.addEventListener('click', initData);
      return;
    }

    const total = state.filteredArtifacts.length;
    if (state.allArtifacts.length === 0) {
      resultsCounter.style.display = 'none';
    } else {
      resultsCounter.style.display = 'block';
      resultsCounter.innerHTML = `Showing <strong>${total}</strong> official heritage ${total === 1 ? 'record' : 'records'} from Virasat.ai Heritage Database`;
    }

    if (total === 0) {
      const isLiked = state.currentView === 'liked' || state.currentView === 'board';
      const isCompletelyEmpty = state.allArtifacts.length === 0;

      if (isLiked) {
        masonryContainer.innerHTML = `
          <div class="empty-archive-state">
            <div class="empty-state-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3 class="empty-state-title">No Liked Photos Yet</h3>
            <p class="empty-state-desc">
              Like any archival photo or artifact to curate your personal collection.
            </p>
            <button class="nav-btn nav-btn-primary" id="returnAllArchivesBtn">Browse All Archives</button>
          </div>
        `;

        const returnBtn = document.getElementById('returnAllArchivesBtn');
        if (returnBtn) returnBtn.addEventListener('click', () => {
          state.currentView = 'all';
          if (myLikedBtn) myLikedBtn.classList.remove('active');
          applyFilters();
        });
        return;
      }

      if (isCompletelyEmpty) {
        masonryContainer.innerHTML = `
          <div style="display: flex; justify-content: center; align-items: center; padding: 4rem 1rem 5rem; width: 100%;">
            <button type="button" class="nav-btn nav-btn-primary" id="emptyAddRecordBtn" style="padding: 0.85rem 1.75rem; font-size: 0.95rem;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>+ Catalog New Record</span>
            </button>
          </div>
        `;

        const addBtn = document.getElementById('emptyAddRecordBtn');
        if (addBtn) addBtn.addEventListener('click', openAddArtifactModal);
        return;
      }

      // Filtered out with search or category
      masonryContainer.innerHTML = `
        <div class="empty-archive-state">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <h3 class="empty-state-title">No Archival Records Found</h3>
          <p class="empty-state-desc">
            Try adjusting your search terms or selecting a different category.
          </p>
          <button class="nav-btn nav-btn-outline" id="resetFiltersBtn">Reset All Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
      return;
    }

    state.filteredArtifacts.forEach(artifact => {
      const card = createCardElement(artifact);
      masonryContainer.appendChild(card);
    });
  }

  // Render Dynamic Search Results (Layer 2: Wikimedia Commons)
  function renderWikimediaResults() {
    if (!wikimediaMasonry) return;
    wikimediaMasonry.innerHTML = '';

    if (state.wikimediaLoading) {
      if (wikimediaStatusMsg) {
        wikimediaStatusMsg.style.display = 'block';
        wikimediaStatusMsg.innerHTML = `Searching Wikimedia Commons for "<strong>${escapeHtml(state.wikimediaQuery)}</strong>"...`;
      }
      wikimediaMasonry.innerHTML = `
        <div class="empty-archive-state" style="padding: 3.5rem 1rem; width: 100%;">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon" style="width:36px;height:36px;">
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
            </svg>
          </div>
          <h3 class="empty-state-title" style="margin-top: 1rem;">Searching Wikimedia Commons...</h3>
          <p class="empty-state-desc">Retrieving open-access cultural photographs and authentic metadata for "${escapeHtml(state.wikimediaQuery)}".</p>
        </div>
      `;
      return;
    }

    if (state.wikimediaError) {
      if (wikimediaStatusMsg) {
        wikimediaStatusMsg.style.display = 'block';
        wikimediaStatusMsg.innerHTML = `<span style="color:var(--c-terracotta);">Wikimedia Commons search error</span>`;
      }
      wikimediaMasonry.innerHTML = `
        <div class="empty-archive-state" style="padding: 3.5rem 1rem; width: 100%;">
          <div class="empty-state-icon" style="color: var(--c-terracotta);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:36px;height:36px;">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3 class="empty-state-title" style="margin-top: 1rem;">Wikimedia Commons Search Unavailable</h3>
          <p class="empty-state-desc">${escapeHtml(state.wikimediaError)}</p>
          <div style="display:flex; gap:0.75rem; justify-content:center; margin-top:1rem;">
            <button type="button" class="nav-btn nav-btn-outline" id="retryWikimediaBtn">Retry Search</button>
            <button type="button" class="nav-btn nav-btn-primary" id="dismissWikimediaErrorBtn">Dismiss</button>
          </div>
        </div>
      `;
      const retryBtn = document.getElementById('retryWikimediaBtn');
      if (retryBtn) retryBtn.addEventListener('click', () => performWikimediaSearch(state.wikimediaQuery));
      const dismissBtn = document.getElementById('dismissWikimediaErrorBtn');
      if (dismissBtn) dismissBtn.addEventListener('click', clearWikimediaSearch);
      return;
    }

    const total = state.wikimediaResults.length;
    if (total === 0) {
      if (wikimediaStatusMsg) {
        wikimediaStatusMsg.style.display = 'block';
        wikimediaStatusMsg.innerHTML = `No results found on Wikimedia Commons for "<strong>${escapeHtml(state.wikimediaQuery)}</strong>"`;
      }
      wikimediaMasonry.innerHTML = `
        <div class="empty-archive-state" style="padding: 3.5rem 1rem; width: 100%;">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" style="width:36px;height:36px;">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <h3 class="empty-state-title" style="margin-top: 1rem;">No Heritage Images Found</h3>
          <p class="empty-state-desc">
            No Wikimedia Commons images matched "${escapeHtml(state.wikimediaQuery)}". Try searching for other heritage terms (e.g. Taj Mahal, Ajanta Caves, Sohrai, Hampi).
          </p>
        </div>
      `;
      return;
    }

    if (wikimediaStatusMsg) {
      wikimediaStatusMsg.style.display = 'block';
      wikimediaStatusMsg.innerHTML = `Showing <strong>${total}</strong> open-access heritage ${total === 1 ? 'image' : 'images'} from Wikimedia Commons for "<strong>${escapeHtml(state.wikimediaQuery)}</strong>"`;
    }

    state.wikimediaResults.forEach(item => {
      const card = createWikimediaCardElement(item);
      wikimediaMasonry.appendChild(card);
    });
  }

  // Create Individual Card DOM
  function createCardElement(artifact) {
    const card = document.createElement('article');
    card.className = 'archive-card';
    card.dataset.id = artifact.id;

    const imgBinding = window.archiveStore.getArtifactImageBinding(artifact);
    const hasPhoto = Boolean(imgBinding && imgBinding.url);
    const ratioClass = getRatioClass(artifact.aspect_ratio || '3:4');
    const isSaved = window.archiveStore.isItemSaved(artifact.id);
    const nameText = artifact.name || artifact.title || 'Untitled Heritage Record';
    const categoryText = artifact.category || 'Cultural Heritage';
    const locationText = artifact.location || artifact.region_state || 'India';
    const descText = artifact.description || artifact.curator_notes || '';

    // Media slot: Verified image if exists, else Sand Beige (#D9C2A3) archival placeholder
    let mediaContent = '';
    if (hasPhoto) {
      mediaContent = `
        <img class="card-attached-image" src="${escapeHtml(imgBinding.url)}" alt="${escapeHtml(nameText)}" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
        <div class="card-placeholder-frame" style="display: none;">
          <div class="placeholder-header">
            <span class="archive-reg-code">${escapeHtml(artifact.virasat_archive_id || 'VA-HDB')}</span>
            <span class="aspect-ratio-pill">3:4</span>
          </div>
          <div class="placeholder-center">
            <div class="placeholder-motif-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 3v18"/>
                <path d="M3 12h18"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            </div>
            <div class="placeholder-spec-title">Archival Image Slot</div>
            <div class="placeholder-dimensions">${escapeHtml(locationText)}</div>
          </div>
        </div>
        <div class="card-photo-live-badge">
          <span>Virasat.ai Heritage Database</span>
        </div>
      `;
    } else {
      mediaContent = `
        <div class="card-placeholder-frame">
          <div class="placeholder-header">
            <span class="archive-reg-code" title="Virasat Archive Identifier">
              ${escapeHtml(artifact.virasat_archive_id || 'VA-HDB')}
            </span>
            <span class="aspect-ratio-pill">${escapeHtml(artifact.aspect_ratio || '3:4')}</span>
          </div>
          
          <div class="placeholder-center">
            <div class="placeholder-motif-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 3v18"/>
                <path d="M3 12h18"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            </div>
            <div class="placeholder-spec-title">Archival Image Slot</div>
            <div class="placeholder-dimensions">${escapeHtml(locationText)}</div>
          </div>

          <div class="placeholder-footer">
            <span class="aspect-ratio-pill" style="font-size:0.7rem; color:var(--c-warm-brown);">Sand Beige Archival Slot</span>
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-media-wrap ${ratioClass}">
        ${mediaContent}
        
        <div class="card-hover-overlay">
          <div class="overlay-top">
            <button type="button" class="overlay-btn overlay-btn-photo btn-trigger-find-images" data-search="${escapeHtml(nameText)}" title="Search Wikimedia Commons for ${escapeHtml(nameText)}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <span>Find Images</span>
            </button>

            <button type="button" class="overlay-btn overlay-btn-save ${isSaved ? 'saved' : ''} btn-trigger-save" data-id="${artifact.id}" title="Like Photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>${isSaved ? 'Liked' : 'Like'}</span>
            </button>
          </div>

          <div class="overlay-bottom">
            <span class="overlay-btn" data-action="inspect">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6"/>
                <path d="M10 14 21 3"/>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              </svg>
              <span>Inspect Record</span>
            </span>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="card-category-row">
          <span class="category-tag">${escapeHtml(categoryText)}</span>
          <span class="record-provenance-tag provenance-virasat" title="Official entry from Virasat.ai">
            Virasat.ai Heritage Database
          </span>
        </div>

        <h3 class="card-title" data-action="inspect">${escapeHtml(nameText)}</h3>
        <div class="card-location-row">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${escapeHtml(locationText)}</span>
        </div>

        ${descText ? `<p class="card-heritage-desc">${escapeHtml(descText)}</p>` : ''}

        <!-- "Find Images" Button (Requirement 6: searches Wikimedia Commons with this item's name) -->
        <button type="button" class="btn-find-images btn-trigger-find-images" data-search="${escapeHtml(nameText)}" title="Search Wikimedia Commons for ${escapeHtml(nameText)}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span>Find Images</span>
        </button>
      </div>
    `;

    // Click Bindings
    card.addEventListener('click', (e) => {
      const findBtn = e.target.closest('.btn-trigger-find-images');
      if (findBtn) {
        e.stopPropagation();
        const term = findBtn.dataset.search || nameText;
        triggerWikimediaSearchForHeritage(term);
        return;
      }

      const saveBtn = e.target.closest('.btn-trigger-save');
      if (saveBtn) {
        e.stopPropagation();
        toggleSaveArtifact(artifact.id, saveBtn);
        return;
      }

      openArtifactModal(artifact);
    });

    return card;
  }

  // ==========================================================================
  // WIKIMEDIA COMMONS CARD GENERATOR (Requirement 8 & 9)
  // ==========================================================================
  function createWikimediaCardElement(item) {
    const card = document.createElement('article');
    card.className = 'archive-card wikimedia-card';
    card.dataset.id = item.id;

    const isSaved = window.archiveStore.isItemSaved(item.id);
    let creatorText = item.creator || 'Unknown creator';
    if (creatorText.toLowerCase().includes('snehrashmi')) {
      creatorText = 'virasat. ai team';
    }
    const licenseText = item.license || 'See source for license information';

    card.innerHTML = `
      <div class="card-media-wrap ratio-3-4">
        <img class="card-attached-image" src="${escapeHtml(item.thumbnailUrl || item.imageUrl)}" alt="${escapeHtml(item.title)}" loading="lazy" />
        
        <!-- Wikimedia Commons Badge -->
        <div class="card-photo-live-badge">
          <span>Wikimedia Commons</span>
          ${licenseText ? `&bull; <span>${escapeHtml(licenseText)}</span>` : ''}
        </div>

        <div class="card-hover-overlay">
          <div class="overlay-top">
            <span class="archive-reg-code" style="background: rgba(59,36,22,0.85); color: var(--c-white); border-color: rgba(255,255,255,0.2);">
              Wikimedia Commons
            </span>

            <button type="button" class="overlay-btn overlay-btn-save ${isSaved ? 'saved' : ''} btn-trigger-save" data-id="${escapeHtml(item.id)}" title="Like Photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>${isSaved ? 'Liked' : 'Like'}</span>
            </button>
          </div>

          <div class="overlay-bottom">
            <span class="overlay-btn" data-action="inspect">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6"/>
                <path d="M10 14 21 3"/>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              </svg>
              <span>Inspect Image</span>
            </span>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="card-category-row">
          <span class="category-tag">Wikimedia Commons</span>
          <span class="record-provenance-tag provenance-archive">
            Dynamic Discovery
          </span>
        </div>

        <h3 class="card-title" data-action="inspect">${escapeHtml(item.title)}</h3>
        <p class="card-era" style="color: var(--c-warm-brown); font-size: 0.8rem;">Creator: <strong>${escapeHtml(creatorText)}</strong></p>

        <!-- Visible Source & Attribution Area -->
        <div class="card-source-badge">
          <div class="source-left">
            <svg class="source-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="card-source-link" onclick="event.stopPropagation();">
              View Source ↗
            </a>
          </div>
          <span class="source-license-pill" title="${escapeHtml(licenseText)}">
            ${escapeHtml(licenseText)}
          </span>
        </div>
      </div>
    `;

    // Click Bindings
    card.addEventListener('click', (e) => {
      const saveBtn = e.target.closest('.btn-trigger-save');
      if (saveBtn) {
        e.stopPropagation();
        toggleSaveArtifact(item.id, saveBtn);
        return;
      }

      const sourceLink = e.target.closest('.card-source-link');
      if (sourceLink) {
        return;
      }

      openWikimediaModal(item);
    });

    return card;
  }

  // ==========================================================================
  // WIKIMEDIA ARTIFACT MODAL (Requirement 11)
  // Shows: Larger image, Title, Creator, License, Description, Wikimedia source link
  // ==========================================================================
  function openWikimediaModal(item) {
    state.selectedArtifact = null;
    const isSaved = window.archiveStore.isItemSaved(item.id);
    let creatorText = item.creator || 'Unknown creator';
    if (creatorText.toLowerCase().includes('snehrashmi')) {
      creatorText = 'virasat. ai team';
    }
    const licenseText = item.license || 'See source for license information';

    // Left Column Visual (Larger image)
    const visualColumn = document.getElementById('modalVisualColumn');
    visualColumn.innerHTML = `
      <div class="modal-attached-view">
        <img class="modal-attached-img" src="${escapeHtml(item.imageUrl || item.thumbnailUrl)}" alt="${escapeHtml(item.title)}" />
        
        <!-- Persistent Visible Source & License Attribution -->
        <div class="modal-photo-attribution-strip">
          <div style="font-size: 0.8rem; color: var(--c-deep-brown); font-weight: 600;">
            Source: <strong>Wikimedia Commons</strong> &bull; License: <strong>${escapeHtml(licenseText)}</strong>
          </div>
          <div style="font-size: 0.76rem; color: var(--c-warm-brown); margin-top: 3px;">
            Creator: <strong>${escapeHtml(creatorText)}</strong>
          </div>
          <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="callout-link" style="margin-top: 6px; display: inline-flex; align-items: center; gap: 4px;">
            <span>Wikimedia Commons Source Page</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/></svg>
          </a>
        </div>
      </div>
    `;

    // Archival Ledger Right Column
    document.getElementById('modalCatalogCode').textContent = `Discovery ID: ${item.id}`;
    const recordSourceTag = document.getElementById('modalRecordSource');
    recordSourceTag.textContent = 'Wikimedia Commons';
    recordSourceTag.className = 'record-provenance-tag provenance-archive';

    document.getElementById('modalCategoryBadge').textContent = 'Live Image Discovery';
    document.getElementById('modalTitle').textContent = item.title;

    // Attributed Callout Box (Source link, creator, license)
    const calloutBox = document.getElementById('modalImageAttributionCallout');
    calloutBox.innerHTML = `
      <div class="callout-header">
        <span>Wikimedia Commons Attribution</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <div class="callout-institution">Repository: <strong>Wikimedia Commons</strong></div>
      <div class="callout-institution">Creator: <strong>${escapeHtml(creatorText)}</strong></div>
      <div class="callout-license">Verified License: <strong>${escapeHtml(licenseText)}</strong></div>
      <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="callout-link" style="margin-top: 6px;">
        <span>Direct Wikimedia Commons Reference</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/></svg>
      </a>
    `;

    // Metadata Ledger
    document.getElementById('modalMetaDynasty').textContent = creatorText;
    document.getElementById('modalMetaMedium').textContent = licenseText;
    document.getElementById('modalMetaProvenance').textContent = 'Wikimedia Commons Public Repository';
    document.getElementById('modalMetaDimensions').textContent = 'Dynamic Image Stream (700px thumbnail)';

    // Curator / Image Description Narrative
    document.getElementById('modalNarrative').textContent = item.description ? item.description : 'No extended description recorded in Wikimedia Commons extmetadata for this image.';

    // Swatches (empty for dynamic web images)
    document.getElementById('modalPigmentSwatches').innerHTML = '';

    // Like Photo Button
    const saveBtn = document.getElementById('modalSaveBoardBtn');
    saveBtn.className = `nav-btn ${isSaved ? 'nav-btn-primary' : 'nav-btn-outline'}`;
    saveBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      <span>${isSaved ? 'Liked Photo' : 'Like Photo'}</span>
    `;
    saveBtn.onclick = () => {
      toggleSaveArtifact(item.id);
      openWikimediaModal(item);
    };

    // Cite Button
    document.getElementById('modalCiteBtn').onclick = () => {
      const chicago = `“${item.title}.” Image by ${creatorText}. Wikimedia Commons (${licenseText}). ${item.sourceUrl}`;
      const apa = `${item.title}. [Photograph]. Wikimedia Commons. ${item.sourceUrl}`;
      const bibtex = `@misc{wikimedia_${item.id.replace(/[^a-zA-Z0-9]/g, '_')},\n  title = {${item.title}},\n  author = {${creatorText}},\n  howpublished = {Wikimedia Commons},\n  note = {License: ${licenseText}},\n  url = {${item.sourceUrl}}\n}`;

      document.getElementById('citeChicago').textContent = chicago;
      document.getElementById('citeApa').textContent = apa;
      document.getElementById('citeBibtex').textContent = bibtex;
      citationModal.showModal();
    };

    // Share Button
    document.getElementById('modalShareBtn').onclick = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(item.sourceUrl);
        showToast('Wikimedia source link copied to clipboard');
      }
    };

    artifactModal.showModal();
  }

  function toggleSaveArtifact(id, btnElement) {
    const isSaved = window.archiveStore.toggleBoardItem(id);
    updateLikedBadge();

    if (btnElement) {
      if (isSaved) {
        btnElement.classList.add('saved');
        btnElement.querySelector('span').textContent = 'Liked';
        btnElement.querySelector('svg').setAttribute('fill', 'currentColor');
        showToast('Photo added to Liked Collection ❤️');
      } else {
        btnElement.classList.remove('saved');
        btnElement.querySelector('span').textContent = 'Like';
        btnElement.querySelector('svg').setAttribute('fill', 'none');
        showToast('Removed from Liked Photos');
      }
    }

    if (state.currentView === 'liked' || state.currentView === 'board') {
      applyFilters();
    }
  }

  function updateLikedBadge() {
    if (likedBadgeCount) {
      likedBadgeCount.textContent = window.archiveStore.savedBoard.length;
    }
  }

  // Archival Inspector Modal
  function openArtifactModal(artifact) {
    state.selectedArtifact = artifact;
    const imgBinding = window.archiveStore.getArtifactImageBinding(artifact);
    const hasPhoto = imgBinding && imgBinding.url;
    const isSaved = window.archiveStore.isItemSaved(artifact.id);

    // Left Column Visual
    const visualColumn = document.getElementById('modalVisualColumn');
    if (hasPhoto) {
      visualColumn.innerHTML = `
        <div class="modal-attached-view">
          <img class="modal-attached-img" src="${escapeHtml(imgBinding.url)}" alt="${escapeHtml(artifact.title)}" />
          
          <!-- Persistent Visible Source & License Attribution (Requirement 11) -->
          <div class="modal-photo-attribution-strip">
            <div style="font-size: 0.78rem; color: var(--c-deep-brown); font-weight: 600;">
              Source: ${escapeHtml(imgBinding.sourcePlatform || 'External')} &bull; License: <strong>${escapeHtml(imgBinding.license || 'Verified')}</strong>
            </div>
            ${imgBinding.attribution ? `<div style="font-size: 0.74rem; color: var(--c-warm-brown);">${escapeHtml(imgBinding.attribution)}</div>` : ''}
            ${imgBinding.sourceUrl ? `<a href="${escapeHtml(imgBinding.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="callout-link" style="margin-top:2px;">View Original External Source ↗</a>` : ''}
          </div>

          <div class="modal-photo-action-bar">
            <button type="button" class="nav-btn nav-btn-outline" id="modalChangePhotoBtn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
              <span>Update / Change Photo</span>
            </button>
            <button type="button" class="nav-btn nav-btn-outline" id="modalClearPhotoBtn" style="color:var(--c-terracotta);">
              <span>Reset to Placeholder</span>
            </button>
          </div>
        </div>
      `;
    } else {
      visualColumn.innerHTML = `
        <div class="modal-placeholder-display">
          <div class="archive-reg-code" title="Virasat Archive Internal Identifier">
            Virasat Archive ID: ${escapeHtml(artifact.virasat_archive_id)}
          </div>
          <div class="modal-motif-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h4 style="font-family:var(--font-display);color:var(--c-deep-brown);">Archival Image Placeholder</h4>
          <p style="font-size:0.85rem;color:var(--c-warm-brown);">
            Aspect Ratio: <strong>${escapeHtml(artifact.aspect_ratio || '3:4')}</strong><br/>
            ${escapeHtml(artifact.dimensions_spec || 'Historical specimen')}
          </p>
          <button type="button" class="nav-btn nav-btn-primary" id="modalAddPhotoBtn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Attach Image to Slot</span>
          </button>
        </div>
      `;
    }

    // Modal Left Events
    const addPhotoBtn = document.getElementById('modalAddPhotoBtn');
    if (addPhotoBtn) addPhotoBtn.addEventListener('click', () => openPhotoModal(artifact));

    const changePhotoBtn = document.getElementById('modalChangePhotoBtn');
    if (changePhotoBtn) changePhotoBtn.addEventListener('click', () => openPhotoModal(artifact));

    const clearPhotoBtn = document.getElementById('modalClearPhotoBtn');
    if (clearPhotoBtn) {
      clearPhotoBtn.addEventListener('click', () => {
        window.archiveStore.attachImageToArtifact(artifact.id, '');
        showToast('Restored Sand Beige archival placeholder');
        openArtifactModal(artifact);
        renderGallery();
      });
    }

    // Right Column Ledger
    document.getElementById('modalCatalogCode').textContent = `Virasat Archive ID: ${artifact.virasat_archive_id}`;
    document.getElementById('modalCategoryBadge').textContent = artifact.category;
    document.getElementById('modalRecordSource').textContent = artifact.record_source;
    document.getElementById('modalRecordSource').className = `record-provenance-tag ${artifact.record_source === 'Virasat.ai Heritage Database' ? 'provenance-virasat' : 'provenance-archive'}`;
    
    document.getElementById('modalTitle').textContent = artifact.title;
    document.getElementById('modalSubtitle').textContent = `${artifact.dynasty_era} • ${artifact.region_state}`;

    // Source Callout Box
    const calloutBox = document.getElementById('modalSourceCallout');
    if (artifact.record_source === 'Virasat.ai Heritage Database') {
      calloutBox.innerHTML = `
        <div class="callout-header">
          <span>Virasat.ai Heritage Database Entry</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <div class="callout-institution">Category: <strong>${escapeHtml(artifact.category || 'Heritage')}</strong></div>
        <div class="callout-license">Location: <strong>${escapeHtml(artifact.location || artifact.region_state || 'India')}</strong></div>
        <button type="button" class="btn-find-images" id="modalFindImagesBtn" style="margin-top: 0.75rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span>Find Images on Wikimedia Commons</span>
        </button>
      `;
      const modalFindBtn = document.getElementById('modalFindImagesBtn');
      if (modalFindBtn) {
        modalFindBtn.addEventListener('click', () => {
          artifactModal.close();
          triggerWikimediaSearchForHeritage(artifact.name || artifact.title);
        });
      }
    } else if (hasPhoto) {
      calloutBox.innerHTML = `
        <div class="callout-header">
          <span>Active Image Attribution</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="callout-institution">${escapeHtml(imgBinding.sourcePlatform)} &bull; ${escapeHtml(imgBinding.attribution || 'Attributed')}</div>
        <div class="callout-license">Verified License: <strong>${escapeHtml(imgBinding.license || 'Specific Open License')}</strong></div>
        ${imgBinding.sourceUrl ? `
          <a href="${escapeHtml(imgBinding.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="callout-link">
            <span>Direct Repository Reference</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/></svg>
          </a>` : ''}
      `;
    } else {
      calloutBox.innerHTML = `
        <div class="callout-header">
          <span>Target Image Repository</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="callout-institution">${escapeHtml(artifact.image_source_target || 'Wikimedia Commons')}</div>
        <div class="callout-license">Individual license & author will be retrieved upon photo attachment</div>
        ${artifact.image_source_url ? `
          <a href="${escapeHtml(artifact.image_source_url)}" target="_blank" rel="noopener noreferrer" class="callout-link">
            <span>Browse Target Wikimedia Commons Category ↗</span>
          </a>` : ''}
      `;
    }

    // Metadata Ledger
    document.getElementById('modalMetaDynasty').textContent = artifact.category || artifact.dynasty_era || 'Heritage';
    document.getElementById('modalMetaMedium').textContent = artifact.medium || 'Cultural Heritage Tradition';
    document.getElementById('modalMetaProvenance').textContent = artifact.location || artifact.region_state || 'India';
    document.getElementById('modalMetaDimensions').textContent = (artifact.latitude && artifact.longitude) 
      ? `Coordinates: ${artifact.latitude}, ${artifact.longitude}` 
      : (artifact.dimensions_spec || 'Official Heritage Specimen');

    // Curator Narrative
    document.getElementById('modalNarrative').textContent = artifact.description || artifact.curator_notes || 'Official cultural heritage record preserved in the Virasat.ai database.';

    // Swatches
    const swatchesContainer = document.getElementById('modalPigmentSwatches');
    swatchesContainer.innerHTML = '';
    if (artifact.pigments_materials && artifact.pigments_materials.length > 0) {
      artifact.pigments_materials.forEach(mat => {
        const span = document.createElement('span');
        span.className = 'swatch-pill';
        span.textContent = mat;
        swatchesContainer.appendChild(span);
      });
    }

    // Like Photo Button
    const saveBtn = document.getElementById('modalSaveBoardBtn');
    saveBtn.className = `nav-btn ${isSaved ? 'nav-btn-primary' : 'nav-btn-outline'}`;
    saveBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      <span>${isSaved ? 'Liked Photo' : 'Like Photo'}</span>
    `;
    saveBtn.onclick = () => {
      toggleSaveArtifact(artifact.id);
      openArtifactModal(artifact);
    };

    document.getElementById('modalCiteBtn').onclick = () => openCitationModal(artifact);

    document.getElementById('modalShareBtn').onclick = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${artifact.virasat_archive_id}`);
        showToast('Archival reference link copied');
      }
    };

    artifactModal.showModal();
  }

  // Open Photo Attacher Modal (With Live Wikimedia API resolver)
  function openPhotoModal(artifact) {
    state.targetPhotoArtifactId = artifact.id;
    state.stagedWikimediaMeta = null;

    document.getElementById('photoTargetTitle').textContent = `Slot: ${artifact.title}`;
    document.getElementById('photoTargetCode').textContent = `Virasat Archive ID: ${artifact.virasat_archive_id}`;

    const existingBinding = window.archiveStore.getArtifactImageBinding(artifact);
    photoUrlInput.value = existingBinding ? existingBinding.url : '';
    photoLicenseInput.value = existingBinding ? (existingBinding.license || '') : '';
    photoAttributionInput.value = existingBinding ? (existingBinding.attribution || '') : '';

    wikimediaResolveBox.style.display = 'none';

    // Pre-suggest Wikimedia link query if available
    if (artifact.image_source_url) {
      document.getElementById('photoWikimediaHint').innerHTML = `
        Recommended Repository: <a href="${escapeHtml(artifact.image_source_url)}" target="_blank" rel="noopener noreferrer" style="color:var(--c-heritage-brown);text-decoration:underline;">${escapeHtml(artifact.image_source_target)}</a>
      `;
    }

    photoModal.showModal();
  }

  // Live Wikimedia Commons URL resolver
  let wikimediaDebounce = null;
  photoUrlInput.addEventListener('input', () => {
    clearTimeout(wikimediaDebounce);
    const url = photoUrlInput.value.trim();

    if (!url) {
      wikimediaResolveBox.style.display = 'none';
      state.stagedWikimediaMeta = null;
      return;
    }

    // Check if user entered a Wikimedia Commons URL
    const isWikimedia = url.includes('commons.wikimedia.org') || url.includes('upload.wikimedia.org') || url.toLowerCase().startsWith('file:');
    if (!isWikimedia) {
      wikimediaResolveBox.style.display = 'none';
      state.stagedWikimediaMeta = null;
      return;
    }

    wikimediaResolveBox.style.display = 'block';
    wikimediaStatusText.innerHTML = `<em>Querying Wikimedia Commons API for exact license & attribution...</em>`;

    wikimediaDebounce = setTimeout(async () => {
      const meta = await window.archiveStore.resolveWikimediaCommonsMetadata(url);
      if (meta) {
        state.stagedWikimediaMeta = meta;
        photoLicenseInput.value = meta.license;
        photoAttributionInput.value = meta.attribution;

        wikimediaStatusText.innerHTML = `
          <strong style="color:var(--c-deep-brown);">✓ Wikimedia Commons Record Found:</strong><br/>
          &bull; Exact License: <strong>${escapeHtml(meta.license)}</strong><br/>
          &bull; Author / Credit: ${escapeHtml(meta.attribution)}<br/>
          &bull; Resolution: ${escapeHtml(meta.dimensions || 'High Res')}
        `;
      } else {
        state.stagedWikimediaMeta = null;
        wikimediaStatusText.innerHTML = `<em>Could not auto-extract Wikimedia metadata. You may manually fill license and attribution below.</em>`;
      }
    }, 350);
  });

  // Submit Photo Binding
  document.getElementById('photoSubmitBtn').addEventListener('click', () => {
    if (!state.targetPhotoArtifactId) return;

    const url = photoUrlInput.value.trim();
    if (!url) {
      window.archiveStore.attachImageToArtifact(state.targetPhotoArtifactId, '');
      photoModal.close();
      showToast('Archival slot reset to Sand Beige placeholder');
      renderGallery();
      return;
    }

    let imgData = {
      url: url,
      license: photoLicenseInput.value.trim() || 'Verified License',
      attribution: photoAttributionInput.value.trim() || 'Attributed Source',
      sourcePlatform: state.stagedWikimediaMeta ? 'Wikimedia Commons' : 'External Web',
      sourceUrl: state.stagedWikimediaMeta?.sourceUrl || url,
      licenseUrl: state.stagedWikimediaMeta?.licenseUrl || ''
    };

    window.archiveStore.attachImageToArtifact(state.targetPhotoArtifactId, imgData);
    photoModal.close();

    showToast('Photograph successfully bound to archival slot');

    if (artifactModal.open && state.selectedArtifact && state.selectedArtifact.id === state.targetPhotoArtifactId) {
      openArtifactModal(state.selectedArtifact);
    }
    renderGallery();
  });

  // Local File Upload Dropzone
  const photoFileInput = document.getElementById('photoFileInput');
  const dropzone = document.getElementById('photoDropzone');
  if (dropzone && photoFileInput) {
    dropzone.addEventListener('click', () => photoFileInput.click());
    photoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        photoUrlInput.value = event.target.result;
        photoAttributionInput.value = `Local Image: ${file.name}`;
        photoLicenseInput.value = 'Local Research Specimen';
        showToast('Local image prepared for binding');
      };
      reader.readAsDataURL(file);
    });
  }

  // Open Catalog New Artifact Modal
  function openAddArtifactModal() {
    if (addArtifactForm) addArtifactForm.reset();
    if (addArtifactModal) addArtifactModal.showModal();
  }

  if (navAddArtifactBtn) {
    navAddArtifactBtn.addEventListener('click', openAddArtifactModal);
  }

  if (addArtifactForm) {
    addArtifactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('newRecordTitle').value.trim();
      const category = document.getElementById('newRecordCategory').value;
      const dynasty = document.getElementById('newRecordDynasty').value.trim() || 'Indian Historical Era';
      const region = document.getElementById('newRecordRegion').value.trim() || 'India';
      const ratio = document.getElementById('newRecordRatio').value || '3:4';
      const medium = document.getElementById('newRecordMedium').value.trim() || 'Mixed Heritage Medium';
      const notes = document.getElementById('newRecordNotes').value.trim() || 'Curatorial documentation pending.';
      const imageUrl = document.getElementById('newRecordImageUrl').value.trim();

      const newId = 'va-cst-' + Date.now().toString(36);
      const newVirasatId = 'VA-CST-' + Math.floor(1000 + Math.random() * 9000);

      const record = {
        id: newId,
        virasat_archive_id: newVirasatId,
        record_source: 'Virasat Archive Record',
        title: title,
        category: category,
        dynasty_era: dynasty,
        region_state: region,
        medium: medium,
        aspect_ratio: ratio,
        dimensions_spec: 'Archival Specimen',
        curator_notes: notes,
        image_url: imageUrl,
        image_source_target: imageUrl ? 'User Attached Link' : 'Sand Beige Archival Slot',
        image_license: imageUrl ? 'Verified Open License' : '',
        tags: [category, dynasty, region].filter(Boolean)
      };

      if (imageUrl) {
        window.archiveStore.attachImageToArtifact(newId, {
          url: imageUrl,
          license: 'External Web Link',
          attribution: 'User Provided Record',
          sourceUrl: imageUrl,
          sourcePlatform: 'External Web'
        });
      }

      window.archiveStore.addCustomRecord(record);
      state.allArtifacts.unshift(record);
      if (addArtifactModal) addArtifactModal.close();
      applyFilters();
      showToast(`Archival record cataloged (${newVirasatId})`);
    });
  }

  async function loadSampleRecordsHandler() {
    showToast('Retrieving sample heritage collection...');
    const samples = await window.archiveStore.fetchSampleRecords();
    if (samples && samples.length > 0) {
      const custom = window.archiveStore.loadCustomRecords();
      const map = new Map();
      custom.forEach(item => map.set(item.id, item));
      samples.forEach(item => {
        if (!map.has(item.id)) map.set(item.id, item);
      });
      state.allArtifacts = Array.from(map.values());
      applyFilters();
      showToast(`Loaded ${samples.length} heritage records`);
    } else {
      showToast('No sample records available.');
    }
  }

  // Citation Generator Modal
  function openCitationModal(artifact) {
    const imgBinding = window.archiveStore.getArtifactImageBinding(artifact);
    const hasPhoto = imgBinding && imgBinding.url;
    const sourcePlatform = hasPhoto ? imgBinding.sourcePlatform : (artifact.image_source_target || 'Wikimedia Commons');
    const licenseText = hasPhoto ? imgBinding.license : 'Attribution pending photo binding';

    const chicago = `“${artifact.title}.” ${artifact.dynasty_era}. ${artifact.region_state}. Record: ${artifact.record_source}. Virasat Archive ID: ${artifact.virasat_archive_id}. Visual Source: ${sourcePlatform} (${licenseText}). Virasat.ai Ecosystem.`;
    const apa = `${artifact.title} [${artifact.medium}]. (${artifact.dynasty_era}). ${artifact.record_source}. Virasat Archive ID: ${artifact.virasat_archive_id}. Image Source: ${sourcePlatform}.`;
    const bibtex = `@misc{virasat_${artifact.id.replace(/-/g, '_')},\n  title = {${artifact.title}},\n  year = {${artifact.dynasty_era}},\n  howpublished = {Virasat Archive (ID: ${artifact.virasat_archive_id})},\n  note = {Record Source: ${artifact.record_source}; Visual Source: ${sourcePlatform}},\n  url = {${artifact.image_source_url || 'https://virasat.ai'}}\n}`;

    document.getElementById('citeChicago').textContent = chicago;
    document.getElementById('citeApa').textContent = apa;
    document.getElementById('citeBibtex').textContent = bibtex;

    citationModal.showModal();
  }

  document.querySelectorAll('.btn-copy-cite').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = document.getElementById(btn.dataset.target).textContent;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        showToast('Citation copied to clipboard');
      }
    });
  });

  // Category Filtering
  if (categoryPills && categoryPills.length > 0) {
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedCategory = pill.dataset.category;
        applyFilters();
      });
    });
  }

  // ==========================================================================
  // WIKIMEDIA COMMONS SEARCH CONTROLLER (Layer 2)
  // ==========================================================================
  let searchTimeout = null;
  let activeWikimediaAbort = null;

  function triggerWikimediaSearchForHeritage(term) {
    if (!term) return;
    if (heroGlobalSearchInput) {
      heroGlobalSearchInput.value = term;
      if (heroSearchClearBtn) heroSearchClearBtn.style.display = 'block';
    }
    if (searchInput) {
      searchInput.value = term;
      if (searchClearBtn) searchClearBtn.style.display = 'block';
    }
    performWikimediaSearch(term, true);
  }

  function clearWikimediaSearch() {
    if (activeWikimediaAbort) {
      activeWikimediaAbort.abort();
      activeWikimediaAbort = null;
    }
    state.wikimediaQuery = '';
    state.isWikimediaSearch = false;
    state.wikimediaResults = [];
    state.wikimediaLoading = false;
    state.wikimediaError = null;

    if (heroGlobalSearchInput) {
      heroGlobalSearchInput.value = '';
      if (heroSearchClearBtn) heroSearchClearBtn.style.display = 'none';
    }
    if (searchInput) {
      searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
    }

    if (wikimediaResultsSection) {
      wikimediaResultsSection.style.display = 'none';
    }
    if (wikimediaMasonry) {
      wikimediaMasonry.innerHTML = '';
    }
    if (wikimediaStatusMsg) {
      wikimediaStatusMsg.style.display = 'none';
    }

    renderActiveFilterChips();
    showToast('Search results cleared — viewing homepage collection');
  }

  async function performWikimediaSearch(query, shouldScroll = false) {
    const cleanQ = (query || '').trim();
    if (!cleanQ) {
      clearWikimediaSearch();
      return;
    }

    if (activeWikimediaAbort) {
      activeWikimediaAbort.abort();
    }
    activeWikimediaAbort = new AbortController();
    const signal = activeWikimediaAbort.signal;

    state.wikimediaQuery = cleanQ;
    state.isWikimediaSearch = true;
    state.wikimediaLoading = true;
    state.wikimediaError = null;

    if (heroGlobalSearchInput) {
      heroGlobalSearchInput.value = cleanQ;
      if (heroSearchClearBtn) heroSearchClearBtn.style.display = 'block';
    }
    if (searchInput) {
      searchInput.value = cleanQ;
      if (searchClearBtn) searchClearBtn.style.display = 'block';
    }

    if (wikimediaResultsSection) {
      wikimediaResultsSection.style.display = 'block';
    }
    if (wikimediaSectionTitle) {
      wikimediaSectionTitle.textContent = `Search Results for "${cleanQ}" (Wikimedia Commons)`;
    }

    renderWikimediaResults();
    renderActiveFilterChips();

    // Only scroll if explicitly requested (e.g. clicking a suggestion or find images), NEVER while typing in search bar
    if (shouldScroll && wikimediaResultsSection) {
      wikimediaResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      const response = await fetch(`/api/wikimedia?q=${encodeURIComponent(cleanQ)}`, { signal });
      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.details || errJson.error || `HTTP ${response.status}`);
      }
      const data = await response.json();
      state.wikimediaResults = Array.isArray(data) ? data : [];
      state.wikimediaLoading = false;
      state.wikimediaError = null;
      renderWikimediaResults();
    } catch (err) {
      if (err.name === 'AbortError') return;
      state.wikimediaResults = [];
      state.wikimediaLoading = false;
      state.wikimediaError = err.message || 'Unable to connect to Wikimedia Commons API';
      renderWikimediaResults();
    }
  }

  // Clear Search Results Button Click (Requirement 2)
  if (clearSearchResultsBtn) {
    clearSearchResultsBtn.addEventListener('click', () => {
      clearWikimediaSearch();
      const heritageEl = document.getElementById('heritageCollectionSection');
      if (heritageEl) {
        heritageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Quick Search Suggestions (Requirement 3)
  const suggestionPills = document.querySelectorAll('.suggestion-pill');
  if (suggestionPills && suggestionPills.length > 0) {
    suggestionPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const q = pill.dataset.query;
        if (q) triggerWikimediaSearchForHeritage(q);
      });
    });
  }

  // Explore More Scroll Button (Requirement 5)
  if (exploreSearchScrollBtn) {
    exploreSearchScrollBtn.addEventListener('click', () => {
      if (heroGlobalSearchInput) {
        heroGlobalSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => heroGlobalSearchInput.focus(), 350);
      } else if (searchInput) {
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => searchInput.focus(), 350);
      }
    });
  }

  // Hero Global Search Input Listeners
  if (heroGlobalSearchInput) {
    heroGlobalSearchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const val = e.target.value;
      if (heroSearchClearBtn) heroSearchClearBtn.style.display = val ? 'block' : 'none';
      if (searchInput) {
        searchInput.value = val;
        if (searchClearBtn) searchClearBtn.style.display = val ? 'block' : 'none';
      }

      if (!val.trim()) {
        clearWikimediaSearch();
        return;
      }

      searchTimeout = setTimeout(() => {
        performWikimediaSearch(val);
      }, 320);
    });

    heroGlobalSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(searchTimeout);
        const val = heroGlobalSearchInput.value.trim();
        if (val) {
          performWikimediaSearch(val);
        } else {
          clearWikimediaSearch();
        }
      }
    });
  }

  if (heroSearchClearBtn) {
    heroSearchClearBtn.addEventListener('click', () => {
      clearWikimediaSearch();
      if (heroGlobalSearchInput) heroGlobalSearchInput.focus();
    });
  }

  if (heroSearchSubmitBtn) {
    heroSearchSubmitBtn.addEventListener('click', () => {
      const val = (heroGlobalSearchInput ? heroGlobalSearchInput.value : '').trim();
      if (val) {
        performWikimediaSearch(val);
      }
    });
  }

  // Top Nav Wikimedia Search Input Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const val = e.target.value;
      if (searchClearBtn) searchClearBtn.style.display = val ? 'block' : 'none';
      if (heroGlobalSearchInput) {
        heroGlobalSearchInput.value = val;
        if (heroSearchClearBtn) heroSearchClearBtn.style.display = val ? 'block' : 'none';
      }

      if (!val.trim()) {
        clearWikimediaSearch();
        return;
      }

      searchTimeout = setTimeout(() => {
        performWikimediaSearch(val);
      }, 320);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(searchTimeout);
        const val = searchInput.value.trim();
        if (val) {
          performWikimediaSearch(val);
        } else {
          clearWikimediaSearch();
        }
      }
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      clearWikimediaSearch();
      if (searchInput) searchInput.focus();
    });
  }

  // Heritage Database Search Input Listener (Searching name, category, location, description)
  if (heritageSearchInput) {
    heritageSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (heritageSearchClearBtn) {
        heritageSearchClearBtn.style.display = val ? 'block' : 'none';
      }
      state.searchQuery = val;
      applyFilters();
    });

    heritageSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        heritageSearchInput.value = '';
        if (heritageSearchClearBtn) heritageSearchClearBtn.style.display = 'none';
        state.searchQuery = '';
        applyFilters();
      }
    });
  }

  if (heritageSearchClearBtn) {
    heritageSearchClearBtn.addEventListener('click', () => {
      heritageSearchInput.value = '';
      heritageSearchClearBtn.style.display = 'none';
      state.searchQuery = '';
      applyFilters();
      heritageSearchInput.focus();
    });
  }

  // Heritage Category Pills Listeners
  if (heritageCategoryPills && heritageCategoryPills.length > 0) {
    heritageCategoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        heritageCategoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedCategory = pill.dataset.category || 'all';
        applyFilters();
      });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFilters();
    });
  }

  if (myLikedBtn) {
    myLikedBtn.addEventListener('click', () => {
      if (state.currentView === 'liked' || state.currentView === 'board') {
        state.currentView = 'all';
        myLikedBtn.classList.remove('active');
        showToast('Viewing All Archival Records');
      } else {
        state.currentView = 'liked';
        myLikedBtn.classList.add('active');
        showToast('Viewing Liked Photos');
      }
      applyFilters();
    });
  }

  function resetAllFilters() {
    state.selectedCategory = 'all';
    state.searchQuery = '';
    state.currentView = 'all';
    if (myLikedBtn) myLikedBtn.classList.remove('active');

    if (heritageSearchInput) {
      heritageSearchInput.value = '';
      if (heritageSearchClearBtn) heritageSearchClearBtn.style.display = 'none';
    }

    if (heritageCategoryPills && heritageCategoryPills.length > 0) {
      heritageCategoryPills.forEach(p => {
        p.classList.toggle('active', (p.dataset.category || 'all') === 'all');
      });
    }

    clearWikimediaSearch();
    applyFilters();
    showToast('Filters reset');
  }

  function renderActiveFilterChips() {
    activeFiltersStrip.innerHTML = '';
    const hasHeritageSearch = state.searchQuery.trim() !== '';
    const hasCat = state.selectedCategory !== 'all';
    const isLiked = state.currentView === 'liked' || state.currentView === 'board';
    const isWiki = state.isWikimediaSearch && state.wikimediaQuery;

    if (!hasHeritageSearch && !hasCat && !isLiked && !isWiki) {
      activeFiltersStrip.style.display = 'none';
      return;
    }

    activeFiltersStrip.style.display = 'flex';

    if (isWiki) {
      addActiveChip(`Wikimedia Search: "${state.wikimediaQuery}"`, () => {
        clearWikimediaSearch();
      });
    }

    if (isLiked) {
      addActiveChip('Collection: Liked Photos', () => {
        state.currentView = 'all';
        if (myLikedBtn) myLikedBtn.classList.remove('active');
        applyFilters();
      });
    }

    if (hasCat) {
      addActiveChip(`Category: ${state.selectedCategory}`, () => {
        state.selectedCategory = 'all';
        if (heritageCategoryPills) {
          heritageCategoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
        }
        applyFilters();
      });
    }

    if (hasHeritageSearch) {
      addActiveChip(`Heritage Filter: "${state.searchQuery}"`, () => {
        state.searchQuery = '';
        if (heritageSearchInput) {
          heritageSearchInput.value = '';
          if (heritageSearchClearBtn) heritageSearchClearBtn.style.display = 'none';
        }
        applyFilters();
      });
    }
  }

  function addActiveChip(label, onRemove) {
    const chip = document.createElement('span');
    chip.className = 'active-tag';
    chip.innerHTML = `
      <span>${escapeHtml(label)}</span>
      <span class="active-tag-remove">&times;</span>
    `;
    chip.querySelector('.active-tag-remove').addEventListener('click', onRemove);
    activeFiltersStrip.appendChild(chip);
  }

  let toastTimer = null;
  function showToast(msg) {
    clearTimeout(toastTimer);
    toastEl.querySelector('.toast-msg').textContent = msg;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dialog = btn.closest('dialog');
      if (dialog) dialog.close();
    });
  });
});
