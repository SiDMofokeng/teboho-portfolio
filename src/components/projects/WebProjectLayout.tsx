// src/components/projects/WebProjectLayout.tsx
import Link from 'next/link'
import { Project } from '@/data/projects'

type Props = {
  project: Project
}

export default function WebProjectLayout({ project }: Props) {
  const screenshotPath = `/images/web/${project.slug}/main.jpg`

  return (
    <div className="py-12 p-10">
      {/* Back */}
      <div className="mb-6">
        <Link href="/work" className="text-sm text-slate-600 underline inline-block">
          ← Back to all work
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT — Scrollable Screenshot */}
        <div className="border rounded-xl bg-slate-50 overflow-hidden p-4 md:p-6">
          <div className="h-[420px] overflow-y-auto">
            <img
              src={screenshotPath}
              alt={`${project.title} website screenshot`}
              className="w-full object-top"
            />
          </div>
        </div>

        {/* RIGHT — Details (unchanged structure) */}
        <div className="pt-4 md:pt-6">
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          {project.role && <p className="text-slate-500 mt-2">{project.role}</p>}

          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="text-xs py-1 px-2 rounded bg-slate-100 border">
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.description && (
            <p className="mt-6 text-slate-700">{project.description}</p>
          )}

          {project.details && (
            <div className="mt-4 prose prose-slate">
              <p>{project.details}</p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded bg-slate-900 text-white text-sm"
              >
                View Live
              </a>
            )}

            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded border text-sm"
              >
                View Repo
              </a>
            )}
          </div>

          <div className="mt-6 text-sm text-slate-500 space-y-1">
            <div><strong>Category:</strong> {project.category}</div>
            {project.role && <div><strong>Role:</strong> {project.role}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
