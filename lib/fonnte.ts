export async function sendWA(phone: string, message: string): Promise<boolean> {
  const token = process.env.FONNTE_TOKEN
  if (!token) {
    console.warn('[Fonnte] FONNTE_TOKEN not set, skipping WA send')
    return false
  }

  try {
    const res = await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        target: phone,
        message,
        countryCode: '62',
      }),
    })
    const data = await res.json()
    return data.status === true
  } catch (err) {
    console.error('[Fonnte] Failed to send WA:', err)
    return false
  }
}

export function formatBriefMessage(data: {
  nama: string
  whatsapp: string
  email: string
  perusahaan?: string
  jenis: string
  paket: string
  budget: string
  deadline: string
  cerita: string
  masalah: string
  fitur: string
  tone: string
  warna: string
  referensi?: string
  hak_kepemilikan: string
}): string {
  return `
🎯 *BRIEF PROJECT BARU — PIXCODE*

👤 *Data Klien*
Nama: ${data.nama}
WA: ${data.whatsapp}
Email: ${data.email}
Perusahaan: ${data.perusahaan || '-'}

📋 *Info Project*
Jenis: ${data.jenis}
Paket: ${data.paket}
Budget: ${data.budget}
Deadline: ${data.deadline}

📝 *Deskripsi*
Cerita: ${data.cerita}
Masalah: ${data.masalah}
Fitur: ${data.fitur}

🎨 *Preferensi*
Tone: ${data.tone}
Warna: ${data.warna}
Referensi: ${data.referensi || '-'}

⚖️ *Hak Kepemilikan*
Opsi: ${data.hak_kepemilikan}

---
_Dikirim otomatis dari pixcode.id_
`.trim()
}

export function formatClientConfirmation(nama: string, jenis: string): string {
  return `
Halo ${nama}! 👋

Terima kasih sudah mengisi brief project di Pixcode.

Kami sudah menerima brief kamu untuk *${jenis}* dan akan menghubungi kamu dalam 1×24 jam dengan proposal teknis + estimasi biaya.

Sementara itu, kamu bisa cek status project di:
https://pixcode.id/tracker

Ada pertanyaan? Balas pesan ini atau email ke halo@pixcode.id 🚀

— Tim Pixcode
`.trim()
}
