'use client'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SERVICES, FAQ_ITEMS, LAYANAN_POINTS } from '@/lib/constants'

// Apple-style subtle tinted gradients — white to very light color per card
const CARD_STYLES = [
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #EFF6FF 100%)', accent: '#2563EB', dotBg: 'rgba(37,99,235,0.10)' },
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #F5F3FF 100%)', accent: '#7C3AED', dotBg: 'rgba(124,58,237,0.10)' },
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #FFF7ED 100%)', accent: '#EA580C', dotBg: 'rgba(234,88,12,0.10)' },
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #F0FDF4 100%)', accent: '#059669', dotBg: 'rgba(5,150,105,0.10)' },
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #FDF4FF 100%)', accent: '#C026D3', dotBg: 'rgba(192,38,211,0.10)' },
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #FFFBEB 100%)', accent: '#D97706', dotBg: 'rgba(217,119,6,0.10)' },
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #ECFEFF 100%)', accent: '#0891B2', dotBg: 'rgba(8,145,178,0.10)' },
  { gradient: 'linear-gradient(145deg, #FFFFFF 0%, #FFF1F2 100%)', accent: '#E11D48', dotBg: 'rgba(225,29,72,0.10)' },
]

const INCLUDED = [
  { title: 'Konsultasi Gratis', desc: 'Diskusi 30 menit tanpa biaya sebelum project dimulai.' },
  { title: 'Project Tracker', desc: 'Pantau progress real-time lewat dashboard tracker kami.' },
  { title: 'Komunikasi Direct', desc: 'Chat langsung via WhatsApp — tidak ada perantara.' },
  { title: 'Kontrak Digital', desc: 'Kontrak tertulis jelas, tidak ada biaya tersembunyi.' },
  { title: 'Garansi 30 Hari', desc: 'Bug fixing gratis 30 hari kalender setelah deployment.' },
  { title: 'Full Source Code', desc: 'Seluruh kode menjadi milikmu sepenuhnya setelah pelunasan.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function LayananPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />

      {/* ── Hero — image bg, heading only ── */}
      <section className="relative overflow-hidden" style={{ height: '56vh', minHeight: '400px' }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="Layanan Pixcode"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#111]/60 via-[#111]/45 to-[#111]/65" />
        <div className="relative z-10 h-full flex items-center justify-center max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="font-display font-bold text-white leading-none"
            style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
          >
            Layanan Kami.
          </motion.h1>
        </div>
      </section>

      {/* ── Yang Termasuk di Semua Layanan ── */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-4">
            Keuntungan Kami
          </span>
          <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.6rem)] text-[#1A1A1A] leading-tight max-w-xl">
            Yang Kamu Dapatkan<br />di Setiap Project.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {INCLUDED.map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              className="bg-white rounded-3xl p-7 ring-1 ring-black/5 shadow-[0_2px_16px_rgba(0,0,0,0.05)]"
            >
              <div className="w-8 h-8 rounded-full bg-[#FDE8DE] flex items-center justify-center mb-4">
                <Check size={14} className="text-[#E8522A]" />
              </div>
              <h3 className="font-display font-bold text-[#1A1A1A] text-[15px] mb-1.5">
                {item.title}
              </h3>
              <p className="font-sans text-[13px] text-[#6B6B6B] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Services Grid ── */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-4">
            Layanan
          </span>
          <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.6rem)] text-[#1A1A1A] leading-tight">
            Pilih yang Sesuai<br />Kebutuhanmu.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, i) => {
            const style = CARD_STYLES[i % CARD_STYLES.length]
            const points = (LAYANAN_POINTS[service.id] ?? []).slice(0, 4)
            return (
              <Fragment key={service.id}>
                {i === 6 && <div className="hidden lg:block" />}
                <motion.div
                  variants={cardAnim}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 24px 60px rgba(0,0,0,0.13), 0 6px 20px rgba(0,0,0,0.07)',
                    transition: { duration: 0.28 },
                  }}
                  className="group relative rounded-4xl p-10 flex flex-col justify-between overflow-hidden ring-1 ring-black/4"
                  style={{
                    height: '480px',
                    background: style.gradient,
                    boxShadow: '0 8px 36px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Top accent dot */}
                  <div
                    className="absolute top-8 right-8 w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: style.accent }}
                  />

                  <div>
                    <h3 className="font-display font-bold text-[#1A1A1A] text-[20px] leading-snug mb-3">
                      {service.name}
                    </h3>
                    <p className="font-sans text-[13px] text-[#6B6B6B] leading-relaxed mb-7">
                      {service.desc}
                    </p>

                    <ul className="flex flex-col gap-3">
                      {points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span
                            className="w-4 h-4 mt-0.5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: style.dotBg }}
                          >
                            <Check size={9} style={{ color: style.accent }} />
                          </span>
                          <span className="font-sans text-[13px] text-[#444444] leading-snug">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/brief"
                      className="flex items-center justify-center w-full py-3.5 rounded-full text-[13px] font-semibold text-white transition-all duration-200 font-sans bg-[#E8522A] hover:bg-[#D4471F]"
                    >
                      Mulai Project
                    </Link>
                  </div>
                </motion.div>
              </Fragment>
            )
          })}
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-5">
              FAQ
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-[#1A1A1A] leading-[1.1] mb-5">
              Pertanyaan yang<br />Sering Ditanya.
            </h2>
            <p className="text-[#6B6B6B] font-sans text-[14px] leading-relaxed mb-8 max-w-xs">
              Masih ada yang belum terjawab? Hubungi kami langsung — kami responsif.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1A1A1A] hover:text-[#E8522A] transition-colors duration-200 font-sans"
            >
              Hubungi kami <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          <div className="flex flex-col border-t border-[#E5E5E5]">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="border-b border-[#E5E5E5]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="font-sans font-semibold text-[#1A1A1A] text-[14.5px] leading-snug group-hover:text-[#E8522A] transition-colors duration-200">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openFaq === i ? '#E8522A' : '#F0F0F0',
                      color: openFaq === i ? '#FFFFFF' : '#1A1A1A',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={14} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[13.5px] text-[#6B6B6B] font-sans leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-100 h-50 bg-[#E8522A]/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-white text-[clamp(1.5rem,3vw,2.2rem)] leading-tight mb-2">
              Tidak yakin layanan mana yang cocok?
            </h3>
            <p className="text-white/50 font-sans text-sm">
              Konsultasi gratis 30 menit — kita bantu tentukan solusi terbaik.
            </p>
          </div>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? '6281234567890'}?text=Halo Pixcode, saya mau konsultasi layanan`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold bg-[#E8522A] text-white hover:bg-[#D4471F] transition-all duration-200 font-sans shadow-[0_4px_20px_rgba(232,82,42,0.4)]"
          >
            Chat WhatsApp
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
