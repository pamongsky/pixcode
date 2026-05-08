'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import GoogleTranslate from './GoogleTranslate'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-4 flex items-center justify-between gap-4">

        {/* Logo — di luar pill */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto shrink-0"
        >
          <Link href="/" className="block overflow-visible">
            <Image
              src="/pixcode_logo.png"
              alt="Pixcode"
              width={200}
              height={56}
              className="h-7 w-auto object-contain scale-[1.8] origin-left"
              priority
            />
          </Link>
        </motion.div>

        {/* CTA — di luar pill, desktop only */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto hidden lg:flex items-center gap-3 shrink-0 order-last"
        >
          <GoogleTranslate />
          <Link
            href="/brief"
            className="inline-flex items-center px-5 py-2 rounded-xl text-[15px] font-semibold bg-accent-orange text-white shadow-[0_2px_12px_rgba(232,82,42,0.35)] hover:bg-[#FF663D] transition-all duration-300 font-sans"
          >
            Mulai Brief
          </Link>
        </motion.div>

        {/* Pill container — hanya nav links */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'pointer-events-auto flex items-center gap-4 px-4 py-2.5 rounded-2xl transition-all duration-500',
            scrolled
              ? 'bg-nav-peach/70 backdrop-blur-2xl shadow-[0_8px_40px_rgba(232,82,42,0.08)] border border-white/50'
              : 'bg-nav-peach/50 backdrop-blur-xl border border-white/40'
          )}
        >
          {/* Nav links — desktop */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="pill-bg"
                      className="absolute inset-0 rounded-xl bg-white shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={cn(
                    'relative z-10 flex items-center px-4 py-1.5 text-[15px] font-medium rounded-xl transition-colors duration-200 font-sans',
                    isActive ? 'text-text-black' : 'text-text-muted hover:text-text-black'
                  )}>
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center shrink-0">
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-xl text-text-muted"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <X size={17} />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <Menu size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>

      </div>

      {/* Mobile dropdown */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto mt-2 rounded-2xl bg-nav-peach/98 backdrop-blur-2xl border border-white shadow-[0_16px_48px_rgba(232,82,42,0.08)] overflow-hidden"
            >
              <div className="px-3 py-3 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-2 text-[13.5px] font-medium py-2.5 px-3.5 rounded-xl transition-colors font-sans',
                          isActive
                            ? 'bg-white text-text-black shadow-sm'
                            : 'text-text-muted hover:text-text-black hover:bg-white/50'
                        )}
                      >
                        {isActive && <span className="w-1.25 h-1.25 rounded-full bg-accent-orange" />}
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  className="pt-1.5 mt-1 border-t border-white"
                >
                  <Link
                    href="/brief"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center px-5 py-2.5 rounded-xl text-[13px] font-semibold bg-accent-orange text-white font-sans"
                  >
                    Mulai Brief
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </header>
  )
}
