'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

function hex2rgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (a: number) => `rgba(${r},${g},${b},${a})`
}

function EnterpriseMockup({ c }: { c: (a: number) => string }) {
  return (
    <div className="absolute inset-5 rounded-xl overflow-hidden flex flex-col" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
      {/* Browser bar */}
      <div className="h-7 shrink-0 flex items-center gap-1.5 px-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="flex-1 h-3 rounded-full bg-white/5 mx-3" />
      </div>
      {/* Dashboard layout */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-10 shrink-0 flex flex-col gap-2 p-2 pt-3" style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          {[0.6, 0.25, 0.25, 0.25].map((opacity, i) => (
            <div key={i} className="h-2 rounded-full" style={{ background: i === 0 ? c(opacity) : `rgba(255,255,255,${opacity})`, width: i === 0 ? '28px' : '20px' }} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-2.5 flex flex-col gap-2 min-w-0">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-1.5">
            {[0.18, 0.08, 0.08].map((bg, i) => (
              <div key={i} className="rounded-lg p-1.5" style={{ background: i === 0 ? c(bg) : `rgba(255,255,255,${bg})`, border: `1px solid ${i === 0 ? c(0.25) : 'rgba(255,255,255,0.06)'}` }}>
                <div className="h-1 rounded-full mb-1.5" style={{ background: i === 0 ? c(0.5) : 'rgba(255,255,255,0.15)', width: '60%' }} />
                <div className="h-2 rounded-full" style={{ background: i === 0 ? c(0.7) : 'rgba(255,255,255,0.2)', width: '40%' }} />
              </div>
            ))}
          </div>
          {/* Chart area */}
          <div className="flex-1 rounded-lg p-2 flex flex-col justify-end gap-1" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-end gap-1 h-10">
              {[30, 55, 40, 70, 50, 80, 60, 75, 45, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: i === 9 ? c(0.8) : i > 6 ? c(0.4) : `rgba(255,255,255,0.1)` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileMockup({ c }: { c: (a: number) => string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Phone frame */}
      <div
        className="relative rounded-[22px] overflow-hidden flex flex-col"
        style={{
          width: '100px',
          height: '168px',
          background: '#141416',
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: `0 0 40px ${c(0.3)}, 0 20px 60px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Status bar */}
        <div className="h-5 shrink-0 flex items-center justify-between px-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="flex gap-1">
            {[1, 0.6, 0.3].map((o, i) => (
              <div key={i} className="w-0.5 rounded-full" style={{ height: `${6 + i * 2}px`, background: `rgba(255,255,255,${o})` }} />
            ))}
          </div>
          <div className="w-8 h-1.5 rounded-full" style={{ background: c(0.6) }} />
        </div>
        {/* App header */}
        <div className="px-3 py-2 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="h-2 rounded-full mb-1" style={{ background: c(0.7), width: '55%' }} />
          <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', width: '35%' }} />
        </div>
        {/* Content cards */}
        <div className="flex-1 p-2 flex flex-col gap-1.5 overflow-hidden">
          {[
            { accent: true, w: '75%' },
            { accent: false, w: '60%' },
            { accent: false, w: '80%' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg p-2"
              style={{
                background: item.accent ? c(0.15) : 'rgba(255,255,255,0.04)',
                border: `1px solid ${item.accent ? c(0.25) : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              <div className="h-1.5 rounded-full mb-1" style={{ background: item.accent ? c(0.6) : 'rgba(255,255,255,0.2)', width: item.w }} />
              <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.1)', width: '45%' }} />
            </div>
          ))}
        </div>
        {/* Tab bar */}
        <div className="h-8 shrink-0 flex items-center justify-around px-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
          {[true, false, false, false].map((active, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="w-4 h-4 rounded" style={{ background: active ? c(0.3) : 'rgba(255,255,255,0.06)' }} />
              {active && <div className="w-1 h-0.5 rounded-full" style={{ background: c(0.7) }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AIMockup({ c }: { c: (a: number) => string }) {
  return (
    <div className="absolute inset-5 rounded-xl overflow-hidden flex flex-col" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
      {/* Browser bar */}
      <div className="h-7 shrink-0 flex items-center gap-1.5 px-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="flex-1 h-3 rounded-full bg-white/5 mx-3" />
      </div>
      {/* AI dashboard */}
      <div className="flex-1 p-3 flex flex-col gap-2.5 min-h-0">
        {/* Accuracy metric */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-1.5 rounded-full mb-1.5" style={{ background: 'rgba(255,255,255,0.15)', width: '48px' }} />
            <div className="h-4 rounded-md" style={{ background: c(0.8), width: '32px' }} />
          </div>
          <div className="flex flex-col items-end gap-1">
            {['90%', '87%', '91%'].map((v, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="h-1.5 rounded-full" style={{ background: i === 2 ? c(0.6) : 'rgba(255,255,255,0.12)', width: `${28 + i * 6}px` }} />
                <div className="h-1.5 rounded-full bg-white/20" style={{ width: '18px' }} />
              </div>
            ))}
          </div>
        </div>
        {/* Progress bars */}
        <div className="flex flex-col gap-1.5">
          {[
            { label: 'Model A', pct: 92 },
            { label: 'Model B', pct: 78 },
            { label: 'Model C', pct: 85 },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1 rounded-full bg-white/6 flex-1 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: i === 0 ? c(0.8) : i === 2 ? c(0.5) : 'rgba(255,255,255,0.25)' }} />
              </div>
            </div>
          ))}
        </div>
        {/* Scatter dots */}
        <div className="flex-1 rounded-lg relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            [20, 60], [35, 30], [50, 70], [65, 40], [75, 65],
            [30, 80], [55, 20], [80, 50], [45, 55], [60, 75],
          ].map(([x, y], i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`, top: `${y}%`,
                width: i % 3 === 0 ? '5px' : '3px',
                height: i % 3 === 0 ? '5px' : '3px',
                background: i % 3 === 0 ? c(0.9) : `rgba(255,255,255,${0.2 + (i % 3) * 0.1})`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const c = hex2rgb(project.color)

  const Mockup = project.category === 'Mobile'
    ? MobileMockup
    : project.category === 'AI'
    ? AIMockup
    : EnterpriseMockup

  return (
    <div className="h-full">
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: '0 20px 50px rgba(0,0,0,0.11), 0 4px 16px rgba(0,0,0,0.06)',
          transition: { duration: 0.25 },
        }}
        className="group relative rounded-2xl bg-white overflow-hidden flex flex-col"
        style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)' }}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden" style={{ height: '220px', background: '#1C1C1E' }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.07]" />
          {/* Color glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-36 rounded-full blur-[55px] pointer-events-none"
            style={{ background: c(0.22) }}
          />
          {/* Mockup */}
          <Mockup c={c} />
          {/* Category pill */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-wider backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}
            >
              {project.category}
            </span>
          </div>
          {/* Year */}
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[11px] font-sans" style={{ color: 'rgba(255,255,255,0.25)' }}>
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display font-bold text-[#1D1D1F] text-[15px] leading-snug mb-1.5">
            {project.title}
          </h3>
          <p className="text-[12.5px] font-sans leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: '#6E6E73' }}>
            {project.desc}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full font-sans" style={{ background: '#F2F2F7', color: '#6E6E73' }}>
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[11px] px-2.5 py-1 rounded-full font-sans" style={{ background: '#F2F2F7', color: '#AEAEB2' }}>
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3.5" style={{ borderTop: '1px solid #F2F2F7' }}>
            <div className="flex items-center gap-1.5">
              <Lock size={11} style={{ color: '#AEAEB2' }} />
              <span className="text-[11px] font-sans" style={{ color: '#AEAEB2' }}>Rahasia Klien</span>
            </div>
            <span className="text-[11px] font-sans" style={{ color: '#D1D1D6' }}>NDA</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
