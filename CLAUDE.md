# PIXCODE — Company Profile Website
## CLAUDE.md — Vibe Coding Document

---

## 🎯 Project Overview

**Pixcode** adalah micro agency digital berbasis di Semarang, Indonesia yang menawarkan layanan web, mobile, AI/ML, IoT, dan enterprise system development. Website ini adalah company profile resmi Pixcode yang berfungsi sebagai platform untuk menarik klien, menampilkan portofolio, dan memudahkan onboarding klien baru.

**Domain:** pixcode.id  
**Email:** halo@pixcode.id  
**Lokasi:** Semarang, Jawa Tengah  
**Tim:** Pamong (Backend, ML, DB) + Nasywa (Frontend, Mobile)

---

## 🎨 Design Direction

### Vibe & Aesthetic
- **Apple Modern Skeuomorphism / Soft Spatial UI** — Tampilan bersih, *"elevated"*, dan berkelas ala presentasi fitur Apple (seperti iOS 18 Control Center / Apple Intelligence).
- **Elevated Tiles / Timbul Effect** — Kotak/elemen UI mayoritas menggunakan `bg-white` (Pure White) yang diletakkan di atas *background* abu-abu super pucat (seperti `bg-[#F5F5F7]`) agar elemen *"pop-out"* (timbul).
- **Edge Highlights & Ambient Shadows** — Penggunaan bayangan halus yang memancar/menyebar (`shadow-[0_4px_24px...]`) + garis tepi cahaya tipis di dalam kotak (`ring-1 ring-black/[0.03]`) untuk memberikan volume fisik 3D, bukan *flat design* biasa.
- **Vibrant tapi Halus (Non-Monoton)** — Tidak pakai *border* (garis outline) norak. Warna untuk membedakan fitur dimasukkan lewat *soft gradients* (seperti ungu pucat, oranye terang) atau grafis *mockup* berwarna di atas kanvas putih.
- **Asymmetric Bento Grid** — Layout editorial, penggunaan *whitespace* yang luas (bernapas), dan corner radius ekstra tumpul (`rounded-[40px]`).

### Color Palette

```css
// Brand Colors & Warm Palette
--orange-primary: #E8522A  /* Bintang Utama (Hero) */
--warm-cream: #F5EFE6      /* Latar alternatif empuk */
--warm-white: #FFFBF7      /* Latar paling bersih bersanding white */
--warm-gray: #EDE8E3
--soft-orange: #FDE8DE

// Apple Light Mode (Base UI)
--bg-apple: #F5F5F7        /* Latar web utama pembuat efek Elevasi/Timbul */
--card-white: #FFFFFF
--text-dark: #1A1A1A       /* Jangan pure black #000000 */
--text-muted: #666666
```

### Typography
```
Font Display: 'Syne' (700, 800) — headings, logo, section titles
Font Body: 'DM Sans' (300, 400, 500, 600) — body text, UI elements
```

### Design Principles
- Bold, large typography — font size hero h1 minimal 64px
- Asymmetric layouts — teks kiri, visual kanan
- Editorial feel — uppercase labels, letter-spacing
- Cards dengan subtle border dan hover effects
- Gradient accent hanya pada elemen penting (CTA button, progress bar, accent lines)
- NO generic AI slop aesthetics (no purple gradients, no Inter font, no cookie-cutter layouts)

---

## 🛠 Tech Stack

```
Framework:     Next.js 14 (App Router)
Styling:       Tailwind CSS v3
3D:            Three.js + React Three Fiber + @react-three/drei
Animation:     Framer Motion
Theme:         next-themes (dark/light mode)
Forms:         React Hook Form + Zod validation
Icons:         Lucide React
WA Integration: Fonnte API (auto send brief ke WA)
PDF Generate:  @react-pdf/renderer
Deploy:        Vercel
```

---

## 📁 Project Structure

```
pixcode/
├── app/
│   ├── layout.tsx              # Root layout + ThemeProvider + fonts
│   ├── page.tsx                # Home page
│   ├── layanan/
│   │   └── page.tsx            # Services page
│   ├── portofolio/
│   │   └── page.tsx            # Portfolio page
│   ├── tracker/
│   │   └── page.tsx            # Project tracker page
│   ├── brief/
│   │   └── page.tsx            # Brief form page
│   ├── tentang/
│   │   └── page.tsx            # About page
│   └── kontak/
│       └── page.tsx            # Contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed navbar + theme toggle
│   │   └── Footer.tsx          # Footer
│   ├── home/
│   │   ├── Hero.tsx            # Hero section + Three.js canvas
│   │   ├── Services.tsx        # 8 layanan preview
│   │   ├── Process.tsx         # 5-step proses kerja
│   │   ├── Stats.tsx           # Stats counter
│   │   └── CTA.tsx             # Call to action section
│   ├── three/
│   │   ├── HeroScene.tsx       # Three.js scene — hexagon 3D object
│   │   └── FloatingParticles.tsx # Background particles
│   ├── layanan/
│   │   └── ServiceCard.tsx     # Service card component
│   ├── portofolio/
│   │   ├── ProjectCard.tsx     # Portfolio card
│   │   └── FilterBar.tsx       # Category filter
│   ├── tracker/
│   │   └── ProjectTracker.tsx  # Tracker dengan progress steps
│   ├── brief/
│   │   ├── BriefForm.tsx       # Multi-step brief form
│   │   └── PackageSelector.tsx # Paket Standard/Pro/Enterprise
│   ├── techstack/
│   │   └── TechGrid.tsx        # Tech stack dengan tab kategori
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── SectionLabel.tsx    # Uppercase label dengan garis
│       └── ThemeToggle.tsx     # Dark/light mode toggle button
├── lib/
│   ├── fonnte.ts               # WA API integration
│   ├── pdf-generator.ts        # Auto generate brief PDF
│   └── constants.ts            # Layanan, tech stack data
├── hooks/
│   └── useTheme.ts
├── types/
│   └── index.ts
└── public/
    ├── logo.png                # Pixcode logo transparan
    └── fonts/
```

---

## 📄 Pages & Sections

### Home (`/`)
1. **Navbar** — logo, links, dark/light toggle, CTA button
2. **Hero** — tagline besar, deskripsi, CTA buttons, stats, Three.js hexagon 3D
3. **Services** — preview 8 layanan dalam grid cards
4. **Process** — 5 langkah proses kerja (Brief → Proposal → Kontrak → Dev → Deploy)
5. **Tech Stack Preview** — beberapa logo tech stack
6. **CTA Banner** — ajakan konsultasi gratis

### Layanan (`/layanan`)
8 layanan lengkap dengan deskripsi, tech yang dipakai, dan range harga:
1. Website & Web App
2. Mobile App
3. Landing Page
4. AI, ML & Data Science
5. Integration & APIs
6. IT Consultant & Architecture
7. Enterprise Application Development
8. IoT & Automation Development

### Portofolio (`/portofolio`)
- Filter by kategori (All, Web, Mobile, AI, IoT, Enterprise)
- Project cards dengan thumbnail, nama klien (atau fiktif), tech stack, deskripsi singkat
- Klik card → detail project

### Tracker (`/tracker`)
- Input field: masukkan Project ID
- Tampil: nama project, klien, progress bar, 5 step tracker
- Step status: Done (✓), Active (⚙), Pending
- Estimasi selesai, tanggal mulai

### Brief (`/brief`)
Multi-step form:
1. Data klien (nama, WA, email, perusahaan)
2. Info project (jenis, paket, budget, deadline)
3. Deskripsi (cerita project, masalah, fitur)
4. Preferensi tampilan (tone, warna, referensi)
5. Hak kepemilikan (Opsi A/B)

**Flow setelah submit:**
- Auto generate PDF brief
- Kirim PDF ke WA Pixcode via Fonnte API
- Kirim konfirmasi ke WA klien
- Redirect ke halaman sukses

### Tentang (`/tentang`)
- Story Pixcode
- Tim (Pamong + Nasywa) dengan foto dan role
- Visi misi
- Values

### Kontak (`/kontak`)
- Form kontak simple
- WA link langsung
- Email
- Lokasi Semarang

---

## 🧩 Component Conventions

### Naming
- PascalCase untuk components
- camelCase untuk functions dan variables
- kebab-case untuk CSS classes
- SCREAMING_SNAKE_CASE untuk constants

### Component Template
```tsx
// components/ui/Button.tsx
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'font-semibold rounded-[10px] transition-all duration-200',
        variant === 'primary' && 'bg-gradient-to-r from-[#1B6FFF] to-[#00C4CC] text-white',
        variant === 'secondary' && 'border border-[#1A3050] text-white hover:border-[#00C4CC]',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        className
      )}
    >
      {children}
    </button>
  )
}
```

### Section Label Component
```tsx
// Selalu pakai ini untuk section label
<SectionLabel>Layanan Kami</SectionLabel>
// Output: garis biru + teks uppercase tosca + letter-spacing
```

### Theme-aware Styling
```tsx
// SELALU gunakan dark: prefix untuk dark mode
<div className="bg-[#F1F5F9] dark:bg-[#030B18] text-[#0F172A] dark:text-[#E2EAF4]">
```

---

## 🌐 Three.js Hero Scene

### HeroScene.tsx spec
```tsx
// Object: Soft Abstract 3D Geometric / Glassmorphism Orbs / Apple-style fluid shapes
// Material: MeshPhysicalMaterial — transmission (glass), high roughness (frosted), clearcoat
// Color: Soft warm gradients (Orange, Warm White, Peach) membaur seperti logo Apple Intelligence/Siri
// Animation: Very smooth fluid floating (up-down sin wave) + slow rotation
// Lighting: Ambient soft light + subtle warm point lights to create a glowing aura
// Environment: preset 'studio' atau 'apartment' yang terang/soft
// Camera: perspective, FOV 45, position [0, 0, 8]
// Controls: Auto-rotate, no user interaction on mobile
```

### Referensi visual
Abstract 3D shapes di Apple Intelligence, frosted glass objects, material semi-transparan yang membiaskan cahaya di latar belakang abu-abu terang (Clean, Soft, Premium Spatial UI).

---

## 📱 Responsive Breakpoints

```
Mobile:  < 768px  → single column, hamburger menu
Tablet:  768-1024px → 2 column grid
Desktop: > 1024px → full layout
```

---

## 🔌 API Integrations

### Fonnte WA API (Brief Form)
```typescript
// lib/fonnte.ts
const sendWA = async (phone: string, message: string) => {
  const response = await fetch('https://api.fonnte.com/send', {
    method: 'POST',
    headers: {
      'Authorization': process.env.FONNTE_TOKEN!
    },
    body: JSON.stringify({
      target: phone,
      message: message,
      countryCode: '62'
    })
  })
  return response.json()
}
```

### Environment Variables
```env
FONNTE_TOKEN=your_fonnte_token
NEXT_PUBLIC_WA_NUMBER=628xxxxxxxxxx
NEXT_PUBLIC_EMAIL=halo@pixcode.id
```

---

## 📦 Services Data

```typescript
// lib/constants.ts
export const SERVICES = [
  {
    id: 1,
    name: 'Website & Web App',
    desc: 'Company profile, portal pelanggan, dashboard admin terintegrasi.',
    tag: 'Most Popular',
    icon: 'Globe',
    price: 'Mulai dari Rp 3jt',
    tech: ['Next.js', 'React', 'Laravel', 'PostgreSQL']
  },
  {
    id: 2,
    name: 'Mobile App',
    desc: 'Aplikasi Android & iOS cross-platform yang performant.',
    tag: 'Android & iOS',
    icon: 'Smartphone',
    price: 'Mulai dari Rp 10jt',
    tech: ['Flutter', 'React Native', 'FastAPI']
  },
  {
    id: 3,
    name: 'Landing Page',
    desc: 'Halaman konversi tinggi untuk campaign dan product launch.',
    tag: 'High Converting',
    icon: 'Zap',
    price: 'Mulai dari Rp 1.5jt',
    tech: ['Next.js', 'Tailwind', 'Framer Motion']
  },
  {
    id: 4,
    name: 'AI, ML & Data Science',
    desc: 'Prediksi, rekomendasi, analitik bisnis, dan dashboard intelligence.',
    tag: 'Senjata Rahasia',
    icon: 'Brain',
    price: 'Mulai dari Rp 15jt',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL']
  },
  {
    id: 5,
    name: 'Integration & APIs',
    desc: 'Payment gateway, maps, notifikasi, dan sistem pihak ketiga.',
    tag: 'Plug & Play',
    icon: 'Link',
    price: 'Mulai dari Rp 2jt',
    tech: ['FastAPI', 'Node.js', 'REST', 'WebSocket']
  },
  {
    id: 6,
    name: 'IT Consultant & Architecture',
    desc: 'Konsultasi arsitektur sistem dan pemilihan tech stack.',
    tag: 'Expert Advice',
    icon: 'Lightbulb',
    price: 'Hubungi kami',
    tech: ['System Design', 'Cloud', 'DevOps']
  },
  {
    id: 7,
    name: 'Enterprise Application Development',
    desc: 'ERP, CRM, HRM, LMS, POS — sistem bisnis custom skala perusahaan.',
    tag: 'High Value',
    icon: 'Building2',
    price: 'Mulai dari Rp 30jt',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker']
  },
  {
    id: 8,
    name: 'IoT & Automation Development',
    desc: 'Sistem otomasi dan IoT — sensor, monitoring real-time, kontrol jarak jauh.',
    tag: 'Niche & Powerful',
    icon: 'Cpu',
    price: 'Mulai dari Rp 10jt',
    tech: ['ESP32', 'MQTT', 'FastAPI', 'React']
  }
]

export const TECH_STACK = {
  Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  Mobile: ['Flutter', 'React Native'],
  Backend: ['FastAPI', 'Laravel', 'Node.js'],
  Database: ['PostgreSQL', 'MySQL', 'Redis', 'TimescaleDB'],
  'AI / ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face'],
  'DevOps & Cloud': ['Vercel', 'Railway', 'Supabase', 'Docker', 'GitHub Actions'],
  IoT: ['ESP32', 'Arduino', 'Raspberry Pi', 'MQTT'],
  Tools: ['Figma', 'Git', 'Postman', 'Sentry']
}
```

---

## ✅ Coding Rules

1. **Selalu pakai TypeScript** — no any, define types dengan benar
2. **Server Components by default** — hanya pakai 'use client' kalau perlu interaktivity
3. **No inline styles** — semua pakai Tailwind classes
4. **Apple Soft Light Mode Default** — Tidak pakai *dark mode*. Fokus berikan UI yang *clean*, abu-abu muda/putih, dan perhatikan efek timbul/shadow.
5. **Mobile first** — design dari mobile dulu, baru desktop
6. **Semantic HTML** — pakai section, article, nav, main, footer dengan benar
7. **Image optimization** — selalu pakai next/image
8. **Font optimization** — selalu pakai next/font
9. **No hardcoded strings** — semua text konten dari constants atau props
10. **Consistent spacing** — pakai Tailwind spacing scale, jangan arbitrary values kecuali terpaksa
11. - Pakai **Tailwind CSS v4** — gunakan `bg-linear-to-r` bukan `bg-gradient-to-r`

---

## 🚀 Getting Started

```bash
# Clone dan install
git clone <repo>
cd pixcode
npm install

# Setup env
cp .env.example .env.local
# Isi FONNTE_TOKEN dan variabel lainnya

# Development
npm run dev

# Build
npm run build
npm run start
```

---

## 📝 Notes

- Logo Pixcode ada di `public/logo.png` — hexagon gradient biru-tosca
- Semua dokumen klien (brief, proposal, kontrak, invoice) ada templatenya — bisa diintegrasikan ke form brief
- Project tracker menggunakan static data dulu — nanti bisa dikoneksikan ke database
- Bahasa default: Indonesia, konten Inggris di beberapa label UI saja
- Prioritas pertama: Home page + Brief form (ini yang paling penting buat nyari klien)

