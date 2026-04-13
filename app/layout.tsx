import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pixcode — Digital Agency Semarang',
  description:
    'Micro agency digital berbasis di Semarang. Web, Mobile, AI/ML, IoT, dan Enterprise system development.',
  keywords: ['web development', 'mobile app', 'AI', 'IoT', 'Semarang', 'digital agency'],
  authors: [{ name: 'Pixcode', url: 'https://pixcode.id' }],
  openGraph: {
    title: 'Pixcode — Digital Agency Semarang',
    description: 'Web, Mobile, AI/ML, IoT & Enterprise Development',
    url: 'https://pixcode.id',
    siteName: 'Pixcode',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className="min-h-screen bg-bg-cream text-text-black antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
