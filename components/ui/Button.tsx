import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer font-sans',
        variant === 'primary' &&
          'bg-accent-orange text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]',
        variant === 'secondary' &&
          'border border-[#D4D4C8] text-text-black hover:border-[#FE6037] hover:bg-[#FE6037] hover:text-white bg-transparent',
        variant === 'ghost' &&
          'text-text-muted hover:text-text-black bg-transparent',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  )
}
