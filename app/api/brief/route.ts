import { NextRequest, NextResponse } from 'next/server'
import { sendWA, formatBriefMessage, formatClientConfirmation } from '@/lib/fonnte'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const pixcodeWA = process.env.NEXT_PUBLIC_WA_NUMBER ?? ''
    const briefMsg = formatBriefMessage(data)
    const clientMsg = formatClientConfirmation(data.nama, data.jenis)

    // Send brief to Pixcode team
    if (pixcodeWA) await sendWA(pixcodeWA, briefMsg)

    // Send confirmation to client
    if (data.whatsapp) await sendWA(data.whatsapp, clientMsg)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API/brief] Error:', err)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
