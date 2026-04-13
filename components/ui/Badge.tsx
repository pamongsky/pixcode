import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'gradient'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-sans',
        variant === 'default' && 'bg-white text-text-muted border border-[#D4D4C8]',
        variant === 'outline' && 'border border-accent-orange/40 text-accent-orange',
        variant === 'gradient' &&
          'bg-linear-to-r bg-accent-orange text-accent-orange border border-accent-orange/30',
        className
      )}
    >
      {children}
    </span>
  )
}
