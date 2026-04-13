import { ArrowUpRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white border border-[#D4D4C8] hover:border-[#FE6037]/40 transition-all duration-300 overflow-hidden cursor-default">
      {/* Thumbnail placeholder */}
      <div
        className="h-48 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `radial-gradient(circle at center, ${project.color}20, transparent 70%)` }}
        >
          <span className="font-display font-black text-[80px] opacity-10 text-white select-none">
            {project.title.charAt(0)}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold font-sans"
            style={{
              background: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}40`,
            }}
          >
            {project.category}
          </span>
        </div>
        {/* Year */}
        <div className="absolute top-4 right-4">
          <span className="text-xs text-[#6B6B5F] font-sans">{project.year}</span>
        </div>
        {/* Arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: project.color }}
          >
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs text-[#6B6B5F] mb-2 font-sans">{project.client}</p>
        <h3 className="font-display font-bold text-[#0F0F0F] text-base mb-3 leading-snug group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[#6B6B5F] leading-relaxed mb-4 font-sans line-clamp-3">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4D4C8] text-[#6B6B5F] font-sans">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4D4C8] text-[#6B6B5F] font-sans">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
