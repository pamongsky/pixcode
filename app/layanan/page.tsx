'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/layanan/ServiceCard'
import { SERVICES } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

export default function LayananPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.svc-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-bg-cream">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={headerRef}>
            <SectionLabel className="mb-6">Layanan</SectionLabel>
            <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] text-text-black leading-tight mb-6 max-w-3xl">
              8 Layanan Digital{' '}
              <span className="gradient-text">End-to-End.</span>
            </h1>
            <p className="text-text-muted max-w-xl leading-relaxed font-sans mb-8">
              Dari landing page sederhana hingga enterprise system kompleks — kami satu atap untuk semua kebutuhan digital kamu.
            </p>
            <Link
              href="/brief"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent-orange text-text-black hover:opacity-90 transition-all font-sans"
            >
              Mulai Brief Sekarang <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="svc-card">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-bg-cream border-t border-[#D4D4C8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-text-black mb-2">
              Tidak yakin layanan mana yang cocok?
            </h3>
            <p className="text-text-muted font-sans">Konsultasi gratis 30 menit — kita bantu tentukan solusi terbaik.</p>
          </div>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? '6281234567890'}?text=Halo Pixcode, saya mau konsultasi layanan`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-[#D4D4C8] text-text-black hover:border-[#FE6037]/60 transition-all font-sans"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
