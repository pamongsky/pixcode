import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS
    .filter((p) => p.featured)
    .map((p) => ({ id: p.id }))
}

export default async function PortofolioDetailPage({ params }: Props) {
  const { id } = await params
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === id && p.featured)
  if (!project) notFound()

  const moreProjects = PORTFOLIO_PROJECTS.filter((p) => p.id !== id).slice(0, 3)

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <section className="pt-28 pb-0 px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/portofolio"
          className="inline-flex items-center gap-1.5 text-[#AAAAAA] hover:text-[#1A1A1A] text-[12px] font-sans font-medium transition-colors"
        >
          <ArrowLeft size={13} /> Portofolio
        </Link>
      </section>

      {/* ── Header ── */}
      <section className="pt-6 pb-8 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-white font-sans bg-[#E8522A] px-3 py-1 rounded-lg mb-4">
              {project.category}
            </span>
            <h1
              className="font-display font-bold text-[#1A1A1A] leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              {project.title}
            </h1>
            <p className="font-sans text-[15px] text-[#666666] leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 shrink-0 lg:min-w-55">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-semibold font-sans bg-[#E8522A] text-white hover:bg-[#D4471F] transition-all shadow-[0_4px_16px_rgba(232,82,42,0.28)]"
              >
                Lihat Live Demo
                <ExternalLink size={14} />
              </a>
            )}
            <Link
              href="/brief"
              className="flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-semibold font-sans bg-[#E8522A] text-white hover:bg-[#D4471F] transition-all shadow-[0_4px_16px_rgba(232,82,42,0.28)]"
            >
              Diskusi Project Serupa
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/portofolio"
              className="flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-semibold font-sans bg-white text-[#1A1A1A] hover:bg-[#F5F5F7] transition-all ring-1 ring-black/8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            >
              Lihat Portofolio Lain
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main Preview ── */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <div
          className="w-full rounded-3xl overflow-hidden relative"
          style={{ height: '460px', background: '#141414' }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />
          {/* Orange glow bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#E8522A]/10 blur-[60px] rounded-full" />

          {/* Browser frame */}
          <div className="absolute inset-8 rounded-2xl overflow-hidden border border-white/8">
            <div className="h-9 flex items-center gap-2 px-4 bg-white/3 border-b border-white/6">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 h-4 rounded-full bg-white/5 mx-4" />
            </div>
            <div className="bg-white/2 p-8 grid grid-cols-12 gap-5 h-full">
              <div className="col-span-4 flex flex-col gap-3">
                <div className="h-2.5 rounded-full w-full bg-white/15" />
                <div className="h-2.5 rounded-full w-3/4 bg-white/8" />
                <div className="h-2.5 rounded-full w-5/6 bg-white/8" />
                <div className="mt-5 h-9 rounded-xl w-28 bg-[#E8522A]/60" />
              </div>
              <div className="col-span-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#E8522A]/12 border border-[#E8522A]/15 h-28" />
                <div className="rounded-2xl bg-white/4 border border-white/6 h-28" />
                <div className="rounded-2xl bg-white/4 border border-white/6 h-28" />
                <div className="rounded-2xl bg-white/4 border border-white/6 h-28" />
              </div>
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-wider bg-white/10 text-white/60 backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          <div className="absolute top-5 right-5 z-10">
            <span className="text-[12px] text-white/25 font-sans">{project.year}</span>
          </div>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">

          {/* Tech stack */}
          <div className="bg-white rounded-3xl p-8 ring-1 ring-black/5 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
            <h2 className="font-display font-bold text-[#1A1A1A] text-[17px] mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-[13px] font-semibold font-sans bg-[#F2F2F2] text-[#444444]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Info sidebar */}
          <div className="bg-white rounded-3xl p-6 ring-1 ring-black/5 shadow-[0_2px_16px_rgba(0,0,0,0.05)] h-fit">
            <h3 className="font-display font-bold text-[#1A1A1A] text-[15px] mb-5">Info Project</h3>
            <div className="flex flex-col">
              {[
                { label: 'Kategori', value: project.category },
                { label: 'Klien', value: project.isPersonal ? 'Personal Project' : (project.client ?? 'Privat') },
                { label: 'Tahun', value: project.year },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3.5 border-b border-[#F5F5F5] last:border-0"
                >
                  <span className="text-[12px] text-[#AAAAAA] font-sans">{item.label}</span>
                  <span className="text-[13px] font-semibold text-[#1A1A1A] font-sans">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── More in Portfolio ── */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-display font-bold text-[#1A1A1A] text-[20px]">More in Portfolio</h2>
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold font-sans text-[#1A1A1A] hover:text-[#E8522A] transition-colors"
          >
            Lihat Semua <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreProjects.map((p) => (
            <Link
              key={p.id}
              href={p.featured ? `/portofolio/${p.id}` : '/portofolio'}
              className="group bg-white rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-1"
            >
              <div className="h-36 relative overflow-hidden" style={{ background: '#141414' }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#E8522A]/12 blur-[30px] rounded-full" />
                <div className="absolute inset-3 rounded-lg border border-white/8 bg-white/2" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-sans uppercase tracking-wider bg-white/10 text-white/50">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-[#1A1A1A] text-[14px] leading-snug mb-1">
                  {p.title}
                </h3>
                <p className="text-[11px] text-[#AAAAAA] font-sans">{p.client}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
