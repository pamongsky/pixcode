import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import BriefForm from '@/components/brief/BriefForm'

export default function BriefPage() {
  return (
    <main className="min-h-screen bg-bg-cream">
      <Navbar />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="mb-4 justify-center">Brief Project</SectionLabel>
            <h1 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-text-black leading-tight mb-4">
              Ceritakan{' '}
              <span className="gradient-text">Project Kamu.</span>
            </h1>
            <p className="text-text-muted max-w-lg mx-auto font-sans leading-relaxed">
              Isi form ini dan kami akan kembali dengan proposal teknis + estimasi biaya dalam 1×24 jam.
              Tidak ada komitmen sampai kamu setuju.
            </p>
          </div>

          <BriefForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
