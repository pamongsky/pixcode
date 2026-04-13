'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'
import { STATS } from '@/lib/constants'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.hero-badge', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo('.hero-headline', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
        .fromTo('.hero-sub', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-stats', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen lg:min-h-[92vh] flex items-center pt-28 px-4 lg:px-6 pb-4"
    >
      {/* Video Container (Dwello style rounded frame) */}
      <div className="absolute inset-x-4 lg:inset-x-6 top-28 bottom-4 rounded-[40px] overflow-hidden shadow-2xl">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/vidio-atas.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
            <span className="text-[11px] font-medium text-white uppercase tracking-widest font-sans">
              Semarang Digital Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline font-display font-medium leading-[1.05] tracking-tight text-white mb-6 text-[clamp(2.5rem,4vw,4rem)]">
            Kami Build Digital yang{' '}
            <span className="gradient-text font-bold">Benar-Benar Bekerja.</span>
          </h1>

          {/* Sub */}
          <p className="hero-sub text-[15px] md:text-[17px] text-white/80 leading-relaxed font-sans mb-10 max-w-md">
            Web, Mobile, AI/ML, IoT & Enterprise — dari brief ke deploy,
            transparan dan tanpa drama.
          </p>

          {/* CTA */}
          <div className="hero-cta flex items-center gap-4 flex-wrap mb-16">
            <Link
              href="/brief"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-accent-orange text-white shadow-[0_4px_24px_rgba(232,82,42,0.4)] hover:bg-[#FF663D] hover:-translate-y-0.5 transition-all duration-300 font-sans"
            >
              Mulai Brief Project
              <ArrowRight size={16} className="ml-1" />
            </Link>
            <Link
              href="/portofolio"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors font-sans px-4"
            >
              Lihat Portofolio
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats flex gap-8 md:gap-12 pt-7 border-t border-white/20">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-2xl text-white">{stat.value}</p>
                <p className="text-[12px] text-white/60 font-sans mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-px h-12 bg-linear-to-b from-[#FE6037]/60 to-transparent mx-auto animate-bounce" />
      </div>
    </section>
  )
}
