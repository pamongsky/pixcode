'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROCESS_STEPS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const STEP_CONFIG = [
  {
    accent: '#E8522A',
    photo: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=700&q=85',
  },
  {
    accent: '#3B82F6',
    photo: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=700&q=85',
  },
  {
    accent: '#10B981',
    photo: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=85',
  },
  {
    accent: '#8B5CF6',
    photo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=85',
  },
  {
    accent: '#F59E0B',
    photo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=85',
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
          tl.to(card, { opacity: 0, scale: 0.93, y: -40, duration: 0.6, ease: 'power2.in' }, pos + 0.5)
          tl.to(cards[i + 1], { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }, pos + 0.65)
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
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src="/vidio15.mp4" />
      <div className="absolute inset-0 bg-[#F5EFE6]/50" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8" style={{ height: '100vh' }}>
        <div className="flex items-center gap-14 h-full">

          {/* LEFT — heading */}
          <div className="w-[30%] shrink-0">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-accent-orange px-3 py-1 rounded-lg mb-5">
              Proses Kerja
            </span>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.8rem)] text-[#1A1A1A] leading-tight mb-4">
              Lima langkah.<br />
              <span className="text-accent-orange">Semua bisa<br />kamu pantau.</span>
            </h2>
            <p className="font-sans text-[13.5px] leading-relaxed text-[#6E6E73]">
              Dari brief masuk sampai kode diserahkan — tiap tahap bisa kamu lihat dan kamu tanya langsung.
            </p>

          </div>

          {/* RIGHT — card stack */}
          <div ref={cardWrapRef} className="relative flex-1" style={{ height: '62vh' }}>
            {PROCESS_STEPS.map((step, i) => {
              const cfg = STEP_CONFIG[i]
              return (
                <div
                  key={step.number}
                  className="proc-card w-full h-full rounded-[28px] overflow-hidden bg-white flex flex-row"
                  style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)' }}
                >
                  {/* LEFT — photo contained */}
                  <div className="w-[44%] shrink-0 p-4">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cfg.photo}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-black/5" />
                    </div>
                  </div>

                  {/* RIGHT — content */}
                  <div className="flex-1 flex flex-col justify-end p-8 pb-10">

                    {/* Step pill */}
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-lg self-start mb-5"
                      style={{ background: `${cfg.accent}15`, color: cfg.accent }}
                    >
                      Step {step.number}
                    </span>

                    {/* Title — big */}
                    <h3
                      className="font-display font-bold text-[#1A1A1A] leading-tight mb-4"
                      style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.4rem)' }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[14px] leading-relaxed text-[#6E6E73] mb-6">
                      {step.desc}
                    </p>

                    {/* Counter */}
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-[#F2F2F7]" />
                      <span className="text-[11px] font-mono font-medium text-[#C7C7CC]">
                        {step.number} / 05
                      </span>
                    </div>

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
