import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="block w-8 h-px bg-accent-orange" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FE6037] font-sans">
        {children}
      </span>
    </div>
  )
}
