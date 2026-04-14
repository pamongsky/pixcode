'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasDetail = project.featured === true
  const isPersonal = project.isPersonal === true
  const clientLabel = isPersonal ? 'Personal Project' : (project.client ?? 'Side Project')

  const cardContent = (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: '0 20px 50px rgba(0,0,0,0.11), 0 4px 16px rgba(0,0,0,0.06)',
        transition: { duration: 0.25 },
      }}
      className="group relative rounded-2xl bg-white overflow-hidden flex flex-col"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)' }}
    >
      {/* Thumbnail — Apple dark + cool blue glow */}
      <div
        className="relative overflow-hidden"
        style={{ height: '220px', background: '#1C1C1E' }}
      >
        {/* Top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.07]" />

        {/* Cool blue glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-32 rounded-full blur-[50px] pointer-events-none"
          style={{ background: 'rgba(10,132,255,0.22)' }}
        />

        {/* Fake browser frame */}
        <div
          className="absolute inset-5 rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
        >
          {/* Browser bar */}
          <div
            className="h-7 flex items-center gap-1.5 px-3"
            style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="flex-1 h-3 rounded-full bg-white/5 mx-3" />
          </div>
          {/* Content mockup */}
          <div className="p-4 flex flex-col gap-2.5">
            <div className="h-2 rounded-full w-2/3" style={{ background: 'rgba(10,132,255,0.35)' }} />
            <div className="h-2 rounded-full w-1/2 bg-white/8" />
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              <div className="h-11 rounded-lg" style={{ background: 'rgba(10,132,255,0.18)' }} />
              <div className="h-11 rounded-lg bg-white/4" />
              <div className="h-11 rounded-lg bg-white/4" />
            </div>
          </div>
        </div>

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-wider backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}
          >
            {project.category}
          </span>
        </div>

        {/* Personal badge */}
        {isPersonal && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold font-sans backdrop-blur-sm"
              style={{ background: 'rgba(10,132,255,0.18)', color: 'rgba(10,132,255,0.9)' }}
            >
              Personal
            </span>
          </div>
        )}

        {/* Year (non-personal) */}
        {!isPersonal && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[11px] font-sans" style={{ color: 'rgba(255,255,255,0.25)' }}>
              {project.year}
            </span>
          </div>
        )}

        {/* Hover arrow */}
        {hasDetail && (
          <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
            <div className="w-8 h-8 rounded-full bg-[#E8522A] flex items-center justify-center shadow-[0_4px_12px_rgba(232,82,42,0.4)]">
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </div>
        )}
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
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full font-sans"
              style={{ background: '#F2F2F7', color: '#6E6E73' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span
              className="text-[11px] px-2.5 py-1 rounded-full font-sans"
              style={{ background: '#F2F2F7', color: '#AEAEB2' }}
            >
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3.5" style={{ borderTop: '1px solid #F2F2F7' }}>
          <div className="flex items-center gap-1.5">
            {isPersonal && (
              <div className="w-3.5 h-3.5 rounded-full" style={{ background: 'rgba(10,132,255,0.2)', border: '1.5px solid rgba(10,132,255,0.5)' }} />
            )}
            <span className="text-[11px] font-sans" style={{ color: isPersonal ? '#0A84FF' : '#AEAEB2' }}>
              {clientLabel}
            </span>
          </div>
          {hasDetail ? (
            <span className="text-[11px] font-semibold font-sans text-[#E8522A]">
              Lihat Detail →
            </span>
          ) : (
            <span className="text-[11px] font-sans" style={{ color: '#D1D1D6' }}>Privat</span>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (hasDetail) {
    return (
      <Link href={`/portofolio/${project.id}`} className="block h-full">
        {cardContent}
      </Link>
    )
  }

  return <div className="h-full">{cardContent}</div>
}
