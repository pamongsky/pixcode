import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pixcode — Digital Agency Semarang',
  description:
    'Micro agency digital berbasis di Semarang. Web, Mobile, AI/ML, IoT, dan Enterprise system development.',
  keywords: ['web development', 'mobile app', 'AI', 'IoT', 'Semarang', 'digital agency'],
  authors: [{ name: 'Pixcode', url: 'https://pixcodeagency.com' }],
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
    <html lang="id" className={dmSans.variable}>
      <body className="min-h-screen bg-bg-cream text-text-black antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
