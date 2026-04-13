import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function BriefSuksesPage() {
  return (
    <main className="min-h-screen bg-bg-cream">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-lg mx-auto px-6 text-center py-24">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-accent-orange border border-accent-orange/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-[#5A7A00]" />
          </div>

          <h1 className="font-display font-extrabold text-3xl text-text-black mb-4">
            Brief Terkirim! 🎉
          </h1>

          <p className="text-text-muted font-sans leading-relaxed mb-3">
            Terima kasih telah mengisi brief project. Tim Pixcode akan menghubungi kamu melalui
            WhatsApp dalam <strong className="text-text-black">1×24 jam</strong> dengan proposal teknis dan estimasi biaya.
          </p>

          <p className="text-text-muted font-sans text-sm mb-10">
            Cek WA kamu — kami juga mengirimkan konfirmasi ke nomormu.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tracker"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-accent-orange text-text-black hover:opacity-90 transition-all font-sans"
            >
              Pantau Progress
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[#D4D4C8] text-text-muted hover:border-accent-orange/40 hover:text-text-black:text-text-black transition-all font-sans"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
