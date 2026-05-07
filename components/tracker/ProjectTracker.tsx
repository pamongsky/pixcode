'use client'

import { useState } from 'react'
import { Search, CheckCircle, Clock, AlertCircle, Loader, MessageCircle } from 'lucide-react'
import { TRACKER_PROJECTS } from '@/lib/constants'
import type { TrackerProject } from '@/types'
import { cn } from '@/lib/utils'

export default function ProjectTracker() {
  const [inputId, setInputId] = useState('')
  const [result, setResult] = useState<TrackerProject | null | 'not-found'>(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = () => {
    if (!inputId.trim()) return
    const project = TRACKER_PROJECTS.find(
      (p) => p.id.toLowerCase() === inputId.trim().toLowerCase()
    )
    setResult(project ?? 'not-found')
    setSearched(true)
  }

  const statusConfig = {
    done: {
      icon: <CheckCircle size={16} className="text-white" />,
      bg: 'bg-[#34C759]',
      label: 'Selesai',
      labelColor: 'text-[#34C759]',
    },
    active: {
      icon: <Loader size={16} className="text-white animate-spin" />,
      bg: 'bg-[#E8522A]',
      label: 'Sedang Berjalan',
      labelColor: 'text-[#E8522A]',
    },
    pending: {
      icon: <div className="w-2 h-2 rounded-full bg-white/60" />,
      bg: 'bg-[#D1D1D6]',
      label: 'Menunggu',
      labelColor: 'text-[#8E8E93]',
    },
  }

  return (
    <div className="max-w-xl mx-auto">

      {/* Search bar */}
      <div className="relative mb-3">
        <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <Search size={18} className="text-[#8E8E93] shrink-0" />
          <input
            type="text"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Masukkan Project ID — contoh: PXC-2025-003"
            className="flex-1 text-[15px] font-sans text-[#1D1D1F] placeholder-[#C7C7CC] bg-transparent focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="shrink-0 px-5 py-2 rounded-xl bg-[#E8522A] text-white text-[13px] font-semibold font-sans hover:bg-[#D4471F] transition-colors"
          >
            Cek Status
          </button>
        </div>
      </div>

      {/* Demo hint */}
      {!searched && (
        <p className="text-center text-[13px] text-[#8E8E93] font-sans mb-8">
          Coba demo:{' '}
          {TRACKER_PROJECTS.map((p, i) => (
            <span key={p.id}>
              <button
                onClick={() => { setInputId(p.id); setResult(null); setSearched(false) }}
                className="text-[#E8522A] font-mono hover:underline"
              >
                {p.id}
              </button>
              {i < TRACKER_PROJECTS.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      )}

      {/* Not found */}
      {result === 'not-found' && (
        <div className="bg-white rounded-3xl p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/5 mt-4">
          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={26} className="text-red-400" />
          </div>
          <h3 className="font-display font-bold text-[#1D1D1F] text-[18px] mb-2">
            Project ID Tidak Ditemukan
          </h3>
          <p className="text-[14px] text-[#8E8E93] font-sans leading-relaxed">
            Pastikan ID yang kamu masukkan benar. Hubungi kami jika ada kendala.
          </p>
        </div>
      )}

      {/* Result card */}
      {result && result !== 'not-found' && (
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5 mt-4">

          {/* Header */}
          <div className="px-7 pt-7 pb-6">
            {/* ID + name */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-[11px] font-mono text-[#8E8E93] mb-1 tracking-wider">{result.id}</p>
                <h3 className="font-display font-bold text-[#1D1D1F] text-[20px] leading-tight">
                  {result.name}
                </h3>
                <p className="text-[13px] text-[#8E8E93] font-sans mt-1">{result.client}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-display font-bold text-[#1D1D1F] text-[2.5rem] leading-none">
                  {result.progress}
                  <span className="text-[1.2rem] text-[#8E8E93]">%</span>
                </p>
                <p className="text-[11px] text-[#8E8E93] font-sans mt-1">Progress</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-[#F2F2F7] rounded-full overflow-hidden mb-5">
              <div
                className="h-full rounded-full bg-[#E8522A] transition-all duration-1000"
                style={{ width: `${result.progress}%` }}
              />
            </div>

            {/* Dates */}
            <div className="flex gap-6">
              <div>
                <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider font-sans mb-1">Mulai</p>
                <p className="text-[13px] font-semibold text-[#1D1D1F] font-sans">{result.startDate}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider font-sans mb-1">Est. Selesai</p>
                <p className="text-[13px] font-semibold text-[#1D1D1F] font-sans">{result.estimatedEnd}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#F2F2F7] mx-7" />

          {/* Steps */}
          <div className="px-7 py-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8E8E93] font-sans mb-5">
              Progress Steps
            </p>
            <div className="space-y-1">
              {result.steps.map((step, i) => {
                const cfg = statusConfig[step.status]
                return (
                  <div
                    key={i}
                    className={cn(
                      'flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-colors',
                      step.status === 'active' ? 'bg-[#FFF5F2]' : 'hover:bg-[#F9F9F9]'
                    )}
                  >
                    {/* Status icon */}
                    <div className={cn('w-7 h-7 rounded-full flex items-center justify-center shrink-0', cfg.bg)}>
                      {cfg.icon}
                    </div>

                    {/* Label */}
                    <p className={cn(
                      'flex-1 text-[14px] font-semibold font-sans',
                      step.status === 'pending' ? 'text-[#C7C7CC]' : 'text-[#1D1D1F]'
                    )}>
                      {step.title}
                    </p>

                    {/* Status badge / date */}
                    <div className="flex items-center gap-2 shrink-0">
                      {step.status === 'active' && (
                        <span className="text-[11px] font-semibold font-sans text-[#E8522A] bg-[#E8522A]/10 px-2.5 py-1 rounded-full">
                          Aktif
                        </span>
                      )}
                      {step.date && (
                        <div className="flex items-center gap-1 text-[11px] text-[#8E8E93] font-sans">
                          <Clock size={11} />
                          {step.date}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-7 pb-7">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? '6285121595158'}?text=Halo, saya ingin tanya tentang project ${result.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#F2F2F7] text-[14px] font-semibold text-[#1D1D1F] hover:bg-[#E8522A] hover:text-white transition-all duration-300 font-sans"
            >
              <MessageCircle size={16} />
              Hubungi Tim via WhatsApp
            </a>
          </div>

        </div>
      )}
    </div>
  )
}
