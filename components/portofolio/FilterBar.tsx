'use client'

import { PORTFOLIO_CATEGORIES } from '@/lib/constants'

interface FilterBarProps {
  active: string
  onChange: (cat: string) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="w-44 shrink-0">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#AAAAAA] font-sans mb-4">
        Kategori
      </p>
      <div className="flex flex-col gap-1.5">
        {PORTFOLIO_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="w-full text-left px-3.5 py-2 rounded-xl text-[13px] font-semibold font-sans transition-all duration-200"
            style={{
              background: active === cat ? '#1D1D1F' : 'transparent',
              color: active === cat ? '#FFFFFF' : '#6E6E73',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
