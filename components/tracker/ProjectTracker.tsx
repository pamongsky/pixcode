'use client'

import { useState } from 'react'
import { Search, CheckCircle, Circle, Loader, Clock, AlertCircle } from 'lucide-react'
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

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search */}
      <div className="flex gap-3 mb-8">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B5F]" />
          <input
            type="text"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Masukkan Project ID (contoh: PXC-2025-003)"
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-[#D4D4C8] text-[#0F0F0F] placeholder-[#8A8878] text-sm font-sans focus:outline-none focus:border-[#FE6037]/60 transition-colors"
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-6 py-3.5 rounded-xl bg-accent-orange text-[#0F0F0F] text-sm font-semibold font-sans hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Cek Status
        </button>
      </div>

      {/* Hint */}
      {!searched && (
        <div className="bg-white border border-[#D4D4C8] rounded-xl p-4 mb-6">
          <p className="text-xs text-[#6B6B5F] font-sans mb-2">
            💡 Project ID dikirimkan via WhatsApp saat kontrak ditandatangani.
          </p>
          <p className="text-xs text-[#6B6B5F] font-sans">
            Coba demo:{' '}
            {TRACKER_PROJECTS.map((p, i) => (
              <span key={p.id}>
                <button
                  onClick={() => { setInputId(p.id); setResult(null); setSearched(false) }}
                  className="text-[#FE6037] hover:text-[#FE6037] transition-colors font-mono"
                >
                  {p.id}
                </button>
                {i < TRACKER_PROJECTS.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Not found */}
      {result === 'not-found' && (
        <div className="bg-white border border-red-500/30 rounded-xl p-6 text-center">
          <AlertCircle size={32} className="text-red-400 mx-auto mb-3" />
          <h3 className="font-display font-semibold text-[#0F0F0F] mb-2">Project ID Tidak Ditemukan</h3>
          <p className="text-sm text-[#6B6B5F] font-sans">
            Pastikan ID yang kamu masukkan benar. Hubungi kami jika ada kendala.
          </p>
        </div>
      )}

      {/* Result */}
      {result && result !== 'not-found' && (
        <div className="bg-white border border-[#D4D4C8] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-[#D4D4C8] bg-white/50">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-[#6B6B5F] font-mono mb-1">{result.id}</p>
                <h3 className="font-display font-bold text-[#0F0F0F] text-lg">{result.name}</h3>
                <p className="text-sm text-[#6B6B5F] font-sans mt-1">{result.client}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-display font-bold text-[#0F0F0F]">{result.progress}%</p>
                <p className="text-xs text-[#6B6B5F] font-sans">Progress</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-2 bg-[#D4D4C8] rounded-full overflow-hidden">
              <div
                className="h-full bg-accent-orange rounded-full transition-all duration-1000"
                style={{ width: `${result.progress}%` }}
              />
            </div>

            {/* Dates */}
            <div className="flex gap-6 mt-4">
              <div>
                <p className="text-[10px] text-[#6B6B5F] uppercase tracking-wider font-sans mb-0.5">Mulai</p>
                <p className="text-xs text-[#0F0F0F] font-sans">{result.startDate}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#6B6B5F] uppercase tracking-wider font-sans mb-0.5">Estimasi Selesai</p>
                <p className="text-xs text-[#0F0F0F] font-sans">{result.estimatedEnd}</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B5F] mb-4 font-sans">
              Progress Steps
            </p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-[#D4D4C8]" />

              <div className="space-y-4">
                {result.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    {/* Icon */}
                    <div className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2',
                      step.status === 'done' && 'bg-[#FE6037]/20 border-[#FE6037]',
                      step.status === 'active' && 'bg-[#FE6037]/20 border-[#FE6037]',
                      step.status === 'pending' && 'bg-white border-[#D4D4C8]'
                    )}>
                      {step.status === 'done' && <CheckCircle size={14} className="text-[#5A7A00]" />}
                      {step.status === 'active' && <Loader size={14} className="text-[#FE6037] animate-spin" />}
                      {step.status === 'pending' && <Circle size={14} className="text-[#302F28]" />}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-center justify-between">
                        <p className={cn(
                          'text-sm font-semibold font-sans',
                          step.status === 'done' && 'text-[#0F0F0F]',
                          step.status === 'active' && 'text-[#FE6037]',
                          step.status === 'pending' && 'text-[#6B6B5F]'
                        )}>
                          {step.title}
                          {step.status === 'active' && (
                            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#FE6037]/20 text-[#FE6037] border border-[#FE6037]/30 font-sans">
                              Sedang Berjalan
                            </span>
                          )}
                        </p>
                        {step.date && (
                          <div className="flex items-center gap-1 text-[10px] text-[#6B6B5F] font-sans">
                            <Clock size={10} />
                            {step.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? '6281234567890'}?text=Halo, saya ingin tanya tentang project ${result.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-[#D4D4C8] text-sm text-[#6B6B5F] hover:border-[#FE6037]/60 hover:text-[#0F0F0F]:text-[#F0F0E8] transition-all font-sans"
            >
              Hubungi Tim via WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
