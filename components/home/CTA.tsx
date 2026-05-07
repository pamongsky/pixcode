'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden px-8 md:px-20 py-20 flex flex-col items-center text-center"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/foto2.jpg')" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0A0A08]/60" />

          {/* Orange glow top */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-orange/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Badge */}
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-8">
              Konsultasi Gratis
            </span>

            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-white leading-[1.1] mb-5">
              Ada Project di Kepala?{' '}
              <br />
              <span className="text-accent-orange">Cerita Dulu ke Kami.</span>
            </h2>

            <p className="text-white/80 font-sans text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Ngobrol 30 menit, gratis. Kita bantu breakdown apa yang dibutuhkan, berapa kira-kira biayanya, dan kapan bisa mulai — tanpa tekanan apapun.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/brief"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm bg-accent-orange text-white hover:bg-[#FF663D] hover:-translate-y-0.5 transition-all duration-300 font-sans shadow-[0_8px_32px_rgba(232,82,42,0.25)]"
              >
                Isi Brief Sekarang
                <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? '6285121595158'}?text=Halo Pixcode, saya mau konsultasi project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm border border-white/20 text-white hover:border-accent-orange/40 hover:text-accent-orange transition-all duration-300 font-sans"
              >
                <MessageCircle size={15} />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
