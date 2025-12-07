// src/components/ProjectCard.tsx
import Link from 'next/link'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-48 bg-slate-100">
          <img src={project.img} alt={project.title} className="object-cover w-full h-full" />
        </div>

        <div className="p-4">
          <h4 className="text-lg font-medium group-hover:underline">{project.title}</h4>
          {project.description && <p className="mt-1 text-sm text-slate-500">{project.description}</p>}

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs py-1 px-2 rounded bg-slate-100 border">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
