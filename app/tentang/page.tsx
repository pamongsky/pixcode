'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { TEAM, STATS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const VALUES = [
  { icon: '⚡', title: 'Transparan', desc: 'Tidak ada biaya tersembunyi. Timeline realistis. Update rutin tanpa diminta.' },
  { icon: '🎯', title: 'Tepat Sasaran', desc: 'Kita tidak build fitur yang tidak perlu. Fokus pada apa yang benar-benar solve masalah.' },
  { icon: '🤝', title: 'Partnership', desc: 'Kita bukan vendor. Kita partner — investasi dalam kesuksesan project kamu sama seperti kamu.' },
  { icon: '🔥', title: 'Crafted with Pride', desc: 'Setiap baris kode ditulis dengan standar tinggi. Kita bangga dengan karya yang kita kirim.' },
]

export default function TentangPage() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      gsap.fromTo('.val-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.vals-grid', start: 'top 80%' },
      })
      gsap.fromTo('.team-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.team-grid', start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-bg-cream">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={headerRef} className="max-w-3xl">
            <SectionLabel className="mb-6">Tentang Kami</SectionLabel>
            <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] text-text-black leading-tight mb-6">
              Dua Developer.{' '}
              <span className="gradient-text">Satu Misi.</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed font-sans max-w-2xl">
              Pixcode dimulai dari frustrasi yang sama — klien yang kecewa dengan agency yang overpromise,
              over-budget, dan underdeliver. Kami build Pixcode untuk jadi alternatif: kecil, fokus,
              dan benar-benar peduli dengan hasil.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-bg-cream border-t border-[#D4D4C8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="mb-4">Cerita Kami</SectionLabel>
              <h2 className="font-display font-bold text-3xl text-text-black mb-6 leading-tight">
                Micro Agency yang Tidak Micro dalam Kualitas.
              </h2>
              <div className="space-y-4 text-text-muted font-sans leading-relaxed">
                <p>
                  Kami percaya bahwa ukuran tim tidak menentukan kualitas output. Yang menentukan
                  adalah passion, skill, dan komitmen. Dengan tim kecil yang tightly-knit, setiap
                  project mendapat perhatian penuh — bukan sekadar task di backlog.
                </p>
                <p>
                  Berbasis di Semarang, kami melayani klien dari seluruh Indonesia. Dari startup
                  stage pertama hingga perusahaan yang butuh digitalisasi proses bisnis kompleks.
                </p>
                <p>
                  Setiap project yang kami terima adalah partnership — bukan transaksi. Kami invest
                  waktu untuk benar-benar memahami masalah sebelum menulis satu baris kode pun.
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white border border-[#D4D4C8] text-center"
                >
                  <p className="font-display font-black text-4xl text-text-black mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-muted font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-bg-cream border-t border-[#D4D4C8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4">Tim</SectionLabel>
          <h2 className="font-display font-bold text-3xl text-text-black mb-12">
            Orang-orang di Balik <span className="gradient-text">Pixcode.</span>
          </h2>
          <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="team-card p-7 rounded-2xl bg-white border border-[#D4D4C8] hover:border-accent-orange/40 transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-2xl font-bold font-display text-white"
                  style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`, border: `1px solid ${member.color}40` }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-bold text-xl text-text-black mb-1">{member.name}</h3>
                <p className="text-xs text-text-muted mb-4 font-sans leading-relaxed">{member.role}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-5 font-sans">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-[10px] px-2.5 py-1 rounded-full border font-sans"
                      style={{ borderColor: `${member.color}40`, color: member.color, background: `${member.color}10` }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-cream border-t border-[#D4D4C8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-4">Values</SectionLabel>
          <h2 className="font-display font-bold text-3xl text-text-black mb-12">
            Prinsip yang Kami Pegang <span className="gradient-text">Teguh.</span>
          </h2>
          <div className="vals-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((val) => (
              <div key={val.title} className="val-card p-6 rounded-2xl bg-bg-cream border border-[#D4D4C8] hover:border-accent-orange/40 transition-all duration-300">
                <span className="text-3xl mb-4 block">{val.icon}</span>
                <h4 className="font-display font-bold text-text-black mb-2">{val.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed font-sans">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-bg-cream border-t border-[#D4D4C8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#D4D4C8]">
              <div className="w-10 h-10 rounded-xl bg-accent-orange border border-accent-orange/30 flex items-center justify-center mb-4">
                <span className="text-lg">🎯</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-black mb-3">Visi</h3>
              <p className="text-text-muted font-sans leading-relaxed">
                Menjadi micro digital agency paling terpercaya di Indonesia — dikenal karena kualitas,
                kejujuran, dan dampak nyata yang kami ciptakan untuk setiap klien.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-[#D4D4C8]">
              <div className="w-10 h-10 rounded-xl bg-accent-orange border border-accent-orange/30 flex items-center justify-center mb-4">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-black mb-3">Misi</h3>
              <p className="text-text-muted font-sans leading-relaxed">
                Membantu bisnis Indonesia bertransformasi digital dengan solusi yang terukur,
                transparan, dan dibangun dengan standar engineering kelas dunia — tanpa harga kelas dunia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-cream border-t border-[#D4D4C8] text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="font-display font-bold text-2xl text-text-black mb-3">
            Ingin bekerja sama dengan kami?
          </h3>
          <p className="text-text-muted font-sans mb-6">Mulai dengan brief — gratis, tanpa komitmen.</p>
          <Link
            href="/brief"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent-orange text-text-black hover:opacity-90 transition-all font-sans"
          >
            Mulai Brief Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
