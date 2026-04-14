'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROCESS_STEPS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const STEP_CONFIG = [
  {
    photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85',
    bg: '#FFF3EE',
    accent: '#E8522A',
    textColor: '#2A1A14',
    mutedColor: '#8A5A48',
  },
  {
    photo: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=85',
    bg: '#EFF6FF',
    accent: '#3B82F6',
    textColor: '#0F2A4A',
    mutedColor: '#4A6A9A',
  },
  {
    photo: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85',
    bg: '#F0FDF4',
    accent: '#10B981',
    textColor: '#0A2A1A',
    mutedColor: '#3A7A5A',
  },
  {
    photo: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=85',
    bg: '#F5F3FF',
    accent: '#8B5CF6',
    textColor: '#1A0A3A',
    mutedColor: '#6A4A9A',
  },
  {
    photo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85',
    bg: '#FFFBF0',
    accent: '#F59E0B',
    textColor: '#2A1A00',
    mutedColor: '#8A6A20',
  },
]

export default function Process() {
  const sectionRef  = useRef<HTMLElement>(null)
  const cardWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.proc-card')

      gsap.set(cards, { position: 'absolute', inset: 0 })
      gsap.set(cards.slice(1), { opacity: 0, scale: 0.95, y: 48 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: `+=${PROCESS_STEPS.length * 280}`,
          scrub: 1.2,
        },
      })

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const pos = i * 1.4

          tl.to(card, {
            opacity: 0,
            scale: 0.93,
            y: -40,
            duration: 0.6,
            ease: 'power2.in',
          }, pos + 0.5)

          tl.to(cards[i + 1], {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          }, pos + 0.65)
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/vidio15.mp4"
      />
      <div className="absolute inset-0 bg-[#F5EFE6]/50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8" style={{ height: '100vh' }}>
        <div className="flex items-center gap-12 h-full">

          {/* LEFT — heading */}
          <div className="w-[38%] shrink-0">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-4">
              Proses Kerja
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-[#1A1A1A] leading-tight">
              Dari Brief<br />ke Deploy —{' '}
              <span className="text-[#E8522A]">Tanpa Drama.</span>
            </h2>
          </div>

          {/* RIGHT — card stack */}
          <div
            ref={cardWrapRef}
            className="relative flex-1"
            style={{ height: '58vh' }}
          >
            {PROCESS_STEPS.map((step, i) => {
              const cfg = STEP_CONFIG[i]
              return (
                <div
                  key={step.number}
                  className="proc-card w-full h-full rounded-[28px] overflow-hidden flex flex-row shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
                  style={{ backgroundColor: cfg.bg }}
                >
                  {/* LEFT of card — text */}
                  <div className="relative flex flex-col gap-3 p-8 w-[52%]">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]"
                      style={{ color: cfg.accent }}
                    >
                      STEP {step.number}
                    </span>
                    <h3
                      className="font-display font-bold leading-tight"
                      style={{ color: cfg.textColor, fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-sans text-[13px] leading-relaxed"
                      style={{ color: cfg.mutedColor }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* RIGHT of card — photo flush */}
                  <div className="relative w-[48%]">
                    <div
                      className="absolute inset-y-0 left-0 w-16 z-10"
                      style={{ background: `linear-gradient(to right, ${cfg.bg}, transparent)` }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cfg.photo}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
