import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import type { Service } from '@/types'
import { SERVICE_DETAILS } from '@/lib/constants'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const detail = SERVICE_DETAILS[service.id]

  return (
    <div className="group relative rounded-2xl bg-white border border-[#D4D4C8] hover:border-[#FE6037]/40 transition-all duration-300 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FE6037]/0 to-transparent group-hover:via-[#FE6037]/60 transition-all duration-500" />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-mono text-[#302F28] group-hover:text-[#FE6037]/50 transition-colors mb-2 block font-sans">
              {service.number}
            </span>
            <Badge variant="gradient">{service.tag}</Badge>
          </div>
          <ArrowUpRight
            size={18}
            className="text-[#302F28] group-hover:text-[#FE6037] transition-colors mt-1"
          />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-[#0F0F0F] mb-3 leading-snug">
          {service.name}
        </h3>
        <p className="text-sm text-[#6B6B5F] leading-relaxed mb-6 font-sans">
          {detail?.longDesc ?? service.desc}
        </p>

        {/* Packages */}
        {detail && (
          <div className="grid grid-cols-3 gap-2 mb-6">
            {detail.packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-xl border border-[#D4D4C8] p-3 text-center bg-[#EAEADF]/60"
              >
                <p className="text-[10px] uppercase tracking-wider text-[#6B6B5F] mb-1 font-sans">{pkg.name}</p>
                <p className="text-xs font-semibold text-[#0F0F0F] font-sans">{pkg.price}</p>
              </div>
            ))}
          </div>
        )}

        {/* Package features (first package) */}
        {detail && (
          <ul className="space-y-2 mb-6">
            {detail.packages[1].features.map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-xs text-[#6B6B5F] font-sans">
                <span className="w-1 h-1 rounded-full bg-[#FE6037] flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4D4C8] text-[#6B6B5F] font-sans"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/brief"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-[#D4D4C8] text-[#6B6B5F] hover:border-[#FE6037]/60 hover:text-[#0F0F0F]:text-[#F0F0E8] transition-all duration-300 font-sans group-hover:bg-[#E8E8DC]:bg-[#242420]"
        >
          Mulai Project Ini
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  )
}
