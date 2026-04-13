'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { ChevronRight, ChevronLeft, Check } from 'lucide-react'
import PackageSelector from './PackageSelector'
import { SERVICES, BUDGET_OPTIONS, DEADLINE_OPTIONS, TONE_OPTIONS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const schema = z.object({
  nama: z.string().min(2, 'Nama minimal 2 karakter'),
  whatsapp: z.string().min(9, 'Nomor WA tidak valid').regex(/^[0-9+]+$/, 'Format nomor tidak valid'),
  email: z.string().email('Email tidak valid'),
  perusahaan: z.string().optional(),
  jenis: z.string().min(1, 'Pilih jenis layanan'),
  paket: z.enum(['Standard', 'Pro', 'Enterprise']),
  budget: z.string().min(1, 'Pilih budget'),
  deadline: z.string().min(1, 'Pilih deadline'),
  cerita: z.string().min(30, 'Minimal 30 karakter'),
  masalah: z.string().min(20, 'Minimal 20 karakter'),
  fitur: z.string().min(20, 'Minimal 20 karakter'),
  tone: z.string().min(1, 'Pilih tone'),
  warna: z.string().min(3, 'Deskripsikan preferensi warna'),
  referensi: z.string().optional(),
  hak_kepemilikan: z.enum(['A', 'B']),
  setuju: z.literal(true, { error: 'Kamu harus menyetujui syarat & ketentuan' }),
})

type BriefFormData = z.infer<typeof schema>

const STEPS = [
  { title: 'Data Klien', desc: 'Siapa kamu?' },
  { title: 'Info Project', desc: 'Apa yang ingin dibangun?' },
  { title: 'Deskripsi', desc: 'Ceritakan lebih detail' },
  { title: 'Preferensi', desc: 'Selera tampilan' },
  { title: 'Finalisasi', desc: 'Review & submit' },
]

const STEP_FIELDS: (keyof BriefFormData)[][] = [
  ['nama', 'whatsapp', 'email', 'perusahaan'],
  ['jenis', 'paket', 'budget', 'deadline'],
  ['cerita', 'masalah', 'fitur'],
  ['tone', 'warna', 'referensi'],
  ['hak_kepemilikan', 'setuju'],
]

export default function BriefForm() {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BriefFormData>({
    resolver: zodResolver(schema),
    defaultValues: { paket: 'Pro', hak_kepemilikan: 'A' },
  })

  const paketValue = watch('paket')
  const hakValue = watch('hak_kepemilikan')
  const toneValue = watch('tone')
  const jenisValue = watch('jenis')
  const budgetValue = watch('budget')
  const deadlineValue = watch('deadline')

  const nextStep = async () => {
    const valid = await trigger(STEP_FIELDS[step] as (keyof BriefFormData)[])
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const prevStep = () => setStep((s) => Math.max(s - 1, 0))

  const onSubmit = async (data: BriefFormData) => {
    setSubmitting(true)
    try {
      await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      router.push('/brief/sukses')
    } catch {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-[#D4D4C8] text-[#0F0F0F] placeholder-[#8A8878] text-sm font-sans focus:outline-none focus:border-[#FE6037]/60 transition-colors'
  const labelClass = 'block text-sm font-semibold text-[#0F0F0F] mb-1.5 font-sans'
  const errorClass = 'text-xs text-red-400 mt-1 font-sans'

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10">
        {STEPS.map((s, i) => (
          <div key={i} className="flex items-center gap-2 flex-1">
            <div className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all',
              i < step && 'bg-[#FE6037] text-[#0F0F0F]',
              i === step && 'bg-accent-orange text-[#0F0F0F]',
              i > step && 'bg-white border border-[#D4D4C8] text-[#6B6B5F]'
            )}>
              {i < step ? <Check size={14} /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={cn('flex-1 h-px', i < step ? 'bg-[#FE6037]' : 'bg-[#D4D4C8]')} />
            )}
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="font-display font-bold text-2xl text-[#0F0F0F]">{STEPS[step].title}</h2>
        <p className="text-[#6B6B5F] font-sans text-sm mt-1">{STEPS[step].desc}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1 — Data Klien */}
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Nama Lengkap *</label>
              <input {...register('nama')} placeholder="Budi Santoso" className={inputClass} />
              {errors.nama && <p className={errorClass}>{errors.nama.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Nomor WhatsApp *</label>
              <input {...register('whatsapp')} placeholder="08123456789" className={inputClass} />
              {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input {...register('email')} type="email" placeholder="budi@perusahaan.com" className={inputClass} />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Nama Perusahaan / Brand</label>
              <input {...register('perusahaan')} placeholder="PT Maju Bersama (opsional)" className={inputClass} />
            </div>
          </div>
        )}

        {/* Step 2 — Info Project */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className={labelClass}>Jenis Layanan *</label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setValue('jenis', s.name)}
                    className={cn(
                      'px-3 py-2.5 rounded-xl border text-left text-sm font-sans transition-all',
                      jenisValue === s.name
                        ? 'border-[#FE6037] bg-[#FE6037]/10 text-[#0F0F0F]'
                        : 'border-[#D4D4C8] bg-white text-[#6B6B5F] hover:border-[#FE6037]/40'
                    )}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
              {errors.jenis && <p className={errorClass}>{errors.jenis.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Paket *</label>
              <PackageSelector value={paketValue} onChange={(v) => setValue('paket', v as BriefFormData['paket'])} />
            </div>

            <div>
              <label className={labelClass}>Estimasi Budget *</label>
              <div className="grid grid-cols-2 gap-2">
                {BUDGET_OPTIONS.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setValue('budget', b)}
                    className={cn(
                      'px-3 py-2 rounded-xl border text-left text-xs font-sans transition-all',
                      budgetValue === b
                        ? 'border-[#FE6037] bg-[#FE6037]/10 text-[#0F0F0F]'
                        : 'border-[#D4D4C8] bg-white text-[#6B6B5F] hover:border-[#FE6037]/40'
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Target Deadline *</label>
              <div className="grid grid-cols-2 gap-2">
                {DEADLINE_OPTIONS.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setValue('deadline', d)}
                    className={cn(
                      'px-3 py-2 rounded-xl border text-left text-xs font-sans transition-all',
                      deadlineValue === d
                        ? 'border-[#FE6037] bg-[#FE6037]/10 text-[#0F0F0F]'
                        : 'border-[#D4D4C8] bg-white text-[#6B6B5F] hover:border-[#FE6037]/40'
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
              {errors.deadline && <p className={errorClass}>{errors.deadline.message}</p>}
            </div>
          </div>
        )}

        {/* Step 3 — Deskripsi */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Ceritakan Project Kamu *</label>
              <p className="text-xs text-[#6B6B5F] font-sans mb-2">Apa yang ingin kamu bangun? Konteks bisnis, target pengguna, dsb.</p>
              <textarea {...register('cerita')} rows={4} placeholder="Kami ingin membangun platform e-commerce untuk UMKM..." className={cn(inputClass, 'resize-none')} />
              {errors.cerita && <p className={errorClass}>{errors.cerita.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Masalah yang Ingin Diselesaikan *</label>
              <p className="text-xs text-[#6B6B5F] font-sans mb-2">Masalah apa yang mendorong kamu untuk membuat project ini?</p>
              <textarea {...register('masalah')} rows={3} placeholder="Saat ini proses penjualan masih manual via WA dan sering terjadi kesalahan..." className={cn(inputClass, 'resize-none')} />
              {errors.masalah && <p className={errorClass}>{errors.masalah.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Fitur Utama yang Diinginkan *</label>
              <p className="text-xs text-[#6B6B5F] font-sans mb-2">List fitur-fitur yang wajib ada. Satu fitur per baris.</p>
              <textarea {...register('fitur')} rows={4} placeholder="- Login/register user&#10;- Katalog produk dengan filter&#10;- Keranjang belanja&#10;- Payment gateway Midtrans" className={cn(inputClass, 'resize-none')} />
              {errors.fitur && <p className={errorClass}>{errors.fitur.message}</p>}
            </div>
          </div>
        )}

        {/* Step 4 — Preferensi Tampilan */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className={labelClass}>Tone / Karakter Visual *</label>
              <div className="grid grid-cols-2 gap-2">
                {TONE_OPTIONS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setValue('tone', t)}
                    className={cn(
                      'px-4 py-2.5 rounded-xl border text-sm text-left font-sans transition-all',
                      toneValue === t
                        ? 'border-[#FE6037] bg-[#FE6037]/10 text-[#0F0F0F]'
                        : 'border-[#D4D4C8] bg-white text-[#6B6B5F] hover:border-[#FE6037]/40'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.tone && <p className={errorClass}>{errors.tone.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Preferensi Warna *</label>
              <input
                {...register('warna')}
                placeholder="Biru tua, putih bersih. Hindari warna merah."
                className={inputClass}
              />
              {errors.warna && <p className={errorClass}>{errors.warna.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Website Referensi</label>
              <input
                {...register('referensi')}
                placeholder="https://contoh1.com, https://contoh2.com (opsional)"
                className={inputClass}
              />
            </div>
          </div>
        )}

        {/* Step 5 — Finalisasi */}
        {step === 4 && (
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-white border border-[#D4D4C8] rounded-xl p-5 space-y-3 text-sm font-sans">
              <h4 className="font-display font-semibold text-[#0F0F0F] mb-3">Ringkasan Brief</h4>
              {[
                ['Nama', watch('nama')],
                ['Email', watch('email')],
                ['WA', watch('whatsapp')],
                ['Layanan', watch('jenis')],
                ['Paket', watch('paket')],
                ['Budget', watch('budget')],
                ['Deadline', watch('deadline')],
                ['Tone', watch('tone')],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between gap-4">
                  <span className="text-[#6B6B5F]">{label}</span>
                  <span className="text-[#0F0F0F] text-right">{val || '—'}</span>
                </div>
              ))}
            </div>

            {/* Hak Kepemilikan */}
            <div>
              <label className={labelClass}>Hak Kepemilikan Source Code *</label>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {[
                  { val: 'A', title: 'Opsi A — Full Kepemilikan', desc: 'Source code diserahkan sepenuhnya ke klien setelah pelunasan. Klien bebas modifikasi.' },
                  { val: 'B', title: 'Opsi B — Lisensi Penggunaan', desc: 'Pixcode mempertahankan hak atas source code, klien mendapat lisensi penggunaan eksklusif.' },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.val}
                    onClick={() => setValue('hak_kepemilikan', opt.val as 'A' | 'B')}
                    className={cn(
                      'p-4 rounded-xl border text-left transition-all',
                      hakValue === opt.val
                        ? 'border-[#FE6037] bg-[#FE6037]/10'
                        : 'border-[#D4D4C8] bg-white hover:border-[#FE6037]/40'
                    )}
                  >
                    <p className="font-semibold text-sm text-[#0F0F0F] mb-1 font-sans">{opt.title}</p>
                    <p className="text-xs text-[#6B6B5F] font-sans">{opt.desc}</p>
                  </button>
                ))}
              </div>
              {errors.hak_kepemilikan && <p className={errorClass}>{errors.hak_kepemilikan.message}</p>}
            </div>

            {/* Setuju */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('setuju')}
                className="mt-0.5 w-4 h-4 accent-[#FE6037]"
              />
              <span className="text-sm text-[#6B6B5F] font-sans leading-relaxed">
                Saya menyetujui bahwa data yang saya masukkan adalah benar dan saya memahami
                proses kerja Pixcode. Brief ini akan dikirimkan ke tim Pixcode via WhatsApp.
              </span>
            </label>
            {errors.setuju && <p className={errorClass}>{errors.setuju.message}</p>}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#D4D4C8]">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 0}
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-sans transition-all',
              step === 0
                ? 'opacity-0 pointer-events-none'
                : 'border border-[#D4D4C8] text-[#6B6B5F] hover:border-[#FE6037]/40 hover:text-[#0F0F0F]:text-[#F0F0E8]'
            )}
          >
            <ChevronLeft size={16} />
            Kembali
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-accent-orange text-[#0F0F0F] hover:opacity-90 transition-all font-sans"
            >
              Lanjut
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl text-sm font-semibold bg-accent-orange text-[#0F0F0F] hover:opacity-90 disabled:opacity-50 transition-all font-sans"
            >
              {submitting ? 'Mengirim...' : 'Kirim Brief'}
              <Check size={16} />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
