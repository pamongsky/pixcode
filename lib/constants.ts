import type { Service, ProcessStep, Project, TrackerProject } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 1,
    number: '01',
    name: 'Website & Web App',
    desc: 'Company profile, portal pelanggan, dashboard admin terintegrasi.',
    tag: 'Most Popular',
    icon: 'Globe',
    price: 'Mulai dari Rp 3jt',
    tech: ['Next.js', 'React', 'Laravel', 'PostgreSQL'],
  },
  {
    id: 2,
    number: '02',
    name: 'Mobile App',
    desc: 'Aplikasi Android & iOS cross-platform yang performant.',
    tag: 'Android & iOS',
    icon: 'Smartphone',
    price: 'Mulai dari Rp 10jt',
    tech: ['Flutter', 'React Native', 'FastAPI'],
  },
  {
    id: 3,
    number: '03',
    name: 'Landing Page',
    desc: 'Halaman konversi tinggi untuk campaign dan product launch.',
    tag: 'High Converting',
    icon: 'Zap',
    price: 'Mulai dari Rp 1.5jt',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 4,
    number: '04',
    name: 'AI, ML & Data Science',
    desc: 'Prediksi, rekomendasi, analitik bisnis, dan dashboard intelligence.',
    tag: 'Senjata Rahasia',
    icon: 'Brain',
    price: 'Mulai dari Rp 15jt',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 5,
    number: '05',
    name: 'Integration & APIs',
    desc: 'Payment gateway, maps, notifikasi, dan sistem pihak ketiga.',
    tag: 'Plug & Play',
    icon: 'Link',
    price: 'Mulai dari Rp 2jt',
    tech: ['FastAPI', 'Node.js', 'REST', 'WebSocket'],
  },
  {
    id: 6,
    number: '06',
    name: 'IT Consultant & Architecture',
    desc: 'Konsultasi arsitektur sistem dan pemilihan tech stack yang tepat.',
    tag: 'Expert Advice',
    icon: 'Lightbulb',
    price: 'Hubungi kami',
    tech: ['System Design', 'Cloud', 'DevOps'],
  },
  {
    id: 8,
    number: '07',
    name: 'IoT & Automation',
    desc: 'Sistem otomasi dan IoT — sensor, monitoring real-time, kontrol jarak jauh.',
    tag: 'Niche & Powerful',
    icon: 'Cpu',
    price: 'Mulai dari Rp 10jt',
    tech: ['ESP32', 'MQTT', 'FastAPI', 'React'],
  },
  {
    id: 7,
    number: '08',
    name: 'Enterprise Application',
    desc: 'ERP, CRM, HRM, LMS, POS — sistem bisnis custom skala perusahaan.',
    tag: 'High Value',
    icon: 'Building2',
    price: 'Mulai dari Rp 30jt',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
]

export const SERVICE_DETAILS: Record<number, { longDesc: string; packages: { name: string; price: string; features: string[] }[] }> = {
  1: {
    longDesc:
      'Dari landing page sederhana hingga web app enterprise — kami bangun dengan Next.js, TypeScript, dan arsitektur yang scalable. Optimized untuk SEO, performa, dan konversi.',
    packages: [
      { name: 'Standard', price: 'Rp 3 — 7 jt', features: ['Max 10 halaman', 'Responsive design', 'Basic SEO', 'CMS sederhana', 'Hosting setup'] },
      { name: 'Pro', price: 'Rp 7 — 20 jt', features: ['Unlimited halaman', 'Custom design system', 'Advanced SEO', 'CMS full-featured', 'Auth & dashboard', '3 bulan support'] },
      { name: 'Enterprise', price: 'Rp 20jt+', features: ['Multi-tenant', 'Custom integrations', 'Microservices', 'CI/CD pipeline', 'SLA & dedicated support'] },
    ],
  },
  2: {
    longDesc:
      'Aplikasi mobile cross-platform dengan Flutter atau React Native. Performa mendekati native, codebase tunggal untuk Android & iOS, terintegrasi dengan backend FastAPI.',
    packages: [
      { name: 'Standard', price: 'Rp 10 — 20 jt', features: ['Android + iOS', 'Max 10 screen', 'REST API integration', 'Basic notifications', 'App store submission'] },
      { name: 'Pro', price: 'Rp 20 — 40 jt', features: ['Unlimited screens', 'Offline mode', 'Push notifications', 'In-app purchase', 'Analytics', '3 bulan support'] },
      { name: 'Enterprise', price: 'Rp 40jt+', features: ['White-label ready', 'Real-time features', 'Custom payment gateway', 'Admin dashboard web', 'SLA'] },
    ],
  },
  3: {
    longDesc:
      'Landing page yang dioptimalkan untuk konversi. Fast load, animasi smooth dengan Framer Motion, dan A/B testing siap. Perfect untuk campaign, product launch, dan funnel marketing.',
    packages: [
      { name: 'Standard', price: 'Rp 1.5 — 3 jt', features: ['1 halaman', 'Mobile responsive', 'Basic animations', 'Contact form', 'Deploy ke domain'] },
      { name: 'Pro', price: 'Rp 3 — 6 jt', features: ['Multi-section premium', 'GSAP animations', 'Lead capture', 'WhatsApp integration', 'Analytics setup'] },
      { name: 'Enterprise', price: 'Rp 6jt+', features: ['A/B testing setup', 'CRM integration', 'Funnel analytics', 'Multi-language', 'SEO advanced'] },
    ],
  },
  4: {
    longDesc:
      'Dari prediksi demand hingga sistem rekomendasi produk — tim ML kami bangun model yang production-ready. Dashboard intelligence real-time dengan visualisasi data interaktif.',
    packages: [
      { name: 'Standard', price: 'Rp 15 — 30 jt', features: ['1 model ML', 'Data pipeline', 'Basic dashboard', 'API endpoint', 'Documentation'] },
      { name: 'Pro', price: 'Rp 30 — 70 jt', features: ['Multiple models', 'Real-time inference', 'Interactive dashboard', 'Model monitoring', '3 bulan support'] },
      { name: 'Enterprise', price: 'Rp 70jt+', features: ['Custom LLM integration', 'MLOps pipeline', 'Auto-retraining', 'Multi-tenant', 'SLA'] },
    ],
  },
  5: {
    longDesc:
      'Payment gateway, maps, WhatsApp API, notifikasi, dan ratusan layanan pihak ketiga. Kami handle kompleksitas integrasi supaya sistem kamu tetap bersih dan maintainable.',
    packages: [
      { name: 'Standard', price: 'Rp 2 — 5 jt', features: ['1-3 integrasi', 'REST API', 'Basic webhook', 'Error handling', 'Documentation'] },
      { name: 'Pro', price: 'Rp 5 — 15 jt', features: ['Unlimited integrasi', 'WebSocket', 'Queue system', 'Monitoring', '3 bulan support'] },
      { name: 'Enterprise', price: 'Rp 15jt+', features: ['Event-driven arch', 'API gateway', 'Rate limiting', 'Multi-env', 'SLA'] },
    ],
  },
  6: {
    longDesc:
      'Tidak tahu harus pakai tech stack apa? Kami bantu audit sistem existing, desain arsitektur baru, dan buat roadmap implementasi yang realistis.',
    packages: [
      { name: 'Standard', price: 'Rp 2 — 5 jt', features: ['2 sesi konsultasi', 'Tech stack recommendation', 'Architecture diagram', 'Written report'] },
      { name: 'Pro', price: 'Rp 5 — 15 jt', features: ['Audit sistem existing', 'Full architecture design', 'Implementation roadmap', 'Team training 1 hari'] },
      { name: 'Enterprise', price: 'Hubungi kami', features: ['Ongoing consulting', 'CTO-as-a-Service', 'Team augmentation', 'Monthly review'] },
    ],
  },
  7: {
    longDesc:
      'ERP, CRM, HRM, LMS, POS — sistem bisnis enterprise yang dibangun custom sesuai proses bisnis unik perusahaan kamu. Scalable, secure, dan bisa diintegrasi ke sistem existing.',
    packages: [
      { name: 'Standard', price: 'Rp 30 — 60 jt', features: ['1 modul utama', 'User management', 'Basic reporting', 'Mobile-responsive', '3 bulan support'] },
      { name: 'Pro', price: 'Rp 60 — 150 jt', features: ['Multi-modul', 'Role & permission', 'Advanced reporting', 'API & integrasi', '6 bulan support'] },
      { name: 'Enterprise', price: 'Rp 150jt+', features: ['Full enterprise suite', 'Multi-tenant', 'BI dashboard', 'SLA', 'Dedicated team'] },
    ],
  },
  8: {
    longDesc:
      'Sistem IoT end-to-end — dari firmware ESP32/Arduino, protokol MQTT, hingga dashboard monitoring real-time. Automasi industri, smart building, dan precision agriculture.',
    packages: [
      { name: 'Standard', price: 'Rp 10 — 20 jt', features: ['1-5 sensor nodes', 'MQTT broker setup', 'Basic dashboard', 'Alert system', 'Documentation'] },
      { name: 'Pro', price: 'Rp 20 — 50 jt', features: ['Up to 50 nodes', 'Real-time monitoring', 'Historical data', 'Mobile app', '3 bulan support'] },
      { name: 'Enterprise', price: 'Rp 50jt+', features: ['Unlimited nodes', 'Edge computing', 'Predictive maintenance', 'OTA updates', 'SLA'] },
    ],
  },
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief & Konsultasi',
    desc: 'Isi form brief online atau langsung konsultasi via WhatsApp. Kita pahami kebutuhan, tujuan, dan visi project kamu.',
    icon: 'FileText',
  },
  {
    number: '02',
    title: 'Proposal & Estimasi',
    desc: 'Kita kirim proposal teknis, timeline, dan estimasi biaya dalam 1×24 jam. Transparan, tidak ada biaya tersembunyi.',
    icon: 'ClipboardList',
  },
  {
    number: '03',
    title: 'Kontrak & Kickoff',
    desc: 'Tanda tangan kontrak digital, DP, dan kita langsung mulai. Kamu dapat akses ke project tracker real-time.',
    icon: 'Handshake',
  },
  {
    number: '04',
    title: 'Development',
    desc: 'Tim kita mulai develop. Update progress setiap minggu, kamu bisa review dan request revisi kapan saja.',
    icon: 'Code2',
  },
  {
    number: '05',
    title: 'Deploy & Support',
    desc: 'Project live di domain kamu. Kita handle deployment, training penggunaan, dan support 30 hari setelah launch.',
    icon: 'Rocket',
  },
]

export const TECH_STACK = {
  Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  Mobile: ['Flutter', 'React Native'],
  Backend: ['FastAPI', 'Laravel', 'Node.js'],
  Database: ['PostgreSQL', 'MySQL', 'Redis', 'TimescaleDB'],
  'AI / ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face'],
  'DevOps & Cloud': ['Vercel', 'Railway', 'Supabase', 'Docker', 'GitHub Actions'],
  IoT: ['ESP32', 'Arduino', 'Raspberry Pi', 'MQTT'],
  Tools: ['Figma', 'Git', 'Postman', 'Sentry'],
}

export const TECH_MARQUEE = [
  'Next.js', 'React', 'Flutter', 'FastAPI', 'Laravel', 'TensorFlow',
  'PostgreSQL', 'Docker', 'Supabase', 'Three.js', 'Python', 'TypeScript',
  'Framer Motion', 'MQTT', 'ESP32', 'Figma', 'GitHub Actions', 'Redis',
]

export const STATS = [
  { value: '50+', label: 'Project Selesai' },
  { value: '30+', label: 'Klien Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '8', label: 'Layanan Tersedia' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Tracker', href: '/tracker' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
]

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'dashtrack-iot',
    title: 'DashTrack — IoT Monitoring System',
    client: 'PT Manufaktur Nusantara',
    category: 'IoT',
    desc: 'Sistem monitoring real-time untuk 200+ sensor di lini produksi. Prediksi kegagalan mesin dengan ML, alert otomatis, dan dashboard interaktif.',
    tech: ['ESP32', 'MQTT', 'FastAPI', 'React', 'TimescaleDB', 'TensorFlow'],
    year: '2024',
    featured: true,
    color: '#C8FF00',
  },
  {
    id: 'rentalin-mobile',
    title: 'Rentalin — Aplikasi Rental Kendaraan',
    client: 'Startup Logistik Semarang',
    category: 'Mobile',
    desc: 'App rental kendaraan B2C dengan fitur real-time tracking, booking, dan pembayaran terintegrasi. 10.000+ pengguna aktif sejak launch.',
    tech: ['Flutter', 'FastAPI', 'PostgreSQL', 'Midtrans', 'Firebase'],
    year: '2024',
    featured: true,
    color: '#00C4CC',
  },
  {
    id: 'intellisales-ai',
    title: 'IntelliSales — AI Sales Forecasting',
    client: 'Distributor FMCG Jateng',
    category: 'AI',
    desc: 'Model prediksi demand berbasis ML dengan akurasi 91%. Terintegrasi ke sistem ERP existing, dashboard BI real-time, dan alert stok otomatis.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'Next.js', 'PostgreSQL'],
    year: '2023',
    featured: true,
    color: '#7C3AED',
  },
  {
    id: 'nexcore-erp',
    title: 'NexCore ERP — Sistem Manajemen Bisnis',
    client: 'CV Sejahtera Abadi',
    category: 'Enterprise',
    desc: 'ERP custom meliputi modul HRM, inventory, procurement, dan financial reporting. Menggantikan sistem lama yang tidak scalable.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
    year: '2024',
    color: '#059669',
  },
  {
    id: 'launchpad-landing',
    title: 'LaunchPad — Campaign Landing Page',
    client: 'Brand Skincare Lokal',
    category: 'Landing',
    desc: 'Landing page product launch dengan animasi premium, countdown timer, dan integrasi WhatsApp. Konversi 8.2% dari traffic campaign.',
    tech: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    year: '2024',
    color: '#DB2777',
  },
  {
    id: 'medport-web',
    title: 'MedPort — Portal Klinik Digital',
    client: 'Klinik Pratama Semarang',
    category: 'Web',
    desc: 'Portal manajemen klinik dengan fitur booking online, rekam medis digital, tagihan pasien, dan integrasi BPJS.',
    tech: ['Next.js', 'Laravel', 'MySQL', 'Midtrans'],
    year: '2023',
    color: '#0EA5E9',
  },
  {
    id: 'smartfarm-iot',
    title: 'SmartFarm — Precision Agriculture',
    client: 'Kelompok Tani Jawa Tengah',
    category: 'IoT',
    desc: 'Sistem pertanian presisi dengan sensor kelembaban tanah, suhu, dan pH. Rekomendasi irigasi otomatis berbasis AI, dikontrol via mobile app.',
    tech: ['Arduino', 'MQTT', 'Python', 'React Native', 'FastAPI'],
    year: '2023',
    color: '#16A34A',
  },
  {
    id: 'talentflow-web',
    title: 'TalentFlow — Platform Rekrutmen',
    client: 'HR Tech Startup',
    category: 'Web',
    desc: 'Platform rekrutmen dengan AI screening CV, video interview terintegrasi, dan analytics kandidat. Mengurangi waktu hiring 60%.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'OpenAI API'],
    year: '2024',
    color: '#F59E0B',
  },
]

export const PORTFOLIO_CATEGORIES = ['Semua', 'Web', 'Mobile', 'AI', 'IoT', 'Enterprise', 'Landing'] as const

export const TRACKER_PROJECTS: TrackerProject[] = [
  {
    id: 'PXC-2024-001',
    name: 'DashTrack IoT Monitoring',
    client: 'PT Manufaktur Nusantara',
    startDate: '1 Oktober 2024',
    estimatedEnd: '31 Desember 2024',
    progress: 100,
    steps: [
      { title: 'Brief & Konsultasi', status: 'done', date: '1 Okt 2024' },
      { title: 'Proposal & Kontrak', status: 'done', date: '5 Okt 2024' },
      { title: 'Development', status: 'done', date: '15 Nov 2024' },
      { title: 'Testing & Review', status: 'done', date: '20 Des 2024' },
      { title: 'Deploy & Handover', status: 'done', date: '31 Des 2024' },
    ],
  },
  {
    id: 'PXC-2025-003',
    name: 'TalentFlow Platform',
    client: 'HR Tech Startup',
    startDate: '1 Maret 2025',
    estimatedEnd: '30 Juni 2025',
    progress: 65,
    steps: [
      { title: 'Brief & Konsultasi', status: 'done', date: '1 Mar 2025' },
      { title: 'Proposal & Kontrak', status: 'done', date: '7 Mar 2025' },
      { title: 'Development', status: 'active' },
      { title: 'Testing & Review', status: 'pending' },
      { title: 'Deploy & Handover', status: 'pending' },
    ],
  },
  {
    id: 'PXC-2025-005',
    name: 'SmartRetail ERP',
    client: 'CV Maju Bersama',
    startDate: '1 April 2025',
    estimatedEnd: '30 September 2025',
    progress: 15,
    steps: [
      { title: 'Brief & Konsultasi', status: 'done', date: '1 Apr 2025' },
      { title: 'Proposal & Kontrak', status: 'active' },
      { title: 'Development', status: 'pending' },
      { title: 'Testing & Review', status: 'pending' },
      { title: 'Deploy & Handover', status: 'pending' },
    ],
  },
]

export const TEAM = [
  {
    name: 'Pamong',
    role: 'Backend Engineer · ML Engineer · Database Architect',
    bio: 'Spesialis backend, machine learning, dan database architecture. Membangun sistem yang tidak hanya berjalan, tapi bertahan di scale.',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'TensorFlow', 'Docker', 'System Design'],
    color: '#C8FF00',
  },
  {
    name: 'Nasywa',
    role: 'Frontend Engineer · Mobile Developer · UI/UX',
    bio: 'Mengubah desain menjadi pengalaman digital yang indah dan intuitif. Dari pixel-perfect web hingga smooth mobile app.',
    skills: ['Next.js', 'React Native', 'Flutter', 'Figma', 'Framer Motion', 'Tailwind'],
    color: '#00C4CC',
  },
]

export const PACKAGES = [
  {
    name: 'Standard',
    desc: 'Untuk solo founder, UMKM, dan kebutuhan sederhana.',
    icon: '⚡',
    highlight: false,
  },
  {
    name: 'Pro',
    desc: 'Untuk bisnis yang berkembang dengan kebutuhan lebih kompleks.',
    icon: '🚀',
    highlight: true,
  },
  {
    name: 'Enterprise',
    desc: 'Untuk korporasi dengan skala besar dan kebutuhan khusus.',
    icon: '🏢',
    highlight: false,
  },
]

export const BUDGET_OPTIONS = [
  'Di bawah Rp 5 juta',
  'Rp 5 — 15 juta',
  'Rp 15 — 30 juta',
  'Rp 30 — 75 juta',
  'Rp 75 — 150 juta',
  'Di atas Rp 150 juta',
  'Belum tahu / perlu diskusi',
]

export const DEADLINE_OPTIONS = [
  'Secepat mungkin (< 1 bulan)',
  '1 — 2 bulan',
  '2 — 3 bulan',
  '3 — 6 bulan',
  'Lebih dari 6 bulan',
  'Fleksibel',
]

export const TONE_OPTIONS = [
  'Modern & Minimalis',
  'Bold & Berani',
  'Corporate & Profesional',
  'Friendly & Playful',
  'Elegant & Luxury',
  'Tech & Futuristik',
]
