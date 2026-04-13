import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

const FOOTER_LINKS = {
  Layanan: [
    { label: 'Website & Web App', href: '/layanan' },
    { label: 'Mobile App', href: '/layanan' },
    { label: 'AI & ML', href: '/layanan' },
    { label: 'IoT & Automation', href: '/layanan' },
    { label: 'Enterprise App', href: '/layanan' },
  ],
  Perusahaan: [
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Portofolio', href: '/portofolio' },
    { label: 'Project Tracker', href: '/tracker' },
    { label: 'Kontak', href: '/kontak' },
  ],
  Klien: [
    { label: 'Isi Brief Project', href: '/brief' },
    { label: 'Cek Status Project', href: '/tracker' },
    { label: 'Konsultasi Gratis', href: '/kontak' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-footer-dark text-white border-t border-[#2A2A2A]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-orange flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-lg text-white">pixcode</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs font-sans">
              Micro digital agency berbasis di Semarang, Indonesia. Kami bangun solusi digital
              yang tidak sekadar berjalan — tapi berkinerja.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/60 font-sans">
              <span>📍 Semarang, Jawa Tengah</span>
              <a
                href="mailto:halo@pixcode.id"
                className="hover:text-accent-orange transition-colors"
              >
                ✉️ halo@pixcode.id
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/90 mb-4 font-display">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 font-sans">
            © {new Date().getFullYear()} Pixcode. All rights reserved.
          </p>
          <p className="text-xs text-white/50 font-sans">
            Dibuat dengan{' '}
            <span className="text-accent-orange font-medium">Next.js</span> ·{' '}
            <span className="text-[#FE6037] font-medium">Tailwind CSS</span> ·{' '}
            <span className="text-white/80 font-medium">GSAP</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
