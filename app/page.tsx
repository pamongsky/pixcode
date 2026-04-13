import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import TechStack from '@/components/home/TechStack'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  )
}
