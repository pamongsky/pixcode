import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BriefForm from '@/components/brief/BriefForm'

export default function BriefPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />

      <section className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Page heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-5">
            Brief Project
          </span>
          <h1 className="font-display font-bold text-[#1D1D1F] leading-tight mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Ceritakan Project Kamu.
          </h1>
          <p className="font-sans text-[15px] leading-relaxed max-w-lg mx-auto" style={{ color: '#6E6E73' }}>
            Isi form ini dan kami akan kembali dengan proposal + estimasi biaya dalam 1×24 jam.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_8px_48px_rgba(0,0,0,0.08)]">

          {/* Hero image */}
          <div className="relative w-full" style={{ height: '240px' }}>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop&q=85"
              alt="Brief project"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="font-display font-bold text-white text-[22px] leading-tight">Submit Brief</p>
              <p className="font-sans text-[13px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Isi semua field dengan lengkap untuk hasil terbaik
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 lg:p-10">
            <BriefForm />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
