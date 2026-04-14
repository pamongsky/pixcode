import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProjectTracker from '@/components/tracker/ProjectTracker'

export default function TrackerPage() {
  return (
    <main className="min-h-screen bg-bg-cream">
      <Navbar />

      <section className="pt-36 pb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-5">
              Project Tracker
            </span>
            <h1 className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-text-black leading-tight mb-4">
              Pantau Progress{' '}
              <span className="text-accent-orange">Project Kamu.</span>
            </h1>
            <p className="text-text-muted max-w-md mx-auto font-sans leading-relaxed text-[15px]">
              Masukkan Project ID yang kamu terima saat kontrak ditandatangani untuk melihat status terkini.
            </p>
          </div>

          <ProjectTracker />
        </div>
      </section>

      <Footer />
    </main>
  )
}
