'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '@/components/ui/SectionLabel'
import { TECH_MARQUEE } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite marquee — row 1 left, row 2 right
      const totalWidth = marqueeRef.current?.scrollWidth ?? 0
      const totalWidth2 = marqueeRef2.current?.scrollWidth ?? 0

      gsap.to(marqueeRef.current, {
        x: -totalWidth / 2,
        duration: 30,
        ease: 'none',
        repeat: -1,
      })

      gsap.fromTo(
        marqueeRef2.current,
        { x: -totalWidth2 / 2 },
        {
          x: 0,
          duration: 35,
          ease: 'none',
          repeat: -1,
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const doubled = [...TECH_MARQUEE, ...TECH_MARQUEE]

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-accent-orange overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 mb-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[11px] font-semibold text-white uppercase tracking-[0.15em] font-sans">
            03 — Tech Stack
          </span>
        </div>
        <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight max-w-xl">
          Tools Terbaik untuk{' '}
          <span className="text-white/70">Hasil Terbaik.</span>
        </h2>
        <p className="mt-4 text-white/80 font-sans max-w-lg text-lg">
          Kita pilih tech stack yang proven, scalable, dan sesuai kebutuhan — bukan sekadar ikut tren.
        </p>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-bg-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-bg-cream to-transparent z-10 pointer-events-none" />
        <div ref={marqueeRef} className="flex gap-4 w-max py-2">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-full bg-white border border-[#D4D4C8] text-sm text-text-muted font-sans hover:border-accent-orange/40 hover:text-text-black hover:shadow-sm transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-bg-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-bg-cream to-transparent z-10 pointer-events-none" />
        <div ref={marqueeRef2} className="flex gap-4 w-max py-2">
          {[...doubled].reverse().map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-full bg-white border border-[#D4D4C8] text-sm text-text-muted font-sans hover:border-accent-orange/40 hover:text-text-black hover:shadow-sm transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
