// src/components/projects/VisualProjectLayout.tsx
import { Project } from '@/data/projects'
import ImageGallery from '@/components/ImageGallery'

type Props = {
  project: Project
}

export default function VisualProjectLayout({ project }: Props) {
  const images =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : ['/images/graphics/placeholder.jpg']

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* LEFT — Gallery */}
      <div>
        <ImageGallery images={images} />
      </div>

      {/* RIGHT — Details */}
      <div className="pt-2 md:pt-4">
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

        {project.description && <p className="mt-6 text-slate-700">{project.description}</p>}

        {project.details && (
          <div className="mt-4 prose prose-slate">
            <p>{project.details}</p>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links?.caseStudy && (
            <a
              href={project.links.caseStudy}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded border text-sm"
            >
              Case Study PDF
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
