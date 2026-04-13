'use client'

import { cn } from '@/lib/utils'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'

interface FilterBarProps {
  active: string
  onChange: (cat: string) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PORTFOLIO_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-sans',
            active === cat
              ? 'bg-accent-orange text-[#0F0F0F]'
              : 'bg-white border border-[#D4D4C8] text-[#6B6B5F] hover:border-[#FE6037]/40 hover:text-[#0F0F0F]:text-[#F0F0E8]'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
