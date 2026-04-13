'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FileText, ClipboardList, Handshake, Code2, Rocket } from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

type IconComponent = React.ComponentType<{ size?: number; className?: string }>
const ICON_MAP: Record<string, IconComponent> = {
  FileText, ClipboardList, Handshake, Code2, Rocket,
}

export default function Process() {
  const sectionRef  = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards  = gsap.utils.toArray<HTMLElement>('.proc-card')
      const dots   = gsap.utils.toArray<HTMLElement>('.proc-dot')
      const labels = gsap.utils.toArray<HTMLElement>('.proc-label')

      gsap.set(cards,  { opacity: 0, y: 80, scale: 0.94, filter: 'blur(4px)' })
      gsap.set(dots,   { scale: 0.6, backgroundColor: '#302F28' })
      gsap.set(labels, { opacity: 0.3 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: `+=${PROCESS_STEPS.length * 220}`,
          scrub: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.height = `${self.progress * 100}%`
            }
          },
        },
      })

      cards.forEach((card, i) => {
        const dot   = dots[i]
        const label = labels[i]
        const pos   = i * 1.1

        tl.to(card,  { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }, pos)
          .to(dot,   { scale: 1.2, backgroundColor: '#FE6037', duration: 0.4 }, pos)
          .to(label, { opacity: 1, duration: 0.4 }, pos)
          .to(dot,   { scale: 1, duration: 0.3 }, pos + 0.5)

        if (i > 0) {
          tl.to(cards[i - 1], { opacity: 0.45, scale: 0.98, duration: 0.5 }, pos)
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-bg-cream flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-12 lg:gap-0 items-start">

          {/* LEFT */}
          <div className="lg:pr-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4D4C8] bg-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.15em] font-sans">
                02 — Proses Kerja
              </span>
            </div>

            <h2 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-text-black leading-tight mb-5">
              Dari Brief ke Deploy —{' '}
              <span className="gradient-text">Tanpa Drama.</span>
            </h2>
            <p className="text-text-muted leading-relaxed font-sans text-sm mb-10 max-w-xs">
              5 langkah proses yang transparan, terstruktur, dan selalu update.
              Kamu tahu status project-mu setiap saat.
            </p>

            <div className="flex flex-col gap-5">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="flex items-center gap-3">
                  <div className="proc-dot w-2.5 h-2.5 rounded-full shrink-0" />
                  <span className="proc-label text-[13px] font-medium text-text-black font-sans">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER line */}
          <div className="hidden lg:flex flex-col items-center">
            <div
              className="relative w-px bg-[#D4D4C8]"
              style={{ height: `${PROCESS_STEPS.length * 130}px` }}
            >
              <div
                ref={progressRef}
                className="absolute top-0 left-0 w-full bg-accent-orange transition-none"
                style={{ height: '0%' }}
              />
            </div>
          </div>

          {/* RIGHT — cards */}
          <div className="lg:pl-16 flex flex-col gap-5">
            {PROCESS_STEPS.map((step) => {
              const Icon = ICON_MAP[step.icon]
              return (
                <div
                  key={step.number}
                  className="proc-card p-6 rounded-2xl bg-white border border-[#D4D4C8] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-accent-orange/40 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-bg-cream border border-[#D4D4C8] flex items-center justify-center">
                      {Icon && <Icon size={19} className="text-accent-orange" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono font-semibold text-accent-orange block mb-1.5">
                        STEP {step.number}
                      </span>
                      <h3 className="font-display font-semibold text-text-black text-[15px] mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-text-muted leading-relaxed font-sans">
                        {step.desc}
                      </p>
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
