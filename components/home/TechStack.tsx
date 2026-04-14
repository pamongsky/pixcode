'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TECH_MARQUEE } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const BG = '#E8532B'
const BG_DARK = '#C8401A'

export default function TechStack() {
  const sectionRef  = useRef<HTMLElement>(null)
  const marqueeRef  = useRef<HTMLDivElement>(null)
  const marqueeRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const w1 = marqueeRef.current?.scrollWidth ?? 0
      const w2 = marqueeRef2.current?.scrollWidth ?? 0

      gsap.to(marqueeRef.current, {
        x: -w1 / 2,
        duration: 32,
        ease: 'none',
        repeat: -1,
      })

      gsap.fromTo(
        marqueeRef2.current,
        { x: -w2 / 2 },
        { x: 0, duration: 38, ease: 'none', repeat: -1 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const doubled  = [...TECH_MARQUEE, ...TECH_MARQUEE]
  const reversed = [...doubled].reverse()

  return (
    <section
      ref={sectionRef}
      className="py-14 overflow-hidden relative"
      style={{
        background: `radial-gradient(ellipse at 60% 0%, #F07040 0%, ${BG} 40%, ${BG_DARK} 100%)`,
      }}
    >
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 flex flex-col items-center text-center gap-4">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8522A] font-sans bg-white px-3 py-1 rounded-lg">
          Tech Stack
        </span>
        <h2 className="font-display font-bold text-white text-[clamp(2rem,3.5vw,3rem)] leading-tight">
          Teknologi yang Kami Gunakan
        </h2>
      </div>

      {/* Marquee row 1 — left */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BG_DARK}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BG_DARK}, transparent)` }} />

        <div ref={marqueeRef} className="flex gap-3 w-max py-2">
          {doubled.map((tech, i) => (
            <div key={i} className="shrink-0 flex items-center gap-2.5 px-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}`}
                alt={tech.name}
                width={26}
                height={26}
                className="shrink-0 opacity-90"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <span className="text-[25px] font-bold text-white font-sans whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BG_DARK}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BG_DARK}, transparent)` }} />

        <div ref={marqueeRef2} className="flex gap-3 w-max py-2">
          {reversed.map((tech, i) => (
            <div key={i} className="shrink-0 flex items-center gap-2.5 px-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}`}
                alt={tech.name}
                width={26}
                height={26}
                className="shrink-0 opacity-90"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <span className="text-[25px] font-bold text-white font-sans whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
