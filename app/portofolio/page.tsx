'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import FilterBar from '@/components/portofolio/FilterBar'
import ProjectCard from '@/components/portofolio/ProjectCard'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = activeFilter === 'Semua'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.proj-card')
    if (!cards) return
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    )
  }, [activeFilter])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-bg-cream">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#FE6037]/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={headerRef}>
            <SectionLabel className="mb-6">Portofolio</SectionLabel>
            <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] text-text-black leading-tight mb-4 max-w-3xl">
              Karya yang{' '}
              <span className="gradient-text">Berbicara Sendiri.</span>
            </h1>
            <p className="text-text-muted max-w-xl leading-relaxed font-sans mb-10">
              {PORTFOLIO_PROJECTS.length} project dari berbagai industri. Setiap karya adalah bukti komitmen kami terhadap kualitas.
            </p>
            <FilterBar active={activeFilter} onChange={setActiveFilter} />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-text-muted font-sans">Belum ada project di kategori ini.</p>
            </div>
          ) : (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div key={project.id} className="proj-card">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-cream border-t border-[#D4D4C8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-display font-bold text-2xl text-text-black mb-3">
            Punya project yang ingin kita kerjakan bersama?
          </h3>
          <p className="text-text-muted font-sans mb-6">Isi brief sekarang, kita respon dalam 1×24 jam.</p>
          <a
            href="/brief"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-accent-orange text-text-black hover:opacity-90 transition-all font-sans"
          >
            Mulai Brief Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
