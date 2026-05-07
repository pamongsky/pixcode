import { NextRequest, NextResponse } from 'next/server'
import { sendWA } from '@/lib/fonnte'
import { rateLimit, getClientIP } from '@/lib/rate-limit'
import { z } from 'zod'

const kontakSchema = z.object({
  nama: z.string().min(2).max(100),
  email: z.string().email(),
  wa: z.string().max(15).optional(),
  pesan: z.string().min(10).max(2000),
})

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIP(req)
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Terlalu banyak permintaan. Coba lagi nanti.' },
        { status: 429 }
      )
    }

    const data = await req.json()
    const { nama, email, wa, pesan } = kontakSchema.parse(data)

    const pixcodeWA = process.env.NEXT_PUBLIC_WA_NUMBER ?? ''
    if (!pixcodeWA) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const msg = `📩 *PESAN KONTAK — PIXCODE*

👤 Nama: ${nama}
📧 Email: ${email}
📱 WA: ${wa || '-'}

💬 Pesan:
${pesan}

---
_Dikirim dari pixcode.id/kontak_`.trim()

    const sent = await sendWA(pixcodeWA, msg)
    if (!sent) {
      return NextResponse.json(
        { success: false, error: 'Gagal mengirim pesan. Coba lagi atau hubungi via WhatsApp.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Data tidak valid', details: err.errors },
        { status: 400 }
      )
    }
    if (err instanceof SyntaxError) {
      return NextResponse.json({ success: false, error: 'Invalid JSON' }, { status: 400 })
    }
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
