'use client'

import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const CONTACT_INFO = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat dengan kami',
    href: `https://wa.me/6281234567890?text=Halo Pixcode!`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'halo@pixcode.id',
    href: 'mailto:halo@pixcode.id',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Semarang, Jawa Tengah',
    href: 'https://maps.google.com/?q=Semarang',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function KontakPage() {
  const [form, setForm] = useState({ nama: '', email: '', wa: '', pesan: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setSending(false)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border-none text-[#1D1D1F] placeholder-[#AEAEB2] text-[14px] font-sans focus:outline-none focus:ring-2 focus:ring-[#E8522A]/30 transition-all'

  return (
    <main className="min-h-screen" style={{ background: '#FDF6EF' }}>
      <Navbar />

      <section className="pt-36 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* ── Left ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-6"
            >
              Kontak
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-[#1D1D1F] leading-tight mb-5"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
            >
              Ada yang Bisa<br />Kami Bantu?
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-sans text-[15px] leading-[1.85] mb-10"
              style={{ color: '#7A5A42' }}
            >
              Untuk pertanyaan atau konsultasi seputar project, hubungi kami lewat
              form atau channel di bawah ini. Kami siap membantu.
            </motion.p>

            {/* Contact items */}
            <motion.div variants={container} className="flex flex-col gap-3">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    variants={fadeUp}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 px-5 py-4 rounded-full transition-all"
                    style={{ background: '#F0E6DA' }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: '#E8522A' }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-[#1D1D1F] text-[15px] leading-none mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-[13px]" style={{ color: '#7A5A42' }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}

              {/* Jam Operasional */}
              <motion.div
                variants={fadeUp}
                className="flex items-start gap-4 px-5 py-5 rounded-3xl mt-1"
                style={{ background: '#F0E6DA' }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: '#E8522A' }}
                >
                  <Clock size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-[#1D1D1F] text-[15px] leading-none mb-3">
                    Jam Operasional
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-[13px]" style={{ color: '#7A5A42' }}>Senin — Jumat</p>
                      <p className="font-sans text-[13px] font-semibold text-[#1D1D1F]">08.00 — 17.00 WIB</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-[13px]" style={{ color: '#7A5A42' }}>Sabtu</p>
                      <p className="font-sans text-[13px] font-semibold text-[#1D1D1F]">09.00 — 14.00 WIB</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-[13px]" style={{ color: '#7A5A42' }}>Minggu</p>
                      <p className="font-sans text-[13px] font-semibold" style={{ color: '#E8522A' }}>Libur</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right — Form card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-8 flex flex-col"
            style={{ background: '#F0E6DA' }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-[#E8522A]/10 flex items-center justify-center">
                  <CheckCircle size={30} className="text-[#E8522A]" />
                </div>
                <h3 className="font-display font-bold text-[20px] text-[#1D1D1F]">Pesan Terkirim!</h3>
                <p className="font-sans text-[14px]" style={{ color: '#7A5A42' }}>
                  Terima kasih! Kami akan membalas dalam 1×24 jam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                {/* Nama + WA */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1D1D1F] mb-1.5 font-sans">Nama</label>
                    <input
                      required
                      value={form.nama}
                      onChange={(e) => setForm({ ...form, nama: e.target.value })}
                      placeholder="Nama kamu"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1D1D1F] mb-1.5 font-sans">No. WhatsApp</label>
                    <input
                      value={form.wa}
                      onChange={(e) => setForm({ ...form, wa: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#1D1D1F] mb-1.5 font-sans">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@kamu.com"
                    className={inputClass}
                  />
                </div>

                {/* Pesan */}
                <div className="flex flex-col flex-1">
                  <label className="block text-[13px] font-semibold text-[#1D1D1F] mb-1.5 font-sans">Pesan</label>
                  <textarea
                    required
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    placeholder="Tulis pesanmu di sini..."
                    className={`${inputClass} resize-none flex-1 min-h-30`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-[14px] font-bold bg-[#E8522A] text-white hover:bg-[#D4471F] disabled:opacity-50 transition-colors font-sans mt-1"
                >
                  {sending ? 'Mengirim...' : 'Kirim Pesan'}
                  <Send size={15} />
                </button>

                <p className="text-[12px] font-sans text-center" style={{ color: '#A07A60' }}>
                  Atau langsung{' '}
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8522A] hover:underline font-semibold"
                  >
                    chat via WhatsApp
                  </a>{' '}
                  untuk respons lebih cepat.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
