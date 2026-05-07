'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Send } from 'lucide-react'
import { SERVICES, BUDGET_OPTIONS, DEADLINE_OPTIONS, TONE_OPTIONS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const schema = z.object({
  nama: z.string().min(2, 'Nama minimal 2 karakter'),
  whatsapp: z.string().min(9, 'Nomor WA tidak valid').regex(/^[0-9+]+$/, 'Format nomor tidak valid'),
  email: z.string().email('Email tidak valid'),
  perusahaan: z.string().optional(),
  jenis: z.string().min(1, 'Pilih jenis layanan'),
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

export default function BriefForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BriefFormData>({
    resolver: zodResolver(schema),
    defaultValues: { hak_kepemilikan: 'A' },
  })

  const hakValue = watch('hak_kepemilikan')
  const toneValue = watch('tone')
  const jenisValue = watch('jenis')
  const budgetValue = watch('budget')
  const deadlineValue = watch('deadline')

  const onSubmit = async (data: BriefFormData) => {
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setSubmitError(json.error ?? 'Gagal mengirim brief. Coba lagi atau hubungi kami via WhatsApp.')
        setSubmitting(false)
        return
      }
      router.push('/brief/sukses')
    } catch {
      setSubmitError('Koneksi bermasalah. Pastikan internet kamu aktif, lalu coba lagi.')
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent text-[#1D1D1F] placeholder-[#AEAEB2] text-[14px] font-sans focus:outline-none focus:bg-white focus:border-[#E8522A]/30 transition-all'
  const labelClass = 'block text-[13px] font-semibold text-[#1D1D1F] mb-1.5 font-sans'
  const errorClass = 'text-[11px] text-red-400 mt-1 font-sans'

  const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <div className="pb-4 mb-6 border-b border-[#F2F2F7]">
      <h3 className="font-display font-bold text-[#1D1D1F] text-[17px]">{children}</h3>
    </div>
  )

  const OptionButton = ({
    selected,
    onClick,
    children,
  }: {
    selected: boolean
    onClick: () => void
    children: React.ReactNode
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-3 py-2.5 rounded-xl border text-left text-[13px] font-sans transition-all',
        selected
          ? 'border-[#E8522A] bg-[#E8522A]/8 text-[#1D1D1F] font-medium'
          : 'border-[#E5E5EA] bg-[#F5F5F7] text-[#6E6E73] hover:border-[#E8522A]/30'
      )}
    >
      {children}
    </button>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

      {/* ── 1. Data Klien ── */}
      <div>
        <SectionHeading>Data Klien</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nama Lengkap *</label>
            <input {...register('nama')} placeholder="Nama kamu / PIC" className={inputClass} />
            {errors.nama && <p className={errorClass}>{errors.nama.message}</p>}
          </div>
          <div>
            <label className={labelClass}>No. WhatsApp *</label>
            <input {...register('whatsapp')} placeholder="Nomor WA dimulai dari 62..." className={inputClass} />
            {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input {...register('email')} type="email" placeholder="Email (untuk dokumen project)" className={inputClass} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Nama Perusahaan / Brand</label>
            <input {...register('perusahaan')} placeholder="Nama perusahaan / brand (opsional)" className={inputClass} />
          </div>
        </div>
      </div>

      {/* ── 2. Info Project ── */}
      <div>
        <SectionHeading>Info Project</SectionHeading>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Jenis Layanan *</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
              {SERVICES.map((s) => (
                <OptionButton key={s.id} selected={jenisValue === s.name} onClick={() => setValue('jenis', s.name)}>
                  {s.name}
                </OptionButton>
              ))}
            </div>
            {errors.jenis && <p className={errorClass}>{errors.jenis.message}</p>}
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Estimasi Budget *</label>
              <div className="grid grid-cols-1 gap-2 mt-1">
                {BUDGET_OPTIONS.map((b) => (
                  <OptionButton key={b} selected={budgetValue === b} onClick={() => setValue('budget', b)}>
                    {b}
                  </OptionButton>
                ))}
              </div>
              {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Target Deadline *</label>
              <div className="grid grid-cols-1 gap-2 mt-1">
                {DEADLINE_OPTIONS.map((d) => (
                  <OptionButton key={d} selected={deadlineValue === d} onClick={() => setValue('deadline', d)}>
                    {d}
                  </OptionButton>
                ))}
              </div>
              {errors.deadline && <p className={errorClass}>{errors.deadline.message}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Deskripsi Project ── */}
      <div>
        <SectionHeading>Deskripsi Project</SectionHeading>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Ceritakan Project Kamu *</label>
            <p className="text-[12px] font-sans mb-2" style={{ color: '#AEAEB2' }}>Siapa kamu, PIC project, dan yang bisa kami hubungi</p>
            <textarea {...register('cerita')} rows={4} placeholder="Contoh: E-commerce untuk fashion UMKM, 100+ sellers terdaftar..." className={cn(inputClass, 'resize-none')} />
            {errors.cerita && <p className={errorClass}>{errors.cerita.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Masalah yang Ingin Diselesaikan *</label>
            <p className="text-[12px] font-sans mb-2" style={{ color: '#AEAEB2' }}>Apa pain point utama yang ingin diselesaikan?</p>
            <textarea {...register('masalah')} rows={3} placeholder="Contoh: Order tracking nggak ada, inventory management chaos, customer service bottleneck" className={cn(inputClass, 'resize-none')} />
            {errors.masalah && <p className={errorClass}>{errors.masalah.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Fitur Utama yang Diinginkan *</label>
            <p className="text-[12px] font-sans mb-2" style={{ color: '#AEAEB2' }}>List fitur-fitur yang wajib ada. Satu fitur per baris.</p>
            <p className="text-[12px] font-sans mb-2" style={{ color: '#AEAEB2' }}>Fitur core yang nggak boleh ketinggalan</p>
            <textarea {...register('fitur')} rows={4} placeholder={'- User authentication & profile\n- Product catalog dengan search\n- Shopping cart & checkout\n- Payment integration\n- Order tracking'} className={cn(inputClass, 'resize-none')} />
            {errors.fitur && <p className={errorClass}>{errors.fitur.message}</p>}
          </div>
        </div>
      </div>

      {/* ── 4. Preferensi Tampilan ── */}
      <div>
        <SectionHeading>Preferensi Tampilan</SectionHeading>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Tone / Karakter Visual *</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
              {TONE_OPTIONS.map((t) => (
                <OptionButton key={t} selected={toneValue === t} onClick={() => setValue('tone', t)}>
                  {t}
                </OptionButton>
              ))}
            </div>
            {errors.tone && <p className={errorClass}>{errors.tone.message}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Preferensi Warna *</label>
              <input {...register('warna')} placeholder="Contoh: Primary blue, neutral gray, accent orange. Hindari pink" className={inputClass} />
              {errors.warna && <p className={errorClass}>{errors.warna.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Website Referensi</label>
              <input {...register('referensi')} placeholder="Link website referensi atau inspirasi (opsional)" className={inputClass} />
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. Hak Kepemilikan ── */}
      <div>
        <SectionHeading>Hak Kepemilikan Source Code</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { val: 'A', title: 'Opsi A — Full Kepemilikan', desc: 'Source code diserahkan sepenuhnya ke klien setelah pelunasan.' },
            { val: 'B', title: 'Opsi B — Lisensi Penggunaan', desc: 'Pixcode mempertahankan hak atas code, klien mendapat lisensi eksklusif.' },
          ].map((opt) => (
            <button
              type="button"
              key={opt.val}
              onClick={() => setValue('hak_kepemilikan', opt.val as 'A' | 'B')}
              className={cn(
                'p-4 rounded-xl border text-left transition-all',
                hakValue === opt.val
                  ? 'border-[#E8522A] bg-[#E8522A]/8'
                  : 'border-[#E5E5EA] bg-[#F5F5F7] hover:border-[#E8522A]/30'
              )}
            >
              <p className="font-semibold text-[13px] text-[#1D1D1F] mb-1 font-sans">{opt.title}</p>
              <p className="text-[12px] font-sans" style={{ color: '#6E6E73' }}>{opt.desc}</p>
            </button>
          ))}
        </div>
        {errors.hak_kepemilikan && <p className={errorClass}>{errors.hak_kepemilikan.message}</p>}
      </div>

      {/* ── Submit ── */}
      <div className="pt-2 border-t border-[#F2F2F7] space-y-4">
        {submitError && (
          <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200">
            <p className="text-[13px] font-sans text-red-600">{submitError}</p>
          </div>
        )}
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register('setuju')} className="mt-0.5 w-4 h-4 accent-[#E8522A]" />
          <span className="text-[13px] font-sans leading-relaxed" style={{ color: '#6E6E73' }}>
            Saya menyetujui bahwa data yang saya masukkan adalah benar dan memahami proses kerja Pixcode.
            Brief ini akan dikirimkan ke tim Pixcode via WhatsApp.
          </span>
        </label>
        {errors.setuju && <p className={errorClass}>{errors.setuju.message}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-[14px] font-bold bg-[#1D1D1F] text-white hover:bg-[#333] disabled:opacity-50 transition-colors font-sans"
        >
          {submitting ? 'Mengirim...' : 'Kirim Brief ke Pixcode'}
          <Send size={15} />
        </button>
      </div>

    </form>
  )
}
