'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Eye, Target, Users, Star } from 'lucide-react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { STATS } from '@/lib/constants'

const VALUES = [
  { title: 'Jujur', desc: 'Kalau estimasinya 3 minggu, kita bilang 3 minggu. Kalau ada kendala, kamu tahu hari itu juga.', icon: Eye, color: '#E8522A' },
  { title: 'Fokus', desc: 'Kita nggak build fitur yang kamu nggak butuhkan. Ngobrol dulu, baru koding.', icon: Target, color: '#0A84FF' },
  { title: 'Bareng', desc: 'Bukan vendor yang nunggu instruksi. Kita ikut mikirin masalahnya dari awal.', icon: Users, color: '#5856D6' },
  { title: 'Serius', desc: 'Tiap project yang kami terima, kami pegang sampai selesai. Nggak ada yang dilempar ke junior tanpa pengawasan.', icon: Star, color: '#FF9F0A' },
]

const SCROLL_TEXTS = [
  {
    label: 'Cara Kerja',
    heading: 'Kita Nggak Mulai\nKoding Duluan.',
    sub: 'Brief dulu, pahami masalahnya, baru tulis kode. Urutan ini yang bikin hasilnya beda.',
  },
  {
    label: 'Sikap',
    heading: 'Kalau Ada Masalah,\nKamu Tahu Hari Itu.',
    sub: 'Nggak ada yang disembunyiin sampai deadline mepet. Update jalan terus, baik atau buruk.',
  },
  {
    label: 'Identitas',
    heading: 'Dari Semarang,\nUntuk Indonesia.',
    sub: 'Tim kecil, tapi tiap project dapat perhatian penuh. Nggak ada yang nyemplung ke backlog terus dilupain.',
  },
]

function VideoScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Each text visible for 1/3 of scroll range
  const op0 = useTransform(scrollYProgress, [0, 0.15, 0.28, 0.4], [0, 1, 1, 0])
  const y0  = useTransform(scrollYProgress, [0, 0.15], [40, 0])

  const op1 = useTransform(scrollYProgress, [0.33, 0.46, 0.6, 0.7], [0, 1, 1, 0])
  const y1  = useTransform(scrollYProgress, [0.33, 0.46], [40, 0])

  const op2 = useTransform(scrollYProgress, [0.66, 0.78, 1], [0, 1, 1])
  const y2  = useTransform(scrollYProgress, [0.66, 0.78], [40, 0])

  const texts = [
    { ...SCROLL_TEXTS[0], opacity: op0, y: y0 },
    { ...SCROLL_TEXTS[1], opacity: op1, y: y1 },
    { ...SCROLL_TEXTS[2], opacity: op2, y: y2 },
  ]

  return (
    <div ref={containerRef} style={{ height: '280vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vidio-atas.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Texts — stacked, each fades in/out */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          {texts.map((t, i) => (
            <motion.div
              key={i}
              style={{ opacity: t.opacity, y: t.y }}
              className="absolute text-center max-w-3xl"
            >
              <h2
                className="font-display font-bold text-white leading-[1.1] whitespace-pre-line"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                {t.heading}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator (only at start) */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-sans text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-linear-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-0 px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Top row: text left + photo collage right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-10">

          {/* Left — text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-6"
            >
              Tentang Kami
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-[#1D1D1F] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}
            >
              Dua Orang.<br />
              <span className="text-[#E8522A]">Satu Standar.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sans text-[15px] leading-[1.85] max-w-md"
              style={{ color: '#6E6E73' }}
            >
              Pixcode lahir karena kami capek lihat proyek gagal bukan karena skill — tapi karena
              komunikasi buruk, scope yang nggak jelas, dan agency yang overpromise dari awal.
              Kami coba cara yang berbeda: kecil, jujur, dan nggak ambil proyek yang nggak bisa kami selesaikan dengan baik.
            </motion.p>
          </motion.div>

          {/* Right — photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:grid grid-cols-2 gap-3"
            style={{ height: '420px' }}
          >
            {/* Tall left photo */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=700&fit=crop&q=85"
                alt="Tim bekerja"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Right: two stacked photos */}
            <div className="flex flex-col gap-3">
              <div className="relative rounded-3xl overflow-hidden flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop&q=85"
                  alt="Kolaborasi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop&q=85"
                  alt="Diskusi tim"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats row — solid orange cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 pb-0"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl px-6 py-5 flex flex-col gap-1"
              style={{ background: '#E8522A' }}
            >
              <p className="font-display font-bold text-white leading-none" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                {stat.value}
              </p>
              <p className="font-sans text-[12px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* ── Story ── */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative rounded-4xl overflow-hidden"
              style={{ height: '440px' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=85"
                alt="Coding environment"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] ring-1 ring-black/5"
            >
              <p className="font-display font-bold text-[#1D1D1F] text-[2rem] leading-none">{STATS[3].value}</p>
              <p className="font-sans text-[12px] mt-1" style={{ color: '#AEAEB2' }}>{STATS[3].label}</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-4">
              Cerita Kami
            </span>
            <h2 className="font-display font-bold text-[#1D1D1F] leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}>
              Dua Orang dari Semarang<br />yang Nggak Mau Setengah-Setengah.
            </h2>
            <div className="flex flex-col gap-4 font-sans text-[14.5px] leading-[1.85]" style={{ color: '#6E6E73' }}>
              <p>
                Pixcode cuma dua orang — dan itu sengaja. Bukan karena nggak mau besar, tapi karena
                kami nggak mau kirim output yang nggak kami bangga dengan. Tim kecil artinya
                tiap project dapat perhatian langsung, bukan didelegasi ke siapapun yang kebetulan kosong.
              </p>
              <p>
                Kami melayani klien dari seluruh Indonesia — dari founder yang baru mulai sampai
                perusahaan yang butuh digitalisasi proses bisnis yang sudah berjalan bertahun-tahun.
              </p>
              <p>
                Sebelum nulis satu baris kode pun, kami luangkan waktu untuk benar-benar ngerti
                masalahnya. Bukan karena itu terdengar bagus — tapi karena kalau salah paham di awal,
                semua yang dibangun setelahnya jadi salah juga.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Video Pinned Scroll ── */}
      <VideoScroll />

      {/* ── Values ── */}
      <section className="pt-24 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Heading — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-6">
            Values
          </span>
          <h2 className="font-display font-bold text-[#1D1D1F] leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            Empat Hal yang Nggak<br />Kami Kompromikan.
          </h2>
          <p className="font-sans text-[15px] max-w-xl mx-auto leading-relaxed" style={{ color: '#6E6E73' }}>
            Ini bukan slogan di dinding kantor. Ini yang kami pegang waktu ada tekanan deadline, klien minta fitur aneh, atau ada bug di production.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 max-w-3xl mx-auto"
        >
          {VALUES.map((val) => {
            const Icon = val.icon
            return (
              <motion.div
                key={val.title}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                {/* Scalloped badge — SVG flower shape */}
                <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill={val.color}>
                    <path d="M50,2 C53,2 56,4 58,7 C61,4 65,2 69,3 C73,4 75,8 75,12 C79,10 83,10 86,13 C89,16 89,20 87,24 C91,24 95,26 97,30 C99,34 97,38 94,41 C98,43 100,47 99,51 C98,55 95,58 91,59 C94,62 95,67 93,71 C91,75 87,77 83,76 C84,80 83,85 80,88 C77,91 73,92 69,90 C69,94 67,98 63,100 C59,102 55,100 52,97 C50,100 47,103 43,103 C39,103 36,100 35,97 C32,99 28,101 24,100 C20,99 18,95 18,91 C14,93 10,93 7,90 C4,87 4,83 6,79 C2,78 -1,75 0,71 C1,67 4,64 8,63 C5,60 3,56 4,52 C5,48 8,45 12,44 C9,41 8,37 10,33 C12,29 16,27 20,28 C19,24 20,19 23,16 C26,13 30,13 34,15 C34,11 36,7 40,5 C44,3 48,4 50,7 C50,5 50,3 50,2 Z" />
                  </svg>
                  <Icon size={30} className="relative z-10 text-white" strokeWidth={1.8} />
                </div>
                <h4 className="font-display font-bold text-[#1D1D1F] text-[18px] mb-2">
                  {val.title}
                </h4>
                <p className="font-sans text-[14px] leading-[1.8] max-w-55" style={{ color: '#6E6E73' }}>
                  {val.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </section>

      {/* ── Visi Misi ── */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {[
            {
              label: 'Visi',
              text: 'Jadi agency kecil yang kliennya balik lagi — bukan karena kontrak, tapi karena mereka tahu hasilnya beneran bagus dan prosesnya nggak bikin pusing.',
            },
            {
              label: 'Misi',
              text: 'Bantu bisnis Indonesia punya software yang beneran dipakai — bukan yang cuma kelihatan bagus di demo, lalu nganggur setelah 3 bulan karena terlalu ribet atau terlalu lambat.',
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="rounded-3xl p-8"
              style={{ background: '#F5EFE6', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-4">
                {item.label}
              </span>
              <p className="font-sans text-[15px] leading-[1.85]" style={{ color: '#5C4A38' }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
            <h3 className="font-display font-bold text-white leading-tight mb-2" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
              Ingin bekerja sama dengan kami?
            </h3>
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Mulai dengan brief — gratis, tanpa komitmen.
            </p>
          </div>
          <Link
            href="/brief"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold bg-[#E8522A] text-white hover:bg-[#D4471F] transition-all duration-200 font-sans shadow-[0_4px_20px_rgba(232,82,42,0.4)]"
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
