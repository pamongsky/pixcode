import { cn } from '@/lib/utils'
import { PACKAGES } from '@/lib/constants'

interface PackageSelectorProps {
  value: string
  onChange: (pkg: string) => void
}

export default function PackageSelector({ value, onChange }: PackageSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {PACKAGES.map((pkg) => (
        <button
          key={pkg.name}
          type="button"
          onClick={() => onChange(pkg.name)}
          className={cn(
            'relative p-5 rounded-xl border text-left transition-all duration-300',
            value === pkg.name
              ? 'border-[#FE6037] bg-[#FE6037]/10'
              : 'border-[#D4D4C8] bg-white hover:border-[#FE6037]/40'
          )}
        >
          {pkg.highlight && (
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-accent-orange text-[#0F0F0F] font-sans">
              Most Popular
            </span>
          )}
          <span className="text-2xl mb-3 block">{pkg.icon}</span>
          <h4 className="font-display font-bold text-[#0F0F0F] mb-1">{pkg.name}</h4>
          <p className="text-xs text-[#6B6B5F] font-sans leading-relaxed">{pkg.desc}</p>
          {value === pkg.name && (
            <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#FE6037] flex items-center justify-center">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
