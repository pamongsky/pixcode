export async function sendWA(phone: string, message: string): Promise<boolean> {
  const token = process.env.FONNTE_TOKEN
  if (!token) {
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
    return false
  }
}

function sanitizeInput(input: string): string {
  if (!input) return ''
  return input
    .replace(/\$/g, '\\$')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim()
}

export function formatBriefMessage(data: {
  nama: string
  whatsapp: string
  email: string
  perusahaan?: string
  jenis: string
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
Nama: ${sanitizeInput(data.nama)}
WA: ${sanitizeInput(data.whatsapp)}
Email: ${sanitizeInput(data.email)}
Perusahaan: ${sanitizeInput(data.perusahaan || '-')}

📋 *Info Project*
Jenis: ${sanitizeInput(data.jenis)}
Budget: ${sanitizeInput(data.budget)}
Deadline: ${sanitizeInput(data.deadline)}

📝 *Deskripsi*
Cerita: ${sanitizeInput(data.cerita)}
Masalah: ${sanitizeInput(data.masalah)}
Fitur: ${sanitizeInput(data.fitur)}

🎨 *Preferensi*
Tone: ${sanitizeInput(data.tone)}
Warna: ${sanitizeInput(data.warna)}
Referensi: ${sanitizeInput(data.referensi || '-')}

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
