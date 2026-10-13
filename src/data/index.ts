export interface ProjectItem {
  id: string
  num: string
  title: string
  subtitle: string
  tagline: string
  description: string
  category:
    | 'AI & Intelligent Systems'
    | 'Full-Stack Applications'
    | 'Business & Commerce'
    | 'Community & Organization'
    | 'Games & Interactive Experiences'
    | 'Education & Other Products'
  liveUrl: string
  githubUrl?: string
  technologies: string[]
  featured: boolean
  status: string
  accentColor: string
  gradient: string
  highlights: string[]
  caseStudy?: {
    overview: string
    problem: string
    intendedUsers: string
    contribution: string
    implementedFeatures: string[]
    architecture: string
    keyDecisions: string[]
    challengesAndSolutions: string[]
    futureImprovements: string[]
    verificationNote?: string
  }
}

export const PERSONAL = {
  name: 'Darshan',
  fullName: 'Darshan Mang',
  title: 'Software Developer & Product Builder',
  roles: [
    'Software Developer',
    'Full-Stack Developer',
    'AI & Product Builder',
    'Co-founder @ ShadowQuant',
    'Web Application Specialist',
  ],
  heroIntroduction:
    'I build thoughtful digital products that solve real-world problems — from full-stack applications and business platforms to AI-powered tools and interactive experiences.',
  bio: "I'm Darshan — a software developer and product builder based in Karnataka, India. I focus on transforming concrete problems into fast, reliable, and aesthetically refined digital experiences. Having designed and shipped 18+ web applications across fintech, healthcare, AI forensics, and local commerce, I take pride in building software that actually works for real people.",
  bioSecondary:
    'Currently pursuing my Bachelor of Engineering in Computer Science & Engineering at Bapuji Institute of Engineering & Technology (BIET), Davangere, and co-founding ShadowQuant Dynamics where we engineer AI-assisted workflows and production web platforms.',
  email: 'darshan5462@gmail.com',
  phone: '+91 9164406348',
  location: 'Karnataka, India',
  company: 'ShadowQuant Dynamics',
  companyUrl: 'https://shadowquantdynamics.com/',
  github: 'https://github.com/darshan5462-maker',
  githubUsername: 'darshan5462-maker',
  linkedin: 'https://www.linkedin.com/in/darshan-mang-56110136a/',
  portfolioUrl: 'https://darshan-portfolio-ds.vercel.app/',
  availableForWork: true,
  availabilityText: 'Available for opportunities • 2026',
}

export const STATS = [
  { value: '18', label: 'Verified Web Apps', detail: 'All deployed & operational' },
  { value: '100%', label: 'Vercel Deployment', detail: 'CI/CD production delivery' },
  { value: 'Full-Stack', label: 'Core Competency', detail: 'Frontend, APIs & DBs' },
  { value: 'Co-founder', label: 'ShadowQuant', detail: 'Product & tech leadership' },
]

export const PROJECT_CATEGORIES = [
  'All Projects',
  'AI & Intelligent Systems',
  'Full-Stack Applications',
  'Business & Commerce',
  'Community & Organization',
  'Games & Interactive Experiences',
  'Education & Other Products',
] as const

export type ProjectCategory = typeof PROJECT_CATEGORIES[number]

export const PROJECTS: ProjectItem[] = [
  // 01: Powerstar Platform (Featured)
  {
    id: 'powerstar-platform',
    num: '01',
    title: 'Powerstar Platform',
    subtitle: 'On-Demand Services & Workforce Marketplace',
    tagline: 'Connecting consumers with verified local trade professionals and transport services.',
    description:
      'A comprehensive on-demand service marketplace and workforce platform connecting clients with verified local trade specialists (electricians, masons, plumbers) and transport vehicles with transparent pricing.',
    category: 'Full-Stack Applications',
    liveUrl: 'https://powerstar-platform-4sap.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/powerstar_platform',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    featured: true,
    status: 'Verified Live',
    accentColor: '#3b82f6',
    gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    highlights: [
      'Multi-category service discovery with instant quotes',
      'Worker verification & capability badges',
      'Mobile-first responsive dashboard with bottom navigation',
      'Transparent pricing and booking state machine',
    ],
    caseStudy: {
      overview:
        'Powerstar Platform was built to solve the fragmentation of informal labor and trade services in regional markets by offering a digital marketplace for on-demand booking of skilled professionals.',
      problem:
        'Finding trustworthy electricians, masons, plumbers, and transport vehicles locally often suffers from opaque pricing, unverified credentials, and unreliable scheduling.',
      intendedUsers:
        'Homeowners, business managers, construction contractors, and independent skilled laborers seeking reliable client assignments.',
      contribution:
        'Designed the entire frontend architecture, service category taxonomy, booking workflow, responsive layout, and client-side data state.',
      implementedFeatures: [
        'Interactive service directory with search and categorization',
        'Transparent fee estimations before booking confirmation',
        'Worker profile views featuring skill badges and reviews',
        'Responsive mobile layout with bottom navigation tabs',
        'Real-time booking inquiry submission feedback',
      ],
      architecture:
        'Modular React 19 component hierarchy structured with Vite, custom hooks for filter state, and Tailwind CSS design tokens.',
      keyDecisions: [
        'Separated service categorization from booking state to simplify prospective customer browsing.',
        'Adopted a mobile-first UI with fixed navigation for users on lower-bandwidth mobile devices.',
      ],
      challengesAndSolutions: [
        'Challenge: Presenting dense trade details cleanly on small mobile viewports.',
        'Solution: Implemented compact modular summary cards with collapsible drawer details.',
      ],
      futureImprovements: [
        'Integrate automated SMS notifications for workers using Twilio or Fast2SMS.',
        'Implement real-time geolocation mapping for nearest available trade providers.',
      ],
      verificationNote: 'Repository and deployed application verified via GitHub and Vercel.',
    },
  },

  // 02: Fair Savings App (Featured)
  {
    id: 'fair-savings-app',
    num: '02',
    title: 'Fair Savings App',
    subtitle: 'Family Weekly Savings & Loan Ledger Management',
    tagline: 'Fintech-inspired ledger for managing community weekly savings, member contributions, and loans.',
    description:
      'A fintech-style financial management dashboard designed for community weekly savings circles and family funds to track member deposits, interest yields, and loan repayment schedules with precision.',
    category: 'Full-Stack Applications',
    liveUrl: 'https://fair-savings-app.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/fair-savings',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Fintech UI', 'Vite'],
    featured: true,
    status: 'Verified Live',
    accentColor: '#10b981',
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    highlights: [
      'Weekly contribution tracking for member pools',
      'Automated loan balance & interest calculations',
      'Member statement export and historical ledger views',
      'Clean typography and financial audit UI',
    ],
    caseStudy: {
      overview:
        'Fair Savings digitizes traditional informal savings circles (Chit Funds / Self-Help Groups), replacing error-prone paper registers with a transparent, verifiable digital ledger.',
      problem:
        'Family and community savings circles frequently suffer from calculation disputes, lost paper records, and lack of visibility into total pooled capital and loan interest.',
      intendedUsers:
        'Family group treasurers, self-help community group managers, and contributing circle members.',
      contribution:
        'Architected the interest calculation engine, weekly cycle tracker, ledger UI, and member contribution audit tables.',
      implementedFeatures: [
        'Dashboard overview displaying total pool savings, active loan disbursements, and earned interest',
        'Member registry with individual deposit balance and weekly payment status',
        'Loan request approval flow with interest calculation schedules',
        'Penalty calculation logic for missed payment cycles',
      ],
      architecture:
        'React state machine handling ledger transactions, calculated totals, and reactive visual metrics.',
      keyDecisions: [
        'Used pure deterministic frontend calculation utilities to ensure consistent penny-accurate rounding.',
        'Employed dark financial UI inspired by Groww and Razorpay for high-clarity data scanning.',
      ],
      challengesAndSolutions: [
        'Challenge: Managing dynamic weekly calculation formulas without heavy backend dependencies.',
        'Solution: Built a decoupled pure calculation layer tested with standard edge cases.',
      ],
      futureImprovements: [
        'Add PDF export of monthly account statements for physical record archives.',
        'Integrate UPI payment deep-linking for direct member settlements.',
      ],
      verificationNote: 'Verified via GitHub repository and live Vercel deployment.',
    },
  },

  // 03: Karnataka Adijambava (Featured)
  {
    id: 'karnataka-adijambava',
    num: '03',
    title: 'Karnataka Adi Jambava Sangha',
    subtitle: 'Community Welfare & Social Impact Portal',
    tagline: 'Multilingual Kannada community portal for social empowerment and committee leadership.',
    description:
      'The official web portal for Dr. Babu Jagajeevanrao Karnataka Adi Jambava Abhivruddhi Sangha, providing Kannada language accessibility, leadership profiles, social welfare announcements, and member engagement.',
    category: 'Community & Organization',
    liveUrl: 'https://karnatakaadijambava.vercel.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Kannada Localization', 'Responsive Web'],
    featured: true,
    status: 'Verified Live',
    accentColor: '#059669',
    gradient: 'from-teal-600/20 via-emerald-600/10 to-transparent',
    highlights: [
      'Full Kannada multilingual typography and cultural layout',
      'Community leadership directory and regional committee profiles',
      'Accessible news bulletins, welfare schemes, and announcements',
      'Responsive photo gallery documenting social events',
    ],
    caseStudy: {
      overview:
        'Developed to give Dr. Babu Jagajeevanrao Karnataka Adi Jambava Abhivruddhi Sangha (Belgaum district) a professional online presence to communicate community initiatives.',
      problem:
        'Grassroots social organizations often struggle to reach members across different taluks and communicate welfare initiatives effectively without an authoritative web home.',
      intendedUsers:
        'Community members, regional representatives, students seeking educational grants, and public supporters.',
      contribution:
        'Structured the information architecture, integrated localized Kannada content, and built responsive mobile layouts.',
      implementedFeatures: [
        'Dedicated Kannada language typography with clean readability on all viewports',
        'Executive committee profiles with designations and contact channels',
        'Notice board for ongoing community programs and student scholarships',
        'Event photo gallery showcasing historical and recent gatherings',
      ],
      architecture:
        'Semantic HTML5 structure with custom CSS grid layouts and lightweight JavaScript for mobile menu navigation.',
      keyDecisions: [
        'Prioritized lightweight static assets so rural community members on 2G/3G connections experience fast load times.',
      ],
      challengesAndSolutions: [
        'Challenge: Ensuring complex Kannada font glyphs rendered legibly across older Android devices.',
        'Solution: Standardized on optimized web-safe Kannada font fallbacks with tuned line-heights.',
      ],
      futureImprovements: [
        'Introduce an online membership registration form with digital ID card generation.',
        'Create a digital archive of community welfare resources and government scheme guides.',
      ],
      verificationNote: 'Live deployment verified at karnatakaadijambava.vercel.app.',
    },
  },

  // 04: Hajare Bazare
  {
    id: 'hajare-bazare',
    num: '04',
    title: 'Hajare Bazare',
    subtitle: 'Smart Local Shopping & Store Directory',
    tagline: 'Digital shopping catalog and business directory for Hajare Bazaar, Rabakavi-Banhatti.',
    description:
      'A localized business marketplace and store directory connecting shoppers in Rabakavi-Banhatti with merchants across groceries, electronics, event supplies, and household essentials.',
    category: 'Business & Commerce',
    liveUrl: 'https://hajare-bazare.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/hajare_bazare',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Commerce', 'Responsive UI'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#f59e0b',
    gradient: 'from-amber-600/20 via-yellow-600/10 to-transparent',
    highlights: [
      'Comprehensive store directory categorized by trade',
      'Quick merchant contact and location mapping',
      'Event and wedding supply shopping guides',
      'Mobile-optimized shopping index',
    ],
  },

  // 05: Live Event Gallery
  {
    id: 'live-event-gallery',
    num: '05',
    title: 'Live Event Gallery',
    subtitle: 'QR-Connected Real-Time Photo Stream',
    tagline: 'Instant QR code access for guests to view and share event photos live during gatherings.',
    description:
      'An interactive event media gallery platform enabling celebration attendees to scan a table QR code and instantly browse, download, and celebrate live event photography as moments are captured.',
    category: 'Games & Interactive Experiences',
    liveUrl: 'https://live-event-gallery-ten.vercel.app/',
    technologies: ['JavaScript', 'CSS Grid', 'QR Integration', 'Responsive Gallery'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#ec4899',
    gradient: 'from-pink-600/20 via-rose-600/10 to-transparent',
    highlights: [
      'QR code scan to instant gallery landing',
      'Masonry grid with responsive image modal previews',
      'Touch-friendly swiping for mobile guests',
      'Optimized lightweight asset delivery',
    ],
  },

  // 06: Naming Ceremony App
  {
    id: 'naming-ceremony-app',
    num: '06',
    title: 'Naming Ceremony App',
    subtitle: 'Interactive Celebration & Digital Invitation',
    tagline: 'A bespoke digital invitation and event experience celebrating family milestone moments.',
    description:
      'A celebratory web application designed for family milestones featuring personalized storytelling, event schedule timelines, venue directions, and interactive guest greetings.',
    category: 'Games & Interactive Experiences',
    liveUrl: 'https://naming-ceremony-app.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/naming-ceremony-app',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Interactive UI'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#a855f7',
    gradient: 'from-purple-600/20 via-violet-600/10 to-transparent',
    highlights: [
      'Personalized family storytelling and baby introduction',
      'Interactive event itinerary with countdown timer',
      'Integrated Google Maps venue directions',
      'Digital guestbook wishing portal',
    ],
  },

  // 07: EVG Pradeep Brother
  {
    id: 'evg-pradeep-brother',
    num: '07',
    title: 'Evangelist Pradeep Shinde Ministry',
    subtitle: 'Ministry Outreach & Community Platform',
    tagline: 'Official digital platform for ministry events, sermon messages, and prayer fellowship.',
    description:
      'A dedicated outreach and ministry portal for Evangelist Pradeep Shinde, providing prayer meeting schedules, online sermon archives, testimony highlights, and community support contact channels.',
    category: 'Community & Organization',
    liveUrl: 'https://evg-pradeep-brother.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/evg-pradeep-brother',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Content Architecture'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#6366f1',
    gradient: 'from-indigo-600/20 via-blue-600/10 to-transparent',
    highlights: [
      'Worship and prayer meeting timetable',
      'Sermon messages and faith resources directory',
      'Direct prayer request submission channel',
      'Mobile-responsive layout with accessible typography',
    ],
  },

  // 08: Bible Game
  {
    id: 'bible-game',
    num: '08',
    title: 'Bible Game',
    subtitle: 'Interactive Scripture Trivia & Quiz Engine',
    tagline: 'Educational quiz web game testing biblical knowledge through multiple-choice questions.',
    description:
      'An engaging educational web game designed to test and reinforce scripture knowledge with timed questions, streak multipliers, difficulty tiers, and interactive feedback loops.',
    category: 'Games & Interactive Experiences',
    liveUrl: 'https://bible-game-gules.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/bible-game',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Game Mechanics'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#eab308',
    gradient: 'from-yellow-600/20 via-amber-600/10 to-transparent',
    highlights: [
      'Multiple-choice quiz logic with instant validation',
      'Score tracking, streak counters, and score summary',
      'Responsive game cards with smooth state transitions',
      'Lightweight and fully client-side playable',
    ],
  },

  // 09: Fully Playable Games
  {
    id: 'fully-playable-games',
    num: '09',
    title: 'ArcadeVerse - Playable Games Suite',
    subtitle: '20+ Browser Mini-Games Arcade',
    tagline: 'Playable web arcade featuring classic games built with pure Canvas and DOM loops.',
    description:
      'A browser-based gaming suite hosting 20+ fully functional mini-games including 2048, Snake, Flappy Bird, Tic Tac Toe, and memory puzzles with zero third-party gaming dependencies.',
    category: 'Games & Interactive Experiences',
    liveUrl: 'https://fully-playable-games.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/fully-playable-games',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Loops', 'DOM State'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#14b8a6',
    gradient: 'from-teal-600/20 via-cyan-600/10 to-transparent',
    highlights: [
      '20+ playable games in a unified browser dashboard',
      'Pure Canvas 2D and reactive DOM rendering',
      'High-score local persistence with zero backend lag',
      'Keyboard and touch-friendly controls across devices',
    ],
  },

  // 10: Diet Tracker App (Featured)
  {
    id: 'diet-tracker-app',
    num: '10',
    title: 'NutriTrack Diet Tracker',
    subtitle: 'Patient Diet, Calorie & Nutrition Management System',
    tagline: 'Full-stack healthcare application for patient meal tracking, calorie budgets, and caregiver oversight.',
    description:
      'A full-stack MERN healthcare application engineered for clinical and patient diet monitoring, daily caloric intake logs, macro nutrient breakdown, BMI tracking, and doctor-prescribed meal plan management.',
    category: 'Full-Stack Applications',
    liveUrl: 'https://diet-tracker-app-rouge.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/diet-tracker',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js (MERN)', 'REST APIs'],
    featured: true,
    status: 'Verified Live',
    accentColor: '#22c55e',
    gradient: 'from-green-600/20 via-emerald-600/10 to-transparent',
    highlights: [
      'Patient food logging with automated caloric & macro calculations',
      'Doctor & caregiver role dashboards for diet oversight',
      'Hydration, BMI metrics, and weekly progress charts',
      'REST API backend with secure multi-role permissions',
    ],
    caseStudy: {
      overview:
        'NutriTrack was developed as a clinical diet management portal helping healthcare professionals assign tailored nutritional plans to patients recovering from lifestyle conditions.',
      problem:
        'Patients frequently deviate from prescribed dietary guidelines due to complex meal instructions and lack of an easy daily logging feedback loop for monitoring doctors.',
      intendedUsers:
        'Patients tracking nutritional intake, consulting dietitians, and clinical caregivers overseeing compliance.',
      contribution:
        'Designed database schemas, built full-stack authentication, implemented meal logging APIs, and created responsive charts for nutritional analysis.',
      implementedFeatures: [
        'Meal logger calculating calories, protein, carbohydrates, and healthy fats',
        'Doctor portal for issuing customized meal targets and reviewing compliance',
        'Daily water intake tracking and BMI trend tracking',
        'Visual progress dashboards comparing goals against actual intake',
      ],
      architecture:
        'MERN stack architecture with Express.js REST endpoints, MongoDB document storage, and React frontend with role-based route access.',
      keyDecisions: [
        'Separated patient logging routes from clinician evaluation workflows for strict data safety.',
        'Structured modular nutrition calculators to allow extending standard Indian recipes.',
      ],
      challengesAndSolutions: [
        'Challenge: Rendering historical health metric graphs responsively without lag.',
        'Solution: Implemented server-side daily aggregations before dispatching data to client charts.',
      ],
      futureImprovements: [
        'Incorporate barcode scanning for automated food item lookup.',
        'Add AI-assisted meal photo recognition for quick calorie approximations.',
      ],
      verificationNote: 'Verified via GitHub repository and live Vercel deployment.',
    },
  },

  // 11: Shalom Brethren Assembly
  {
    id: 'shalom-brethren-assembly',
    num: '11',
    title: 'Shalom Brethren Assembly',
    subtitle: 'Congregation Portal (Mayakonda, Davangere)',
    tagline: 'Worship schedules, community announcements, and fellowship resources for the local assembly.',
    description:
      'The congregation portal for Shalom Brethren Assembly located in Mayakonda, Davangere District. Features Sunday worship timings, weekly bible study schedules, event calendars, and congregation news.',
    category: 'Community & Organization',
    liveUrl: 'https://shalom-brethren-assembly.vercel.app/',
    technologies: ['React', 'CSS3', 'Responsive Design', 'Information Architecture'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#8b5cf6',
    gradient: 'from-violet-600/20 via-purple-600/10 to-transparent',
    highlights: [
      'Sunday service (10:00 AM) and weekly fellowship schedules',
      'Church leadership and pastoral committee directory',
      'Community announcement bulletin and event archive',
      'Accessible mobile navigation for all age groups',
    ],
  },

  // 12: Rabakavi Brethren Assembly
  {
    id: 'rabakavi-brethren-assembly',
    num: '12',
    title: 'Rabakavi Brethren Assembly',
    subtitle: 'Church Community Platform (Bagalkote)',
    tagline: 'Congregation updates, spiritual resources, and outreach programs in Rabakavi.',
    description:
      'The official community website for Christian Brethren Assembly in Rabakavi, Bagalkote District, led by Evg. Pradeep Shinde. Dedicated to proclaiming Christ, gathering in fellowship, and publishing assembly updates.',
    category: 'Community & Organization',
    liveUrl: 'https://rabakavi-brethren-assembly.vercel.app/',
    technologies: ['React', 'Tailwind CSS', 'Community UI', 'Responsive Web'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#dc2626',
    gradient: 'from-red-600/20 via-rose-600/10 to-transparent',
    highlights: [
      'Service timings, Sunday school notices, and prayer hours',
      'Ministry leadership profiles and pastoral contacts',
      'Spiritual literature and hymn announcements',
      'Clean typography and community-focused presentation',
    ],
  },

  // 13: WAA Kids
  {
    id: 'waa-kids-closet',
    num: '13',
    title: 'WAA Kids Closet',
    subtitle: 'Affordable Branded Kidswear E-Commerce',
    tagline: 'Live kidswear store featuring dynamic Google Sheets catalogue synchronization and COD checkout.',
    description:
      'A live, operational direct-to-consumer children’s clothing store serving Harihar, Davangere, and PAN India. Features Google Sheets-backed catalogue synchronization, category filters, and cash-on-delivery ordering.',
    category: 'Business & Commerce',
    liveUrl: 'https://waakids.com/',
    githubUrl: 'https://github.com/darshan5462-maker/waa-kids-closet',
    technologies: ['JavaScript', 'Google Sheets DB', 'E-Commerce UI', 'WhatsApp API'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#f43f5e',
    gradient: 'from-rose-600/20 via-pink-600/10 to-transparent',
    highlights: [
      'Dynamic product inventory synced directly with Google Sheets backend',
      'Real-time category, gender, and price filtering',
      'Automated WhatsApp and COD order placement flow',
      '2-hour local dispatch logic for Davangere/Harihar regions',
    ],
  },

  // 14: PureDrop
  {
    id: 'puredrop-water-delivery',
    num: '14',
    title: 'PureDrop Water Delivery',
    subtitle: 'On-Demand Filtered Water Management Platform',
    tagline: 'Full-stack drinking water subscription & dispatch management platform with live order status.',
    description:
      'An on-demand drinking water delivery platform providing customer ordering portals, multi-tier subscription plans (can & monthly tiers), delivery boy authentication, and live order tracking.',
    category: 'Full-Stack Applications',
    liveUrl: 'https://puredrop-rust.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/puredrop',
    technologies: ['Firebase Auth', 'Firebase Realtime DB', 'Node.js', 'JavaScript'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#0ea5e9',
    gradient: 'from-sky-600/20 via-blue-600/10 to-transparent',
    highlights: [
      'Dual portal authentication for customers and delivery drivers',
      'Subscription plan selector with automated billing tiers',
      'Realtime database integration for order fulfillment status',
      'Location-based delivery scheduling interface',
    ],
  },

  // 15: Audio Forensic Detector (Featured)
  {
    id: 'audio-forensic-detector',
    num: '15',
    title: 'Audio Forensic Detector',
    subtitle: 'Digital Audio Notary & Synthetic Voice Tamper Analysis',
    tagline: 'Technical audio forensic analyzer with real-time FFT spectrograms and synthetic manipulation flags.',
    description:
      'A technical digital audio notary application that inspects voice recordings for synthetic deepfake manipulation, frequency anomalies, and splicing artifacts using real-time Web Audio API spectrograms and AI heuristics.',
    category: 'AI & Intelligent Systems',
    liveUrl: 'https://audio-forensic-detector.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/audio-forensic-detector',
    technologies: ['Web Audio API', 'HTML5 Canvas', 'Spectrogram DSP', 'Claude AI', 'JavaScript'],
    featured: true,
    status: 'Verified Live',
    accentColor: '#8b5cf6',
    gradient: 'from-violet-600/20 via-cyan-600/10 to-transparent',
    highlights: [
      'Client-side FFT frequency spectrum visualization on HTML5 Canvas',
      'Acoustic anomaly detection flagging unnatural frequency cuts',
      'Multi-layer trust audit combining biological signatures with digital integrity',
      'Comprehensive PDF report export with timestamped verification hashes',
    ],
    caseStudy: {
      overview:
        'AudioForensics was built to provide digital media auditors, journalists, and verification teams with an in-browser toolkit to inspect suspected deepfake voice notes and manipulated audio evidence.',
      problem:
        'With the rapid rise of AI voice cloning and vishing attacks, verifying whether an audio recording has synthetic continuity errors or artificial acoustic artifacts is critical before trusting recorded statements.',
      intendedUsers:
        'Digital forensic investigators, journalists verifying leaked recordings, and legal security personnel auditing voice notes.',
      contribution:
        'Developed client-side audio decoding via Web Audio API, engineered the real-time Fourier spectrogram canvas renderer, and established the synthetic anomaly indicator scoring algorithm.',
      implementedFeatures: [
        'Real-time frequency spectrogram rendered with 2048-point FFT resolution',
        'Synthetic pitch-drift and frequency compression anomaly indicators',
        'Trust audit score combining acoustic continuity, noise-floor baseline, and voice harmonics',
        'Exportable forensic assessment summary with file metadata and integrity checksums',
      ],
      architecture:
        'In-browser Web Audio API processing pipeline with AudioContext, AnalyserNode, Canvas 2D visualization loop, and export engine.',
      keyDecisions: [
        'Processed all raw audio entirely client-side using Web Audio API to prevent sensitive user audio from uploading to unvetted external servers.',
        'Adopted a cyberpunk forensic dashboard aesthetic with monospaced telemetry fonts for tactical clarity.',
      ],
      challengesAndSolutions: [
        'Challenge: Maintaining a smooth 60 FPS spectrogram rendering loop with high FFT resolution.',
        'Solution: Optimized canvas pixel manipulation using double-buffered frame buffers and typed Float32Arrays.',
      ],
      futureImprovements: [
        'Incorporate lightweight on-device ONNX runtime models for trained deepfake voice inference.',
        'Add side-by-side waveform comparison for contrasting authentic reference samples.',
      ],
      verificationNote: 'GitHub repository and live application verified at audio-forensic-detector.vercel.app.',
    },
  },

  // 16: D2C Beta (Featured)
  {
    id: 'd2c-beta',
    num: '16',
    title: 'DRIP D2C Storefront',
    subtitle: 'Modern Streetwear & Apparel E-Commerce Experience',
    tagline: 'High-end direct-to-consumer clothing storefront with minimal aesthetic and interactive cart state.',
    description:
      'A direct-to-consumer fashion e-commerce storefront with modern streetwear branding, responsive product drop collections, interactive size selection, smooth drawer cart management, and seamless mobile commerce UI.',
    category: 'Business & Commerce',
    liveUrl: 'https://d2c-beta.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/d2c',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Modern Cart State'],
    featured: true,
    status: 'Verified Live',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    highlights: [
      'High-fashion editorial layout with micro-animations',
      'Dynamic size picker, color variant selector, and stock status',
      'Slide-over slide cart drawer with real-time subtotal calculation',
      'Responsive product grid optimized for mobile shopping',
    ],
    caseStudy: {
      overview:
        'DRIP was conceptualized and engineered as a modern, high-conversion D2C storefront tailored for independent fashion and streetwear labels wanting a custom brand identity away from cookie-cutter templates.',
      problem:
        'Many independent fashion brands lose conversion on generic e-commerce templates that feel sluggish, crowded with popups, and lack tactile luxury micro-interactions.',
      intendedUsers:
        'Modern streetwear shoppers, fashion enthusiasts, and boutique apparel brands seeking elevated web presentation.',
      contribution:
        'Engineered complete frontend storefront, product catalog state, responsive slide-out cart drawer, and interactive item showcase.',
      implementedFeatures: [
        'Curated hero drop banners featuring seasonal collections',
        'Product cards with instant hover lookbook views and stock badges',
        'Interactive drawer cart with instant quantity modifiers and total calculation',
        'Mobile-first sticky action bar for immediate checkout flow',
      ],
      architecture:
        'React component hierarchy leveraging custom cart context, responsive Tailwind utilities, and Vite bundle optimization.',
      keyDecisions: [
        'Kept checkout and cart interactions non-blocking via a floating drawer rather than navigating away from product browsing.',
      ],
      challengesAndSolutions: [
        'Challenge: Ensuring fast image transitions between apparel lookbook angles without layout jitter.',
        'Solution: Reserved aspect ratio containers with preload hints and smooth opacity transitions.',
      ],
      futureImprovements: [
        'Connect Stripe and Razorpay payment gateway webhooks for direct payment capture.',
        'Implement 3D garment inspection preview using Three.js / WebGL.',
      ],
      verificationNote: 'Verified via GitHub repository and live Vercel deployment.',
    },
  },

  // 17: MindReader
  {
    id: 'mindreader-game',
    num: '17',
    title: 'MINDREADER 1-to-30',
    subtitle: 'Interactive Binary Deduction Number Game',
    tagline: 'Mathematical algorithmic puzzle game revealing secret chosen numbers through binary card rounds.',
    description:
      'A sleek, interactive mathematical mentalist game that deduces the user’s secret chosen number between 1 and 30 across 5 progressive binary card rounds using algorithmic card matrix calculation.',
    category: 'Games & Interactive Experiences',
    liveUrl: 'https://mindreader-nine.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/mindreader',
    technologies: ['JavaScript', 'CSS3 Transitions', 'Discrete Math Deduction', 'Responsive UI'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#d946ef',
    gradient: 'from-fuchsia-600/20 via-purple-600/10 to-transparent',
    highlights: [
      'Interactive 5-stage binary matrix number deduction',
      'Engaging neon-glow presentation with fluid card flips',
      'Pure mathematical logic requiring zero server roundtrips',
      'Instant victory reveals and streak reset functionality',
    ],
  },

  // 18: Vishwa Chetana
  {
    id: 'vishwa-chetana',
    num: '18',
    title: 'Vishwachetana Group of Institutions',
    subtitle: 'Multi-Campus Educational Institution Portal',
    tagline: 'Comprehensive educational web portal representing 5 academic campuses with admissions info.',
    description:
      'A comprehensive institutional portal representing the Vishwachetana Group of Institutions across 5 academic campuses (Olympiad School, PU Colleges, Residential Schools), showcasing curriculum, achievements, and admissions.',
    category: 'Education & Other Products',
    liveUrl: 'https://vishwachetana.vercel.app/',
    githubUrl: 'https://github.com/darshan5462-maker/Vishwachetana',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Information Architecture'],
    featured: false,
    status: 'Verified Live',
    accentColor: '#f97316',
    gradient: 'from-orange-600/20 via-amber-600/10 to-transparent',
    highlights: [
      'Information architecture covering 5 educational campuses',
      'Academic curriculum overview from primary to pre-university levels',
      'Campus infrastructure photo gallery and student achievements',
      'Admissions inquiry and contact directory for prospective parents',
    ],
  },
]

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend Development',
    description: 'Modern, accessible, high-performance user interfaces and responsive architectures.',
    skills: [
      { name: 'React', context: 'Component hierarchies, hooks, state management', tag: 'Primary Library' },
      { name: 'TypeScript', context: 'Strong typing, interfaces, enterprise reliability', tag: 'Core Language' },
      { name: 'JavaScript (ES6+)', context: 'Asynchronous event loops, DOM manipulation', tag: 'Core Language' },
      { name: 'HTML5 Semantic', context: 'Accessible structure, SEO markup, clean hierarchy', tag: 'Structure' },
      { name: 'CSS3 / Tailwind CSS', context: 'Design tokens, animations, responsive layouts', tag: 'Styling' },
      { name: 'Web Audio API / Canvas', context: 'FFT spectrograms, interactive 2D graphics', tag: 'Specialized' },
    ],
  },
  {
    category: 'Backend Development',
    description: 'Resilient server architectures, clean RESTful endpoints, and business workflows.',
    skills: [
      { name: 'Node.js', context: 'Server runtime, microservices, asynchronous execution', tag: 'Runtime' },
      { name: 'Express.js', context: 'Routing, middleware pipelines, authentication gates', tag: 'Framework' },
      { name: 'RESTful API Architecture', context: 'Resource modeling, JSON payloads, error contracts', tag: 'API Design' },
      { name: 'Java & Spring Fundamentals', context: 'Object-oriented patterns, server-side data models', tag: 'Languages' },
    ],
  },
  {
    category: 'Databases & State',
    description: 'Document and relational data structures, live listeners, and secure storage.',
    skills: [
      { name: 'Firebase', context: 'Authentication, Realtime DB, Firestore rules', tag: 'Realtime Cloud' },
      { name: 'MongoDB / MERN', context: 'Document schemas, aggregations, query tuning', tag: 'NoSQL' },
      { name: 'MySQL', context: 'Relational schemas, foreign keys, normalized tables', tag: 'SQL' },
      { name: 'Google Sheets Integration', context: 'Rapid business data synchronization via Apps Script', tag: 'Headless DB' },
    ],
  },
  {
    category: 'AI & Intelligent Systems',
    description: 'Applied machine intelligence, prompt pipelines, and audio forensics.',
    skills: [
      { name: 'Claude AI Integration', context: 'API prompt engineering, analysis automation', tag: 'LLM Workflow' },
      { name: 'Audio Forensics & DSP', context: 'Frequency spectrum analysis, acoustic anomaly flags', tag: 'Analysis' },
      { name: 'Voice Agent Architecture', context: 'Conversational workflows, business response handling', tag: 'Voice AI' },
      { name: 'Structured Prompt Engineering', context: 'Deterministic system instructions and context rules', tag: 'Prompting' },
    ],
  },
  {
    category: 'Developer Tools & Cloud',
    description: 'Version control, development tooling, and cloud deployment pipelines.',
    skills: [
      { name: 'Git & GitHub', context: 'Branch management, semantic commits, PR reviews', tag: 'Version Control' },
      { name: 'Vite', context: 'Instant HMR, tree-shaking, production bundle builds', tag: 'Build Tool' },
      { name: 'Vercel Platform', context: 'Automated CI/CD deployments, edge edge caching', tag: 'Deployment' },
      { name: 'Render / Cloud Hosting', context: 'Full-stack Node.js server hosting and monitoring', tag: 'Hosting' },
      { name: 'Postman & API Testing', context: 'Endpoint debugging, payload contracts, mock tests', tag: 'Testing' },
      { name: 'VS Code & CLI Tools', context: 'Efficient development workflows, scripts, linting', tag: 'Tooling' },
    ],
  },
]

export const BUILDING_JOURNEY = [
  {
    period: '2026 — Present',
    role: 'Co-founder & Software Developer',
    entity: 'ShadowQuant Dynamics',
    url: 'https://shadowquantdynamics.com/',
    type: 'Startup Leadership',
    location: 'Karnataka, India',
    description:
      'Co-founded and actively engineering AI-assisted web systems, conversational voice intelligence tools, and scalable web solutions for business clients.',
    milestones: [
      'Engineered voice agent prototypes and business workflow automation tools',
      'Developed high-performance client dashboards with real-time backend synchronization',
      'Focused on zero-latency UI interactions and modern aesthetic presentation',
    ],
    tags: ['Co-founder', 'Full-Stack Architecture', 'Voice Agents', 'SaaS Delivery'],
  },
  {
    period: '2025 — Present',
    role: 'Bachelor of Engineering in Computer Science & Engineering',
    entity: 'Bapuji Institute of Engineering & Technology (BIET)',
    type: 'Academic Milestone',
    location: 'Davangere, Karnataka',
    description:
      'Pursuing degree in Computer Science & Engineering with coursework and practical projects spanning data structures, algorithms, database management, and object-oriented systems.',
    milestones: [
      'Studied foundational software engineering, relational databases, and operating systems',
      'Built advanced Java and Hibernate projects as part of university technical curriculum',
      'Applied core computer science theory directly into production web applications',
    ],
    tags: ['Computer Science', 'BIET Davangere', 'Algorithms', 'Databases', 'Java'],
  },
  {
    period: '2024 — 2026',
    role: 'Independent Product Builder & Web Developer',
    entity: 'Production Software Portfolio',
    type: 'Independent Engineering',
    location: 'Remote',
    description:
      'Independently conceptualized, designed, and deployed 18+ real-world web applications spanning full-stack SaaS, e-commerce stores, community platforms, and AI tools.',
    milestones: [
      'Built and shipped 18 operational websites and web applications deployed on Vercel',
      'Pioneered digital solutions for regional businesses (WAA Kids, Hajare Bazare, PureDrop)',
      'Engineered Audio Forensic Detector inspecting real-time audio manipulation via Web Audio API',
      'Created Fair Savings ledger and NutriTrack patient diet monitoring systems',
    ],
    tags: ['18+ Production Apps', 'Vercel Deployment', 'Full-Stack', 'Community Impact'],
  },
]

export const FEATURED_GITHUB_REPOS = [
  {
    name: 'audio-forensic-detector',
    url: 'https://github.com/darshan5462-maker/audio-forensic-detector',
    description: 'Digital audio notary and synthetic deepfake detection tool with Web Audio API spectrograms.',
    language: 'JavaScript',
    languageColor: '#f7df1e',
    stars: 'Public',
  },
  {
    name: 'powerstar_platform',
    url: 'https://github.com/darshan5462-maker/powerstar_platform',
    description: 'On-demand workforce and services marketplace connecting users with local skilled trades.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 'Public',
  },
  {
    name: 'fair-savings',
    url: 'https://github.com/darshan5462-maker/fair-savings',
    description: 'Fintech-style weekly savings and loan ledger management system for community funds.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 'Public',
  },
  {
    name: 'diet-tracker',
    url: 'https://github.com/darshan5462-maker/diet-tracker',
    description: 'Full-stack MERN patient diet, calorie budgeting, and clinical health progress application.',
    language: 'JavaScript',
    languageColor: '#f7df1e',
    stars: 'Public',
  },
  {
    name: 'fully-playable-games',
    url: 'https://github.com/darshan5462-maker/fully-playable-games',
    description: 'ArcadeVerse - suite of 20+ playable browser mini-games built with Canvas and DOM loops.',
    language: 'JavaScript',
    languageColor: '#f7df1e',
    stars: 'Public',
  },
  {
    name: 'waa-kids-closet',
    url: 'https://github.com/darshan5462-maker/waa-kids-closet',
    description: 'Operational kidswear e-commerce store with Google Sheets dynamic inventory synchronization.',
    language: 'JavaScript',
    languageColor: '#f7df1e',
    stars: 'Public',
  },
]

export const AI_KNOWLEDGE_QUESTIONS = [
  'What technical stack does Darshan use?',
  'Tell me about Darshan’s best projects',
  'What is the Powerstar Platform?',
  'How does the Audio Forensic Detector work?',
  'What is ShadowQuant Dynamics?',
  'Is Darshan available for internships or full-time roles?',
  'How can I get in touch with Darshan?',
]

export const EXPERIENCE = BUILDING_JOURNEY

