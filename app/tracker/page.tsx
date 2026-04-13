import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import ProjectTracker from '@/components/tracker/ProjectTracker'

export default function TrackerPage() {
  return (
    <main className="min-h-screen bg-bg-cream">
      <Navbar />

      <section className="pt-32 pb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="mb-4 justify-center">Project Tracker</SectionLabel>
            <h1 className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] text-text-black leading-tight mb-4">
              Pantau Progress{' '}
              <span className="gradient-text">Project Kamu.</span>
            </h1>
            <p className="text-text-muted max-w-lg mx-auto font-sans leading-relaxed">
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
