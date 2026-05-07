'use client'

import { useEffect } from 'react'

export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error untuk debugging (hanya di development)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error boundary caught:', error)
    }
  }, [error])

  return (
    <main className="min-h-screen bg-[#FDF6EF] flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 text-center">
          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="font-display font-bold text-[#1D1D1F] text-xl mb-2">
            Ada Kesalahan
          </h1>

          <p className="text-[#8E8E93] font-sans text-sm mb-6 leading-relaxed">
            Terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang menangani masalah ini.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => reset()}
              className="w-full py-3 rounded-xl bg-[#E8522A] text-white text-sm font-semibold hover:bg-[#D4471F] transition-colors font-sans"
            >
              Coba Lagi
            </button>
            <a
              href="/"
              className="w-full py-3 rounded-xl border border-[#E5E5EA] text-[#1D1D1F] text-sm font-semibold hover:bg-[#F5F5F7] transition-colors font-sans"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
