import type { Service, ProcessStep, Project, TrackerProject } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 1,
    number: '01',
    name: 'Website & Web App',
    desc: 'Company profile, portal pelanggan, dashboard admin, toko online. Dibangun dengan Next.js supaya cepat, SEO-nya bagus, dan gampang dikembangkan nanti.',
    tag: 'Paling diminati',
    icon: 'Globe',
    price: 'Mulai dari Rp 3jt',
    tech: ['Next.js', 'React', 'Laravel', 'PostgreSQL'],
  },
  {
    id: 2,
    number: '02',
    name: 'Aplikasi Mobile',
    desc: 'Satu codebase, jalan di Android & iOS. Dari perencanaan sampai rilis ke Play Store dan App Store — kami bantu semua prosesnya.',
    tag: 'iOS & Android',
    icon: 'Smartphone',
    price: 'Mulai dari Rp 10jt',
    tech: ['Flutter', 'React Native', 'FastAPI'],
  },
  {
    id: 3,
    number: '03',
    name: 'Landing Page',
    desc: 'Halaman yang tugasnya satu: bikin orang daftar, beli, atau chat. Loading cepat, mobile nyaman, dan CTA-nya nggak bikin bingung.',
    tag: 'Fokus konversi',
    icon: 'Zap',
    price: 'Mulai dari Rp 1.5jt',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 4,
    number: '04',
    name: 'AI, ML & Data',
    desc: 'Model prediksi, rekomendasi, atau deteksi anomali yang bisa langsung dipakai di produk kamu. Kami rapikan pipeline data, training, sampai API-nya.',
    tag: 'AI untuk bisnis',
    icon: 'Brain',
    price: 'Mulai dari Rp 15jt',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 5,
    number: '05',
    name: 'Integrasi & API',
    desc: 'Midtrans, Xendit, Raja Ongkir, WhatsApp, Maps — kami sambungkan ke sistem kamu. Webhook, error handling, dan log-nya semua diberesin.',
    tag: 'Integrasi cepat',
    icon: 'Link',
    price: 'Mulai dari Rp 2jt',
    tech: ['FastAPI', 'Node.js', 'REST', 'WebSocket'],
  },
  {
    id: 6,
    number: '06',
    name: 'Konsultasi IT & Arsitektur',
    desc: 'Sistem kamu lambat, susah dikembangkan, atau butuh redesign arsitektur? Kami audit, kasih rekomendasi konkret, dan bantu bikin roadmap yang bisa dieksekusi.',
    tag: 'Arahan teknis',
    icon: 'Lightbulb',
    price: 'Hubungi kami',
    tech: ['System Design', 'Cloud', 'DevOps'],
  },
  {
    id: 7,
    number: '07',
    name: 'IoT & Otomasi',
    desc: 'Sensor, MQTT, dashboard monitoring, alert otomatis. Bisa dipantau dari mana saja, data historisnya tersimpan, dan perangkat bisa di-update tanpa harus ke lokasi.',
    tag: 'Monitoring & alert',
    icon: 'Cpu',
    price: 'Mulai dari Rp 10jt',
    tech: ['ESP32', 'MQTT', 'FastAPI', 'React'],
  },
  {
    id: 8,
    number: '08',
    name: 'Sistem Enterprise',
    desc: 'ERP, CRM, HRM, atau sistem internal lain sesuai proses bisnis kamu — bukan template yang dipaksakan. Multi-user, hak akses jelas, dan laporan yang bisa langsung dipakai.',
    tag: 'Skala besar',
    icon: 'Building2',
    price: 'Mulai dari Rp 30jt',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
]

export const SERVICE_DETAILS: Record<number, { longDesc: string; packages: { name: string; price: string; features: string[] }[] }> = {
  1: {
    longDesc:
      'Kami membangun website dan web app dengan Next.js supaya cepat, stabil, dan SEO-nya bagus. Struktur kodenya rapi agar mudah dikembangkan, dan bisa dilengkapi CMS/admin untuk update konten tanpa ribet.',
    packages: [
      { name: 'Standard', price: 'Rp 3 — 7 jt', features: ['Maks. 10 halaman', 'Desain responsif', 'SEO dasar', 'CMS sederhana (opsional)', 'Setup domain & hosting'] },
      { name: 'Pro', price: 'Rp 7 — 20 jt', features: ['Halaman tanpa batas', 'Desain sesuai brand', 'SEO lanjutan', 'CMS lengkap', 'Login + dashboard', 'Support 3 bulan'] },
      { name: 'Enterprise', price: 'Rp 20jt+', features: ['Multi-role & permission', 'Integrasi sistem', 'Arsitektur modular', 'CI/CD', 'SLA & support prioritas'] },
    ],
  },
  2: {
    longDesc:
      'Aplikasi mobile cross-platform (Flutter/React Native) dengan fokus UX yang nyaman dan integrasi backend yang rapi. Kami bantu dari perencanaan, development, sampai rilis ke App Store dan Play Store.',
    packages: [
      { name: 'Standard', price: 'Rp 10 — 20 jt', features: ['Android + iOS', 'Maks. 10 layar', 'Integrasi API', 'Notifikasi dasar', 'Bantuan rilis ke store'] },
      { name: 'Pro', price: 'Rp 20 — 40 jt', features: ['Layar tanpa batas', 'Mode offline (opsional)', 'Push notification', 'Pembayaran/in-app (opsional)', 'Analytics dasar', 'Support 3 bulan'] },
      { name: 'Enterprise', price: 'Rp 40jt+', features: ['White-label (brand kamu)', 'Fitur real-time (opsional)', 'Payment gateway custom', 'Dashboard admin web', 'SLA'] },
    ],
  },
  3: {
    longDesc:
      'Landing page yang fokus ke tujuan: daftar, beli, atau chat. Loading cepat, mobile nyaman, CTA jelas, dan analytics siap untuk mengukur hasil.',
    packages: [
      { name: 'Standard', price: 'Rp 1.5 — 3 jt', features: ['1 halaman', 'Desain responsif', 'Animasi ringan', 'Form kontak / CTA', 'Deploy ke domain'] },
      { name: 'Pro', price: 'Rp 3 — 6 jt', features: ['Section premium', 'Animasi halus', 'Form lead / WhatsApp', 'Setup analytics', 'Optimasi kecepatan'] },
      { name: 'Enterprise', price: 'Rp 6jt+', features: ['A/B testing (opsional)', 'Integrasi CRM', 'Funnel tracking', 'Multi-bahasa', 'SEO lanjutan'] },
    ],
  },
  4: {
    longDesc:
      'Solusi AI/ML yang bisa dipakai di produk: prediksi, rekomendasi, klasifikasi, sampai deteksi anomali. Kami rapikan pipeline data, training, dan penyajian hasilnya lewat API/dashboards.',
    packages: [
      { name: 'Standard', price: 'Rp 15 — 30 jt', features: ['1 model ML', 'Pembersihan & pipeline data', 'Endpoint API', 'Dashboard sederhana', 'Dokumentasi teknis'] },
      { name: 'Pro', price: 'Rp 30 — 70 jt', features: ['Beberapa model', 'Inferensi real-time (opsional)', 'Dashboard interaktif', 'Monitoring model', 'Support 3 bulan'] },
      { name: 'Enterprise', price: 'Rp 70jt+', features: ['Integrasi LLM (opsional)', 'MLOps pipeline', 'Auto-retraining (opsional)', 'Multi-tenant', 'SLA'] },
    ],
  },
  5: {
    longDesc:
      'Integrasi pihak ketiga: payment, kurir, notifikasi, maps, dan lainnya. Kami rapikan webhook, logging, dan error handling supaya sistem stabil, mudah dipantau, dan gampang dirawat.',
    packages: [
      { name: 'Standard', price: 'Rp 2 — 5 jt', features: ['1–3 integrasi', 'REST API', 'Webhook dasar', 'Error handling', 'Dokumentasi teknis'] },
      { name: 'Pro', price: 'Rp 5 — 15 jt', features: ['Integrasi fleksibel', 'WebSocket (opsional)', 'Queue / proses asinkron', 'Monitoring', 'Support 3 bulan'] },
      { name: 'Enterprise', price: 'Rp 15jt+', features: ['Event-driven (opsional)', 'API gateway', 'Rate limiting', 'Multi environment (dev/staging/prod)', 'SLA'] },
    ],
  },
  6: {
    longDesc:
      'Audit sistem yang sudah ada, rekomendasi arsitektur, dan roadmap implementasi. Tujuannya: lebih stabil, lebih mudah dikembangkan, dan siap scale tanpa membebani tim.',
    packages: [
      { name: 'Standard', price: 'Rp 2 — 5 jt', features: ['2 sesi konsultasi', 'Rekomendasi tech stack', 'Diagram arsitektur', 'Ringkasan tertulis'] },
      { name: 'Pro', price: 'Rp 5 — 15 jt', features: ['Audit sistem', 'Desain arsitektur end-to-end', 'Roadmap implementasi', 'Workshop tim (1 hari)'] },
      { name: 'Enterprise', price: 'Hubungi kami', features: ['Pendampingan berkala', 'CTO as a Service', 'Bantu tim (augmentasi)', 'Review bulanan'] },
    ],
  },
  7: {
    longDesc:
      'Solusi IoT end-to-end: firmware, MQTT, dashboard monitoring, dan alert. Data historis tersimpan, bisa dianalisis, dan perangkat bisa di-update jarak jauh (OTA).',
    packages: [
      { name: 'Standard', price: 'Rp 10 — 20 jt', features: ['1–5 node sensor', 'Setup MQTT broker', 'Dashboard dasar', 'Sistem alert', 'Dokumentasi teknis'] },
      { name: 'Pro', price: 'Rp 20 — 50 jt', features: ['Hingga 50 node', 'Monitoring real-time', 'Data historis', 'Aplikasi mobile (opsional)', 'Support 3 bulan'] },
      { name: 'Enterprise', price: 'Rp 50jt+', features: ['Node fleksibel', 'Edge computing (opsional)', 'Predictive maintenance (opsional)', 'Update OTA', 'SLA'] },
    ],
  },
  8: {
    longDesc:
      'Sistem internal perusahaan (ERP/CRM/HR) sesuai proses bisnis kamu. Hak akses jelas, audit trail, laporan rapi, dan integrasi dengan sistem yang sudah ada.',
    packages: [
      { name: 'Standard', price: 'Rp 30 — 60 jt', features: ['1 modul utama', 'Manajemen user', 'Laporan dasar', 'Tampilan mobile', 'Support 3 bulan'] },
      { name: 'Pro', price: 'Rp 60 — 150 jt', features: ['Multi-modul', 'Role & permission', 'Laporan lanjutan', 'API & integrasi', 'Support 6 bulan'] },
      { name: 'Enterprise', price: 'Rp 150jt+', features: ['Suite enterprise', 'Multi-tenant', 'Dashboard BI', 'SLA', 'Tim dedicated'] },
    ],
  },
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Cerita Dulu',
    desc: 'Kamu cerita lewat brief online atau langsung chat di WhatsApp. Dari situ kami pahami masalahnya, bukan langsung lompat ke solusi.',
    icon: 'FileText',
  },
  {
    number: '02',
    title: 'Kami Kirim Proposal',
    desc: 'Dalam 1–2 hari kami balas dengan proposal: apa yang dikerjakan, berapa lama, dan berapa biayanya. Kalau ada yang nggak klop, kita diskusi sampai sama-sama setuju.',
    icon: 'ClipboardList',
  },
  {
    number: '03',
    title: 'Tanda Tangan & Mulai',
    desc: 'Kontrak ditandatangani, DP dibayar, repo dan staging disiapkan. Dari sini kamu dapat Project ID buat mantau progress di tracker.',
    icon: 'Handshake',
  },
  {
    number: '04',
    title: 'Kamu Bisa Lihat Langsung',
    desc: 'Pengerjaan jalan di staging — bukan di laptop kami yang nggak bisa kamu lihat. Tiap milestone selesai, kami kabari dan minta feedback sebelum lanjut.',
    icon: 'Code2',
  },
  {
    number: '05',
    title: 'Rilis & Nggak Hilang',
    desc: 'Setelah semua oke, kita rilis ke production bareng. Source code diserahkan, dan kami masih ada 30 hari untuk beresin kalau ada bug yang muncul.',
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
  { name: 'Next.js',         slug: 'nextdotjs' },
  { name: 'React',           slug: 'react' },
  { name: 'Flutter',         slug: 'flutter' },
  { name: 'FastAPI',         slug: 'fastapi' },
  { name: 'Laravel',         slug: 'laravel' },
  { name: 'TensorFlow',      slug: 'tensorflow' },
  { name: 'PostgreSQL',      slug: 'postgresql' },
  { name: 'Docker',          slug: 'docker' },
  { name: 'Supabase',        slug: 'supabase' },
  { name: 'Three.js',        slug: 'threedotjs' },
  { name: 'Python',          slug: 'python' },
  { name: 'TypeScript',      slug: 'typescript' },
  { name: 'Figma',           slug: 'figma' },
  { name: 'GitHub Actions',  slug: 'githubactions' },
  { name: 'Redis',           slug: 'redis' },
  { name: 'Framer',          slug: 'framer' },
  { name: 'Tailwind CSS',    slug: 'tailwindcss' },
  { name: 'Vercel',          slug: 'vercel' },
]

export const LAYANAN_POINTS: Record<number, string[]> = {
  1: ['Website company profile / web app', 'Dashboard admin sesuai kebutuhan', 'Portal pelanggan/member', 'Integrasi pembayaran & API', 'SEO dan performa cepat', 'Mudah dikembangkan & dirawat'],
  2: ['Aplikasi Android & iOS (cross-platform)', 'UI/UX mobile-first', 'Notifikasi push & deep link', 'Integrasi API backend', 'Mode offline (opsional)', 'Bantuan rilis ke store'],
  3: ['Desain fokus konversi', 'Animasi & micro-interaction halus', 'A/B testing (opsional)', 'Loading cepat', 'Integrasi WhatsApp/CRM', 'Analytics & pelacakan'],
  4: ['Model prediksi & rekomendasi', 'Dashboard analitik bisnis', 'Natural Language Processing (NLP)', 'Pipeline data', 'API inferensi real-time', 'Monitoring & retraining model'],
  5: ['Payment gateway (Midtrans, Xendit)', 'Maps & geolocation API', 'Notifikasi (WA/email/push)', 'Webhook pihak ketiga', 'Queue & proses asinkron', 'Dokumentasi teknis'],
  6: ['Audit sistem yang sudah berjalan', 'Rekomendasi tech stack', 'Dokumentasi teknis', 'Roadmap & estimasi', 'Workshop tim & knowledge transfer', 'Pendampingan CTO (opsional)'],
  7: ['Integrasi sensor & hardware', 'Dashboard monitoring real-time', 'Alert & notifikasi otomatis', 'Kontrol jarak jauh via aplikasi', 'Update firmware OTA', 'Edge computing (opsional)'],
  8: ['ERP/CRM/HRM/LMS/POS (custom)', 'Role & permission', 'Reporting & dashboard', 'Siap banyak pengguna', 'Integrasi sistem yang sudah ada', 'Support prioritas & SLA'],
}

export const FAQ_ITEMS = [
  {
    q: 'Berapa lama pengerjaan proyek?',
    a: 'Tergantung kompleksitas. Landing page biasanya 3–5 hari kerja, website company profile 1–2 minggu, web app atau aplikasi mobile 3–8 minggu. Estimasi detail kami tulis di proposal setelah brief kami terima.',
  },
  {
    q: 'Bagaimana sistem pembayaran di Pixcode?',
    a: 'Umumnya 2 tahap: DP 50% sebelum pengerjaan dimulai, dan pelunasan 50% sebelum rilis ke production. Detailnya kami tulis di kontrak.',
  },
  {
    q: 'Berapa kali revisi yang termasuk?',
    a: 'Setiap proyek mendapat 2 kali revisi minor setelah delivery. Revisi minor mencakup perubahan teks, warna, atau gambar yang tidak mengubah fitur utama. Revisi di luar itu akan kami estimasi dulu supaya jelas scope dan biayanya.',
  },
  {
    q: 'Apakah ada garansi setelah proyek selesai?',
    a: 'Ada. Kami memberikan garansi bug-fix selama 30 hari setelah rilis. Bug yang muncul dari pengerjaan kami akan diperbaiki tanpa biaya tambahan.',
  },
  {
    q: 'Apakah source code menjadi milik saya setelah selesai?',
    a: 'Ya. Setelah pelunasan, source code dan aset digital diserahkan ke kamu. Sebelum pelunasan, akses dan kepemilikan mengikuti ketentuan di kontrak.',
  },
  {
    q: 'Apakah Pixcode bisa melanjutkan proyek yang sudah setengah jalan?',
    a: 'Bisa. Kami mulai dengan audit singkat untuk memahami struktur, risiko, dan prioritas perbaikannya. Setelah itu baru kita sepakati langkah lanjutannya.',
  },
  {
    q: 'Apakah tersedia layanan maintenance setelah proyek selesai?',
    a: 'Ada. Kamu bisa pilih: handover penuh (tim kamu yang lanjut), atau retainer/managed maintenance (kami yang merawat, memperbaiki bug, dan melakukan update berkala).',
  },
  {
    q: 'Apa yang terjadi jika proyek dibatalkan di tengah jalan?',
    a: 'Jika proyek dibatalkan setelah DP diterima, DP tidak dapat dikembalikan karena waktu dan sumber daya sudah dialokasikan sejak awal pengerjaan. Detail ketentuannya tercantum di kontrak.',
  },
]

export const STATS = [
  { value: '24 jam', label: 'Respons' },
  { value: '30 hari', label: 'Garansi bug-fix' },
  { value: '2', label: 'Core team' },
  { value: '8', label: 'Layanan' },
]

export const NAV_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Tracker Proyek', href: '/tracker' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
]

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'sigap-erp',
    title: 'SIGAP — ERP Logistik',
    client: 'PT Maju Bersama Logistik',
    category: 'Enterprise',
    desc: 'Sistem ERP untuk perusahaan logistik dengan modul pengiriman, fleet management, dan laporan keuangan real-time. Menggantikan proses manual Excel yang sudah 5 tahun berjalan.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    year: '2024',
    featured: true,
    color: '#0A84FF',
  },
  {
    id: 'kulina-mobile',
    title: 'Kulina — Catering App',
    client: 'Kulina.id',
    category: 'Mobile',
    desc: 'Aplikasi mobile pemesanan catering harian untuk karyawan kantoran. Fitur subscription, jadwal pengiriman, dan pilihan menu mingguan.',
    tech: ['Flutter', 'FastAPI', 'PostgreSQL', 'Midtrans'],
    year: '2024',
    featured: true,
    color: '#FF9F0A',
  },
  {
    id: 'tanam-ai',
    title: 'TanamAI — Deteksi Penyakit Tanaman',
    isPersonal: true,
    category: 'AI',
    desc: 'Model klasifikasi penyakit tanaman padi berbasis gambar dengan akurasi 91%. Dashboard monitoring untuk penyuluh pertanian di Jawa Tengah.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    year: '2024',
    featured: true,
    color: '#34C759',
  },
  {
    id: 'raka-landing',
    title: 'Raka Furniture — Landing Page',
    client: 'Raka Furniture Semarang',
    category: 'Landing',
    desc: 'Landing page produk furniture custom dengan galeri interaktif, kalkulator estimasi harga, dan direct order via WhatsApp.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    year: '2025',
    color: '#8E44AD',
  },
  {
    id: 'pantau-iot',
    title: 'PantauTani — IoT Greenhouse',
    client: 'CV Agro Nusantara',
    category: 'IoT',
    desc: 'Sistem monitoring greenhouse: sensor suhu, kelembaban, pH tanah, dan otomasi penyiraman. Dashboard real-time + alert WhatsApp kalau ada yang anomali.',
    tech: ['ESP32', 'MQTT', 'FastAPI', 'React'],
    year: '2025',
    color: '#30B0C7',
  },
  {
    id: 'dokter-web',
    title: 'Klinik Sehat — Web App',
    client: 'Klinik Sehat Semarang',
    category: 'Web',
    desc: 'Web app manajemen klinik: jadwal dokter, antrian online, rekam medis digital, dan laporan kunjungan bulanan.',
    tech: ['Next.js', 'Laravel', 'MySQL'],
    year: '2025',
    color: '#E8522A',
  },
]

export const PORTFOLIO_CATEGORIES = ['Semua', 'Web', 'Mobile', 'AI', 'IoT', 'Enterprise', 'Landing'] as const

export const TRACKER_PROJECTS: TrackerProject[] = [
  {
    id: 'PXC-2025-001',
    name: 'SIGAP ERP — Modul Pengiriman',
    client: 'PT Maju Bersama Logistik',
    startDate: '12 Mar 2025',
    estimatedEnd: '30 Mei 2025',
    progress: 75,
    steps: [
      { title: 'Brief & Proposal', status: 'done', date: '12 Mar' },
      { title: 'Kontrak & Setup', status: 'done', date: '18 Mar' },
      { title: 'Development', status: 'active', date: 'Est. 10 Mei' },
      { title: 'Testing & Review', status: 'pending' },
      { title: 'Deploy & Serah Terima', status: 'pending' },
    ],
  },
  {
    id: 'PXC-2025-002',
    name: 'Kulina Mobile App — v2',
    client: 'Kulina.id',
    startDate: '3 Apr 2025',
    estimatedEnd: '20 Jun 2025',
    progress: 40,
    steps: [
      { title: 'Brief & Proposal', status: 'done', date: '3 Apr' },
      { title: 'Kontrak & Setup', status: 'done', date: '9 Apr' },
      { title: 'Development', status: 'active', date: 'Est. 2 Jun' },
      { title: 'Testing & Review', status: 'pending' },
      { title: 'Deploy & Serah Terima', status: 'pending' },
    ],
  },
  {
    id: 'PXC-2025-003',
    name: 'PantauTani — Dashboard IoT',
    client: 'CV Agro Nusantara',
    startDate: '22 Apr 2025',
    estimatedEnd: '15 Jun 2025',
    progress: 20,
    steps: [
      { title: 'Brief & Proposal', status: 'done', date: '22 Apr' },
      { title: 'Kontrak & Setup', status: 'active', date: 'Est. 5 Mei' },
      { title: 'Development', status: 'pending' },
      { title: 'Testing & Review', status: 'pending' },
      { title: 'Deploy & Serah Terima', status: 'pending' },
    ],
  },
]

export const TEAM = [
  {
    name: 'Pamong',
    role: 'Backend · ML · Database',
    bio: 'Yang bikin server-nya nggak jatuh dan model-nya beneran akurat. Kalau ada bug di production jam 2 pagi, dia yang pertama tahu.',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'TensorFlow', 'Docker', 'System Design'],
    color: '#C8FF00',
  },
  {
    name: 'Nasywa',
    role: 'Frontend · Mobile · UI/UX',
    bio: 'Ngubah desain di Figma jadi UI yang enak dipakai — di web maupun mobile. Kalau ada yang pixel-nya geser 2px, dia yang pertama protes.',
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
  'Berani & Kontras',
  'Korporat & Profesional',
  'Ramah & Ceria',
  'Elegan & Mewah',
  'Teknologi & Futuristik',
]
