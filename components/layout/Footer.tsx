import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, MessageCircle } from 'lucide-react'

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '6285121595158'
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 'halo@pixcode.id'

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

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/pixcode.id',
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/pixcode',
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pixcode',
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WA_NUMBER}`,
    svg: <MessageCircle size={15} />,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1C1410' }} className="text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-5">
              <Image
                src="/pixcode_logo.png"
                alt="Pixcode"
                width={160}
                height={48}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-[14px] leading-relaxed max-w-xs font-sans mb-6 text-white/60">
              Micro digital agency berbasis di Semarang. Kami bangun solusi digital yang tidak sekadar berjalan — tapi berkinerja.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5 mb-7">
              <a
                href="https://maps.google.com/?q=Semarang"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] font-sans transition-colors hover:text-white text-white/60"
              >
                <MapPin size={14} className="text-[#E8522A] shrink-0" />
                Semarang, Jawa Tengah
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-[13px] font-sans transition-colors hover:text-white text-white/60"
              >
                <Mail size={14} className="text-[#E8522A] shrink-0" />
                {EMAIL}
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-white/10 text-white/60 hover:bg-[#E8522A] hover:text-white"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-5 font-sans"
                style={{ color: '#E8522A' }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-sans transition-colors hover:text-white text-white/50"
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
      <div style={{ borderTop: '1px solid #2C201A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] font-sans text-white/40">
            © {new Date().getFullYear()} Pixcode. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
