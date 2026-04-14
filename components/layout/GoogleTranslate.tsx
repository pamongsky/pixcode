'use client'

import { useState, useEffect, useRef } from 'react'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const LANGUAGES = [
  { code: 'id', label: 'Indonesia', short: 'ID' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh-CN', label: '中文', short: 'CN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
  { code: 'ja', label: '日本語', short: 'JP' },
  { code: 'ko', label: '한국어', short: 'KR' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'pt', label: 'Português', short: 'BR' },
]

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any
  }
}

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('id')
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Read active language from googtrans cookie
    const match = document.cookie.match(/googtrans=\/id\/([^;]+)/)
    const langFromCookie = match ? decodeURIComponent(match[1]) : 'id'
    setCurrent(langFromCookie)
    localStorage.setItem('pixcode-lang', langFromCookie)

    if (document.getElementById('google-translate-script')) return

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'id',
          includedLanguages: LANGUAGES.map((l) => l.code).join(','),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          layout: (window.google.translate.TranslateElement.InlineLayout as any).SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.head.appendChild(script)

    // Repeatedly kill the Google Translate top bar
    const killBar = setInterval(() => {
      // Force body back to top
      document.body.style.top = '0px'

      // Remove the iframe bar
      const bar = document.querySelector('.goog-te-banner-frame') as HTMLElement
      if (bar) bar.style.display = 'none'

      // Remove injected top margin/padding from body
      const body = document.body
      if (body.style.marginTop) body.style.marginTop = '0'
    }, 500)

    return () => clearInterval(killBar)
  }, [])

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const selectLanguage = (code: string) => {
    setOpen(false)

    if (code === 'id') {
      // Remove translation — clear cookie
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`
    } else {
      // Set googtrans cookie then reload — Google Translate reads it on load
      document.cookie = `googtrans=/id/${code}; path=/`
      document.cookie = `googtrans=/id/${code}; path=/; domain=${window.location.hostname}`
    }

    window.location.reload()
  }

  const currentLang = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0]

  return (
    <div ref={dropdownRef} className="relative">
      {/* Hidden Google Translate mount point */}
      <div id="google_translate_element" className="absolute hidden" />

      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        translate="no"
        className="notranslate flex items-center gap-1.5 text-text-muted hover:text-text-black transition-colors duration-200"
      >
        <Globe size={14} className="shrink-0" />
        <span className="flex items-center gap-1.5 text-[13px] font-medium font-sans">
          <span className="text-[10px] font-bold text-accent-orange">{currentLang.short}</span>
          <span>{currentLang.label}</span>
        </span>
        <ChevronDown
          size={12}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div translate="no" className="notranslate absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5 overflow-hidden z-100 py-1.5">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#F5F5F7] transition-colors duration-150"
            >
              <span className="flex items-center gap-2.5 text-[13px] font-sans text-[#1D1D1F]">
                <span className="text-[10px] font-bold text-accent-orange w-5 text-left">{lang.short}</span>
                <span>{lang.label}</span>
              </span>
              {current === lang.code && (
                <Check size={13} className="text-[#E8522A] shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
