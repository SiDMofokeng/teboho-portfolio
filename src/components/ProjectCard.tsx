// src/components/ProjectCard.tsx
'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const isVisual = project.category === 'graphic' || project.category === 'product'

  // Visual images (only for graphic/product)
  const images = useMemo(() => {
    if (!isVisual) return []
    return (project.images ?? []).filter(Boolean)
  }, [isVisual, project.images])

  const imageCount = images.length

  // What shows in the card
  const fallback =
    isVisual
      ? images[0] ?? '/images/profile-placeholder.svg'
      : project.logo ?? null

  // Slider index
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!isVisual) return
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isVisual, images])

  const activeSrc =
    isVisual && images.length > 0 ? images[idx] : fallback

  return (
    <article className="group rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
      {/* Visual area */}
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        {activeSrc ? (
          <img
            src={activeSrc}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-sm text-slate-500">
            {project.title}
          </div>
        )}

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs bg-white/90 px-2 py-1 rounded border">
          {project.category}
        </span>

        {/* Image count badge */}
        {isVisual && imageCount > 1 && (
          <span className="absolute top-3 right-3 text-xs bg-white/90 px-2 py-1 rounded border">
            {imageCount} images
          </span>
        )}

        {/* Slider dots */}
        {isVisual && imageCount > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.slice(0, 6).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full border bg-white ${
                  i === idx ? 'opacity-100' : 'opacity-50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <h4 className="text-lg font-medium group-hover:underline">
          {project.title}
        </h4>

        {project.description && (
          <p className="mt-1 text-sm text-slate-500">
            {project.description}
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span
              key={t}
              className="text-xs py-1 px-2 rounded bg-slate-100 border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center gap-3">
          {project.category === 'web' ? (
            <>
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded border hover:bg-slate-50"
                >
                  View Live
                </a>
              )}
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded border hover:bg-slate-50"
                >
                  Repo
                </a>
              )}
            </>
          ) : (
            <Link
              href={`/projects/${project.category}/${project.slug}`}
              className="ml-auto text-sm px-3 py-2 rounded border hover:bg-slate-50"
            >
              View project
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
