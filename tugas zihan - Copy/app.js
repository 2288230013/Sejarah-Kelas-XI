/**
 * NUSANTARA BANGKIT: MEDIA PEMBELAJARAN SEJARAH KELAS XI
 * Logika Aplikasi Lengkap:
 * - Navigasi SPA & Routing
 * - Pustaka Materi 3 Bagian Besar (Portugis, VOC, Pemerintah Belanda) dengan 6 Langkah Terstruktur
 * - Slide Studio (PowerPoint sederhana) dengan 8 Template, Multi-simpanan, Drag & Drop
 * - Kuis Perlawanan Nusantara dengan Efek Suara, Feedback Seketika, dan Format Hasil Sesuai Panduan
 * - Editor Kuis Guru (CRUD Soal & Pengaturan Jumlah Soal)
 * - Peta Perlawanan Interaktif
 * - Timeline Kronologis dengan Dialog Detail
 * - Sinkronisasi Google Apps Script & Spreadsheet
 */

// =========================================================================
// 1. STATE & KONFIGURASI APLIKASI
// =========================================================================
const AppState = {
  activeView: 'beranda',
  previousView: 'beranda',
  isRouting: false,
  currentMateriId: 'ternate-portugis',
  currentMateriTab: 'latarBelakang',
  materiFilter: 'all',

  // Urutan 6 Langkah Materi
  materiSteps: ['latarBelakang', 'tokoh', 'jalannyaPerlawanan', 'strategi', 'akhirPerlawanan', 'dampak'],

  // Kuis
  quiz: {
    questions: [],
    sessionQuestions: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    isAnswered: false,
    selectedOption: null,
    sessionLimit: localStorage.getItem('nusantara_quiz_limit') || '10'
  },

  // Slide Studio ("Buat Materi")
  studio: {
    currentId: 'pres-' + Date.now(),
    title: 'Materi Perlawanan Pribumi',
    slides: [],
    activeSlideIndex: 0,
    selectedElementId: null,
    isDragging: false,
    dragElement: null,
    dragOffset: { x: 0, y: 0 },
    presentationIndex: 0
  },

  // Identitas Siswa
  student: {
    nama: '',
    tingkat: 'XI',
    jurusan: 'TPM',
    rombel: '1',
    kelasLengkap: ''
  },

  // Mode Guru / Administrator
  admin: {
    isLoggedIn: false,
    password: (localStorage.getItem('nusantara_admin_pw') && localStorage.getItem('nusantara_admin_pw') !== 'guru123') 
      ? localStorage.getItem('nusantara_admin_pw') 
      : '010901',
    pendingView: null
  },

  // Google Apps Script
  appsScript: {
    url: localStorage.getItem('apps_script_url') || 'https://script.google.com/macros/s/AKfycbyCKMMuf020J6ACpF5zSutnVh7_a02gIJ_ReHJMN8APLu5bk4PHm_7hxin6dQaVz_lRtg/exec',
    isConnected: false
  },

  // Text-To-Speech
  speech: {
    isSpeaking: false,
    synth: window.speechSynthesis || null,
    utterance: null
  }
};

// =========================================================================
// 2. AUDIO SYNTHESIZER (WEB AUDIO API)
// =========================================================================
const SoundFX = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error / user gesture needed", e);
    }
  },
  correct() {
    // Melodi C5 -> E5 -> G5 -> C6
    setTimeout(() => this.playTone(523.25, 'triangle', 0.1, 0.15), 0);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.1, 0.15), 90);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.1, 0.15), 180);
    setTimeout(() => this.playTone(1046.50, 'triangle', 0.22, 0.18), 270);
  },
  wrong() {
    setTimeout(() => this.playTone(220, 'sawtooth', 0.2, 0.12), 0);
    setTimeout(() => this.playTone(175, 'sawtooth', 0.3, 0.12), 120);
  },
  click() {
    this.playTone(850, 'sine', 0.04, 0.05);
  },
  fanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];
    const delays = [0, 110, 220, 330, 460, 600];
    notes.forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.2, 0.16), delays[i]);
    });
  }
};

// =========================================================================
// 3. INISIALISASI APLIKASI
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAdminMode();
  initStudentProfile();
  initNavigation();
  initMateriView();
  initQuizSystem();
  initSlideStudio();
  initInteractiveMap();
  initTimelineView();
  initAppsScriptModal();
  checkAppsScriptStatus();

  window.addEventListener('hashchange', handleRoute);
  handleRoute();

  // Tutup dialog saat klik di luar kotak konten (backdrop)
  document.querySelectorAll('dialog').forEach(modal => {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        if (modal.id === 'presentationModal') {
          closePresentationMode();
        } else {
          modal.close();
        }
      }
    });
  });
});

// =========================================================================
// 4. NAVIGASI SPA & ROUTING
// =========================================================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetView = link.getAttribute('data-view');
      if (targetView) {
        e.preventDefault();
        if (targetView === 'materi') {
          AppState.materiFilter = 'all';
        }
        navigateTo(targetView);
        if (navMenu && navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
        }
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
}

function handleRoute() {
  if (AppState.isRouting) return;
  const hash = window.location.hash.replace('#', '') || 'beranda';
  if (hash !== AppState.activeView) {
    navigateTo(hash, false);
  }
}

function navigateTo(viewName, updateHash = true) {
  stopSpeechNarration();

  // Proteksi Menu Khusus Guru / Admin (Buat Materi & Edit Kuis)
  if ((viewName === 'buat-materi' || viewName === 'edit-kuis') && (!AppState.admin || !AppState.admin.isLoggedIn)) {
    openAdminLoginModal(viewName);
    return;
  }

  const validViews = ['beranda', 'materi', 'materi-detail', 'buat-materi', 'kuis', 'edit-kuis', 'peta', 'timeline'];
  if (!validViews.includes(viewName)) {
    viewName = 'beranda';
  }

  const isNewView = (AppState.activeView !== viewName);
  if (isNewView && AppState.activeView !== 'materi-detail') {
    AppState.previousView = AppState.activeView;
  }

  AppState.activeView = viewName;
  if (updateHash && window.location.hash.replace('#', '') !== viewName) {
    AppState.isRouting = true;
    window.location.hash = viewName;
    setTimeout(() => { AppState.isRouting = false; }, 60);
  }

  // Sembunyikan semua section
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  // Tampilkan target section
  const targetSection = document.getElementById(`view-${viewName}`);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Update active status di navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkView = link.getAttribute('data-view');
    if (linkView === viewName || (viewName === 'materi-detail' && linkView === 'materi')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hook spesifik per view
  if (viewName === 'materi') {
    const filterBtns = document.querySelectorAll('.materi-filters .filter-btn');
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === AppState.materiFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    renderMateriCards();
  } else if (viewName === 'kuis') {
    if (isNewView || !AppState.quiz.sessionQuestions || AppState.quiz.sessionQuestions.length === 0) {
      startQuiz();
    }
  } else if (viewName === 'edit-kuis') {
    renderQuizEditor();
  } else if (viewName === 'buat-materi') {
    renderSlideStudio();
  }
}

// Buka Materi dengan Filter Tertentu dari Beranda
function openMateriWithFilter(era) {
  AppState.materiFilter = era;
  navigateTo('materi');

  const filterBtns = document.querySelectorAll('.materi-filters .filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === era) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderMateriCards();
}

// =========================================================================
// 5. HALAMAN MATERI (3 BAGIAN BESAR & DETAIL 6 LANGKAH)
// =========================================================================
function initMateriView() {
  const filterBtns = document.querySelectorAll('.materi-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.materiFilter = btn.getAttribute('data-filter') || 'all';
      renderMateriCards();
    });
  });

  const searchInput = document.getElementById('materiSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderMateriCards(e.target.value.toLowerCase().trim());
    });
  }

  const formatTabBtns = document.querySelectorAll('.format-tab-btn');
  formatTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      switchMateriTab(tabName);
    });
  });

  const backBtn = document.getElementById('btnBackToMateri');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stopSpeechNarration();
      const target = (AppState.previousView && AppState.previousView !== 'materi-detail') ? AppState.previousView : 'materi';
      navigateTo(target);
    });
  }

  const ttsBtn = document.getElementById('btnToggleNarator');
  if (ttsBtn) {
    ttsBtn.addEventListener('click', toggleSpeechNarration);
  }
}

// Render Materi ke dalam 3 Bagian Besar
function renderMateriCards(searchQuery = '') {
  const container = document.getElementById('materiSectionsContainer');
  if (!container) return;

  const sectionsConfig = [
    {
      key: 'portugis',
      title: 'A. PERLAWANAN TERHADAP PORTUGIS',
      desc: 'Perlawanan kesultanan maritim Nusantara mengusir dominasi dan monopoli rempah-rempah Portugis di Malaka dan Maluku.',
      badgeClass: 'portugis'
    },
    {
      key: 'voc',
      title: 'B. PERLAWANAN TERHADAP VOC',
      desc: 'Perlawanan kerajaan-kerajaan besar Jawa dan Sulawesi menolak monopoli dagang serikat Kompeni Belanda.',
      badgeClass: 'voc'
    },
    {
      key: 'belanda',
      title: 'C. PERLAWANAN TERHADAP PEMERINTAH BELANDA',
      desc: 'Perang semesta rakyat Indonesia di berbagai kepulauan menentang kembalinya penjajahan Hindia Belanda.',
      badgeClass: 'belanda'
    }
  ];

  let html = '';
  let matchCount = 0;

  sectionsConfig.forEach(sec => {
    // Lewati jika filter aktif tidak cocok
    if (AppState.materiFilter !== 'all' && AppState.materiFilter !== sec.key) {
      return;
    }

    let items = HISTORICAL_DATA.materi.filter(m => m.era === sec.key);

    if (searchQuery) {
      items = items.filter(m => 
        m.title.toLowerCase().includes(searchQuery) ||
        m.heroName.toLowerCase().includes(searchQuery) ||
        m.region.toLowerCase().includes(searchQuery) ||
        m.summary.toLowerCase().includes(searchQuery)
      );
    }

    if (items.length > 0) {
      matchCount += items.length;
      html += `
        <div class="materi-era-group" id="section-${sec.key}">
          <div class="materi-era-group-header">
            <div>
              <h3 class="materi-era-group-title">${sec.title}</h3>
              <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 0.25rem;">${sec.desc}</p>
            </div>
            <span class="materi-era-badge ${sec.badgeClass}">${items.length} Topik</span>
          </div>

          <div class="materi-grid">
            ${items.map((item, idx) => `
              <div class="materi-item-card" onclick="openMateriDetail('${item.id}')">
                <div class="materi-card-header">
                  <span class="materi-era-badge ${item.era}">${idx + 1}. ${item.title}</span>
                  <span class="materi-period-badge">⏳ ${item.period}</span>
                </div>
                <div class="materi-card-body">
                  <div class="materi-hero-line">
                    <span>👤</span>
                    <span>${item.heroName}</span>
                  </div>
                  <div class="materi-region-line">
                    <span>📍</span>
                    <span>${item.region}</span>
                  </div>
                  <p class="materi-item-summary">${item.summary}</p>
                </div>
                <div class="materi-card-footer">
                  <span>📖 Buka Materi Lengkap</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  if (matchCount === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 2px dashed var(--border-gold);">
        <p style="font-size: 1.2rem; color: var(--brown-deep); font-weight: 700; margin-bottom: 0.5rem;">Tidak ada topik yang sesuai dengan pencarian "${searchQuery}".</p>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Silakan gunakan kata kunci lain seperti nama pahlawan, wilayah, atau ganti filter era.</p>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }
}

function openMateriDetail(materiId) {
  const item = HISTORICAL_DATA.materi.find(m => m.id === materiId);
  if (!item) return;

  AppState.currentMateriId = materiId;
  AppState.currentMateriTab = 'latarBelakang';

  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailHeroName').textContent = `${item.heroName} • ${item.heroTitle}`;
  document.getElementById('detailRegion').textContent = `📍 ${item.region} • ⏳ ${item.period}`;
  document.getElementById('detailEraBadge').textContent = item.eraLabel;
  document.getElementById('detailQuote').textContent = `"${item.quote}"`;

  const bannerImg = document.getElementById('detailHeroBg');
  if (bannerImg) {
    bannerImg.src = item.bannerImage || 'assets/hero_perlawanan.jpg';
  }

  const backBtn = document.getElementById('btnBackToMateri');
  if (backBtn) {
    let label = '← Kembali ke Pustaka Materi';
    if (AppState.previousView === 'peta') label = '← Kembali ke Peta Sejarah';
    else if (AppState.previousView === 'timeline') label = '← Kembali ke Timeline Sejarah';
    else if (AppState.previousView === 'beranda') label = '← Kembali ke Beranda';
    backBtn.innerHTML = `<span>${label}</span>`;
  }

  const watchVideoBtn = document.getElementById('btnWatchMateriVideo');
  if (watchVideoBtn) {
    const relatedPoint = (HISTORICAL_DATA.mapPoints && Array.isArray(HISTORICAL_DATA.mapPoints))
      ? HISTORICAL_DATA.mapPoints.find(p => p.topicId === materiId)
      : null;
    if (relatedPoint) {
      watchVideoBtn.style.display = 'inline-flex';
      watchVideoBtn.onclick = () => openMapVideoModal(relatedPoint.id);
    } else {
      watchVideoBtn.style.display = 'none';
    }
  }

  switchMateriTab('latarBelakang');
  navigateTo('materi-detail');
}

function switchMateriTab(tabKey) {
  AppState.currentMateriTab = tabKey;
  stopSpeechNarration();

  document.querySelectorAll('.format-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderMateriDetailTab(tabKey);
}

function renderMateriDetailTab(tabKey) {
  const item = HISTORICAL_DATA.materi.find(m => m.id === AppState.currentMateriId);
  const container = document.getElementById('detailTabContentArea');
  if (!item || !container) return;

  const data = item.sections[tabKey] || [];
  const currentStepIdx = AppState.materiSteps.indexOf(tabKey);
  const prevStepKey = currentStepIdx > 0 ? AppState.materiSteps[currentStepIdx - 1] : null;
  const nextStepKey = currentStepIdx < AppState.materiSteps.length - 1 ? AppState.materiSteps[currentStepIdx + 1] : null;

  let bodyContent = '';

  switch (tabKey) {
    case 'latarBelakang':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">📜 Latar Belakang & Faktor Pemicu</h3>
        ${data.map(point => `
          <div class="info-bullet-card">
            <p>${point}</p>
          </div>
        `).join('')}
      `;
      break;

    case 'tokoh':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">👤 Tokoh-Tokoh Kunci Perjuangan</h3>
        <div class="tokoh-cards-grid">
          ${data.map(tokoh => `
            <div class="tokoh-bio-card">
              <span class="tokoh-role">${tokoh.role}</span>
              <h4 class="tokoh-name">${tokoh.name}</h4>
              <p class="tokoh-bio">${tokoh.bio}</p>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'jalannyaPerlawanan':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.5rem;">⚔️ Jalannya Perlawanan (Kronologi)</h3>
        <div class="timeline-step-list">
          ${data.map(step => `
            <div class="timeline-step-item">
              <div class="timeline-step-bullet"></div>
              <div class="timeline-step-text">
                <p>${step}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'strategi':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">🎯 Strategi Perjuangan & Taktik Perang</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${data.map((strat, i) => `
            <div class="info-bullet-card" style="border-left-color: var(--maroon); background: #FFF9F9;">
              <div style="font-weight: 800; color: var(--maroon); margin-bottom: 0.4rem;">Taktik #${i + 1}</div>
              <p>${strat}</p>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'akhirPerlawanan':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">🏁 Akhir Perlawanan</h3>
        ${data.map(point => `
          <div class="info-bullet-card" style="border-left-color: var(--navy-deep); background: #F8FAFC;">
            <p>${point}</p>
          </div>
        `).join('')}
      `;
      break;

    case 'dampak':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">🌟 Dampak & Nilai Sejarah</h3>
        ${data.map(point => `
          <div class="info-bullet-card" style="border-left-color: var(--gold-dark); background: #FFFCF2;">
            <p>${point}</p>
          </div>
        `).join('')}
      `;
      break;
  }

  // Step Navigation Buttons (Prev / Next Step)
  let stepNavHtml = `
    <div class="detail-step-nav">
      ${prevStepKey ? `
        <button class="btn btn-secondary" onclick="switchMateriTab('${prevStepKey}')">
          <span>← Langkah Sebelumnya</span>
        </button>
      ` : `<div></div>`}

      ${nextStepKey ? `
        <button class="btn btn-primary" onclick="switchMateriTab('${nextStepKey}')">
          <span>Langkah Berikutnya →</span>
        </button>
      ` : `
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-maroon" onclick="navigateTo('kuis')">
            <span>🎮 Uji Pemahaman di Kuis</span>
          </button>
          <button class="btn btn-primary" onclick="openNextMateriTopic()">
            <span>📖 Topik Selanjutnya →</span>
          </button>
        </div>
      `}
    </div>
  `;

  container.innerHTML = `
    <div class="tab-pane">
      ${bodyContent}
      ${stepNavHtml}
    </div>
  `;
}

function openNextMateriTopic() {
  const currentIndex = HISTORICAL_DATA.materi.findIndex(m => m.id === AppState.currentMateriId);
  if (currentIndex >= 0 && currentIndex < HISTORICAL_DATA.materi.length - 1) {
    openMateriDetail(HISTORICAL_DATA.materi[currentIndex + 1].id);
  } else {
    navigateTo('materi');
  }
}

// Text-to-Speech (TTS)
function toggleSpeechNarration() {
  if (!AppState.speech.synth) {
    alert("Browser ini tidak mendukung pembaca teks audio otomatis.");
    return;
  }

  const btn = document.getElementById('btnToggleNarator');

  if (AppState.speech.isSpeaking) {
    stopSpeechNarration();
  } else {
    const item = HISTORICAL_DATA.materi.find(m => m.id === AppState.currentMateriId);
    if (!item) return;

    let textToRead = `${item.title}. Pemimpin: ${item.heroName}. Wilayah: ${item.region}. `;
    const currentData = item.sections[AppState.currentMateriTab];
    if (Array.isArray(currentData)) {
      if (typeof currentData[0] === 'string') {
        textToRead += currentData.join('. ');
      } else if (typeof currentData[0] === 'object') {
        textToRead += currentData.map(t => `${t.name}, ${t.role}. ${t.bio}`).join('. ');
      }
    }

    AppState.speech.utterance = new SpeechSynthesisUtterance(textToRead);
    AppState.speech.utterance.lang = 'id-ID';
    AppState.speech.utterance.rate = 0.95;

    AppState.speech.utterance.onend = () => {
      AppState.speech.isSpeaking = false;
      if (btn) btn.innerHTML = `<span>🔊</span> Dengarkan Narasi Sejarah`;
    };

    AppState.speech.synth.speak(AppState.speech.utterance);
    AppState.speech.isSpeaking = true;
    if (btn) btn.innerHTML = `<span>⏹️</span> Hentikan Narasi`;
  }
}

function stopSpeechNarration() {
  if (AppState.speech.synth && AppState.speech.isSpeaking) {
    AppState.speech.synth.cancel();
    AppState.speech.isSpeaking = false;
    const btn = document.getElementById('btnToggleNarator');
    if (btn) btn.innerHTML = `<span>🔊</span> Dengarkan Narasi Sejarah`;
  }
}

// =========================================================================
// 6. GAME EDUKATIF: KUIS PERLAWANAN NUSANTARA
// =========================================================================
function initQuizSystem() {
  loadQuizQuestions();

  const nextBtn = document.getElementById('btnNextQuestion');
  if (nextBtn) {
    nextBtn.addEventListener('click', nextQuestion);
  }

  const restartBtn = document.getElementById('btnRestartQuiz');
  if (restartBtn) {
    restartBtn.addEventListener('click', startQuiz);
  }

  const learnBtn = document.getElementById('btnQuizToMateri');
  if (learnBtn) {
    learnBtn.addEventListener('click', () => navigateTo('materi'));
  }

  const scoreForm = document.getElementById('studentScoreForm');
  if (scoreForm) {
    scoreForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitStudentScore();
    });
  }
}

function loadQuizQuestions() {
  const saved = localStorage.getItem('nusantara_quiz_questions');
  if (saved) {
    try {
      AppState.quiz.questions = JSON.parse(saved);
    } catch (e) {
      AppState.quiz.questions = [...HISTORICAL_DATA.kuis];
    }
  } else {
    AppState.quiz.questions = [...HISTORICAL_DATA.kuis];
  }
}

function startQuiz() {
  loadQuizQuestions();

  const limitSetting = AppState.quiz.sessionLimit;
  let totalToPlay = 10;
  if (limitSetting === '5') totalToPlay = 5;
  else if (limitSetting === '15') totalToPlay = 15;
  else if (limitSetting === 'all') totalToPlay = AppState.quiz.questions.length;
  else totalToPlay = Math.min(10, AppState.quiz.questions.length);

  // Ambil soal sesuai limit
  AppState.quiz.sessionQuestions = AppState.quiz.questions.slice(0, totalToPlay);
  AppState.quiz.currentIndex = 0;
  AppState.quiz.score = 0;
  AppState.quiz.correctCount = 0;
  AppState.quiz.wrongCount = 0;
  AppState.quiz.isAnswered = false;
  AppState.quiz.selectedOption = null;

  document.getElementById('quizPlayArea').style.display = 'block';
  document.getElementById('quizResultArea').style.display = 'none';

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const qState = AppState.quiz;
  const total = qState.sessionQuestions.length;
  const currentQ = qState.sessionQuestions[qState.currentIndex];

  if (!currentQ || qState.currentIndex >= total) {
    finishQuiz();
    return;
  }

  document.getElementById('quizCounterText').textContent = `Soal ${qState.currentIndex + 1} dari ${total}`;
  const progressPercent = ((qState.currentIndex + 1) / total) * 100;
  document.getElementById('quizProgressBar').style.width = `${progressPercent}%`;

  document.getElementById('quizQuestionText').textContent = currentQ.soal;

  const imgWrapper = document.getElementById('quizImageWrapper');
  const imgTag = document.getElementById('quizQuestionImg');
  if (currentQ.gambar) {
    imgTag.src = currentQ.gambar;
    imgWrapper.style.display = 'block';
  } else {
    imgWrapper.style.display = 'none';
  }

  const optionsContainer = document.getElementById('quizOptionsList');
  const letters = ['A', 'B', 'C', 'D'];
  optionsContainer.innerHTML = currentQ.pilihan.map((opt, idx) => `
    <button class="quiz-option-btn" onclick="selectQuizOption(${idx})" id="opt-btn-${idx}">
      <span class="option-letter">${letters[idx]}</span>
      <span class="option-text">${opt}</span>
    </button>
  `).join('');

  const explanationBox = document.getElementById('quizExplanationBox');
  explanationBox.classList.remove('show');
  explanationBox.style.display = 'none';

  const nextBtn = document.getElementById('btnNextQuestion');
  nextBtn.style.display = 'none';
  nextBtn.disabled = true;

  // Ubah teks tombol jika soal terakhir
  if (qState.currentIndex === total - 1) {
    nextBtn.innerHTML = `<span>Selesai & Lihat Skor 🎉</span>`;
  } else {
    nextBtn.innerHTML = `<span>Lanjut ke Soal Berikutnya →</span>`;
  }

  qState.isAnswered = false;
  qState.selectedOption = null;
}

function selectQuizOption(index) {
  const qState = AppState.quiz;
  if (qState.isAnswered) return;

  qState.isAnswered = true;
  qState.selectedOption = index;

  const currentQ = qState.sessionQuestions[qState.currentIndex];
  const isCorrect = index === currentQ.jawabanBenar;

  document.querySelectorAll('.quiz-option-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.jawabanBenar) {
      btn.classList.add('correct');
      btn.querySelector('.option-letter').innerHTML = '✅';
    } else if (idx === index && !isCorrect) {
      btn.classList.add('wrong');
      btn.querySelector('.option-letter').innerHTML = '❌';
    }
  });

  if (isCorrect) {
    qState.correctCount++;
    SoundFX.correct();
  } else {
    qState.wrongCount++;
    SoundFX.wrong();
  }

  const explanationBox = document.getElementById('quizExplanationBox');
  document.getElementById('quizExplanationText').textContent = currentQ.penjelasan || "Pembahasan dapat dilihat pada modul pustaka materi sejarah.";
  explanationBox.style.display = 'block';
  explanationBox.classList.add('show');

  const nextBtn = document.getElementById('btnNextQuestion');
  nextBtn.style.display = 'inline-flex';
  nextBtn.disabled = false;
}

function nextQuestion() {
  AppState.quiz.currentIndex++;
  const total = AppState.quiz.sessionQuestions.length;

  if (AppState.quiz.currentIndex >= total) {
    finishQuiz();
  } else {
    renderCurrentQuestion();
  }
}

function finishQuiz() {
  const qState = AppState.quiz;
  const total = qState.sessionQuestions.length;
  const finalScore = Math.round((qState.correctCount / total) * 100);
  qState.score = finalScore;

  document.getElementById('quizPlayArea').style.display = 'none';
  document.getElementById('quizResultArea').style.display = 'block';

  // Format Tampilan Hasil Sesuai Panduan Prompt:
  // 🎉 Kuis Selesai!
  // Skor: 80/100
  // Benar: 8
  // Salah: 2
  // Nilai: 80
  document.getElementById('resultSkorText').textContent = `Skor: ${finalScore}/100`;
  document.getElementById('resultCorrectVal').textContent = `Benar: ${qState.correctCount}`;
  document.getElementById('resultWrongVal').textContent = `Salah: ${qState.wrongCount}`;
  document.getElementById('resultNilaiText').textContent = `Nilai: ${finalScore}`;

  let predicate = "Pejuang Pembelajar!";
  let emoji = "🎉";
  if (finalScore >= 80) {
    predicate = "Luar Biasa! Anda Sangat Menguasai Sejarah Perlawanan Pribumi!";
    emoji = "🏆";
  } else if (finalScore >= 60) {
    predicate = "Bagus! Terus Perdalam Pemahaman Taktik dan Peristiwa Sejarah!";
    emoji = "⭐";
  } else {
    predicate = "Mari Pelajari Kembali Materi untuk Mendapatkan Nilai Terbaik!";
    emoji = "📚";
  }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultPredicate').textContent = predicate;

  // Auto-fill form pengiriman nilai kuis dengan data identitas siswa
  if (AppState.student && AppState.student.nama) {
    const nameInput = document.getElementById('studentNameInput');
    const classInput = document.getElementById('studentClassInput');
    if (nameInput) nameInput.value = AppState.student.nama;
    if (classInput) classInput.value = AppState.student.kelasLengkap || `${AppState.student.tingkat} ${AppState.student.jurusan}`.trim();
  }

  SoundFX.fanfare();
}

async function submitStudentScore() {
  const nameInput = document.getElementById('studentNameInput');
  const classInput = document.getElementById('studentClassInput');
  const submitBtn = document.getElementById('btnSubmitScore');
  const statusMsg = document.getElementById('scoreSubmitStatus');

  let studentName = nameInput.value.trim();
  let studentClass = classInput.value.trim();

  if (!studentName && AppState.student && AppState.student.nama) {
    studentName = AppState.student.nama;
    nameInput.value = studentName;
  }
  if (!studentClass && AppState.student && AppState.student.kelasLengkap) {
    studentClass = AppState.student.kelasLengkap;
    classInput.value = studentClass;
  }

  if (!studentName) {
    alert("Silakan lengkapi identitas Anda terlebih dahulu.");
    openStudentIdentityModal();
    return;
  }

  if (!AppState.appsScript.url) {
    statusMsg.innerHTML = `<span style="color: #D97706; font-weight: 600;">⚠️ URL Google Apps Script belum diisi di menu Google Sheets navbar. Nilai tetap tercatat di browser Anda.</span>`;
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Mengirim Nilai...";
  statusMsg.innerHTML = `<span style="color: var(--text-muted);">Sedang mencatat ke Google Spreadsheet guru...</span>`;

  try {
    const payload = {
      action: 'submitScore',
      nama: studentName,
      kelas: studentClass,
      nilai: AppState.quiz.score,
      benar: AppState.quiz.correctCount,
      salah: AppState.quiz.wrongCount,
      total: AppState.quiz.sessionQuestions.length
    };

    await fetch(AppState.appsScript.url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    statusMsg.innerHTML = `<span style="color: var(--success); font-weight: 700;">✅ Nilai berhasil dicatat ke Google Spreadsheet Guru!</span>`;
    submitBtn.textContent = "Terkirim!";
  } catch (error) {
    console.error("Gagal submit nilai:", error);
    statusMsg.innerHTML = `<span style="color: var(--danger);">Gagal mengirim: ${error.message}</span>`;
    submitBtn.disabled = false;
    submitBtn.textContent = "Kirim Ulang";
  }
}

// =========================================================================
// REKAP NILAI SISWA (DARI GOOGLE SHEETS TAB: Nilai_Siswa)
// =========================================================================
function escapeHtmlScore(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function openStudentScoresModal() {
  const modal = document.getElementById('studentScoresModal');
  if (!modal) return;
  modal.showModal();
  await loadStudentScores();
}

async function loadStudentScores() {
  const container = document.getElementById('studentScoresTableContainer');
  const countEl = document.getElementById('studentScoresCountSummary');
  if (!container) return;

  if (!AppState.appsScript.url) {
    container.innerHTML = `
      <div style="padding: 2.5rem 1rem; text-align: center; color: var(--danger);">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">⚠️ URL Google Apps Script Belum Dikonfigurasi</p>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Silakan buka menu <b>Sinkronisasi Google Sheets</b> di pojok kanan atas untuk memasukkan URL backend Anda.</p>
      </div>
    `;
    if (countEl) countEl.textContent = 'Belum terhubung';
    return;
  }

  container.innerHTML = `
    <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-muted);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
      <p style="font-weight: 600; color: var(--brown-deep);">Mengambil data dari Google Sheets tab <i>"Nilai_Siswa"</i>...</p>
      <p style="font-size: 0.85rem;">Harap tunggu beberapa detik...</p>
    </div>
  `;
  if (countEl) countEl.textContent = 'Sedang menyinkronkan...';

  try {
    const res = await fetch(`${AppState.appsScript.url}?action=getScores`);
    const json = await res.json();

    if (json.success && Array.isArray(json.data)) {
      if (json.data.length === 0) {
        container.innerHTML = `
          <div style="padding: 3rem 1rem; text-align: center; color: var(--text-secondary);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📋</div>
            <p style="font-weight: 700; color: var(--brown-deep);">Belum ada data nilai di lembar "Nilai_Siswa"</p>
            <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 450px; margin: 0.25rem auto 0;">Siswa yang menyelesaikan kuis dan menekan tombol 'Kirim Nilai ke Guru' akan langsung tercatat otomatis di sini.</p>
          </div>
        `;
        if (countEl) countEl.textContent = 'Total: 0 siswa';
        return;
      }

      const totalSiswa = json.data.length;
      let totalNilai = 0;
      let tuntasCount = 0;

      json.data.forEach(item => {
        const val = Number(item.nilai) || 0;
        totalNilai += val;
        if (val >= 75) tuntasCount++;
      });
      const rerata = Math.round(totalNilai / totalSiswa);

      const dataReversed = [...json.data].reverse();

      let tableHtml = `
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 140px; background: white; border: 1px solid var(--border-gold); border-radius: 8px; padding: 0.75rem 1rem; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Total Peserta</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--brown-deep);">${totalSiswa} Siswa</div>
          </div>
          <div style="flex: 1; min-width: 140px; background: white; border: 1px solid var(--border-gold); border-radius: 8px; padding: 0.75rem 1rem; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Rata-rata Nilai</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: #2563EB;">${rerata}</div>
          </div>
          <div style="flex: 1; min-width: 140px; background: white; border: 1px solid var(--border-gold); border-radius: 8px; padding: 0.75rem 1rem; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Tingkat Kelulusan</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: #059669;">${Math.round((tuntasCount / totalSiswa) * 100)}% (${tuntasCount}/${totalSiswa})</div>
          </div>
        </div>

        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 8px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; background: white;">
            <thead>
              <tr style="background: #F8FAFC; border-bottom: 2px solid #CBD5E1; color: #475569; text-align: left;">
                <th style="padding: 0.75rem 0.6rem; text-align: center; width: 40px;">No</th>
                <th style="padding: 0.75rem 0.6rem;">Waktu</th>
                <th style="padding: 0.75rem 0.6rem;">Nama Siswa</th>
                <th style="padding: 0.75rem 0.6rem;">Kelas</th>
                <th style="padding: 0.75rem 0.6rem; text-align: center;">Nilai</th>
                <th style="padding: 0.75rem 0.6rem; text-align: center;">Benar / Salah</th>
                <th style="padding: 0.75rem 0.6rem; text-align: center;">Status KKM</th>
              </tr>
            </thead>
            <tbody>
      `;

      dataReversed.forEach((item, idx) => {
        const val = Number(item.nilai) || 0;
        const isPassed = val >= 75;
        const bgRow = idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA';

        tableHtml += `
          <tr style="background: ${bgRow}; border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 0.65rem 0.6rem; text-align: center; color: var(--text-muted); font-weight: 600;">${idx + 1}</td>
            <td style="padding: 0.65rem 0.6rem; font-size: 0.8rem; color: #64748B; white-space: nowrap;">${escapeHtmlScore(item.waktu)}</td>
            <td style="padding: 0.65rem 0.6rem; font-weight: 700; color: #1E293B;">${escapeHtmlScore(item.nama)}</td>
            <td style="padding: 0.65rem 0.6rem; font-size: 0.85rem; color: #475569;">${escapeHtmlScore(item.kelas)}</td>
            <td style="padding: 0.65rem 0.6rem; text-align: center;">
              <span style="display: inline-block; padding: 0.2rem 0.6rem; border-radius: 6px; font-weight: 800; font-size: 0.95rem; background: ${isPassed ? '#DCFCE7' : '#FEE2E2'}; color: ${isPassed ? '#166534' : '#991B1B'};">
                ${val}
              </span>
            </td>
            <td style="padding: 0.65rem 0.6rem; text-align: center; font-size: 0.82rem; color: #475569;">
              <span style="color: #16A34A; font-weight: 700;">${item.benar}B</span> / 
              <span style="color: #DC2626; font-weight: 700;">${item.salah}S</span>
              <span style="color: #94A3B8; font-size: 0.75rem;">(dari ${item.total})</span>
            </td>
            <td style="padding: 0.65rem 0.6rem; text-align: center;">
              ${isPassed 
                ? '<span style="background: #10B981; color: white; padding: 0.2rem 0.55rem; border-radius: 999px; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.5px;">TUNTAS</span>' 
                : '<span style="background: #EF4444; color: white; padding: 0.2rem 0.55rem; border-radius: 999px; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.5px;">REMEDIAL</span>'}
            </td>
          </tr>
        `;
      });

      tableHtml += `
            </tbody>
          </table>
        </div>
      `;

      container.innerHTML = tableHtml;
      if (countEl) countEl.textContent = `Menampilkan ${totalSiswa} rekaman nilai siswa dari Google Sheets (Tab Nilai_Siswa).`;
    } else {
      container.innerHTML = `
        <div style="padding: 2rem 1rem; text-align: center; color: var(--danger);">
          Gagal memuat rekap nilai: ${json.error || 'Format respon tidak sesuai.'}
        </div>
      `;
      if (countEl) countEl.textContent = 'Gagal memuat';
    }
  } catch (err) {
    console.error("Error loadStudentScores:", err);
    container.innerHTML = `
      <div style="padding: 2rem 1rem; text-align: center; color: var(--danger);">
        <p style="font-weight: 700; margin-bottom: 0.35rem;">Terjadi kendala jaringan:</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">${err.message}</p>
      </div>
    `;
    if (countEl) countEl.textContent = 'Koneksi error';
  }
}

// =========================================================================
// 7. EDITOR KUIS (GURU DAPAT MENGEDIT KUIS)
// =========================================================================
function renderQuizEditor() {
  loadQuizQuestions();
  const listContainer = document.getElementById('editorQuestionsList');
  const totalCountEl = document.getElementById('totalQuestionsCountText');
  const limitSelect = document.getElementById('quizSessionLimitSelect');

  if (totalCountEl) totalCountEl.textContent = AppState.quiz.questions.length;
  if (limitSelect) {
    limitSelect.value = AppState.quiz.sessionLimit;
    limitSelect.onchange = (e) => {
      AppState.quiz.sessionLimit = e.target.value;
      localStorage.setItem('nusantara_quiz_limit', e.target.value);
    };
  }

  if (!listContainer) return;

  listContainer.innerHTML = AppState.quiz.questions.map((q, qIndex) => `
    <div class="question-edit-card" id="edit-card-${qIndex}">
      <div class="q-edit-header">
        <span class="q-number-badge">Pertanyaan #${qIndex + 1}</span>
        <button class="btn-icon-sm" onclick="deleteQuizQuestion(${qIndex})" title="Hapus Soal" style="color: var(--danger);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>

      <div class="form-group">
        <label class="form-label">Teks Pertanyaan:</label>
        <textarea class="form-textarea" rows="2" oninput="updateQuestionText(${qIndex}, this.value)">${q.soal}</textarea>
      </div>

      <div class="form-group">
        <label class="form-label">URL Gambar Ilustrasi (Opsional):</label>
        <input type="text" class="form-input" value="${q.gambar || ''}" placeholder="assets/... atau https://..." oninput="updateQuestionImage(${qIndex}, this.value)">
      </div>

      <div class="options-edit-grid">
        ${['A', 'B', 'C', 'D'].map((letter, optIdx) => `
          <div class="form-group">
            <label class="form-label" style="display: flex; justify-content: space-between;">
              <span>Pilihan ${letter}:</span>
              <label style="cursor: pointer; font-size: 0.8rem; color: var(--maroon); font-weight: 700;">
                <input type="radio" name="correct_${qIndex}" ${q.jawabanBenar === optIdx ? 'checked' : ''} onchange="updateQuestionCorrect(${qIndex}, ${optIdx})"> Kunci Benar
              </label>
            </label>
            <input type="text" class="form-input" value="${q.pilihan[optIdx] || ''}" oninput="updateQuestionOption(${qIndex}, ${optIdx}, this.value)">
          </div>
        `).join('')}
      </div>

      <div class="form-group">
        <label class="form-label">Penjelasan Jawaban:</label>
        <textarea class="form-textarea" rows="2" placeholder="Tuliskan penjelasan edukatif singkat..." oninput="updateQuestionExplanation(${qIndex}, this.value)">${q.penjelasan || ''}</textarea>
      </div>
    </div>
  `).join('');
}

function addNewQuizQuestion() {
  const newQ = {
    id: Date.now(),
    soal: "Pertanyaan baru: Tuliskan narasi pertanyaan sejarah di sini...",
    pilihan: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    jawabanBenar: 0,
    penjelasan: "Tuliskan penjelasan jawaban benar di sini...",
    gambar: "assets/hero_perlawanan.jpg"
  };

  AppState.quiz.questions.push(newQ);
  renderQuizEditor();
  SoundFX.click();

  // Scroll to bottom
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function deleteQuizQuestion(index) {
  if (confirm(`Apakah Anda yakin ingin menghapus soal #${index + 1}?`)) {
    AppState.quiz.questions.splice(index, 1);
    renderQuizEditor();
  }
}

function updateQuestionText(index, val) { AppState.quiz.questions[index].soal = val; }
function updateQuestionImage(index, val) { AppState.quiz.questions[index].gambar = val; }
function updateQuestionOption(qIndex, optIndex, val) { AppState.quiz.questions[qIndex].pilihan[optIndex] = val; }
function updateQuestionCorrect(qIndex, optIndex) { AppState.quiz.questions[qIndex].jawabanBenar = optIndex; }
function updateQuestionExplanation(index, val) { AppState.quiz.questions[index].penjelasan = val; }

async function saveQuizQuestions() {
  localStorage.setItem('nusantara_quiz_questions', JSON.stringify(AppState.quiz.questions));

  if (AppState.appsScript.url) {
    try {
      await fetch(AppState.appsScript.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'saveKuis',
          questions: AppState.quiz.questions
        })
      });
      alert("✅ Bank Soal Kuis berhasil disimpan ke browser dan disinkronkan ke Google Spreadsheet Guru!");
    } catch (e) {
      alert("✅ Bank Soal Kuis berhasil disimpan di browser (localStorage)!");
    }
  } else {
    alert("✅ Bank Soal Kuis berhasil disimpan di browser (localStorage)!");
  }
}

function resetDefaultQuizQuestions() {
  if (confirm("Kembalikan seluruh bank soal ke bawaan kurikulum standar? Perubahan kustom Anda akan direset.")) {
    AppState.quiz.questions = JSON.parse(JSON.stringify(HISTORICAL_DATA.kuis));
    localStorage.removeItem('nusantara_quiz_questions');
    renderQuizEditor();
    alert("Bank soal berhasil direset ke standar.");
  }
}

// =========================================================================
// 8. FITUR "BUAT MATERI" (SLIDE STUDIO SEPERTI POWERPOINT SEDERHANA)
// =========================================================================
function initSlideStudio() {
  loadStudioSlides();

  document.getElementById('btnAddSlide')?.addEventListener('click', () => addSlideFromTemplate('cover'));
  document.getElementById('btnDuplicateSlide')?.addEventListener('click', duplicateActiveSlide);
  document.getElementById('btnDeleteSlide')?.addEventListener('click', deleteActiveSlide);
  document.getElementById('btnSaveStudio')?.addEventListener('click', saveStudioMaterials);
  document.getElementById('btnPreviewSlideShow')?.addEventListener('click', startPresentationMode);
  document.getElementById('btnOpenSavedModal')?.addEventListener('click', openSavedMaterialsModal);

  setupCanvasInteractions();
}

function loadStudioSlides() {
  const currentKey = localStorage.getItem('nusantara_active_pres_id');
  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');

  if (currentKey && savedList.length > 0) {
    const found = savedList.find(p => p.id === currentKey);
    if (found) {
      AppState.studio.currentId = found.id;
      AppState.studio.title = found.title;
      AppState.studio.slides = found.slides;
      AppState.studio.activeSlideIndex = 0;
      return;
    }
  }

  // Cek apakah ada data tunggal tersimpan lama
  const single = localStorage.getItem('nusantara_slides_data');
  if (single) {
    try {
      const parsed = JSON.parse(single);
      AppState.studio.title = parsed.title || 'Materi Perlawanan Pribumi';
      AppState.studio.slides = parsed.slides || [];
      AppState.studio.currentId = parsed.id || 'pres-1';
      AppState.studio.activeSlideIndex = 0;
      return;
    } catch (e) {}
  }

  initDefaultSlides();
}

function initDefaultSlides() {
  AppState.studio.currentId = 'pres-' + Date.now();
  AppState.studio.title = 'Materi Perlawanan Pribumi';
  AppState.studio.slides = [
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[0])), // Cover
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[1])), // Profil Tokoh
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[4])), // Sebab Akibat
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[7]))  // Kesimpulan
  ];
  AppState.studio.activeSlideIndex = 0;
}

function renderSlideStudio() {
  const studio = AppState.studio;
  if (!studio.slides || studio.slides.length === 0) {
    initDefaultSlides();
  }

  const titleInput = document.getElementById('slideTitleInput');
  if (titleInput) {
    titleInput.value = studio.title;
    titleInput.oninput = (e) => { studio.title = e.target.value; };
  }

  renderSlideThumbnails();
  renderSlideCanvas();
  renderInspectorProperties();
}

function renderSlideThumbnails() {
  const container = document.getElementById('slideThumbList');
  if (!container) return;

  const studio = AppState.studio;
  container.innerHTML = studio.slides.map((s, idx) => `
    <div class="slide-thumb-item ${idx === studio.activeSlideIndex ? 'active' : ''}" onclick="selectSlide(${idx})">
      <span class="slide-thumb-number">#${idx + 1}</span>
      <div class="slide-thumb-preview" style="background: ${getSlideBgColor(s.background)};">
        <span>${s.name || `Slide ${idx + 1}`}</span>
      </div>
      <div class="slide-thumb-actions">
        <button class="btn-icon-sm" onclick="event.stopPropagation(); duplicateSlideAt(${idx})" title="Duplikasi">📋</button>
        <button class="btn-icon-sm" onclick="event.stopPropagation(); deleteSlideAt(${idx})" title="Hapus">🗑️</button>
      </div>
    </div>
  `).join('');
}

function getSlideBgColor(bgKey) {
  switch (bgKey) {
    case 'maroon': return 'linear-gradient(135deg, #580B0B, #801616)';
    case 'navy': return 'linear-gradient(135deg, #0D1628, #16243E)';
    case 'gold': return 'linear-gradient(135deg, #F3E5AB, #E8C15A)';
    case 'wood': return 'linear-gradient(135deg, #4A2810, #2C1608)';
    default: return '#FDF9F0';
  }
}

function selectSlide(index) {
  AppState.studio.activeSlideIndex = index;
  AppState.studio.selectedElementId = null;
  renderSlideThumbnails();
  renderSlideCanvas();
  renderInspectorProperties();
}

function renderSlideCanvas() {
  const viewport = document.getElementById('slideCanvasViewport');
  if (!viewport) return;

  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  viewport.className = `slide-canvas-viewport bg-${slide.background || 'parchment'}`;

  viewport.innerHTML = (slide.elements || []).map(el => {
    const isSelected = el.id === studio.selectedElementId;
    let innerContent = '';

    if (el.type === 'image') {
      innerContent = `<img src="${el.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit; pointer-events: none;" alt="Gambar Slide">`;
    } else if (el.type === 'card' || el.type === 'hero-card') {
      innerContent = `
        <div style="padding: 1rem; border-radius: 8px; background: ${el.background || '#FFF'}; border: ${el.border || '1px solid #CCC'}; color: ${el.color || '#2C1810'}; pointer-events: none;">
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.35rem;">${el.title || ''}</h4>
          <p style="font-size: 0.85rem; line-height: 1.4; white-space: pre-line;">${el.text || ''}</p>
        </div>
      `;
    } else if (el.type === 'icon') {
      innerContent = `<div style="font-size: ${el.fontSize || '32px'}; pointer-events: none;">${el.text || '⭐'}</div>`;
    } else if (el.type === 'shape') {
      innerContent = `<div style="width: 100%; height: 100%; background: ${el.background || '#C59B27'}; border-radius: ${el.borderRadius || '0px'}; border: ${el.border || 'none'}; pointer-events: none;"></div>`;
    } else {
      innerContent = `<div style="white-space: pre-line; pointer-events: none;">${el.text || ''}</div>`;
    }

    const styleStr = `
      top: ${el.top || '10%'};
      left: ${el.left || '10%'};
      ${el.transform ? `transform: ${el.transform};` : ''}
      ${el.width ? `width: ${el.width};` : ''}
      ${el.height ? `height: ${el.height};` : ''}
      color: ${el.color || 'inherit'};
      font-size: ${el.fontSize || '16px'};
      font-weight: ${el.fontWeight || 'normal'};
      font-family: ${el.fontFamily || 'inherit'};
      text-align: ${el.textAlign || 'left'};
      font-style: ${el.fontStyle || 'normal'};
      border-radius: ${el.borderRadius || '0px'};
    `;

    return `
      <div 
        class="canvas-element ${isSelected ? 'selected' : ''}" 
        id="el-${el.id}" 
        data-el-id="${el.id}"
        style="${styleStr}"
        onmousedown="handleElementMouseDown(event, '${el.id}')"
        ontouchstart="handleElementTouchStart(event, '${el.id}')"
      >
        ${innerContent}
      </div>
    `;
  }).join('');
}

// Drag & Drop pada Kanvas (Mouse & Touch)
function setupCanvasInteractions() {
  const viewport = document.getElementById('slideCanvasViewport');
  if (!viewport) return;

  const handleMove = (clientX, clientY) => {
    const studio = AppState.studio;
    if (!studio.isDragging || !studio.dragElement) return;

    const rect = viewport.getBoundingClientRect();
    const x = clientX - rect.left - studio.dragOffset.x;
    const y = clientY - rect.top - studio.dragOffset.y;

    const percentX = Math.max(0, Math.min(88, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(88, (y / rect.height) * 100));

    studio.dragElement.style.left = `${percentX.toFixed(1)}%`;
    studio.dragElement.style.top = `${percentY.toFixed(1)}%`;
    studio.dragElement.style.transform = 'none';

    const slide = studio.slides[studio.activeSlideIndex];
    if (slide && slide.elements) {
      const elModel = slide.elements.find(el => el.id === studio.selectedElementId);
      if (elModel) {
        elModel.left = `${percentX.toFixed(1)}%`;
        elModel.top = `${percentY.toFixed(1)}%`;
        elModel.transform = '';
      }
    }
  };

  viewport.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
  viewport.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  const stopDrag = () => {
    if (AppState.studio.isDragging) {
      AppState.studio.isDragging = false;
      AppState.studio.dragElement = null;
      renderSlideThumbnails();
    }
  };

  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchend', stopDrag);

  // Klik di area kosong kanvas untuk membatalkan seleksi elemen
  viewport.addEventListener('click', (e) => {
    if (e.target === viewport) {
      AppState.studio.selectedElementId = null;
      document.querySelectorAll('.canvas-element').forEach(el => el.classList.remove('selected'));
      renderInspectorProperties();
    }
  });
}

function handleElementMouseDown(e, elementId) {
  e.stopPropagation();
  const studio = AppState.studio;
  studio.selectedElementId = elementId;
  studio.isDragging = true;

  document.querySelectorAll('.canvas-element').forEach(el => el.classList.remove('selected'));
  const domEl = document.getElementById(`el-${elementId}`);
  if (domEl) {
    domEl.classList.add('selected');
    studio.dragElement = domEl;
    const elRect = domEl.getBoundingClientRect();
    studio.dragOffset = {
      x: e.clientX - elRect.left,
      y: e.clientY - elRect.top
    };
  }

  renderInspectorProperties();
}

function handleElementTouchStart(e, elementId) {
  if (!e.touches || !e.touches[0]) return;
  e.stopPropagation();
  const studio = AppState.studio;
  studio.selectedElementId = elementId;
  studio.isDragging = true;

  document.querySelectorAll('.canvas-element').forEach(el => el.classList.remove('selected'));
  const domEl = document.getElementById(`el-${elementId}`);
  if (domEl) {
    domEl.classList.add('selected');
    studio.dragElement = domEl;
    const elRect = domEl.getBoundingClientRect();
    studio.dragOffset = {
      x: e.touches[0].clientX - elRect.left,
      y: e.touches[0].clientY - elRect.top
    };
  }

  renderInspectorProperties();
}

function renderInspectorProperties() {
  const container = document.getElementById('elementPropertiesContainer');
  if (!container) return;

  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  const selectedEl = slide.elements.find(el => el.id === studio.selectedElementId);

  if (!selectedEl) {
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
        <p>💡 Klik salah satu elemen di dalam kanvas untuk mengedit teks, ukuran, atau warnanya.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="inspector-section">
      <label class="inspector-label">Edit Teks Konten:</label>
      <textarea class="form-textarea" rows="3" oninput="updateActiveElementProp('text', this.value)">${selectedEl.text || ''}</textarea>
    </div>

    ${(selectedEl.type === 'card' || selectedEl.type === 'hero-card') ? `
      <div class="inspector-section">
        <label class="inspector-label">Judul Kartu:</label>
        <input type="text" class="form-input" value="${selectedEl.title || ''}" oninput="updateActiveElementProp('title', this.value)">
      </div>
    ` : ''}

    ${selectedEl.type === 'image' ? `
      <div class="inspector-section">
        <label class="inspector-label">Sumber Gambar (Pilih / Tulis URL):</label>
        <input type="text" class="form-input" value="${selectedEl.src || ''}" oninput="updateActiveElementProp('src', this.value)">
        <div style="display: flex; gap: 0.3rem; margin-top: 0.4rem; flex-wrap: wrap;">
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_diponegoro.jpg')">Diponegoro</button>
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_pattimura.jpg')">Pattimura</button>
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_hasanuddin.jpg')">Hasanuddin</button>
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_cutnyakdhien.jpg')">Cut Nyak</button>
        </div>
      </div>
    ` : ''}

    <div class="inspector-section">
      <label class="inspector-label">Ukuran Teks / Elemen:</label>
      <select class="form-select" onchange="updateActiveElementProp('fontSize', this.value)">
        <option value="14px" ${selectedEl.fontSize === '14px' ? 'selected' : ''}>Kecil (14px)</option>
        <option value="16px" ${selectedEl.fontSize === '16px' ? 'selected' : ''}>Normal (16px)</option>
        <option value="20px" ${selectedEl.fontSize === '20px' ? 'selected' : ''}>Sedang (20px)</option>
        <option value="26px" ${selectedEl.fontSize === '26px' ? 'selected' : ''}>Besar (26px)</option>
        <option value="34px" ${selectedEl.fontSize === '34px' ? 'selected' : ''}>Judul (34px)</option>
        <option value="42px" ${selectedEl.fontSize === '42px' ? 'selected' : ''}>Sangat Besar (42px)</option>
      </select>
    </div>

    <div class="inspector-section">
      <label class="inspector-label">Warna Teks:</label>
      <input type="color" class="form-input" value="${selectedEl.color || '#2C1810'}" style="height: 40px; cursor: pointer;" onchange="updateActiveElementProp('color', this.value)">
    </div>

    ${(selectedEl.type === 'shape' || selectedEl.type === 'card') ? `
      <div class="inspector-section">
        <label class="inspector-label">Warna Background Elemen:</label>
        <input type="color" class="form-input" value="${selectedEl.background || '#FFFFFF'}" style="height: 40px; cursor: pointer;" onchange="updateActiveElementProp('background', this.value)">
      </div>
    ` : ''}

    <div style="margin-top: 1rem;">
      <button class="btn btn-secondary" onclick="deleteSelectedElement()" style="width: 100%; color: var(--danger); border-color: var(--danger);">
        🗑️ Hapus Elemen Ini
      </button>
    </div>
  `;
}

function updateActiveElementProp(prop, val) {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  const el = slide.elements.find(e => e.id === studio.selectedElementId);
  if (el) {
    el[prop] = val;
    renderSlideCanvas();
  }
}

function deleteSelectedElement() {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide || !studio.selectedElementId) return;

  slide.elements = slide.elements.filter(e => e.id !== studio.selectedElementId);
  studio.selectedElementId = null;
  renderSlideCanvas();
  renderInspectorProperties();
}

function changeSlideBackground(bgName) {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (slide) {
    slide.background = bgName;
    renderSlideCanvas();
    renderSlideThumbnails();
  }
}

// Tambah Elemen Lengkap
function addElementToActiveSlide(type) {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  const newId = `el-${Date.now()}`;
  let newEl = null;

  switch (type) {
    case 'title':
      newEl = { id: newId, type: 'title', text: "Judul Materi Sejarah", top: "30%", left: "15%", fontSize: "28px", fontWeight: "800", color: "#3A2010", fontFamily: "'Cinzel', serif" };
      break;
    case 'text':
      newEl = { id: newId, type: 'paragraph', text: "Tuliskan keterangan materi perlawanan di sini secara ringkas dan informatif.", top: "45%", left: "15%", fontSize: "16px", color: "#2C1810", width: "65%" };
      break;
    case 'quote':
      newEl = { id: newId, type: 'quote', text: "\"Kutipan heroisme dan tekad perjuangan pahlawan.\"", top: "65%", left: "15%", fontSize: "16px", fontStyle: "italic", color: "#801616" };
      break;
    case 'badge':
      newEl = { id: newId, type: 'badge', text: "📍 Palagan Pertempuran", top: "18%", left: "15%", fontSize: "13px", color: "#C59B27", fontWeight: "700" };
      break;
    case 'image':
      newEl = { id: newId, type: 'image', src: "assets/portrait_diponegoro.jpg", top: "25%", left: "60%", width: "190px", height: "190px", borderRadius: "10px" };
      break;
    case 'icon':
      newEl = { id: newId, type: 'icon', text: "⚔️", top: "25%", left: "15%", fontSize: "36px" };
      break;
    case 'shape':
      newEl = { id: newId, type: 'shape', top: "40%", left: "15%", width: "200px", height: "80px", background: "#D4AF37", borderRadius: "8px" };
      break;
    case 'timeline-box':
      newEl = { id: newId, type: 'card', title: "Tahun 1825: Pemasangan Patok", text: "Awal meletusnya Perang Jawa Diponegoro di Tegalrejo.", top: "35%", left: "15%", width: "40%", background: "#FFFFFF", border: "2px solid #801616" };
      break;
    case 'map-stamp':
      newEl = { id: newId, type: 'card', title: "📍 Benteng Somba Opu", text: "Pusat pertahanan maritim Kesultanan Gowa di Makassar.", top: "35%", left: "55%", width: "35%", background: "#FFFDF0", border: "2px solid #C59B27" };
      break;
    case 'hero-card':
      newEl = { id: newId, type: 'hero-card', title: "Sultan Baabullah (1570-1583)", text: "Penguasa 72 Pulau yang mengusir penjajah Portugis dari Maluku.", top: "30%", left: "15%", width: "45%", background: "#FFFFFF", border: "2px solid #C59B27" };
      break;
  }

  if (newEl) {
    slide.elements.push(newEl);
    studio.selectedElementId = newId;
    renderSlideCanvas();
    renderInspectorProperties();
  }
}

// 8 Template Slide
function addSlideFromTemplate(tplId) {
  const tpl = HISTORICAL_DATA.slideTemplates.find(t => t.id === tplId) || HISTORICAL_DATA.slideTemplates[0];
  const newSlide = JSON.parse(JSON.stringify(tpl));
  newSlide.name = `${tpl.name} (${AppState.studio.slides.length + 1})`;

  AppState.studio.slides.push(newSlide);
  AppState.studio.activeSlideIndex = AppState.studio.slides.length - 1;
  renderSlideStudio();
}

function duplicateActiveSlide() {
  duplicateSlideAt(AppState.studio.activeSlideIndex);
}

function duplicateSlideAt(index) {
  const studio = AppState.studio;
  const original = studio.slides[index];
  if (!original) return;

  const copy = JSON.parse(JSON.stringify(original));
  copy.name = `${original.name} (Salinan)`;
  studio.slides.splice(index + 1, 0, copy);
  studio.activeSlideIndex = index + 1;
  renderSlideStudio();
}

function deleteActiveSlide() {
  deleteSlideAt(AppState.studio.activeSlideIndex);
}

function deleteSlideAt(index) {
  const studio = AppState.studio;
  if (studio.slides.length <= 1) {
    alert("Minimal harus ada 1 slide presentasi.");
    return;
  }

  if (confirm(`Hapus Slide #${index + 1}?`)) {
    studio.slides.splice(index, 1);
    studio.activeSlideIndex = Math.max(0, index - 1);
    renderSlideStudio();
  }
}

// Multi-Simpanan Materi Guru ("Materi yang dibuat dapat diedit kembali")
async function saveStudioMaterials() {
  const studio = AppState.studio;
  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');

  const presentationData = {
    id: studio.currentId,
    title: studio.title || 'Materi Perlawanan Pribumi',
    date: new Date().toLocaleString('id-ID'),
    slides: studio.slides
  };

  const existingIdx = savedList.findIndex(p => p.id === studio.currentId);
  if (existingIdx >= 0) {
    savedList[existingIdx] = presentationData;
  } else {
    savedList.push(presentationData);
  }

  localStorage.setItem('nusantara_saved_presentations', JSON.stringify(savedList));
  localStorage.setItem('nusantara_active_pres_id', studio.currentId);
  localStorage.setItem('nusantara_slides_data', JSON.stringify(presentationData));

  if (AppState.appsScript.url) {
    try {
      await fetch(AppState.appsScript.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'saveMateri',
          id: presentationData.id,
          title: presentationData.title,
          slides: presentationData.slides
        })
      });
      alert(`✅ Materi "${presentationData.title}" berhasil disimpan di browser dan disinkronkan ke Google Spreadsheet Guru!`);
    } catch (e) {
      alert(`✅ Materi "${presentationData.title}" berhasil disimpan di memori browser!`);
    }
  } else {
    alert(`✅ Materi "${presentationData.title}" berhasil disimpan di browser! Anda dapat membukanya kembali kapan saja.`);
  }
}

function openSavedMaterialsModal() {
  const modal = document.getElementById('savedMaterialsModal');
  const container = document.getElementById('savedMaterialsListContainer');
  if (!modal || !container) return;

  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');

  if (savedList.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted); background: #FFF; border-radius: 8px; border: 1px dashed var(--border-gold);">
        <p>Belum ada materi tersimpan. Klik "Simpan Materi" setelah menyusun slide Anda.</p>
      </div>
    `;
  } else {
    container.innerHTML = savedList.map(item => `
      <div class="saved-materi-item">
        <div>
          <h4 style="color: var(--brown-deep); font-size: 1.05rem; margin-bottom: 0.25rem;">${item.title}</h4>
          <span style="font-size: 0.8rem; color: var(--text-muted);">📄 ${item.slides.length} Slide • ⏳ ${item.date || 'Tersimpan'}</span>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-primary" onclick="loadSavedPresentation('${item.id}')" style="padding: 0.35rem 0.8rem; font-size: 0.82rem;">
            Buka & Edit
          </button>
          <button class="btn btn-secondary" onclick="deleteSavedPresentation('${item.id}')" style="padding: 0.35rem 0.6rem; font-size: 0.82rem; color: var(--danger);">
            🗑️
          </button>
        </div>
      </div>
    `).join('');
  }

  modal.showModal();
}

function loadSavedPresentation(id) {
  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');
  const found = savedList.find(p => p.id === id);
  if (found) {
    AppState.studio.currentId = found.id;
    AppState.studio.title = found.title;
    AppState.studio.slides = found.slides;
    AppState.studio.activeSlideIndex = 0;
    localStorage.setItem('nusantara_active_pres_id', found.id);
    renderSlideStudio();
    document.getElementById('savedMaterialsModal')?.close();
  }
}

function deleteSavedPresentation(id) {
  if (confirm("Hapus dokumen materi tersimpan ini?")) {
    let savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');
    savedList = savedList.filter(p => p.id !== id);
    localStorage.setItem('nusantara_saved_presentations', JSON.stringify(savedList));
    openSavedMaterialsModal();
  }
}

function createNewPresentation() {
  initDefaultSlides();
  renderSlideStudio();
  document.getElementById('savedMaterialsModal')?.close();
}

// Mode Presentasi Layar Penuh
function startPresentationMode() {
  const modal = document.getElementById('presentationModal');
  if (!modal) return;

  AppState.studio.presentationIndex = AppState.studio.activeSlideIndex;
  renderPresentationSlide();

  modal.style.display = 'flex';
  if (typeof modal.showModal === 'function') {
    try {
      modal.showModal();
    } catch (e) {
      modal.setAttribute('open', '');
    }
  } else {
    modal.setAttribute('open', '');
  }

  const keyHandler = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
      nextPresentationSlide();
    } else if (e.key === 'ArrowLeft') {
      prevPresentationSlide();
    } else if (e.key === 'Escape') {
      closePresentationMode();
    }
  };
  window.addEventListener('keydown', keyHandler);

  modal.addEventListener('close', () => {
    closePresentationMode();
    window.removeEventListener('keydown', keyHandler);
  }, { once: true });
}

function closePresentationMode() {
  const modal = document.getElementById('presentationModal');
  if (!modal) return;

  try {
    modal.close();
  } catch (e) {}
  modal.removeAttribute('open');
  modal.style.display = 'none';
}

function renderPresentationSlide() {
  const studio = AppState.studio;
  const slide = studio.slides[studio.presentationIndex];
  const stage = document.getElementById('presentationCanvas');
  const counter = document.getElementById('presentationCounter');

  if (!slide || !stage) return;

  counter.textContent = `Slide ${studio.presentationIndex + 1} dari ${studio.slides.length}`;
  stage.className = `presentation-canvas bg-${slide.background || 'parchment'}`;

  stage.innerHTML = (slide.elements || []).map(el => {
    let innerContent = '';
    if (el.type === 'image') {
      innerContent = `<img src="${el.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;" alt="Slide Image">`;
    } else if (el.type === 'card' || el.type === 'hero-card') {
      innerContent = `
        <div style="padding: 1.25rem; border-radius: 8px; background: ${el.background || '#FFF'}; border: ${el.border || '1px solid #CCC'}; color: ${el.color || '#2C1810'};">
          <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">${el.title || ''}</h4>
          <p style="font-size: 0.98rem; line-height: 1.5; white-space: pre-line;">${el.text || ''}</p>
        </div>
      `;
    } else if (el.type === 'icon') {
      innerContent = `<div style="font-size: ${el.fontSize || '42px'};">${el.text || '⭐'}</div>`;
    } else if (el.type === 'shape') {
      innerContent = `<div style="width: 100%; height: 100%; background: ${el.background || '#C59B27'}; border-radius: ${el.borderRadius || '0px'}; border: ${el.border || 'none'};"></div>`;
    } else {
      innerContent = `<div style="white-space: pre-line;">${el.text || ''}</div>`;
    }

    const styleStr = `
      position: absolute;
      top: ${el.top || '10%'};
      left: ${el.left || '10%'};
      ${el.transform ? `transform: ${el.transform};` : ''}
      ${el.width ? `width: ${el.width};` : ''}
      ${el.height ? `height: ${el.height};` : ''}
      color: ${el.color || 'inherit'};
      font-size: ${el.fontSize || '16px'};
      font-weight: ${el.fontWeight || 'normal'};
      font-family: ${el.fontFamily || 'inherit'};
      text-align: ${el.textAlign || 'left'};
      font-style: ${el.fontStyle || 'normal'};
      border-radius: ${el.borderRadius || '0px'};
    `;

    return `<div style="${styleStr}">${innerContent}</div>`;
  }).join('');
}

function nextPresentationSlide() {
  if (AppState.studio.presentationIndex < AppState.studio.slides.length - 1) {
    AppState.studio.presentationIndex++;
    renderPresentationSlide();
  }
}

function prevPresentationSlide() {
  if (AppState.studio.presentationIndex > 0) {
    AppState.studio.presentationIndex--;
    renderPresentationSlide();
  }
}

// =========================================================================
// 9. PETA SEJARAH INTERAKTIF NUSANTARA & PEMUTAR VIDEO SEJARAH YOUTUBE
// =========================================================================

/**
 * Mengubah berbagai varian URL YouTube menjadi format Embed yang valid
 * Mendukung format:
 * - https://www.youtube.com/watch?v=XXXXX
 * - https://youtu.be/XXXXX
 * - https://www.youtube.com/embed/XXXXX
 * - https://www.youtube.com/shorts/XXXXX
 * - ID 11 karakter langsung
 */
function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  url = url.trim();

  // Jika sudah berupa embed URL
  if (url.includes('youtube.com/embed/')) {
    const cleanId = url.split('youtube.com/embed/')[1].split('?')[0].split('&')[0];
    return `https://www.youtube-nocookie.com/embed/${cleanId}?rel=0`;
  }

  // youtu.be/<id>
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch && shortMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${shortMatch[1]}?rel=0`;
  }

  // watch?v=<id>
  const vMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (vMatch && vMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${vMatch[1]}?rel=0`;
  }

  // shorts/<id>
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}?rel=0`;
  }

  // Jika user memasukkan 11 karakter ID video
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return `https://www.youtube-nocookie.com/embed/${url}?rel=0`;
  }

  return url;
}

function getCustomMapVideos() {
  try {
    return JSON.parse(localStorage.getItem('nusantara_custom_map_videos') || '{}');
  } catch (e) {
    return {};
  }
}

function getPointEffectiveVideo(point) {
  const customMap = getCustomMapVideos();
  const customUrl = customMap[point.id];
  if (customUrl) {
    return {
      url: customUrl,
      isCustom: true
    };
  }
  return {
    url: point.youtubeUrl || '',
    isCustom: false
  };
}

function initInteractiveMap() {
  // Sinkronisasi cache agar link video resmi dari guru langsung aktif
  if (localStorage.getItem('nusantara_map_video_sync') !== '2026-v2') {
    localStorage.removeItem('nusantara_custom_map_videos');
    localStorage.setItem('nusantara_map_video_sync', '2026-v2');
  }

  const container = document.getElementById('mapPinsContainer');
  if (!container) return;

  container.innerHTML = HISTORICAL_DATA.mapPoints.map(point => `
    <div class="map-pin" id="pin-${point.id}" style="left: ${point.coords.x}%; top: ${point.coords.y}%;" onclick="openMapPointDetail('${point.id}')">
      <div class="pin-pulse"></div>
      <div class="pin-core"></div>
      <span class="pin-label">${point.title}</span>
    </div>
  `).join('');

  // Tampilkan titik pertama secara default tanpa auto-scroll
  openMapPointDetail(HISTORICAL_DATA.mapPoints[0].id, false);

  // Pasang listener tombol tutup modal video cinema jika dialog ditutup
  const cinemaModal = document.getElementById('mapVideoModal');
  if (cinemaModal) {
    cinemaModal.addEventListener('close', () => {
      const iframe = document.getElementById('cinemaVideoIframe');
      if (iframe) iframe.src = '';
    });
  }
}

function openMapPointDetail(pointId, shouldScroll = true) {
  const point = HISTORICAL_DATA.mapPoints.find(p => p.id === pointId);
  const drawer = document.getElementById('mapInfoDrawer');
  if (!point || !drawer) return;

  // Highlight Pin Aktif
  document.querySelectorAll('.map-pin').forEach(pin => {
    pin.classList.remove('active');
    const core = pin.querySelector('.pin-core');
    if (core) {
      core.style.background = '#ECC94B';
      core.style.boxShadow = '0 0 10px rgba(236, 201, 75, 0.8)';
    }
  });
  const activePin = document.querySelector(`#pin-${pointId}`);
  if (activePin) {
    activePin.classList.add('active');
    const activePinCore = activePin.querySelector('.pin-core');
    if (activePinCore) {
      activePinCore.style.background = '#801616';
      activePinCore.style.boxShadow = '0 0 16px rgba(236, 201, 75, 1)';
    }
  }

  const videoData = getPointEffectiveVideo(point);
  const embedUrl = getYouTubeEmbedUrl(videoData.url);
  const videoTitle = point.videoTitle || `Sejarah Perjuangan ${point.hero}`;

  drawer.innerHTML = `
    <div>
      <div style="display: flex; gap: 0.6rem; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap;">
        <span class="materi-era-badge voc" style="font-size: 0.78rem;">📍 Titik Palagan Nusantara</span>
        <span style="font-weight: 700; color: var(--gold-dark); font-size: 0.85rem;">⏳ ${point.period}</span>
      </div>

      <div class="map-hero-profile-header">
        <img src="${point.heroImage || 'assets/portrait_diponegoro.jpg'}" alt="${point.hero}" class="map-hero-avatar">
        <div>
          <h3 style="color: var(--brown-deep); font-size: 1.45rem; line-height: 1.25; margin-bottom: 0.25rem;">${point.title}</h3>
          <p style="color: var(--maroon); font-weight: 700; font-size: 0.95rem; margin: 0;">👤 ${point.hero}</p>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Lawan: ${point.enemy}</span>
        </div>
      </div>

      <p style="font-size: 0.93rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${point.summary}</p>
      
      <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-bottom: 1.25rem; background: var(--bg-parchment-light); padding: 0.6rem 0.85rem; border-radius: 6px; border-left: 3px solid var(--gold);">
        🏰 Benteng / Lokasi Kunci: <span style="color: var(--brown-deep);">${point.fortress}</span>
      </div>

      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
        <button class="btn btn-maroon" onclick="openMateriDetail('${point.topicId}')" style="flex: 1; min-width: 170px;">
          📖 Baca Materi Lengkap
        </button>
        <button class="btn btn-secondary" onclick="openMapVideoModal('${point.id}')" style="flex: 1; min-width: 170px;">
          🎬 Layar Penuh (Bioskop)
        </button>
        <button class="btn btn-outline admin-only-item" onclick="openChangeVideoUrlModal('${point.id}')" style="padding: 0.5rem 0.75rem; font-size: 0.82rem;" title="Ubah Link Video YouTube (Khusus Guru)">
          ⚙️ Ganti Video
        </button>
      </div>
    </div>

    <!-- SISI KANAN: PEMUTAR VIDEO SEJARAH YOUTUBE -->
    <div class="map-video-box">
      <div class="map-video-header">
        <span class="map-video-header-title" title="${videoTitle}">
          <span>▶</span> ${videoTitle}
        </span>
        ${videoData.isCustom ? '<span style="font-size: 0.7rem; background: var(--gold); color: #000; padding: 2px 6px; border-radius: 4px; font-weight: 700;">★ Video Kustom Guru</span>' : ''}
      </div>

      <div class="map-video-responsive">
        ${embedUrl ? `
          <iframe 
            src="${embedUrl}" 
            title="${videoTitle}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        ` : `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #94A3B8; text-align: center; padding: 1rem;">
            <p>Video belum tersedia untuk titik ini.</p>
            <button class="btn btn-sm btn-outline-gold admin-only-item" onclick="openChangeVideoUrlModal('${point.id}')">Tambah Link YouTube</button>
          </div>
        `}
      </div>

      <div class="map-video-footer">
        <div style="color: #94A3B8;">
          📹 Video Sejarah Tokoh Perjuangan
        </div>
        <div>
          <a href="${videoData.url}" target="_blank" rel="noopener noreferrer" style="color: var(--gold-light); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.3rem;">
            <span>🔗 Buka di YouTube</span>
          </a>
        </div>
      </div>
    </div>
  `;

  if (shouldScroll) {
    drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * Membuka Modal Bioskop Layar Penuh untuk Video YouTube
 */
function openMapVideoModal(pointId) {
  const point = HISTORICAL_DATA.mapPoints.find(p => p.id === pointId);
  if (!point) return;

  const modal = document.getElementById('mapVideoModal');
  const iframe = document.getElementById('cinemaVideoIframe');
  const title = document.getElementById('mapVideoModalTitle');
  const subtitle = document.getElementById('cinemaVideoSubtitle');
  const source = document.getElementById('cinemaVideoSource');
  const directBtn = document.getElementById('cinemaYoutubeDirectBtn');
  if (!modal || !iframe) return;

  const videoData = getPointEffectiveVideo(point);
  const embedUrl = getYouTubeEmbedUrl(videoData.url);
  const videoTitle = point.videoTitle || `Sejarah Perjuangan ${point.hero}`;

  title.textContent = `🎬 Bioskop: ${point.title}`;
  subtitle.textContent = `${videoTitle} (${point.hero})`;
  source.textContent = `Palagan: ${point.fortress} • Musuh: ${point.enemy} • Periode: ${point.period}`;

  if (directBtn) {
    directBtn.href = videoData.url;
  }

  // Set src iframe dengan autoplay agar langsung berputar saat bioskop dibuka
  iframe.src = embedUrl ? `${embedUrl}&autoplay=1` : '';

  modal.showModal();
}

/**
 * Menutup Modal Bioskop dan mematikan suara video YouTube seketika
 */
function closeMapVideoModal() {
  const modal = document.getElementById('mapVideoModal');
  const iframe = document.getElementById('cinemaVideoIframe');
  if (iframe) {
    iframe.src = ''; // Menghentikan pemutaran audio/video seketika
  }
  if (modal && modal.open) {
    modal.close();
  }
}

/**
 * Membuka Dialog untuk Mengubah URL Video YouTube
 */
function openChangeVideoUrlModal(pointId) {
  if (!AppState.admin || !AppState.admin.isLoggedIn) {
    alert("🔒 Pengaturan video YouTube hanya dapat diakses oleh Guru / Administrator.");
    openAdminLoginModal();
    return;
  }

  const point = HISTORICAL_DATA.mapPoints.find(p => p.id === pointId);
  if (!point) return;

  const modal = document.getElementById('changeVideoUrlModal');
  const heroLabel = document.getElementById('editVideoHeroLabel');
  const pointIdInput = document.getElementById('editVideoPointId');
  const urlInput = document.getElementById('editVideoUrlInput');
  if (!modal) return;

  const videoData = getPointEffectiveVideo(point);

  if (heroLabel) heroLabel.textContent = `Tokoh: ${point.hero} (${point.title})`;
  if (pointIdInput) pointIdInput.value = point.id;
  if (urlInput) urlInput.value = videoData.url;

  modal.showModal();
}

/**
 * Menyimpan URL Video YouTube Kustom ke LocalStorage
 */
function saveCustomVideoUrl() {
  const pointIdInput = document.getElementById('editVideoPointId');
  const urlInput = document.getElementById('editVideoUrlInput');
  const modal = document.getElementById('changeVideoUrlModal');
  if (!pointIdInput || !urlInput) return;

  const pointId = pointIdInput.value;
  const newUrl = urlInput.value.trim();

  if (!newUrl) {
    alert('Mohon masukkan URL video YouTube yang valid.');
    return;
  }

  const embedUrl = getYouTubeEmbedUrl(newUrl);
  if (!embedUrl || (!newUrl.includes('youtube.com') && !newUrl.includes('youtu.be') && newUrl.length !== 11)) {
    alert('Format URL tidak dikenali sebagai link YouTube. Pastikan link berisi youtube.com atau youtu.be.');
    return;
  }

  const customMap = getCustomMapVideos();
  customMap[pointId] = newUrl;
  localStorage.setItem('nusantara_custom_map_videos', JSON.stringify(customMap));

  if (modal) modal.close();
  openMapPointDetail(pointId, false);
  alert('✅ URL Video YouTube berhasil diperbarui!');
}

/**
 * Mereset URL Video YouTube kembali ke bawaan sistem
 */
function resetVideoToDefault() {
  const pointIdInput = document.getElementById('editVideoPointId');
  const modal = document.getElementById('changeVideoUrlModal');
  if (!pointIdInput) return;

  const pointId = pointIdInput.value;
  const customMap = getCustomMapVideos();
  delete customMap[pointId];
  localStorage.setItem('nusantara_custom_map_videos', JSON.stringify(customMap));

  if (modal) modal.close();
  openMapPointDetail(pointId, false);
  alert('🔄 Video telah dikembalikan ke video pembelajaran bawaan.');
}

// =========================================================================
// 10. TIMELINE SEJARAH KRONOLOGIS (DENGAN MODAL DETAIL)
// =========================================================================
function initTimelineView() {
  renderTimelineList('all');

  const filterBtns = document.querySelectorAll('.timeline-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const era = btn.getAttribute('data-era') || 'all';
      renderTimelineList(era);
    });
  });
}

function renderTimelineList(eraFilter = 'all') {
  const container = document.getElementById('timelineNodesContainer');
  if (!container) return;

  let events = HISTORICAL_DATA.timeline;
  if (eraFilter !== 'all') {
    events = events.filter(e => e.era === eraFilter);
  }

  container.innerHTML = events.map((ev, index) => `
    <div class="timeline-node" onclick="openTimelineDetail(${index})">
      <div class="timeline-marker-dot"></div>
      <div class="timeline-card">
        <span class="timeline-year-tag">${ev.year}</span>
        <h4 class="timeline-card-title">${ev.title}</h4>
        <div class="timeline-card-hero">👤 ${ev.hero}</div>
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem;">📍 ${ev.region}</div>
        <p class="timeline-card-desc">${ev.desc}</p>
        <div style="margin-top: 0.75rem; font-size: 0.82rem; font-weight: 700; color: var(--maroon);">
          🔍 Klik untuk detail peristiwa →
        </div>
      </div>
    </div>
  `).join('');
}

// Menampilkan detail kartu timeline sesuai poin #7:
// Tahun, Peristiwa, Tokoh, Wilayah, Penjelasan singkat
function openTimelineDetail(index) {
  const ev = HISTORICAL_DATA.timeline[index];
  const modal = document.getElementById('timelineDetailModal');
  const body = document.getElementById('timelineModalBody');
  const btnMateri = document.getElementById('btnTimelineToMateri');

  if (!ev || !modal || !body) return;

  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="timeline-year-tag" style="font-size: 1rem; padding: 0.35rem 1rem;">Tahun: ${ev.year}</span>
        <span class="materi-era-badge ${ev.era}">${ev.era.toUpperCase()}</span>
      </div>

      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Peristiwa:</div>
        <h3 style="color: var(--brown-deep); font-size: 1.4rem; margin-top: 0.2rem;">${ev.title}</h3>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg-parchment-light); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-gold);">
        <div>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-dark); text-transform: uppercase;">👤 Tokoh:</div>
          <div style="font-weight: 700; color: var(--maroon); margin-top: 0.2rem;">${ev.hero}</div>
        </div>
        <div>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-dark); text-transform: uppercase;">📍 Wilayah:</div>
          <div style="font-weight: 700; color: var(--brown-deep); margin-top: 0.2rem;">${ev.region}</div>
        </div>
      </div>

      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Penjelasan Singkat:</div>
        <p style="font-size: 1rem; color: var(--text-primary); line-height: 1.6; background: #FFF; padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-subtle);">${ev.desc}</p>
      </div>
    </div>
  `;

  if (btnMateri) {
    btnMateri.onclick = () => {
      modal.close();
      if (ev.topicId) {
        openMateriDetail(ev.topicId);
      } else {
        navigateTo('materi');
      }
    };
  }

  modal.showModal();
}

// =========================================================================
// 11. SINKRONISASI GOOGLE APPS SCRIPT
// =========================================================================
function initAppsScriptModal() {
  const modal = document.getElementById('appsScriptModal');
  const openBtn = document.getElementById('btnOpenSyncModal');
  const closeBtn = document.getElementById('btnCloseSyncModal');
  const saveUrlBtn = document.getElementById('btnSaveAppsScriptUrl');
  const testPingBtn = document.getElementById('btnTestAppsScriptPing');
  const inputUrl = document.getElementById('appsScriptUrlInput');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      if (!AppState.admin || !AppState.admin.isLoggedIn) {
        alert("🔒 Pengaturan sinkronisasi Google Sheets dilindungi untuk Guru / Admin.");
        openAdminLoginModal();
        return;
      }
      if (inputUrl) inputUrl.value = AppState.appsScript.url;
      modal.showModal();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  if (saveUrlBtn && inputUrl) {
    saveUrlBtn.addEventListener('click', () => {
      const url = inputUrl.value.trim();
      AppState.appsScript.url = url;
      localStorage.setItem('apps_script_url', url);
      checkAppsScriptStatus();
      alert("✅ URL Google Apps Script disimpan!");
    });
  }

  if (testPingBtn && inputUrl) {
    testPingBtn.addEventListener('click', async () => {
      const url = inputUrl.value.trim();
      const statusEl = document.getElementById('syncPingResult');
      if (!url) {
        alert("Silakan masukkan URL Aplikasi Web Google Apps Script terlebih dahulu.");
        return;
      }

      statusEl.innerHTML = `<span style="color: var(--text-muted);">Sedang menguji koneksi ke Google Spreadsheet...</span>`;

      try {
        const res = await fetch(`${url}?action=ping`);
        const json = await res.json();
        if (json.success) {
          statusEl.innerHTML = `<span style="color: var(--success); font-weight: 700;">✅ Terhubung! Server Google Apps Script Aktif & Terhubung ke Spreadsheet.</span>`;
          AppState.appsScript.isConnected = true;
          updateSyncBadge(true);
        } else {
          statusEl.innerHTML = `<span style="color: var(--danger);">⚠️ Server merespons: ${json.error || 'Gagal'}</span>`;
        }
      } catch (err) {
        statusEl.innerHTML = `<span style="color: #D97706;">ℹ️ URL tersimpan. Pastikan pada Apps Script dipilih "Siapa saja (Anyone)" memiliki akses agar dapat disinkronkan.</span>`;
        AppState.appsScript.isConnected = true;
        updateSyncBadge(true);
      }
    });
  }
}

async function checkAppsScriptStatus() {
  if (!AppState.appsScript.url) {
    updateSyncBadge(false);
    return;
  }

  try {
    const res = await fetch(`${AppState.appsScript.url}?action=ping`);
    const json = await res.json();
    updateSyncBadge(json.success);
  } catch (e) {
    updateSyncBadge(AppState.appsScript.url.length > 25);
  }
}

function updateSyncBadge(isConnected) {
  const dot = document.getElementById('syncStatusDot');
  const text = document.getElementById('syncStatusText');
  if (dot && text) {
    if (isConnected) {
      dot.classList.add('connected');
      text.textContent = 'Google Sheets Aktif';
    } else {
      dot.classList.remove('connected');
      text.textContent = 'Mode Lokal';
    }
  }
}

// =========================================================================
// 12. PENGELOLAAN IDENTITAS SISWA & LOGIN GURU DI AWAL
// =========================================================================
function initStudentProfile() {
  const saved = localStorage.getItem('nusantara_siswa');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data && data.nama) {
        AppState.student = data;
        updateStudentNavBadge();
        return;
      }
    } catch (e) {
      console.warn("Gagal mem-parse data siswa tersimpan:", e);
    }
  }

  // Jika belum ada identitas siswa tersimpan dan bukan guru yang login, tampilkan modal gerbang masuk setelah 600ms
  setTimeout(() => {
    if (!AppState.admin.isLoggedIn) {
      openStudentIdentityModal(true);
    }
  }, 600);
}

function updateStudentNavBadge() {
  const badgeText = document.getElementById('navStudentNameText');
  const btn = document.getElementById('btnStudentProfile');
  if (!badgeText) return;

  if (AppState.admin.isLoggedIn) {
    badgeText.textContent = '👨‍🏫 Guru / Admin';
    if (btn) btn.title = 'Mode Guru Aktif (Akses Penuh Pengeditan)';
    return;
  }

  if (AppState.student && AppState.student.nama) {
    const shortName = AppState.student.nama.split(' ')[0];
    const kelasInfo = AppState.student.kelasLengkap || `${AppState.student.tingkat} ${AppState.student.jurusan}`.trim();
    badgeText.textContent = `${shortName} (${kelasInfo})`;
    if (btn) btn.title = `Profil: ${AppState.student.nama} • ${kelasInfo} (Klik untuk mengubah)`;
  } else {
    badgeText.textContent = 'Isi Identitas Siswa';
    if (btn) btn.title = 'Klik untuk melengkapi/mengubah identitas Anda';
  }
}

function openStudentIdentityModal(isMandatory = false) {
  const modal = document.getElementById('studentIdentityModal');
  const closeBtn = document.getElementById('btnCloseStudentModal');
  if (!modal) return;

  // Buka dalam tab siswa secara default
  switchIdentityRole('siswa');

  const nameInput = document.getElementById('inputStudentFullName');
  const levelSelect = document.getElementById('selectStudentLevel');
  const majorSelect = document.getElementById('selectStudentMajor');
  const rombelSelect = document.getElementById('selectStudentRombel');

  if (nameInput) nameInput.value = AppState.student.nama || '';
  if (levelSelect) levelSelect.value = AppState.student.tingkat || 'XI';
  if (majorSelect) majorSelect.value = AppState.student.jurusan || 'TPM';
  if (rombelSelect) rombelSelect.value = AppState.student.rombel || '1';

  if (closeBtn) {
    closeBtn.style.display = 'block';
  }

  modal.showModal();
}

function closeStudentModalSafe() {
  const modal = document.getElementById('studentIdentityModal');
  if (!modal) return;
  modal.close();
}

function switchIdentityRole(role) {
  const tabSiswa = document.getElementById('tabRoleSiswa');
  const tabGuru = document.getElementById('tabRoleGuru');
  const formSiswa = document.getElementById('studentIdentityForm');
  const formGuru = document.getElementById('guruIdentityLoginForm');
  const title = document.getElementById('studentIdentityTitle');
  const subtitle = document.getElementById('studentIdentitySubtitle');
  const iconBox = document.getElementById('studentIdentityIconBox');
  const errEl = document.getElementById('modalGuruErrorMsg');
  const pwInput = document.getElementById('inputModalGuruPassword');

  if (errEl) {
    errEl.style.display = 'none';
    errEl.textContent = '';
  }
  if (pwInput) pwInput.value = '';

  if (role === 'guru') {
    if (tabSiswa) {
      tabSiswa.classList.remove('active');
      tabSiswa.style.background = 'transparent';
      tabSiswa.style.color = 'var(--text-secondary)';
      tabSiswa.style.boxShadow = 'none';
    }
    if (tabGuru) {
      tabGuru.classList.add('active');
      tabGuru.style.background = 'white';
      tabGuru.style.color = 'var(--maroon)';
      tabGuru.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    if (formSiswa) formSiswa.style.display = 'none';
    if (formGuru) formGuru.style.display = 'block';

    if (title) title.textContent = 'Login Khusus Guru';
    if (subtitle) subtitle.textContent = 'Akses Kelola Materi, Bank Soal, dan Rekap Nilai';
    if (iconBox) {
      iconBox.textContent = '🔐';
      iconBox.style.background = 'rgba(185, 28, 28, 0.25)';
      iconBox.style.borderColor = 'var(--maroon)';
      iconBox.style.color = '#FCA5A5';
    }

    setTimeout(() => {
      if (pwInput) pwInput.focus();
    }, 100);
  } else {
    // Mode Siswa
    if (tabGuru) {
      tabGuru.classList.remove('active');
      tabGuru.style.background = 'transparent';
      tabGuru.style.color = 'var(--text-secondary)';
      tabGuru.style.boxShadow = 'none';
    }
    if (tabSiswa) {
      tabSiswa.classList.add('active');
      tabSiswa.style.background = 'white';
      tabSiswa.style.color = 'var(--brown-deep)';
      tabSiswa.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    if (formGuru) formGuru.style.display = 'none';
    if (formSiswa) formSiswa.style.display = 'block';

    if (title) title.textContent = 'Identitas Siswa';
    if (subtitle) subtitle.textContent = 'Media Pembelajaran Sejarah Nusantara Kelas XI';
    if (iconBox) {
      iconBox.textContent = 'ID';
      iconBox.style.background = 'rgba(212, 175, 55, 0.2)';
      iconBox.style.borderColor = 'var(--gold)';
      iconBox.style.color = 'var(--gold)';
    }

    const nameInput = document.getElementById('inputStudentFullName');
    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 100);
  }
}

function submitModalGuruLogin(event) {
  if (event) event.preventDefault();

  const pwInput = document.getElementById('inputModalGuruPassword');
  const errEl = document.getElementById('modalGuruErrorMsg');
  const modal = document.getElementById('studentIdentityModal');

  const enteredPw = pwInput ? pwInput.value.trim() : '';

  if (enteredPw === AppState.admin.password) {
    AppState.admin.isLoggedIn = true;
    sessionStorage.setItem('nusantara_admin_logged', 'true');
    applyAdminModeUI(true);

    if (modal) modal.close();
    SoundFX.fanfare();

    alert("🎉 Login Guru Berhasil!\n\nSelamat datang, Bapak/Ibu Guru. Mode Guru telah aktif, seluruh menu pengeditan materi, bank soal, dan sinkronisasi spreadsheet nilai telah terbuka.");

    if (AppState.admin.pendingView) {
      const nextView = AppState.admin.pendingView;
      AppState.admin.pendingView = null;
      navigateTo(nextView);
    }
  } else {
    if (errEl) {
      errEl.textContent = 'Sandi guru salah! Silakan coba lagi (Sandi resmi: 010901).';
      errEl.style.display = 'block';
    }
    SoundFX.wrong();
    if (pwInput) pwInput.focus();
  }
}

function saveStudentIdentity(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('inputStudentFullName');
  const levelSelect = document.getElementById('selectStudentLevel');
  const majorSelect = document.getElementById('selectStudentMajor');
  const rombelSelect = document.getElementById('selectStudentRombel');
  const modal = document.getElementById('studentIdentityModal');

  const nama = nameInput ? nameInput.value.trim() : '';
  const tingkat = levelSelect ? levelSelect.value.trim() : 'XI';
  const jurusan = majorSelect ? majorSelect.value.trim() : 'TPM';
  const rombel = rombelSelect ? rombelSelect.value.trim() : '1';

  if (!nama) {
    alert("Silakan masukkan nama lengkap Anda.");
    if (nameInput) nameInput.focus();
    return;
  }

  const kelasLengkap = `${tingkat} ${jurusan} ${rombel}`.trim();

  AppState.student = {
    nama,
    tingkat,
    jurusan,
    rombel,
    kelasLengkap
  };

  localStorage.setItem('nusantara_siswa', JSON.stringify(AppState.student));
  updateStudentNavBadge();

  // Sinkronkan ke formulir kirim nilai kuis
  const quizNameInput = document.getElementById('studentNameInput');
  const quizClassInput = document.getElementById('studentClassInput');
  if (quizNameInput) quizNameInput.value = nama;
  if (quizClassInput) quizClassInput.value = kelasLengkap;

  if (modal) modal.close();
  SoundFX.correct();
}

// =========================================================================
// 13. MODE GURU & KEAMANAN ADMINISTRATOR (PROTEKSI MENU)
// =========================================================================
function initAdminMode() {
  // Pastikan default sandi disesuaikan dengan 010901 jika belum diubah atau masih bawaan sebelumnya
  if (!localStorage.getItem('nusantara_admin_pw') || localStorage.getItem('nusantara_admin_pw') === 'guru123') {
    localStorage.setItem('nusantara_admin_pw', '010901');
    AppState.admin.password = '010901';
  }
  const isLogged = sessionStorage.getItem('nusantara_admin_logged') === 'true';
  AppState.admin.isLoggedIn = isLogged;
  applyAdminModeUI(isLogged);
}

function applyAdminModeUI(isLoggedIn) {
  const btn = document.getElementById('btnAdminMode');
  const lockIcon = document.getElementById('adminLockIcon');
  const btnText = document.getElementById('adminBtnText');

  if (isLoggedIn) {
    document.body.classList.add('is-admin');
    if (btn) btn.classList.add('logged-in');
    if (lockIcon) lockIcon.textContent = '👨‍🏫';
    if (btnText) btnText.textContent = 'Mode Guru (Keluar)';
  } else {
    document.body.classList.remove('is-admin');
    if (btn) btn.classList.remove('logged-in');
    if (lockIcon) lockIcon.textContent = '🔐';
    if (btnText) btnText.textContent = 'Mode Guru';
  }

  updateStudentNavBadge();
}

function handleAdminModeClick() {
  if (AppState.admin.isLoggedIn) {
    const confirmLogout = confirm("Apakah Anda ingin keluar dari Mode Guru dan kembali ke Mode Siswa?");
    if (confirmLogout) {
      AppState.admin.isLoggedIn = false;
      sessionStorage.removeItem('nusantara_admin_logged');
      applyAdminModeUI(false);

      // Jika sedang membuka halaman guru yang terkunci, alihkan ke beranda
      if (AppState.activeView === 'buat-materi' || AppState.activeView === 'edit-kuis') {
        navigateTo('beranda');
      }
    }
  } else {
    openAdminLoginModal();
  }
}

function openAdminLoginModal(targetView = null) {
  AppState.admin.pendingView = targetView;
  const modal = document.getElementById('adminLoginModal');
  const errEl = document.getElementById('adminLoginError');
  const pwInput = document.getElementById('inputAdminPassword');

  if (errEl) {
    errEl.style.display = 'none';
    errEl.textContent = '';
  }
  if (pwInput) pwInput.value = '';

  if (modal) modal.showModal();
}

function submitAdminLogin(event) {
  if (event) event.preventDefault();

  const pwInput = document.getElementById('inputAdminPassword');
  const errEl = document.getElementById('adminLoginError');
  const modal = document.getElementById('adminLoginModal');

  const enteredPw = pwInput ? pwInput.value.trim() : '';

  if (enteredPw === AppState.admin.password) {
    AppState.admin.isLoggedIn = true;
    sessionStorage.setItem('nusantara_admin_logged', 'true');
    applyAdminModeUI(true);

    if (modal) modal.close();
    SoundFX.fanfare();

    if (AppState.admin.pendingView) {
      const nextView = AppState.admin.pendingView;
      AppState.admin.pendingView = null;
      navigateTo(nextView);
    }
  } else {
    if (errEl) {
      errEl.textContent = 'Sandi salah! Silakan periksa kembali sandi guru Anda (Sandi resmi: 010901).';
      errEl.style.display = 'block';
    }
    SoundFX.wrong();
    if (pwInput) pwInput.focus();
  }
}

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}


