import { NextRequest, NextResponse } from 'next/server'
import { sendWA, formatBriefMessage, formatClientConfirmation } from '@/lib/fonnte'
import { rateLimit, getClientIP } from '@/lib/rate-limit'
import { z } from 'zod'

const briefSchema = z.object({
  nama: z.string().min(2).max(100),
  whatsapp: z.string().regex(/^[0-9+]+$/).min(9).max(15),
  email: z.string().email(),
  perusahaan: z.string().max(150).optional(),
  jenis: z.string().min(1).max(100),
  budget: z.string().min(1).max(100),
  deadline: z.string().min(1).max(100),
  cerita: z.string().min(30).max(5000),
  masalah: z.string().min(20).max(5000),
  fitur: z.string().min(20).max(5000),
  tone: z.string().min(1).max(100),
  warna: z.string().min(3).max(500),
  referensi: z.string().max(500).optional(),
  hak_kepemilikan: z.enum(['A', 'B']),
  setuju: z.literal(true),
})

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIP(req)
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate request size
    const contentLength = req.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 50000) {
      return NextResponse.json(
        { success: false, error: 'Request too large' },
        { status: 413 }
      )
    }

    const data = await req.json()

    // Validate data against schema
    const validatedData = briefSchema.parse(data)

    const pixcodeWA = process.env.NEXT_PUBLIC_WA_NUMBER ?? ''
    if (!pixcodeWA) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const briefMsg = formatBriefMessage(validatedData)
    const clientMsg = formatClientConfirmation(validatedData.nama, validatedData.jenis)

    // Send brief to Pixcode team
    const teamResult = await sendWA(pixcodeWA, briefMsg)
    if (!teamResult) {
      return NextResponse.json(
        { success: false, error: 'Failed to send brief to team' },
        { status: 500 }
      )
    }

    // Send confirmation to client
    await sendWA(validatedData.whatsapp, clientMsg)

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: err.errors },
        { status: 400 }
      )
    }

    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
