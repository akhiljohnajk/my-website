/**
 * Short Film Fest Management System (CineFest 2026)
 * Student: AKHIL JOHN (Regno: CCE25CD011)
 * Modules: 1. User Auth | 2. Film Submission | 3. Evaluation & Voting
 *          4. Event/Screening | 5. Ticket Booking | 6. Feedback & Notification | 7. Admin Dashboard
 */

// Default Seed Data
const DEFAULT_DATA = {
  currentUser: {
    id: "usr_admin",
    name: "Akhil John (Admin)",
    email: "akhil.admin@cinefest.org",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  users: [
    { id: "usr_admin", name: "Akhil John", email: "admin@cinefest.org", role: "admin", password: "admin", regNo: "CCE25CD011" },
    { id: "usr_film1", name: "Elena Rostova", email: "elena@indiefilms.io", role: "filmmaker", password: "pass", bio: "Award-winning sci-fi director based in Berlin." },
    { id: "usr_film2", name: "Marcus Bell", email: "marcus@docuworld.com", role: "filmmaker", password: "pass", bio: "Environmental documentary maker." },
    { id: "usr_judge1", name: "Dr. Christopher Ross", email: "ross.jury@filmacademy.edu", role: "judge", password: "pass", designation: "Head of Film Studies, Columbia" },
    { id: "usr_judge2", name: "Sarah Nolan", email: "sarah.nolan@cinema.org", role: "judge", password: "pass", designation: "Cinematographer & Critic" },
    { id: "usr_viewer1", name: "Alex Rivera", email: "alex@gmail.com", role: "viewer", password: "pass", phone: "+1 555-0192" },
    { id: "usr_viewer2", name: "Sophia Chen", email: "sophia@outlook.com", role: "viewer", password: "pass", phone: "+1 555-0843" }
  ],
  films: [
    {
      id: "film_1",
      title: "Neon Horizon 2049",
      director: "Elena Rostova",
      filmmakerId: "usr_film1",
      genre: "Sci-Fi",
      duration: 22,
      language: "English",
      status: "approved", // pending, approved, rejected
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      synopsis: "In a submerged megacity powered by bioluminescent algae, a memory technician discovers an unauthorized consciousness archived inside a discarded android spine.",
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: "2026-10-14",
      votes: 185,
      screeningsCount: 2,
      averageJudgeScore: 92
    },
    {
      id: "film_2",
      title: "Echoes of Silence",
      director: "Akhil John",
      filmmakerId: "usr_admin",
      genre: "Drama",
      duration: 18,
      language: "English",
      status: "approved",
      poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      synopsis: "An aging lighthouse keeper on a solitary North Atlantic cliff spends his final solstice night conversing with voice recordings left behind by shipwrecks.",
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: "2026-10-18",
      votes: 142,
      screeningsCount: 1,
      averageJudgeScore: 88
    },
    {
      id: "film_3",
      title: "Canvas of Memories",
      director: "Maya Lin",
      filmmakerId: "usr_film1",
      genre: "Animation",
      duration: 12,
      language: "Silent / Orchestral",
      status: "approved",
      poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      synopsis: "A hand-painted watercolor journey exploring a young girl's relationship with her grandfather's fading recollections through dancing brush strokes.",
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: "2026-10-22",
      votes: 210,
      screeningsCount: 2,
      averageJudgeScore: 95
    },
    {
      id: "film_4",
      title: "The Whispering Pines",
      director: "Rahul Varma",
      filmmakerId: "usr_film2",
      genre: "Thriller",
      duration: 16,
      language: "Malayalam (Eng Subtitles)",
      status: "approved",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis: "Deep in the misty Western Ghats, a solo botanical surveyor stumbles across an acoustic anomaly where tree rings replay radio signals from forty years ago.",
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: "2026-10-26",
      votes: 98,
      screeningsCount: 1,
      averageJudgeScore: 84
    },
    {
      id: "film_5",
      title: "Between Two Tides",
      director: "Marcus Bell",
      filmmakerId: "usr_film2",
      genre: "Documentary",
      duration: 25,
      language: "English",
      status: "pending",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      synopsis: "An intimate look at the last remaining artisanal kelp harvesters along Ireland's Atlantic coastline battling modern ocean warming.",
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: "2026-11-02",
      votes: 0,
      screeningsCount: 0,
      averageJudgeScore: null
    },
    {
      id: "film_6",
      title: "The Last Laugh",
      director: "Arjun Nair",
      filmmakerId: "usr_film1",
      genre: "Comedy",
      duration: 14,
      language: "Hindi (Eng Subtitles)",
      status: "pending",
      poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80",
      synopsis: "When a struggling stand-up comedian inherits a supernatural antique microphone that forces the audience to confess their secrets, chaotic hilarity ensues.",
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: "2026-11-04",
      votes: 0,
      screeningsCount: 0,
      averageJudgeScore: null
    }
  ],
  screenings: [
    {
      id: "scr_1",
      filmId: "film_1",
      filmTitle: "Neon Horizon 2049",
      venue: "Grand Cinema Hall A (IMAX Dolby Atmos)",
      cityVenue: "Convention Center, Screen 1",
      date: "2026-11-15",
      time: "18:00 - 19:30",
      ticketPrice: 15,
      totalSeats: 36,
      bookedSeats: ["A3", "A4", "B4", "C5", "D2", "D3", "F6"],
      status: "Scheduled"
    },
    {
      id: "scr_2",
      filmId: "film_3",
      filmTitle: "Canvas of Memories & Echoes of Silence",
      venue: "Red Carpet Pavilion Studio 2",
      cityVenue: "Festival Hub Main Stage",
      date: "2026-11-16",
      time: "15:00 - 16:30",
      ticketPrice: 12,
      totalSeats: 36,
      bookedSeats: ["A1", "A2", "C3", "C4", "E5"],
      status: "Scheduled"
    },
    {
      id: "scr_3",
      filmId: "film_4",
      filmTitle: "The Whispering Pines - Midnight Special",
      venue: "Cinema Paradiso Underground",
      cityVenue: "Old Town Arts Theater",
      date: "2026-11-16",
      time: "21:30 - 23:00",
      ticketPrice: 10,
      totalSeats: 36,
      bookedSeats: ["B2", "B3", "F1", "F2"],
      status: "Scheduled"
    }
  ],
  evaluations: [
    {
      id: "eval_1",
      filmId: "film_1",
      judgeId: "usr_judge1",
      judgeName: "Dr. Christopher Ross",
      storyScore: 18,
      directionScore: 19,
      visualsScore: 20,
      soundScore: 18,
      originalityScore: 17,
      totalScore: 92,
      critique: "Masterful worldbuilding and breathtaking lighting. The narrative pacing in the third act is remarkably tight for a short.",
      timestamp: "2026-10-30 14:20"
    },
    {
      id: "eval_2",
      filmId: "film_3",
      judgeId: "usr_judge2",
      judgeName: "Sarah Nolan",
      storyScore: 20,
      directionScore: 19,
      visualsScore: 19,
      soundScore: 18,
      originalityScore: 19,
      totalScore: 95,
      critique: "Deeply moving watercolor animation. The orchestral score elevates the emotional resonance to international standard.",
      timestamp: "2026-10-31 11:15"
    },
    {
      id: "eval_3",
      filmId: "film_2",
      judgeId: "usr_judge1",
      judgeName: "Dr. Christopher Ross",
      storyScore: 18,
      directionScore: 18,
      visualsScore: 18,
      soundScore: 17,
      originalityScore: 17,
      totalScore: 88,
      critique: "Rich atmospheric study of isolation. Strong performance and evocative sound design.",
      timestamp: "2026-11-01 16:45"
    }
  ],
  bookings: [
    {
      id: "BK-82914",
      screeningId: "scr_1",
      filmTitle: "Neon Horizon 2049",
      venue: "Grand Cinema Hall A (IMAX Dolby Atmos)",
      date: "2026-11-15",
      time: "18:00 - 19:30",
      seats: ["A3", "A4"],
      totalAmount: 30,
      userId: "usr_viewer1",
      userName: "Alex Rivera",
      bookingDate: "2026-11-05 10:30",
      status: "Confirmed"
    },
    {
      id: "BK-93102",
      screeningId: "scr_2",
      filmTitle: "Canvas of Memories & Echoes of Silence",
      venue: "Red Carpet Pavilion Studio 2",
      date: "2026-11-16",
      time: "15:00 - 16:30",
      seats: ["C3", "C4"],
      totalAmount: 24,
      userId: "usr_viewer2",
      userName: "Sophia Chen",
      bookingDate: "2026-11-06 14:15",
      status: "Confirmed"
    }
  ],
  userVotes: {
    "usr_viewer1_film_1": true,
    "usr_viewer2_film_3": true
  },
  feedback: [
    {
      id: "fb_1",
      userId: "usr_viewer1",
      userName: "Alex Rivera",
      rating: 5,
      category: "Screening Experience",
      comment: "Incredible curation of sci-fi films this year! The sound system in Hall A was pristine.",
      date: "2026-11-06"
    },
    {
      id: "fb_2",
      userId: "usr_film2",
      userName: "Marcus Bell",
      rating: 5,
      category: "Festival Organization",
      comment: "Seamless submission workflow and transparent judging rubric. Bravo to Akhil and the organizing team!",
      date: "2026-11-05"
    }
  ],
  notifications: [
    {
      id: "notif_1",
      title: "Official Selection 2026 Revealed!",
      message: "The CineFest selection committee has approved the first batch of competition entries. Check out the screening schedule.",
      date: "2026-11-01",
      badge: "Selection",
      urgent: false
    },
    {
      id: "notif_2",
      title: "Audience Choice Voting Is Live!",
      message: "Viewers can now stream trailers and cast their daily vote for the prestigious CineFest Audience Award.",
      date: "2026-11-05",
      badge: "Voting",
      urgent: true
    },
    {
      id: "notif_3",
      title: "Director Masterclass Announced",
      message: "Join us on Saturday at Red Carpet Lounge for a symposium on modern indie filmmaking and VFX workflow.",
      date: "2026-11-06",
      badge: "Event",
      urgent: false
    }
  ],
  awards: [
    { category: "Best Short Film (Jury Grand Prize)", film: "Canvas of Memories", recipient: "Maya Lin", score: "95 / 100" },
    { category: "Best Sci-Fi & Visual Effects", film: "Neon Horizon 2049", recipient: "Elena Rostova", score: "92 / 100" },
    { category: "Audience Choice Award", film: "Canvas of Memories", recipient: "210 Viewer Votes", score: "1st Place" },
    { category: "Best Screenplay & Sound Design", film: "Echoes of Silence", recipient: "Akhil John", score: "88 / 100" }
  ]
};

// Application State Management
class CineFestStore {
  constructor() {
    this.storageKey = 'cinefest_db_v1';
    this.data = this.loadData();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Storage load error, fallback to defaults", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.error("Storage save error", e);
    }
  }

  resetToDefaults() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.saveData();
  }

  getCurrentUser() {
    return this.data.currentUser;
  }

  setCurrentUser(user) {
    this.data.currentUser = user;
    this.saveData();
  }
}

const store = new CineFestStore();

// App Navigation & UI Controller
const App = {
  currentTab: 'overview',
  activeRole: store.getCurrentUser().role,
  selectedScreeningForBooking: null,
  selectedSeats: [],

  init() {
    this.renderHeader();
    this.renderRoleSwitcher();
    this.navigate('overview');
    this.bindGlobalEvents();
    this.updateNotificationBadge();
  },

  setRole(newRole) {
    let mockUser;
    if (newRole === 'admin') {
      mockUser = store.data.users.find(u => u.role === 'admin') || {
        id: 'usr_admin', name: 'Akhil John', email: 'admin@cinefest.org', role: 'admin'
      };
    } else if (newRole === 'filmmaker') {
      mockUser = store.data.users.find(u => u.role === 'filmmaker') || {
        id: 'usr_film1', name: 'Elena Rostova', email: 'elena@indiefilms.io', role: 'filmmaker'
      };
    } else if (newRole === 'judge') {
      mockUser = store.data.users.find(u => u.role === 'judge') || {
        id: 'usr_judge1', name: 'Dr. Christopher Ross', email: 'ross.jury@filmacademy.edu', role: 'judge'
      };
    } else {
      mockUser = store.data.users.find(u => u.role === 'viewer') || {
        id: 'usr_viewer1', name: 'Alex Rivera', email: 'alex@gmail.com', role: 'viewer'
      };
    }

    store.setCurrentUser(mockUser);
    this.activeRole = newRole;
    this.renderHeader();
    this.renderRoleSwitcher();
    this.showToast(`Switched active persona to ${mockUser.name} (${newRole.toUpperCase()})`, 'info');
    
    // Automatically switch to role-relevant primary tab
    if (newRole === 'admin') this.navigate('dashboard');
    else if (newRole === 'filmmaker') this.navigate('submissions');
    else if (newRole === 'judge') this.navigate('evaluation');
    else this.navigate('films');
  },

  navigate(tabId) {
    this.currentTab = tabId;
    
    // Update active nav styling
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.tab === tabId) {
        link.classList.add('bg-amber-500/20', 'text-amber-400', 'border-amber-500/40');
        link.classList.remove('text-gray-400', 'border-transparent');
      } else {
        link.classList.remove('bg-amber-500/20', 'text-amber-400', 'border-amber-500/40');
        link.classList.add('text-gray-400', 'border-transparent');
      }
    });

    const contentArea = document.getElementById('mainContentArea');
    contentArea.innerHTML = '';

    switch (tabId) {
      case 'overview':
        this.renderOverviewTab(contentArea);
        break;
      case 'dashboard':
        this.renderAdminDashboardTab(contentArea);
        break;
      case 'films':
        this.renderFilmsCatalogTab(contentArea);
        break;
      case 'submissions':
        this.renderFilmSubmissionsTab(contentArea);
        break;
      case 'evaluation':
        this.renderJudgeEvaluationTab(contentArea);
        break;
      case 'screenings':
        this.renderScreeningsTab(contentArea);
        break;
      case 'tickets':
        this.renderTicketBookingTab(contentArea);
        break;
      case 'announcements':
        this.renderAnnouncementsTab(contentArea);
        break;
      case 'feedback':
        this.renderFeedbackTab(contentArea);
        break;
      case 'awards':
        this.renderAwardsTab(contentArea);
        break;
      default:
        this.renderOverviewTab(contentArea);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderHeader() {
    const user = store.getCurrentUser();
    const userDisplay = document.getElementById('headerUserDisplay');
    if (userDisplay) {
      userDisplay.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-black font-bold text-sm shadow-md">
            ${user.name.charAt(0)}
          </div>
          <div class="hidden sm:block text-left text-xs leading-tight">
            <p class="font-bold text-gray-200">${user.name}</p>
            <p class="text-amber-400 uppercase tracking-wider font-semibold text-[11px]">${user.role}</p>
          </div>
        </div>
      `;
    }
  },

  renderRoleSwitcher() {
    const current = store.getCurrentUser().role;
    const container = document.getElementById('roleSwitcherContainer');
    if (!container) return;

    const roles = [
      { id: 'admin', label: 'Admin (Akhil John)', icon: '🛡️', color: 'text-rose-400' },
      { id: 'filmmaker', label: 'Filmmaker', icon: '🎬', color: 'text-amber-400' },
      { id: 'judge', label: 'Judge / Jury', icon: '⚖️', color: 'text-purple-400' },
      { id: 'viewer', label: 'Audience / Viewer', icon: '🍿', color: 'text-sky-400' }
    ];

    container.innerHTML = roles.map(r => `
      <button onclick="App.setRole('${r.id}')" class="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
        current === r.id 
          ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/50' 
          : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
      }">
        <span>${r.icon}</span>
        <span>${r.label}</span>
      </button>
    `).join('');
  },

  updateNotificationBadge() {
    const badge = document.getElementById('notifCountBadge');
    if (badge) {
      badge.textContent = store.data.notifications.length;
    }
  },

  // -------------------------------------------------------------
  // TAB 1: FESTIVAL OVERVIEW / HOMEPAGE
  // -------------------------------------------------------------
  renderOverviewTab(container) {
    const approvedFilms = store.data.films.filter(f => f.status === 'approved');
    const upcomingScreenings = store.data.screenings;

    container.innerHTML = `
      <div class="space-y-10 animate-fade-in">
        <!-- Hero Banner -->
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 p-8 md:p-12 shadow-2xl">
          <div class="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -left-16 -bottom-16 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 max-w-3xl space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Annual Cinema Grand Showcase 2026
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-cinema">
              Short Film Fest <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Management System</span>
            </h1>
            <p class="text-gray-300 text-sm md:text-base leading-relaxed">
              A comprehensive digital portal orchestrating international short film submissions, jury rubrics, audience voting, cinema hall ticket bookings, and real-time festival analytics.
            </p>

            <div class="flex flex-wrap gap-3 pt-3">
              <button onclick="App.navigate('films')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all">
                <span>Explore Films & Vote</span>
                <span>→</span>
              </button>
              <button onclick="App.navigate('tickets')" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 flex items-center gap-2 transition-all">
                <span>🎟️ Book Screening Tickets</span>
              </button>
              <button onclick="App.navigate('submissions')" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-sm border border-amber-500/30 flex items-center gap-2 transition-all">
                <span>🎬 Filmmaker Portal</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 7 Core Modules Showcase Grid -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-bold text-white flex items-center gap-2">
                <span class="text-amber-400 font-cinema">Platform Architecture</span>
                <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">7 Modules Implemented</span>
              </h2>
              <p class="text-xs text-gray-400">Student: AKHIL JOHN | Regno: CCE25CD011</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${[
              { num: "01", name: "User Authentication", desc: "Multi-role RBAC: Admin, Filmmaker, Judge, and Audience viewers.", icon: "🔐", link: "dashboard" },
              { num: "02", name: "Film Submission", desc: "Upload metadata, synopsis, trailers, crew, and admin review queue.", icon: "🎞️", link: "submissions" },
              { num: "03", name: "Evaluation & Voting", desc: "Jury multi-criteria rubrics (out of 100) + Audience live voting.", icon: "⭐", link: "evaluation" },
              { num: "04", name: "Event & Screening", desc: "Manage venues, halls, screening schedules, and time slots.", icon: "📽️", link: "screenings" },
              { num: "05", name: "Ticket Booking", desc: "Interactive seat grid, ticket pass generator, barcode & print pass.", icon: "🎟️", link: "tickets" },
              { num: "06", name: "Feedback & Notif", desc: "Attendee reviews, announcements broadcast, and live results.", icon: "📢", link: "announcements" },
              { num: "07", name: "Admin Dashboard", desc: "Real-time metrics, revenue calculations, charts, and moderation.", icon: "📊", link: "dashboard" },
              { num: "🏆", name: "Festival Awards", desc: "Live winner showcase across Jury Grand Prize & Audience Choice.", icon: "🏆", link: "awards" }
            ].map(m => `
              <div onclick="App.navigate('${m.link}')" class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50 transition-all cursor-pointer group shadow-sm">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-2xl">${m.icon}</span>
                  <span class="font-mono text-xs font-bold text-amber-500/80 group-hover:text-amber-400">${m.num}</span>
                </div>
                <h3 class="text-sm font-bold text-gray-200 group-hover:text-amber-300 mb-1">${m.name}</h3>
                <p class="text-xs text-gray-400 leading-relaxed">${m.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Featured Films Reel -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-white flex items-center gap-2">
              <span>🌟 Official Festival Selections</span>
              <span class="text-xs bg-slate-800 text-gray-300 px-2 py-0.5 rounded-full">${approvedFilms.length} Films</span>
            </h2>
            <button onclick="App.navigate('films')" class="text-xs font-semibold text-amber-400 hover:underline">View All →</button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            ${approvedFilms.slice(0, 4).map(f => this.getFilmCardHtml(f)).join('')}
          </div>
        </div>

        <!-- Upcoming Screenings Quick Row -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-white flex items-center gap-2">
              <span>🎟️ Upcoming Screenings</span>
              <span class="text-xs bg-slate-800 text-gray-300 px-2 py-0.5 rounded-full">${upcomingScreenings.length} Venues</span>
            </h2>
            <button onclick="App.navigate('screenings')" class="text-xs font-semibold text-amber-400 hover:underline">Schedule Calendar →</button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${upcomingScreenings.map(s => `
              <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-semibold">${s.date}</span>
                    <span class="text-gray-400 font-mono">${s.time}</span>
                  </div>
                  <h4 class="font-bold text-white text-sm line-clamp-1">${s.filmTitle}</h4>
                  <p class="text-xs text-gray-400 flex items-center gap-1">
                    <span>📍</span> <span>${s.venue}</span>
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span class="text-amber-400 font-bold text-sm">$${s.ticketPrice} <span class="text-xs text-gray-400 font-normal">/seat</span></span>
                  <button onclick="App.startBooking('${s.id}')" class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-colors">
                    Select Seats
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 2: ADMIN DASHBOARD (MODULE 7)
  // -------------------------------------------------------------
  renderAdminDashboardTab(container) {
    const films = store.data.films;
    const approved = films.filter(f => f.status === 'approved').length;
    const pending = films.filter(f => f.status === 'pending').length;
    const totalVotes = films.reduce((acc, f) => acc + (f.votes || 0), 0);
    const totalBookings = store.data.bookings.length;
    const totalRevenue = store.data.bookings.reduce((acc, b) => acc + (b.totalAmount || 0), 0);
    const totalUsers = store.data.users.length;

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        <!-- Dashboard Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-400 font-mono text-xs font-bold">Admin Central</span>
              <span class="text-xs text-gray-400 font-mono">ID: CCE25CD011</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-extrabold text-white mt-1">Festival Analytics & Oversight</h1>
            <p class="text-xs md:text-sm text-gray-400">Real-time telemetry on film submissions, jury evaluations, audience engagement, and ticketing revenue.</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="App.openNewScreeningModal()" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md">
              <span>➕ Add Screening</span>
            </button>
            <button onclick="App.openBroadcastModal()" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition-all">
              <span>📢 Broadcast Alert</span>
            </button>
            <button onclick="App.resetDataPrompt()" class="px-3 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 font-medium text-xs border border-rose-800/40 transition-all" title="Reset Demo Data">
              <span>🔄 Reset DB</span>
            </button>
          </div>
        </div>

        <!-- Metric Stat Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p class="text-xs text-gray-400 font-medium">Total Films</p>
            <p class="text-2xl font-black text-white mt-1">${films.length}</p>
            <p class="text-[11px] text-amber-400 mt-1">${approved} Approved · ${pending} Pending</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p class="text-xs text-gray-400 font-medium">Pending Review</p>
            <p class="text-2xl font-black text-amber-400 mt-1">${pending}</p>
            <p class="text-[11px] text-gray-400 mt-1">Requires admin approval</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p class="text-xs text-gray-400 font-medium">Audience Votes</p>
            <p class="text-2xl font-black text-sky-400 mt-1">${totalVotes}</p>
            <p class="text-[11px] text-emerald-400 mt-1">↑ Active voting</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p class="text-xs text-gray-400 font-medium">Tickets Sold</p>
            <p class="text-2xl font-black text-purple-400 mt-1">${totalBookings}</p>
            <p class="text-[11px] text-gray-400 mt-1">Across 3 halls</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p class="text-xs text-gray-400 font-medium">Gross Revenue</p>
            <p class="text-2xl font-black text-emerald-400 mt-1">$${totalRevenue}</p>
            <p class="text-[11px] text-gray-400 mt-1">Direct box office</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p class="text-xs text-gray-400 font-medium">Registered Users</p>
            <p class="text-2xl font-black text-indigo-400 mt-1">${totalUsers}</p>
            <p class="text-[11px] text-gray-400 mt-1">All roles active</p>
          </div>
        </div>

        <!-- Moderation Queue (Module 2 Admin Action) -->
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-base font-bold text-white flex items-center gap-2">
                <span>🛡️ Film Submission Moderation Queue</span>
                <span class="text-xs px-2 py-0.5 rounded-full ${pending > 0 ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-gray-400'} font-semibold">
                  ${pending} Awaiting Decision
                </span>
              </h2>
              <p class="text-xs text-gray-400">Admins verify compliance, film content, duration, and copyright declarations before entries enter competition.</p>
            </div>
            <button onclick="App.navigate('submissions')" class="text-xs text-amber-400 hover:underline">Filmmaker Portal →</button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-gray-300">
              <thead class="bg-slate-800/80 text-gray-400 uppercase font-mono text-[11px]">
                <tr>
                  <th class="py-2.5 px-3 rounded-l-lg">Film Title</th>
                  <th class="py-2.5 px-3">Director</th>
                  <th class="py-2.5 px-3">Genre / Time</th>
                  <th class="py-2.5 px-3">Submitted</th>
                  <th class="py-2.5 px-3">Status</th>
                  <th class="py-2.5 px-3 text-right rounded-r-lg">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800">
                ${films.map(f => `
                  <tr class="hover:bg-slate-800/40 transition-colors">
                    <td class="py-3 px-3 font-semibold text-white flex items-center gap-2">
                      <img src="${f.poster}" class="w-8 h-10 object-cover rounded shadow-sm" alt="poster">
                      <span>${f.title}</span>
                    </td>
                    <td class="py-3 px-3">${f.director}</td>
                    <td class="py-3 px-3">${f.genre} · ${f.duration}m</td>
                    <td class="py-3 px-3 font-mono text-gray-400">${f.submittedDate}</td>
                    <td class="py-3 px-3">
                      <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${
                        f.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        f.status === 'pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }">
                        ${f.status.toUpperCase()}
                      </span>
                    </td>
                    <td class="py-3 px-3 text-right space-x-1.5">
                      <button onclick="App.viewFilmDetails('${f.id}')" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-gray-200 text-xs">Preview</button>
                      ${f.status === 'pending' ? `
                        <button onclick="App.setFilmStatus('${f.id}', 'approved')" class="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs">Approve</button>
                        <button onclick="App.setFilmStatus('${f.id}', 'rejected')" class="px-2 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs">Reject</button>
                      ` : `
                        <button onclick="App.setFilmStatus('${f.id}', '${f.status === 'approved' ? 'pending' : 'approved'}')" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-gray-400">
                          Toggle Status
                        </button>
                      `}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Visual Analytics & Charts (Zero dependency SVG/Canvas) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Genre Distribution Chart -->
          <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 class="text-sm font-bold text-white flex items-center justify-between">
              <span>📊 Submissions by Genre</span>
              <span class="text-xs text-gray-400">Breakdown of Entries</span>
            </h3>
            <div class="space-y-3 pt-2">
              ${this.renderGenreBars(films)}
            </div>
          </div>

          <!-- Top Rated Films (Jury Score vs Audience Votes) -->
          <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 class="text-sm font-bold text-white flex items-center justify-between">
              <span>⭐ Jury Evaluation vs Audience Votes</span>
              <span class="text-xs text-amber-400">Live Standings</span>
            </h3>
            <div class="space-y-3 pt-2">
              ${films.filter(f => f.averageJudgeScore).sort((a,b) => b.averageJudgeScore - a.averageJudgeScore).map(f => `
                <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <h4 class="text-xs font-bold text-white">${f.title}</h4>
                    <p class="text-[11px] text-gray-400">Dir. ${f.director} · ${f.genre}</p>
                  </div>
                  <div class="flex items-center gap-4 text-right">
                    <div>
                      <span class="text-xs font-bold text-amber-400">${f.averageJudgeScore}/100</span>
                      <p class="text-[10px] text-gray-400 uppercase font-mono">Jury</p>
                    </div>
                    <div>
                      <span class="text-xs font-bold text-sky-400">${f.votes}</span>
                      <p class="text-[10px] text-gray-400 uppercase font-mono">Votes</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Festival User Management Table -->
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-base font-bold text-white">👥 User Accounts & Access Control (RBAC)</h2>
              <p class="text-xs text-gray-400">Active role assignments across Administrative, Jury, Submitting Filmmakers, and Audience members.</p>
            </div>
            <button onclick="App.openCreateUserModal()" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-gray-200 border border-slate-700">
              ➕ Add User
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            ${store.data.users.map(u => `
              <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between">
                <div>
                  <p class="text-xs font-bold text-white">${u.name}</p>
                  <p class="text-[11px] text-gray-400">${u.email}</p>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  u.role === 'admin' ? 'bg-rose-500/20 text-rose-400' :
                  u.role === 'judge' ? 'bg-purple-500/20 text-purple-400' :
                  u.role === 'filmmaker' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-sky-500/20 text-sky-400'
                }">${u.role}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderGenreBars(films) {
    const counts = {};
    films.forEach(f => {
      counts[f.genre] = (counts[f.genre] || 0) + 1;
    });

    const total = films.length || 1;
    const colors = {
      'Sci-Fi': 'bg-sky-500',
      'Drama': 'bg-amber-500',
      'Animation': 'bg-rose-500',
      'Thriller': 'bg-purple-500',
      'Documentary': 'bg-emerald-500',
      'Comedy': 'bg-teal-500'
    };

    return Object.keys(counts).map(genre => {
      const c = counts[genre];
      const pct = Math.round((c / total) * 100);
      const barColor = colors[genre] || 'bg-amber-500';
      return `
        <div class="space-y-1">
          <div class="flex justify-between text-xs font-semibold">
            <span class="text-gray-300">${genre}</span>
            <span class="text-gray-400">${c} film(s) (${pct}%)</span>
          </div>
          <div class="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
            <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  },

  // -------------------------------------------------------------
  // TAB 3: FILM CATALOG & AUDIENCE VOTING (MODULE 3)
  // -------------------------------------------------------------
  renderFilmsCatalogTab(container) {
    const films = store.data.films.filter(f => f.status === 'approved');
    const user = store.getCurrentUser();

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 class="text-2xl font-bold text-white flex items-center gap-2">
              <span>🎞️ Festival Film Showcase</span>
              <span class="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold font-mono">
                ${films.length} Approved Entries
              </span>
            </h1>
            <p class="text-xs text-gray-400">Stream trailers, review director synopses, and cast your vote for the Audience Choice Award.</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <select id="genreFilterSelect" onchange="App.filterFilmsByGenre()" class="bg-slate-800 border border-slate-700 text-gray-300 text-xs rounded-xl px-3 py-2">
              <option value="ALL">All Genres</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Drama">Drama</option>
              <option value="Animation">Animation</option>
              <option value="Thriller">Thriller</option>
              <option value="Documentary">Documentary</option>
              <option value="Comedy">Comedy</option>
            </select>
            <input type="text" id="filmSearchInput" onkeyup="App.searchFilms()" placeholder="Search title or director..." class="bg-slate-800 border border-slate-700 text-gray-200 text-xs rounded-xl px-3 py-2 w-48">
          </div>
        </div>

        <!-- Audience Choice Live Leaderboard Banner -->
        <div class="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🗳️</span>
            <div>
              <h4 class="text-sm font-bold text-white">Audience Choice Voting Is Live</h4>
              <p class="text-xs text-gray-400">Every ticket holder and registered viewer receives 1 vote per film. Winners receive festival funding!</p>
            </div>
          </div>
          <button onclick="App.navigate('awards')" class="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all whitespace-nowrap">
            View Live Standings →
          </button>
        </div>

        <!-- Films Grid -->
        <div id="filmsGridContainer" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          ${films.map(f => this.getFilmCardHtml(f, true)).join('')}
        </div>
      </div>
    `;
  },

  getFilmCardHtml(f, showVotingControls = true) {
    const user = store.getCurrentUser();
    const voteKey = `${user.id}_${f.id}`;
    const hasVoted = !!store.data.userVotes[voteKey];

    return `
      <div class="film-card group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all">
        <div class="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img src="${f.poster}" alt="${f.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          
          <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-amber-500/30">
            ${f.genre}
          </span>
          <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-gray-300 border border-slate-800">
            ⏱️ ${f.duration}m
          </span>

          <button onclick="App.viewFilmDetails('${f.id}')" class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-amber-500/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            ▶
          </button>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <h3 class="font-bold text-white text-sm line-clamp-1 group-hover:text-amber-300 transition-colors">${f.title}</h3>
            <p class="text-xs text-gray-400 mt-0.5">Dir. ${f.director} · <span class="text-slate-500">${f.language}</span></p>
            <p class="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">${f.synopsis}</p>
          </div>

          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <div class="flex items-center gap-1.5 text-gray-300">
              <span class="text-sky-400">🗳️</span>
              <span class="font-bold font-mono" id="voteCount_${f.id}">${f.votes || 0}</span>
              <span class="text-slate-500 text-[10px]">votes</span>
            </div>

            ${showVotingControls ? `
              <div class="flex items-center gap-1.5">
                <button onclick="App.viewFilmDetails('${f.id}')" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs transition-colors">
                  Details
                </button>
                <button onclick="App.castVote('${f.id}')" class="px-3 py-1 rounded text-xs font-bold transition-all ${
                  hasVoted 
                    ? 'bg-emerald-600 text-white cursor-default' 
                    : 'bg-amber-500 hover:bg-amber-400 text-black shadow-sm'
                }">
                  ${hasVoted ? '✓ Voted' : 'Vote'}
                </button>
              </div>
            ` : `
              <button onclick="App.viewFilmDetails('${f.id}')" class="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs">
                View Film →
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  },

  castVote(filmId) {
    const user = store.getCurrentUser();
    const voteKey = `${user.id}_${filmId}`;

    if (store.data.userVotes[voteKey]) {
      this.showToast('You have already cast your vote for this film!', 'info');
      return;
    }

    const film = store.data.films.find(f => f.id === filmId);
    if (!film) return;

    film.votes = (film.votes || 0) + 1;
    store.data.userVotes[voteKey] = true;
    store.saveData();

    this.showToast(`Vote recorded for "${film.title}"! Thank you for supporting indie cinema.`, 'success');
    this.navigate(this.currentTab);
  },

  // -------------------------------------------------------------
  // TAB 4: FILM SUBMISSION PORTAL (MODULE 2)
  // -------------------------------------------------------------
  renderFilmSubmissionsTab(container) {
    const user = store.getCurrentUser();
    const myFilms = store.data.films.filter(f => f.filmmakerId === user.id || user.role === 'admin');

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-xs font-mono font-semibold">
              <span>Module 2</span> · Filmmaker Portal
            </div>
            <h1 class="text-2xl font-bold text-white mt-1">Film Entry & Submissions</h1>
            <p class="text-xs text-gray-400">Submit new short films to the CineFest 2026 competition and monitor approval status.</p>
          </div>

          <button onclick="App.openSubmissionModal()" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all">
            <span>🎬</span>
            <span>Submit New Short Film</span>
          </button>
        </div>

        <!-- Filmmaker Guidelines / Eligibility Card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span class="text-xl">⏱️</span>
            <h4 class="text-xs font-bold text-white">Runtime Limit</h4>
            <p class="text-[11px] text-gray-400 leading-relaxed">Films must be under 30 minutes including credits. All languages accepted with English subtitles.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span class="text-xl">📜</span>
            <h4 class="text-xs font-bold text-white">Originality & Rights</h4>
            <p class="text-[11px] text-gray-400 leading-relaxed">Music and visual assets must be 100% original or properly licensed. Admin verifies copyright.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span class="text-xl">⚖️</span>
            <h4 class="text-xs font-bold text-white">Jury Evaluation</h4>
            <p class="text-[11px] text-gray-400 leading-relaxed">Approved submissions are scored by a 5-member academy jury across Story, Visuals, and Sound.</p>
          </div>
        </div>

        <!-- My Submissions Tracker -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span>📂 Submitted Films (${myFilms.length})</span>
            <span class="text-xs text-gray-400 font-normal">Active persona submissions</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${myFilms.map(f => `
              <div class="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between">
                <div>
                  <div class="relative aspect-video">
                    <img src="${f.poster}" class="w-full h-full object-cover">
                    <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[11px] font-bold ${
                      f.status === 'approved' ? 'bg-emerald-600 text-white' :
                      f.status === 'pending' ? 'bg-amber-500 text-black' :
                      'bg-rose-600 text-white'
                    }">
                      ${f.status.toUpperCase()}
                    </span>
                  </div>
                  <div class="p-4 space-y-2">
                    <h3 class="font-bold text-white text-base">${f.title}</h3>
                    <p class="text-xs text-gray-400">Dir. ${f.director} · ${f.genre} (${f.duration} mins)</p>
                    <p class="text-xs text-gray-300 line-clamp-3 leading-relaxed">${f.synopsis}</p>
                  </div>
                </div>

                <div class="p-4 pt-2 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between text-xs">
                  <div>
                    <span class="text-gray-400 text-[11px]">Judge Score: </span>
                    <span class="font-bold ${f.averageJudgeScore ? 'text-amber-400' : 'text-gray-500'}">
                      ${f.averageJudgeScore ? f.averageJudgeScore + ' / 100' : 'Under Review'}
                    </span>
                  </div>
                  <button onclick="App.viewFilmDetails('${f.id}')" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-gray-200">
                    View Details
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 5: JUDGE EVALUATION (MODULE 3)
  // -------------------------------------------------------------
  renderJudgeEvaluationTab(container) {
    const user = store.getCurrentUser();
    const approvedFilms = store.data.films.filter(f => f.status === 'approved');

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs font-mono font-semibold">
              <span>Module 3</span> · Jury Room
            </div>
            <h1 class="text-2xl font-bold text-white mt-1">Jury Film Evaluation Rubric</h1>
            <p class="text-xs text-gray-400">Accredited festival judges score films across 5 dimensions (Story, Direction, Visuals, Sound, Originality).</p>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400 font-mono">Current Judge:</span>
            <span class="text-xs font-bold text-purple-300 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded-lg">
              ${user.name}
            </span>
          </div>
        </div>

        <!-- Rubric Explanation Card -->
        <div class="p-4 rounded-xl bg-slate-900 border border-purple-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-3xl">⚖️</span>
            <div>
              <h4 class="text-sm font-bold text-white">Official Scoring Breakdown (Total 100 Points)</h4>
              <p class="text-xs text-gray-400">Story & Script (20pts) · Direction & Acting (20pts) · Cinematography (20pts) · Sound & Editing (20pts) · Originality & Impact (20pts)</p>
            </div>
          </div>
        </div>

        <!-- Films To Evaluate List -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white">Approved Selections Awaiting Jury Critique</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${approvedFilms.map(f => {
              const existingEval = store.data.evaluations.find(e => e.filmId === f.id && e.judgeId === user.id);
              return `
                <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex gap-4">
                  <img src="${f.poster}" class="w-24 h-32 object-cover rounded-xl shadow-md" alt="${f.title}">
                  <div class="flex-1 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-mono text-amber-400">${f.genre}</span>
                        ${existingEval ? `
                          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            Evaluated: ${existingEval.totalScore}/100
                          </span>
                        ` : `
                          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300">
                            Pending Review
                          </span>
                        `}
                      </div>
                      <h3 class="font-bold text-white text-base mt-1">${f.title}</h3>
                      <p class="text-xs text-gray-400">Dir. ${f.director} · ${f.duration} mins</p>
                    </div>

                    <div class="flex items-center gap-2 pt-2">
                      <button onclick="App.openEvaluationModal('${f.id}')" class="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5">
                        <span>📝</span>
                        <span>${existingEval ? 'Edit Evaluation' : 'Score This Film'}</span>
                      </button>
                      <button onclick="App.viewFilmDetails('${f.id}')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs">
                        Watch Trailer
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Recent Jury Evaluations Log -->
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 class="text-sm font-bold text-white">Recent Jury Scores & Qualitative Critiques</h3>
          <div class="space-y-3">
            ${store.data.evaluations.map(e => {
              const film = store.data.films.find(f => f.id === e.filmId);
              return `
                <div class="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-xs font-bold text-white">${film ? film.title : 'Film'}</span>
                      <span class="text-xs text-gray-400">evaluated by <span class="text-purple-300 font-semibold">${e.judgeName}</span></span>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-lg bg-purple-950 text-purple-300 border border-purple-700 text-xs font-mono font-bold">
                      ${e.totalScore} / 100
                    </span>
                  </div>
                  <p class="text-xs text-gray-300 italic">"${e.critique}"</p>
                  <div class="flex flex-wrap gap-3 text-[11px] text-gray-400 font-mono pt-1">
                    <span>Story: ${e.storyScore}/20</span>
                    <span>Direction: ${e.directionScore}/20</span>
                    <span>Visuals: ${e.visualsScore}/20</span>
                    <span>Sound: ${e.soundScore}/20</span>
                    <span>Originality: ${e.originalityScore}/20</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 6: EVENT & SCREENING MANAGEMENT (MODULE 4)
  // -------------------------------------------------------------
  renderScreeningsTab(container) {
    const screenings = store.data.screenings;
    const user = store.getCurrentUser();

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 text-xs font-mono font-semibold">
              <span>Module 4</span> · Screenings & Venues
            </div>
            <h1 class="text-2xl font-bold text-white mt-1">Festival Screening Schedules</h1>
            <p class="text-xs text-gray-400">Timetable of premiere shows across main festival halls, Q&A sessions, and midnight screenings.</p>
          </div>

          ${user.role === 'admin' ? `
            <button onclick="App.openNewScreeningModal()" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20">
              <span>➕</span>
              <span>Schedule New Screening</span>
            </button>
          ` : ''}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${screenings.map(s => {
            const film = store.data.films.find(f => f.id === s.filmId);
            const bookedCount = s.bookedSeats ? s.bookedSeats.length : 0;
            const availableSeats = s.totalSeats - bookedCount;

            return `
              <div class="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all">
                <div class="relative aspect-video">
                  <img src="${film ? film.poster : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba'}" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold font-mono">
                    ${s.date}
                  </span>
                  <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-emerald-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold">
                    $${s.ticketPrice} USD
                  </span>
                </div>

                <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div class="space-y-1.5">
                    <h3 class="font-bold text-white text-base">${s.filmTitle}</h3>
                    <p class="text-xs text-sky-400 flex items-center gap-1">
                      <span>🏛️</span> <span>${s.venue}</span>
                    </p>
                    <p class="text-xs text-gray-400 flex items-center gap-1">
                      <span>⏰</span> <span>${s.time}</span>
                    </p>
                  </div>

                  <div class="pt-3 border-t border-slate-800/80 space-y-2">
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-gray-400">Available Capacity:</span>
                      <span class="font-bold font-mono ${availableSeats > 5 ? 'text-emerald-400' : 'text-rose-400'}">
                        ${availableSeats} / ${s.totalSeats} seats
                      </span>
                    </div>

                    <button onclick="App.startBooking('${s.id}')" class="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md">
                      <span>🎟️</span>
                      <span>Reserve Seats & Book Ticket</span>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 7: TICKET BOOKING & PASSES (MODULE 5)
  // -------------------------------------------------------------
  renderTicketBookingTab(container) {
    const user = store.getCurrentUser();
    const myBookings = store.data.bookings.filter(b => b.userId === user.id || user.role === 'admin');

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold">
              <span>Module 5</span> · Ticket Box Office
            </div>
            <h1 class="text-2xl font-bold text-white mt-1">Ticket Reservations & Digital Passes</h1>
            <p class="text-xs text-gray-400">Select seats via interactive hall map, view your confirmed festival passes, and generate print passes with barcodes.</p>
          </div>

          <button onclick="App.navigate('screenings')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700">
            Browse All Screenings →
          </button>
        </div>

        <!-- Confirmed Tickets List -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎟️ Your Festival Passes (${myBookings.length})</span>
          </h2>

          ${myBookings.length === 0 ? `
            <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
              <span class="text-4xl">🎟️</span>
              <h3 class="text-base font-bold text-white">No Tickets Booked Yet</h3>
              <p class="text-xs text-gray-400 max-w-md mx-auto">Explore upcoming premiere screenings and choose your preferred cinema hall seats.</p>
              <button onclick="App.navigate('screenings')" class="px-4 py-2 rounded-xl bg-amber-500 text-black font-bold text-xs">
                View Screening Schedule
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              ${myBookings.map(b => `
                <div class="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4 shadow-xl">
                  <div class="flex items-start justify-between">
                    <div>
                      <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold">
                        ${b.status}
                      </span>
                      <h3 class="font-bold text-white text-base mt-2">${b.filmTitle}</h3>
                      <p class="text-xs text-sky-400 font-medium">📍 ${b.venue}</p>
                    </div>
                    <div class="text-right">
                      <span class="text-xs font-mono text-gray-400">PASS ID</span>
                      <p class="text-sm font-mono font-bold text-amber-400">${b.id}</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs">
                    <div>
                      <span class="text-gray-400 text-[10px] uppercase font-mono">Date</span>
                      <p class="font-bold text-white">${b.date}</p>
                    </div>
                    <div>
                      <span class="text-gray-400 text-[10px] uppercase font-mono">Time</span>
                      <p class="font-bold text-white">${b.time}</p>
                    </div>
                    <div>
                      <span class="text-gray-400 text-[10px] uppercase font-mono">Seats (${b.seats.length})</span>
                      <p class="font-bold text-amber-400 font-mono">${b.seats.join(', ')}</p>
                    </div>
                  </div>

                  <!-- Simulated Barcode & Actions -->
                  <div class="flex items-center justify-between pt-2 border-t border-slate-800">
                    <div class="space-y-0.5">
                      <div class="h-6 w-32 bg-repeat-x bg-[linear-gradient(to_right,#fff_2px,transparent_2px,#fff_5px,transparent_7px,#fff_10px,transparent_11px)] opacity-80"></div>
                      <p class="text-[9px] font-mono text-gray-500">CINEFEST-SCAN-SECURE-2026</p>
                    </div>
                    <button onclick="App.showPrintableTicketModal('${b.id}')" class="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-sm">
                      Print / View Pass
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 8: ANNOUNCEMENTS & NOTIFICATIONS (MODULE 6)
  // -------------------------------------------------------------
  renderAnnouncementsTab(container) {
    const user = store.getCurrentUser();
    const notifs = store.data.notifications;

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-xs font-mono font-semibold">
              <span>Module 6</span> · Broadcasts & News
            </div>
            <h1 class="text-2xl font-bold text-white mt-1">Official Festival Announcements</h1>
            <p class="text-xs text-gray-400">Live notices from the festival directorate regarding competition rounds, workshops, and schedule revisions.</p>
          </div>

          ${user.role === 'admin' ? `
            <button onclick="App.openBroadcastModal()" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2">
              <span>📢 Post Announcement</span>
            </button>
          ` : ''}
        </div>

        <div class="space-y-4 max-w-3xl">
          ${notifs.map(n => `
            <div class="p-5 rounded-2xl bg-slate-900 border ${n.urgent ? 'border-rose-500/50 bg-rose-950/10' : 'border-slate-800'} space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  n.urgent ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-300'
                }">
                  ${n.badge || 'Notice'}
                </span>
                <span class="text-xs font-mono text-gray-500">${n.date}</span>
              </div>
              <h3 class="text-base font-bold text-white">${n.title}</h3>
              <p class="text-xs text-gray-300 leading-relaxed">${n.message}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 9: ATTENDEE FEEDBACK (MODULE 6)
  // -------------------------------------------------------------
  renderFeedbackTab(container) {
    const feedbackList = store.data.feedback;

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in max-w-4xl">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold">
              <span>Module 6</span> · Audience Feedback
            </div>
            <h1 class="text-2xl font-bold text-white mt-1">Festival Experience Feedback</h1>
            <p class="text-xs text-gray-400">Share your festival ratings, screening quality reviews, and recommendations for future editions.</p>
          </div>
        </div>

        <!-- Submit Feedback Form -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-base font-bold text-white">Submit Your Review</h3>
          
          <form id="feedbackForm" onsubmit="App.handleFeedbackSubmit(event)" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Feedback Category</label>
                <select id="fbCategory" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
                  <option value="Screening Experience">Screening & Audio-Visual Experience</option>
                  <option value="Festival Organization">Festival Organization & Venue Staff</option>
                  <option value="Film Curation">Film Selection & Variety</option>
                  <option value="Ticketing & App">Ticketing Portal & Web Experience</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Rating</label>
                <select id="fbRating" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-amber-400 font-bold">
                  <option value="5">⭐⭐⭐⭐⭐ 5 Stars (Exceptional)</option>
                  <option value="4">⭐⭐⭐⭐ 4 Stars (Very Good)</option>
                  <option value="3">⭐⭐⭐ 3 Stars (Satisfactory)</option>
                  <option value="2">⭐⭐ 2 Stars (Needs Improvement)</option>
                  <option value="1">⭐ 1 Star (Unsatisfactory)</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Your Detailed Comments</label>
              <textarea id="fbComment" rows="3" required placeholder="Write your thoughts on the festival..." class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-gray-500"></textarea>
            </div>

            <button type="submit" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-all shadow-md">
              Submit Festival Feedback
            </button>
          </form>
        </div>

        <!-- Community Feedback Feed -->
        <div class="space-y-3">
          <h3 class="text-sm font-bold text-white">Attendee Impressions</h3>
          <div class="space-y-3">
            ${feedbackList.map(f => `
              <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white">${f.userName}</span>
                  <span class="text-amber-400 text-xs font-mono">★ ${f.rating} / 5</span>
                </div>
                <span class="inline-block px-2 py-0.5 rounded bg-slate-800 text-[10px] text-gray-400 font-medium">${f.category}</span>
                <p class="text-xs text-gray-300 leading-relaxed mt-1">"${f.comment}"</p>
                <p class="text-[10px] text-gray-500 font-mono">${f.date}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  handleFeedbackSubmit(e) {
    e.preventDefault();
    const user = store.getCurrentUser();
    const category = document.getElementById('fbCategory').value;
    const rating = parseInt(document.getElementById('fbRating').value, 10);
    const comment = document.getElementById('fbComment').value;

    const newFb = {
      id: "fb_" + Date.now(),
      userId: user.id,
      userName: user.name,
      rating,
      category,
      comment,
      date: new Date().toISOString().split('T')[0]
    };

    store.data.feedback.unshift(newFb);
    store.saveData();
    this.showToast('Thank you! Your feedback has been submitted.', 'success');
    this.navigate('feedback');
  },

  // -------------------------------------------------------------
  // TAB 10: AWARDS & WINNER ANNOUNCEMENTS
  // -------------------------------------------------------------
  renderAwardsTab(container) {
    const awards = store.data.awards;
    const user = store.getCurrentUser();

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in max-w-4xl">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-xs font-mono font-semibold">
              <span>Festival Honors</span> · Grand Finale
            </div>
            <h1 class="text-2xl font-bold text-white mt-1">CineFest 2026 Laurels & Awards</h1>
            <p class="text-xs text-gray-400">Official accolades awarded by the Grand Jury and the global voting audience.</p>
          </div>

          ${user.role === 'admin' ? `
            <button onclick="App.openNewAwardModal()" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2">
              <span>🏆 Announce New Award</span>
            </button>
          ` : ''}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${awards.map((a, i) => `
            <div class="p-6 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-900 border border-amber-500/30 space-y-3 relative overflow-hidden shadow-xl">
              <div class="absolute -right-6 -bottom-6 text-7xl opacity-10">🏆</div>
              
              <div class="flex items-center justify-between">
                <span class="text-2xl">${i === 0 ? '🥇' : i === 1 ? '🥈' : '🎖️'}</span>
                <span class="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30">
                  ${a.score}
                </span>
              </div>

              <div>
                <p class="text-xs font-semibold text-amber-400 uppercase tracking-wider">${a.category}</p>
                <h3 class="text-lg font-bold text-white mt-1">${a.film}</h3>
                <p class="text-xs text-gray-300 mt-1">Awarded to: <span class="font-semibold text-white">${a.recipient}</span></p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // INTERACTIVE MODALS & WORKFLOWS
  // -------------------------------------------------------------

  // 1. Film Submission Modal (Module 2)
  openSubmissionModal() {
    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 class="text-base font-bold text-white">Submit New Short Film</h3>
              <p class="text-xs text-gray-400">Complete required metadata for festival competition entry.</p>
            </div>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white text-lg">✕</button>
          </div>

          <form id="filmSubmissionForm" onsubmit="App.handleFilmSubmit(event)" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Film Title *</label>
              <input type="text" id="subTitle" required placeholder="e.g. Whispers of the City" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Director Name *</label>
                <input type="text" id="subDirector" required value="${store.getCurrentUser().name}" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Primary Genre *</label>
                <select id="subGenre" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
                  <option value="Drama">Drama</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Animation">Animation</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Comedy">Comedy</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Runtime (minutes) *</label>
                <input type="number" id="subDuration" required min="1" max="45" value="15" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Language *</label>
                <input type="text" id="subLanguage" required placeholder="e.g. English, Malayalam..." value="English" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Poster Image URL (or Unsplash URL)</label>
              <input type="url" id="subPoster" placeholder="https://images.unsplash.com/..." value="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Logline / Synopsis *</label>
              <textarea id="subSynopsis" rows="3" required placeholder="A brief 2-3 sentence overview of the plot and themes..." class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white"></textarea>
            </div>

            <div class="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button type="button" onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-gray-300">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs">Submit Entry</button>
            </div>
          </form>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  handleFilmSubmit(e) {
    e.preventDefault();
    const user = store.getCurrentUser();
    const title = document.getElementById('subTitle').value;
    const director = document.getElementById('subDirector').value;
    const genre = document.getElementById('subGenre').value;
    const duration = parseInt(document.getElementById('subDuration').value, 10);
    const language = document.getElementById('subLanguage').value;
    const poster = document.getElementById('subPoster').value || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80";
    const synopsis = document.getElementById('subSynopsis').value;

    const newFilm = {
      id: "film_" + Date.now(),
      title,
      director,
      filmmakerId: user.id,
      genre,
      duration,
      language,
      status: "pending", // Default awaiting admin approval
      poster,
      synopsis,
      trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      submittedDate: new Date().toISOString().split('T')[0],
      votes: 0,
      screeningsCount: 0,
      averageJudgeScore: null
    };

    store.data.films.unshift(newFilm);
    store.saveData();
    this.closeModal();
    this.showToast(`Film "${title}" successfully submitted! Awaiting Admin review.`, 'success');
    this.navigate('submissions');
  },

  // 2. Interactive Seat Selection & Ticket Booking (Module 5)
  startBooking(screeningId) {
    const screening = store.data.screenings.find(s => s.id === screeningId);
    if (!screening) return;

    this.selectedScreeningForBooking = screening;
    this.selectedSeats = [];

    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seatsPerRow = 6;
    const booked = screening.bookedSeats || [];

    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-6 shadow-2xl max-h-[95vh] overflow-y-auto">
          <!-- Header -->
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span class="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-xs font-bold">Interactive Seat Map</span>
              <h3 class="text-lg font-bold text-white mt-1">${screening.filmTitle}</h3>
              <p class="text-xs text-gray-400">${screening.venue} · ${screening.date} (${screening.time})</p>
            </div>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white text-xl">✕</button>
          </div>

          <!-- Cinema Screen Graphic -->
          <div class="space-y-2 text-center">
            <div class="cinema-screen max-w-md mx-auto"></div>
            <p class="text-[11px] font-mono text-gray-400 uppercase tracking-widest">Cinema Hall Screen (Stage Front)</p>
          </div>

          <!-- Seat Grid -->
          <div class="py-4 px-2 bg-slate-950/60 rounded-2xl border border-slate-800/80 flex flex-col items-center gap-3">
            ${rows.map(row => `
              <div class="flex items-center gap-2">
                <span class="w-5 text-right font-mono text-xs font-bold text-gray-500">${row}</span>
                <div class="flex gap-2">
                  ${Array.from({ length: seatsPerRow }, (_, i) => {
                    const seatNum = `${row}${i + 1}`;
                    const isBooked = booked.includes(seatNum);
                    const isVIP = row === 'A' || row === 'B';
                    return `
                      <div 
                        id="seat_${seatNum}"
                        onclick="${isBooked ? '' : `App.toggleSeatSelection('${seatNum}')`}"
                        class="seat ${isBooked ? 'booked' : 'available'} ${isVIP ? 'vip' : ''}"
                        title="Seat ${seatNum} ${isVIP ? '(VIP Front Row)' : '(Standard)'}"
                      >
                        ${seatNum}
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `).join('')}

            <!-- Legend -->
            <div class="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-800/60 text-xs text-gray-400">
              <div class="flex items-center gap-1.5"><div class="seat available" style="width:16px;height:16px;"></div> Available</div>
              <div class="flex items-center gap-1.5"><div class="seat selected" style="width:16px;height:16px;"></div> Selected</div>
              <div class="flex items-center gap-1.5"><div class="seat booked" style="width:16px;height:16px;"></div> Booked</div>
              <div class="flex items-center gap-1.5"><div class="seat available vip" style="width:16px;height:16px;"></div> VIP Tier</div>
            </div>
          </div>

          <!-- Pricing & Checkout Panel -->
          <div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p class="text-xs text-gray-400">Selected Seats: <span id="selectedSeatsDisplay" class="font-bold text-amber-400 font-mono">None</span></p>
              <p class="text-sm font-bold text-white mt-0.5">Total Amount: <span id="totalPriceDisplay" class="text-emerald-400 font-mono">$0 USD</span></p>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-gray-300">
                Cancel
              </button>
              <button id="confirmBookingBtn" onclick="App.confirmBooking()" disabled class="px-5 py-2.5 rounded-xl bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-400 text-black font-bold text-xs transition-all shadow-lg">
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  toggleSeatSelection(seatNum) {
    const seatEl = document.getElementById(`seat_${seatNum}`);
    if (!seatEl) return;

    const idx = this.selectedSeats.indexOf(seatNum);
    if (idx > -1) {
      this.selectedSeats.splice(idx, 1);
      seatEl.classList.remove('selected');
      seatEl.classList.add('available');
    } else {
      this.selectedSeats.push(seatNum);
      seatEl.classList.remove('available');
      seatEl.classList.add('selected');
    }

    const price = this.selectedScreeningForBooking.ticketPrice || 12;
    const total = this.selectedSeats.length * price;

    const seatsDisplay = document.getElementById('selectedSeatsDisplay');
    const priceDisplay = document.getElementById('totalPriceDisplay');
    const confirmBtn = document.getElementById('confirmBookingBtn');

    if (seatsDisplay) seatsDisplay.textContent = this.selectedSeats.length > 0 ? this.selectedSeats.join(', ') : 'None';
    if (priceDisplay) priceDisplay.textContent = `$${total} USD`;
    if (confirmBtn) confirmBtn.disabled = this.selectedSeats.length === 0;
  },

  confirmBooking() {
    if (!this.selectedScreeningForBooking || this.selectedSeats.length === 0) return;

    const user = store.getCurrentUser();
    const screening = this.selectedScreeningForBooking;
    const totalAmount = this.selectedSeats.length * (screening.ticketPrice || 12);
    const bookingId = "BK-" + Math.floor(10000 + Math.random() * 90000);

    const newBooking = {
      id: bookingId,
      screeningId: screening.id,
      filmTitle: screening.filmTitle,
      venue: screening.venue,
      date: screening.date,
      time: screening.time,
      seats: [...this.selectedSeats],
      totalAmount,
      userId: user.id,
      userName: user.name,
      bookingDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: "Confirmed"
    };

    // Update screening booked list
    screening.bookedSeats = screening.bookedSeats || [];
    screening.bookedSeats.push(...this.selectedSeats);

    store.data.bookings.unshift(newBooking);
    store.saveData();

    this.closeModal();
    this.showPrintableTicketModal(bookingId);
    this.showToast(`Booking ${bookingId} confirmed successfully!`, 'success');
  },

  // 3. Digital Ticket Pass & Print Modal
  showPrintableTicketModal(bookingId) {
    const booking = store.data.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 space-y-6 shadow-2xl">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <span>🎟️ Official Digital Festival Pass</span>
            </h3>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white text-lg">✕</button>
          </div>

          <!-- Printable Ticket Card Container -->
          <div id="printableTicket" class="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border-2 border-amber-500/40 text-white space-y-5 relative shadow-2xl">
            <div class="flex items-start justify-between">
              <div>
                <p class="text-[10px] font-mono tracking-widest text-amber-400 uppercase">CineFest 2026 Pass</p>
                <h2 class="text-xl font-bold font-cinema text-white">${booking.filmTitle}</h2>
                <p class="text-xs text-sky-400 font-medium">📍 ${booking.venue}</p>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-mono text-gray-400">BOOKING REF</span>
                <p class="text-base font-bold font-mono text-amber-400">${booking.id}</p>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-2 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
              <div>
                <span class="text-[10px] text-gray-400 font-mono">DATE</span>
                <p class="font-bold text-white">${booking.date}</p>
              </div>
              <div>
                <span class="text-[10px] text-gray-400 font-mono">TIME</span>
                <p class="font-bold text-white">${booking.time}</p>
              </div>
              <div>
                <span class="text-[10px] text-gray-400 font-mono">SEATS</span>
                <p class="font-bold text-amber-400 font-mono">${booking.seats.join(', ')}</p>
              </div>
              <div>
                <span class="text-[10px] text-gray-400 font-mono">PRICE</span>
                <p class="font-bold text-emerald-400 font-mono">$${booking.totalAmount}</p>
              </div>
            </div>

            <div class="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-gray-400">
              <div>
                <p class="font-bold text-white">${booking.userName}</p>
                <p class="text-[10px] text-gray-400 font-mono">Admit ${booking.seats.length} Person(s)</p>
              </div>
              <div class="text-right font-mono text-[9px] text-gray-500">
                <div class="h-8 w-36 bg-repeat-x bg-[linear-gradient(to_right,#fff_2px,transparent_2px,#fff_6px,transparent_8px,#fff_12px,transparent_13px)] opacity-90 ml-auto"></div>
                VALID FOR ONE ENTRY
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-2 pt-2">
            <button onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-xs text-gray-300">Close</button>
            <button onclick="window.print()" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-md">
              <span>🖨️</span>
              <span>Print Pass / PDF</span>
            </button>
          </div>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  // 4. Judge Scoring Modal (Module 3)
  openEvaluationModal(filmId) {
    const film = store.data.films.find(f => f.id === filmId);
    if (!film) return;

    const user = store.getCurrentUser();
    const existing = store.data.evaluations.find(e => e.filmId === filmId && e.judgeId === user.id) || {
      storyScore: 18, directionScore: 18, visualsScore: 18, soundScore: 18, originalityScore: 18, critique: ""
    };

    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs font-mono font-bold">Jury Evaluation Sheet</span>
              <h3 class="text-base font-bold text-white mt-1">${film.title}</h3>
              <p class="text-xs text-gray-400">Dir. ${film.director} · ${film.genre} (${film.duration}m)</p>
            </div>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white text-lg">✕</button>
          </div>

          <form onsubmit="App.handleEvaluationSubmit(event, '${film.id}')" class="space-y-4">
            <div class="space-y-3">
              ${[
                { id: 'evalStory', label: '1. Story & Screenplay Structure (max 20)', val: existing.storyScore },
                { id: 'evalDirection', label: '2. Direction, Casting & Performances (max 20)', val: existing.directionScore },
                { id: 'evalVisuals', label: '3. Cinematography, Color Grading & VFX (max 20)', val: existing.visualsScore },
                { id: 'evalSound', label: '4. Sound Design, Music & Mixing (max 20)', val: existing.soundScore },
                { id: 'evalOriginality', label: '5. Originality, Artistic Voice & Impact (max 20)', val: existing.originalityScore }
              ].map(c => `
                <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                  <label class="text-xs font-medium text-gray-200">${c.label}</label>
                  <input type="number" id="${c.id}" min="0" max="20" required value="${c.val}" oninput="App.calculateRubricTotal()" class="w-16 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-amber-400 font-bold text-center">
                </div>
              `).join('')}
            </div>

            <!-- Total Score Banner -->
            <div class="p-4 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-center justify-between">
              <span class="text-xs font-bold text-purple-300">Composite Jury Score:</span>
              <span id="rubricTotalDisplay" class="text-lg font-mono font-black text-amber-400">90 / 100</span>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Qualitative Critique & Festival Recommendations</label>
              <textarea id="evalCritique" rows="3" required placeholder="Provide written commentary for the filmmaker..." class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white">${existing.critique || ''}</textarea>
            </div>

            <div class="pt-2 flex justify-end gap-2">
              <button type="button" onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-xs text-gray-300">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs">Submit Score</button>
            </div>
          </form>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
    this.calculateRubricTotal();
  },

  calculateRubricTotal() {
    const s = parseInt(document.getElementById('evalStory')?.value || 0, 10);
    const d = parseInt(document.getElementById('evalDirection')?.value || 0, 10);
    const v = parseInt(document.getElementById('evalVisuals')?.value || 0, 10);
    const snd = parseInt(document.getElementById('evalSound')?.value || 0, 10);
    const o = parseInt(document.getElementById('evalOriginality')?.value || 0, 10);

    const total = s + d + v + snd + o;
    const display = document.getElementById('rubricTotalDisplay');
    if (display) display.textContent = `${total} / 100`;
    return total;
  },

  handleEvaluationSubmit(e, filmId) {
    e.preventDefault();
    const user = store.getCurrentUser();
    const storyScore = parseInt(document.getElementById('evalStory').value, 10);
    const directionScore = parseInt(document.getElementById('evalDirection').value, 10);
    const visualsScore = parseInt(document.getElementById('evalVisuals').value, 10);
    const soundScore = parseInt(document.getElementById('evalSound').value, 10);
    const originalityScore = parseInt(document.getElementById('evalOriginality').value, 10);
    const totalScore = storyScore + directionScore + visualsScore + soundScore + originalityScore;
    const critique = document.getElementById('evalCritique').value;

    // Remove old eval if exists
    store.data.evaluations = store.data.evaluations.filter(ev => !(ev.filmId === filmId && ev.judgeId === user.id));

    store.data.evaluations.push({
      id: "eval_" + Date.now(),
      filmId,
      judgeId: user.id,
      judgeName: user.name,
      storyScore,
      directionScore,
      visualsScore,
      soundScore,
      originalityScore,
      totalScore,
      critique,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16)
    });

    // Update film average score
    const filmEvals = store.data.evaluations.filter(ev => ev.filmId === filmId);
    const avg = Math.round(filmEvals.reduce((a, b) => a + b.totalScore, 0) / filmEvals.length);
    const film = store.data.films.find(f => f.id === filmId);
    if (film) film.averageJudgeScore = avg;

    store.saveData();
    this.closeModal();
    this.showToast(`Evaluation recorded! Final Score: ${totalScore}/100`, 'success');
    this.navigate('evaluation');
  },

  // 5. Film Details & Trailer Modal
  viewFilmDetails(filmId) {
    const film = store.data.films.find(f => f.id === filmId);
    if (!film) return;

    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold">${film.genre}</span>
              <h3 class="text-xl font-bold font-cinema text-white mt-1">${film.title}</h3>
              <p class="text-xs text-gray-400">Directed by ${film.director} · Runtime: ${film.duration} mins · ${film.language}</p>
            </div>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white text-xl">✕</button>
          </div>

          <!-- Trailer Player Preview -->
          <div class="relative aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-xl">
            <iframe 
              class="w-full h-full" 
              src="${film.trailerUrl}?autoplay=0" 
              title="${film.title} Trailer" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

          <div class="space-y-3">
            <h4 class="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">Synopsis</h4>
            <p class="text-xs text-gray-300 leading-relaxed">${film.synopsis}</p>
          </div>

          <div class="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs">
            <div>
              <span class="text-gray-400 text-[10px] uppercase font-mono">Approval Status</span>
              <p class="font-bold text-emerald-400 uppercase font-mono">${film.status}</p>
            </div>
            <div>
              <span class="text-gray-400 text-[10px] uppercase font-mono">Audience Votes</span>
              <p class="font-bold text-sky-400 font-mono">${film.votes || 0}</p>
            </div>
            <div>
              <span class="text-gray-400 text-[10px] uppercase font-mono">Jury Score</span>
              <p class="font-bold text-amber-400 font-mono">${film.averageJudgeScore ? film.averageJudgeScore + ' / 100' : 'Pending'}</p>
            </div>
          </div>

          <div class="pt-2 flex justify-end gap-2">
            <button onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-gray-300">Close</button>
            <button onclick="App.castVote('${film.id}'); App.closeModal();" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs">
              Vote for this Film
            </button>
          </div>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  // 6. Admin Actions
  setFilmStatus(filmId, newStatus) {
    const film = store.data.films.find(f => f.id === filmId);
    if (!film) return;
    film.status = newStatus;
    store.saveData();
    this.showToast(`Film status set to ${newStatus.toUpperCase()}`, 'info');
    this.navigate(this.currentTab);
  },

  openNewScreeningModal() {
    const approved = store.data.films.filter(f => f.status === 'approved');
    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 class="text-base font-bold text-white">Schedule New Screening</h3>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white">✕</button>
          </div>

          <form onsubmit="App.handleCreateScreening(event)" class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Select Film</label>
              <select id="newScrFilm" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
                ${approved.map(f => `<option value="${f.id}">${f.title} (${f.duration}m)</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Venue Hall</label>
              <input type="text" id="newScrVenue" required placeholder="e.g. Cinema Hall C" value="Auditorium Blue 3" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Date</label>
                <input type="date" id="newScrDate" required value="2026-11-18" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-300 mb-1">Time</label>
                <input type="text" id="newScrTime" required value="19:00 - 20:30" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
              </div>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Ticket Price ($ USD)</label>
              <input type="number" id="newScrPrice" min="0" required value="12" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>

            <div class="pt-3 flex justify-end gap-2">
              <button type="button" onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-xs text-gray-300">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs">Save Screening</button>
            </div>
          </form>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  handleCreateScreening(e) {
    e.preventDefault();
    const filmId = document.getElementById('newScrFilm').value;
    const film = store.data.films.find(f => f.id === filmId);
    const venue = document.getElementById('newScrVenue').value;
    const date = document.getElementById('newScrDate').value;
    const time = document.getElementById('newScrTime').value;
    const ticketPrice = parseInt(document.getElementById('newScrPrice').value, 10);

    const newScr = {
      id: "scr_" + Date.now(),
      filmId,
      filmTitle: film ? film.title : "Short Film",
      venue,
      date,
      time,
      ticketPrice,
      totalSeats: 36,
      bookedSeats: [],
      status: "Scheduled"
    };

    store.data.screenings.push(newScr);
    store.saveData();
    this.closeModal();
    this.showToast('Screening added to schedule!', 'success');
    this.navigate('screenings');
  },

  openBroadcastModal() {
    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 class="text-base font-bold text-white">Broadcast Announcement</h3>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white">✕</button>
          </div>

          <form onsubmit="App.handleCreateBroadcast(event)" class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Headline</label>
              <input type="text" id="bcTitle" required placeholder="e.g. Schedule Update for Sunday" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Category Badge</label>
              <input type="text" id="bcBadge" required value="Alert" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Message Body</label>
              <textarea id="bcMessage" rows="3" required placeholder="Full notice text..." class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white"></textarea>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" id="bcUrgent" class="rounded bg-slate-800 border-slate-700 text-rose-500">
              <label for="bcUrgent" class="text-xs text-gray-300">Mark as high-priority alert</label>
            </div>

            <div class="pt-3 flex justify-end gap-2">
              <button type="button" onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-xs text-gray-300">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs">Broadcast</button>
            </div>
          </form>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  handleCreateBroadcast(e) {
    e.preventDefault();
    const title = document.getElementById('bcTitle').value;
    const badge = document.getElementById('bcBadge').value;
    const message = document.getElementById('bcMessage').value;
    const urgent = document.getElementById('bcUrgent').checked;

    store.data.notifications.unshift({
      id: "notif_" + Date.now(),
      title,
      badge,
      message,
      urgent,
      date: new Date().toISOString().split('T')[0]
    });

    store.saveData();
    this.closeModal();
    this.updateNotificationBadge();
    this.showToast('Announcement broadcasted to all attendees!', 'success');
    this.navigate('announcements');
  },

  openNewAwardModal() {
    const approved = store.data.films.filter(f => f.status === 'approved');
    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 class="text-base font-bold text-white">Publish New Award</h3>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white">✕</button>
          </div>

          <form onsubmit="App.handleCreateAward(event)" class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Award Category</label>
              <input type="text" id="awCategory" required placeholder="e.g. Best Editing & Sound" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Select Winning Film</label>
              <select id="awFilm" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
                ${approved.map(f => `<option value="${f.title}|${f.director}">${f.title} (Dir. ${f.director})</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Score / Distinction</label>
              <input type="text" id="awScore" required value="Jury Honor" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>

            <div class="pt-3 flex justify-end gap-2">
              <button type="button" onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-xs text-gray-300">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs">Publish Award</button>
            </div>
          </form>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  handleCreateAward(e) {
    e.preventDefault();
    const category = document.getElementById('awCategory').value;
    const [film, recipient] = document.getElementById('awFilm').value.split('|');
    const score = document.getElementById('awScore').value;

    store.data.awards.push({ category, film, recipient, score });
    store.saveData();
    this.closeModal();
    this.showToast(`Award published: ${category}!`, 'success');
    this.navigate('awards');
  },

  openCreateUserModal() {
    const modalHtml = `
      <div id="modalBackdrop" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 class="text-base font-bold text-white">Add New User</h3>
            <button onclick="App.closeModal()" class="text-gray-400 hover:text-white">✕</button>
          </div>

          <form onsubmit="App.handleCreateUser(event)" class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
              <input type="text" id="nuName" required placeholder="User name" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Email</label>
              <input type="email" id="nuEmail" required placeholder="user@domain.com" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-300 mb-1">Role</label>
              <select id="nuRole" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
                <option value="viewer">Viewer / Attendee</option>
                <option value="filmmaker">Filmmaker</option>
                <option value="judge">Judge / Jury</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            <div class="pt-3 flex justify-end gap-2">
              <button type="button" onclick="App.closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-xs text-gray-300">Cancel</button>
              <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs">Create User</button>
            </div>
          </form>
        </div>
      </div>
    `;
    this.injectModal(modalHtml);
  },

  handleCreateUser(e) {
    e.preventDefault();
    const name = document.getElementById('nuName').value;
    const email = document.getElementById('nuEmail').value;
    const role = document.getElementById('nuRole').value;

    store.data.users.push({
      id: "usr_" + Date.now(),
      name,
      email,
      role
    });

    store.saveData();
    this.closeModal();
    this.showToast(`User ${name} created with role ${role.toUpperCase()}!`, 'success');
    this.navigate('dashboard');
  },

  // 7. Filtering & Search
  filterFilmsByGenre() {
    const genre = document.getElementById('genreFilterSelect').value;
    const cards = document.querySelectorAll('.film-card');
    cards.forEach(card => {
      if (genre === 'ALL' || card.innerText.includes(genre)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  },

  searchFilms() {
    const query = document.getElementById('filmSearchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.film-card');
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? 'flex' : 'none';
    });
  },

  // 8. Utility Helpers
  injectModal(html) {
    this.closeModal();
    const wrapper = document.createElement('div');
    wrapper.id = 'modalRootContainer';
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);
  },

  closeModal() {
    const existing = document.getElementById('modalRootContainer');
    if (existing) existing.remove();
  },

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-600' : type === 'info' ? 'bg-slate-800 border-amber-500/50' : 'bg-rose-600';
    toast.className = `fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-xl ${bg} text-white text-xs font-semibold border shadow-2xl transition-all transform duration-300 translate-y-4 opacity-0`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 20);

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  resetDataPrompt() {
    if (confirm("Reset CineFest data to clean demo state? Any newly added films or bookings will be reset.")) {
      store.resetToDefaults();
      this.init();
      this.showToast("Database restored to default demo state.", "info");
    }
  },

  bindGlobalEvents() {
    // ESC to close modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }
};

// Auto start application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
