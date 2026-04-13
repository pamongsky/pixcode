'use client'

import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

const CONTACT_INFO = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 812-3456-789',
    href: `https://wa.me/6281234567890?text=Halo Pixcode!`,
    color: '#25D366',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'halo@pixcode.id',
    href: 'mailto:halo@pixcode.id',
    color: '#FE6037',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Semarang, Jawa Tengah',
    href: 'https://maps.google.com/?q=Semarang',
    color: '#FE6037',
  },
]

export default function KontakPage() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setSending(false)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-[#D4D4C8] text-text-black placeholder-[#8A8878] text-sm font-sans focus:outline-none focus:border-accent-orange/60 transition-colors'

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 relative overflow-hidden bg-bg-cream">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FE6037]/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <SectionLabel className="mb-4">Kontak</SectionLabel>
            <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] text-text-black leading-tight mb-4 max-w-2xl">
              Ada yang Bisa{' '}
              <span className="gradient-text">Kami Bantu?</span>
            </h1>
            <p className="text-text-muted max-w-lg font-sans leading-relaxed">
              Mau tanya-tanya dulu sebelum brief? No problem. Hubungi kami lewat channel manapun.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="space-y-4 mb-10">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D4D4C8] hover:border-accent-orange/40 transition-all duration-300 group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                      >
                        <Icon size={20} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-sans mb-0.5">{item.label}</p>
                        <p className="text-text-black font-semibold font-sans group-hover:text-white transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Office hours */}
              <div className="p-5 rounded-2xl bg-white border border-[#D4D4C8]">
                <h4 className="font-display font-semibold text-text-black mb-3">Jam Respons</h4>
                <div className="space-y-2 text-sm font-sans">
                  {[
                    ['Senin — Jumat', '09.00 — 18.00 WIB'],
                    ['Sabtu', '10.00 — 15.00 WIB'],
                    ['WA Response Time', '< 2 jam (jam kerja)'],
                    ['Proposal Turnaround', '1×24 jam'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-text-muted">{label}</span>
                      <span className="text-text-black">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-orange border border-accent-orange/30 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-[#5A7A00]" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-black mb-2">Pesan Terkirim!</h3>
                  <p className="text-text-muted font-sans">
                    Terima kasih! Kami akan membalas dalam 1×24 jam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-black mb-1.5 font-sans">
                      Nama *
                    </label>
                    <input
                      required
                      value={form.nama}
                      onChange={(e) => setForm({ ...form, nama: e.target.value })}
                      placeholder="Nama kamu"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-black mb-1.5 font-sans">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@kamu.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-black mb-1.5 font-sans">
                      Pesan *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.pesan}
                      onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                      placeholder="Ceritakan apa yang ingin kamu tanyakan..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold bg-accent-orange text-text-black hover:opacity-90 disabled:opacity-50 transition-all font-sans"
                  >
                    {sending ? 'Mengirim...' : 'Kirim Pesan'}
                    <Send size={15} />
                  </button>
                  <p className="text-xs text-text-muted font-sans text-center">
                    Atau langsung{' '}
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FE6037] hover:underline"
                    >
                      chat via WhatsApp
                    </a>{' '}
                    untuk respons lebih cepat.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
