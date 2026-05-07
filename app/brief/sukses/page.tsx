import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function BriefSuksesPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FDF6EF' }}>
      <Navbar />

      <section className="pt-40 pb-24 px-6 lg:px-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-12 shadow-sm ring-1 ring-black/5 text-center">
          <div className="w-20 h-20 rounded-full bg-accent-orange/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-accent-orange" />
          </div>

          <h1 className="font-display font-bold text-[#1D1D1F] text-[32px] mb-3">
            Brief Terkirim!
          </h1>

          <p className="text-[#8E8E93] font-sans text-base leading-relaxed mb-2">
            Brief kamu sudah kami terima.
          </p>

          <p className="text-[#8E8E93] font-sans text-base leading-relaxed mb-8">
            Kami akan membalas di WhatsApp dalam <span className="font-semibold text-[#1D1D1F]">1×24 jam</span> dengan proposal dan estimasi biaya.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 py-6 border-y border-[#E5E5EA]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8E8E93] mb-1 font-sans">
                Selanjutnya
              </p>
              <p className="text-[13px] font-semibold text-[#1D1D1F] font-sans">
                Tunggu balasan WA dari kami
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8E8E93] mb-1 font-sans">
                Ada yang ingin ditambahkan?
              </p>
              <p className="text-[13px] font-semibold text-[#1D1D1F] font-sans">
                Balas pesan WA yang kami kirim
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? '6285121595158'}?text=Halo, saya baru mengisi brief project`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 rounded-xl bg-accent-orange text-white text-sm font-semibold hover:bg-[#D4471F] transition-colors font-sans inline-flex items-center justify-center gap-2"
            >
              Chat via WhatsApp
              <ArrowRight size={16} />
            </a>
            <Link
              href="/"
              className="flex-1 py-3.5 rounded-xl border border-[#E5E5EA] text-[#1D1D1F] text-sm font-semibold hover:bg-[#F5F5F7] transition-colors font-sans inline-flex items-center justify-center"
            >
              Kembali ke Beranda
            </Link>
          </div>

          <p className="text-[12px] text-[#8E8E93] font-sans mt-8">
            Project ID untuk tracker akan kamu terima setelah kontrak ditandatangani.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
