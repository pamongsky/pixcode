'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { 
  ArrowUpRight, Link as LinkIcon, Server, Layers, Database, Cloud, Wifi, Activity, Cpu
} from 'lucide-react'

const VisualMockups = ({ type }: { type: number }) => {
  switch (type) {
    case 0: // Web App: 3D Image
      return (
        <div className="absolute top-0 right-0 bottom-0 w-3/5 overflow-hidden pointer-events-none rounded-br-[32px] hidden md:block">
          <Image 
            src="/web-app.png" 
            alt="Web App Graphic" 
            fill
            className="object-contain object-right-bottom scale-110 -translate-x-4 translate-y-4 drop-shadow-2xl"
          />
        </div>
      )
    case 1: // Mobile App: User uploaded Image
      return (
        <div className="absolute top-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none flex items-end justify-end">
           <div className="relative w-64 h-72 mr-[-3rem] mb-[-2rem]">
             <Image 
               src="/mobile-app.png" 
               alt="Mobile App Graphic" 
               fill
               className="object-contain object-bottom drop-shadow-2xl scale-125"
             />
           </div>
        </div>
      )
    case 2: // Landing Page: User uploaded Image
       return (
         <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none flex items-end justify-end">
           <div className="relative w-56 h-56 mr-[-2rem] mb-[-2rem]">
             <Image 
               src="/landing-page.png" 
               alt="Landing Page Graphic" 
               fill
               className="object-contain object-bottom drop-shadow-2xl scale-110"
             />
           </div>
         </div>
       )
    case 3: // AI/ML : 3D Image (Generated on Orange)
      return (
        <div className="absolute top-0 right-0 bottom-0 w-3/5 overflow-hidden pointer-events-none rounded-br-[32px] hidden md:block">
           <Image 
             src="/images/3d/ai_ml.png" 
             alt="AI 3D Brain Core" 
             fill
             className="object-cover object-left mix-blend-luminosity opacity-80"
           />
        </div>
      )
    case 4: // Integration API: Connecting nodes
      return (
        <div className="absolute top-0 right-0 bottom-0 w-[55%] overflow-hidden pointer-events-none rounded-br-[32px] flex items-center justify-center hidden md:block">
           <div className="relative w-full h-full flex items-center justify-center -rotate-12 translate-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xl border border-gray-100 absolute left-4 z-10 flex items-center justify-center">
                 <Server size={18} className="text-blue-500" />
              </div>
              <div className="w-24 border-t-2 border-dashed border-gray-300 absolute left-12" />
              <div className="w-14 h-14 rounded-full bg-blue-500 shadow-xl shadow-blue-500/30 absolute z-20 flex items-center justify-center ring-4 ring-blue-100">
                 <LinkIcon size={20} className="text-white" />
              </div>
              <div className="w-24 border-t-2 border-dashed border-gray-300 absolute right-12" />
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] shadow-xl absolute right-4 z-10 flex items-center justify-center">
                 <Layers size={18} className="text-lime-400" />
              </div>
           </div>
        </div>
      )
    case 5: // IT Consult: Tailwind System Architecture Vector
      return (
        <div className="absolute top-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none flex items-center justify-end pl-8 hidden md:flex">
           <div className="relative w-48 h-48 translate-x-6 rotate-[-6deg] scale-110">
              
              {/* Main App Server (Top) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-12 bg-white rounded-xl shadow-xl border border-emerald-100 flex items-center justify-center gap-2 z-20">
                 <Server size={18} className="text-emerald-500" />
                 <div className="w-12 h-2 rounded-full bg-emerald-50" />
                 <div className="absolute -bottom-8 w-px h-8 border-l-2 border-dashed border-emerald-400/40" />
              </div>

              {/* Database Node (Left) */}
              <div className="absolute top-24 -left-2 w-20 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-1 z-20">
                 <Database size={16} className="text-emerald-400" />
                 <div className="w-8 h-1.5 rounded-full bg-gray-200" />
                 <div className="absolute -top-6 right-0 w-12 h-px border-t-2 border-dashed border-emerald-400/40 rotate-[35deg]" />
              </div>

              {/* Cloud Node (Right) */}
              <div className="absolute top-24 -right-2 w-20 h-16 bg-[#1A1A1A] rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center gap-1 z-20">
                 <Cloud size={16} className="text-emerald-400" />
                 <div className="w-8 h-1.5 rounded-full bg-gray-700" />
                 <div className="absolute -top-6 left-0 w-12 h-px border-t-2 border-dashed border-emerald-400/40 rotate-[-35deg]" />
              </div>

              {/* Central Processing Hub */}
              <div className="absolute top-[86px] left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shadow-inner z-10 border border-emerald-100">
                 <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.6)] animate-pulse" />
              </div>

           </div>
        </div>
      )
    case 6: // IoT & Automation
      return (
        <div className="absolute top-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none flex items-center justify-end pr-4 hidden md:flex">
           {/* Abstract IoT Network Diagram */}
           <div className="relative w-48 h-48 translate-x-4 rotate-[4deg] scale-105">
              
              {/* Central IoT Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl border border-cyan-100 flex items-center justify-center shadow-xl z-30">
                 <Cpu size={28} className="text-cyan-500" />
                 {/* Radar ring */}
                 <div className="absolute w-full h-full border border-cyan-400/40 rounded-2xl animate-ping" style={{ animationDuration: '3s' }} />
              </div>

              {/* Sensor Node 1 (Top Left) */}
              <div className="absolute top-4 -left-2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20">
                 <Wifi size={18} className="text-emerald-400" />
                 <div className="absolute -bottom-8 right-2 w-10 h-10 border-r-2 border-b-2 border-dashed border-cyan-400/30 rounded-br-xl" />
              </div>

              {/* Data Dashboard Node (Top Right) */}
              <div className="absolute top-2 -right-6 w-24 h-10 bg-white rounded-xl shadow-lg border border-emerald-50 flex items-center px-3 gap-2 z-20">
                 <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                 <span className="text-[10px] font-semibold text-gray-500">22.4°C</span>
                 <div className="absolute -bottom-8 left-4 w-8 h-10 border-l-2 border-b-2 border-dashed border-cyan-400/30 rounded-bl-xl" />
              </div>

              {/* Gateway Node (Bottom) */}
              <div className="absolute -bottom-2 right-6 w-12 h-12 bg-[#1A1A1A] rounded-full shadow-xl flex items-center justify-center z-20">
                 <Activity size={18} className="text-cyan-400" />
                 <div className="absolute -top-6 left-6 w-0.5 h-6 border-l-2 border-dashed border-cyan-400/30" />
              </div>

           </div>
        </div>
      )
    case 7: // Enterprise Application: 2 Uploaded Images Overlay
      return (
        <div className="absolute top-0 right-0 bottom-0 w-[60%] overflow-hidden pointer-events-none hidden md:block">
           <div className="relative w-full h-full mt-4">
             {/* Base Image (Slightly behind, rotated left) */}
             <div className="absolute top-0 right-20 w-[350px] h-[250px] -rotate-[5deg] origin-bottom transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:-translate-x-2 group-hover:rotate-[-8deg]">
               <Image 
                 src="/enterprise1.png" 
                 alt="Enterprise Graphic 1" 
                 fill
                 className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] opacity-95"
               />
             </div>
             
             {/* Floating Foreground Image (Rotated right) */}
             <div className="absolute top-16 -right-8 w-[400px] h-[280px] rotate-[4deg] origin-bottom transition-all duration-500 ease-out delay-75 group-hover:-translate-y-4 group-hover:translate-x-2 group-hover:rotate-[6deg]">
               <Image 
                 src="/enterprise2.png" 
                 alt="Enterprise Graphic 2" 
                 fill
                 className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
               />
             </div>
           </div>
        </div>
      )
    default:
      return null;
  }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
}

export default function Services() {
  const SIZING = [
    'lg:col-span-2', // Web
    'lg:col-span-1', // Mobile
    'lg:col-span-1', // Landing
    'lg:col-span-2', // AI/ML
    'lg:col-span-2', // API
    'lg:col-span-1', // IT Console
    'lg:col-span-1', // IoT
    'lg:col-span-2', // Enterprise
  ];

  // Apple Intelligence "Elevated Tiles" (Ubin Timbul)
  // Rahasianya: Kombinasi kotak Putih Bersih dan Gradien Halus di atas background Abu-abu sangat muda.
  const TINTS = [
    'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]', // Web App
    'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]', // Mobile App
    'bg-gradient-to-b from-[#F5F3FF] to-[#EDE9FE] shadow-[0_4px_24px_rgba(139,92,246,0.08)] ring-1 ring-black/[0.02]', // Landing (Soft Violet/Memory Movie vibe)
    'bg-gradient-to-br from-[#FF7A42] to-[#DF431B] shadow-[0_12px_40px_rgba(232,82,42,0.25)] ring-1 ring-white/10', // AI/ML (Vibrant Hero, ala Apple Intelligence center card)
    'bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] shadow-[0_4px_24px_rgba(59,130,246,0.08)] ring-1 ring-black/[0.02]', // API (Soft Blue)
    'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]', // IT Consult
    'bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] shadow-[0_4px_24px_rgba(16,185,129,0.08)] ring-1 ring-black/[0.02]', // IoT (Soft Emerald)
    'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]', // Enterprise
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4D4C8] bg-[#FAFAFA] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            <span className="text-[11px] font-semibold text-text-black uppercase tracking-[0.15em] font-sans">
              01 — Layanan Kami
            </span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-text-black leading-tight mb-4">
            Semua yang Kamu Butuhkan{' '}
            <br className="hidden md:block" />
            <span className="text-accent-orange font-medium">dalam Satu Agency.</span>
          </h2>
          <p className="text-text-muted font-sans leading-relaxed text-lg">
            Web, Mobile, AI, IoT, hingga Enterprise — satu tim untuk semua kebutuhan digital bisnis kamu.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid dengan UI Mockups */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, i) => {
            const spanClass = SIZING[i % SIZING.length];
            const bgClass = TINTS[i % TINTS.length];
            const isFeaturedOrange = i === 3; 

            const titleColor = isFeaturedOrange ? 'text-white' : 'text-text-black';
            const descColor = isFeaturedOrange ? 'text-white/80' : 'text-text-muted';
            const priceColor = isFeaturedOrange ? 'text-white font-bold' : 'text-text-black font-semibold';
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariant}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative p-8 md:p-10 rounded-[32px] md:rounded-[40px] ${spanClass} ${bgClass} hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px] lg:min-h-[340px]`}
              >
                {/* Visual UI Graphics / Mockups berskala besar */}
                <VisualMockups type={i} />

                {/* Content */}
                <div className="relative z-20 w-full md:w-3/5">
                  <h3 className={`font-display font-semibold ${titleColor} text-[22px] md:text-[24px] leading-snug mb-3`}>
                    {service.name}
                  </h3>
                  <p className={`text-[14px] ${descColor} leading-relaxed font-sans`}>
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-end justify-between relative z-20 mt-8 w-full md:w-1/2">
                  <p className={`text-[13.5px] font-sans font-mono tracking-wider ${priceColor}`}>
                    {service.price}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-sm ${isFeaturedOrange ? 'bg-white text-accent-orange' : 'bg-accent-orange text-white'}`}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-text-black hover:text-accent-orange transition-colors font-sans group underline underline-offset-8 decoration-accent-orange/30 hover:decoration-accent-orange"
          >
            Eksplorasi semua layanan
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
