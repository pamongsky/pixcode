'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FilterBar from '@/components/portofolio/FilterBar'
import ProjectCard from '@/components/portofolio/ProjectCard'
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '@/lib/constants'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState<typeof PORTFOLIO_CATEGORIES[number]>('Semua')

  const filtered = activeFilter === 'Semua'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-10 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-accent-orange px-3 py-1 rounded-lg mb-5">
            Portofolio
          </span>
          <h1
            className="font-display font-bold text-[#1D1D1F] leading-[1.05] max-w-2xl mb-4"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}
          >
            Karya yang{' '}
            <span className="text-accent-orange">Berbicara Sendiri.</span>
          </h1>
          <p className="font-sans text-[15px] leading-relaxed max-w-lg" style={{ color: '#6E6E73' }}>
            Sebagian karya kami bersifat rahasia atas permintaan klien. Berikut beberapa yang bisa kami tampilkan.
          </p>
        </motion.div>
      </section>

      {/* ── Sidebar + Grid ── */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex gap-10 items-start">

          {/* Sidebar filter — sticky */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="hidden lg:block sticky top-28"
          >
            <FilterBar
              active={activeFilter}
              onChange={(cat) => setActiveFilter(cat as typeof PORTFOLIO_CATEGORIES[number])}
            />
          </motion.div>

          {/* Mobile filter — horizontal scroll */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 w-full">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as typeof PORTFOLIO_CATEGORIES[number])}
                className="shrink-0 px-4 py-2 rounded-xl text-[13px] font-semibold font-sans transition-all duration-200"
                style={{
                  background: activeFilter === cat ? '#1D1D1F' : '#FFFFFF',
                  color: activeFilter === cat ? '#FFFFFF' : '#6E6E73',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-24 text-center"
                >
                  <p className="font-sans text-[14px]" style={{ color: '#AEAEB2' }}>
                    Belum ada project di kategori ini.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeFilter}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  {filtered.map((project) => (
                    <motion.div key={project.id} variants={cardAnim}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] px-10 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-100 h-50 bg-accent-orange/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-white text-[clamp(1.5rem,3vw,2.2rem)] leading-tight mb-2">
              Punya project yang ingin kita kerjakan?
            </h3>
            <p className="text-white/50 font-sans text-sm">
              Isi brief sekarang — kita respon dalam 1×24 jam.
            </p>
          </div>
          <Link
            href="/brief"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold bg-accent-orange text-white hover:bg-[#D4471F] transition-all duration-200 font-sans shadow-[0_4px_20px_rgba(232,82,42,0.4)]"
          >
            Mulai Brief Project
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
