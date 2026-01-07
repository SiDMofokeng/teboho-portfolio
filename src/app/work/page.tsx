// src/app/work/page.tsx
'use client'

import { useMemo, useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import Breadcrumb from '@/components/Breadcrumb'

// Product category removed
const CATEGORIES = ['all', 'web', 'graphic'] as const
const PAGE_SIZE = 6

export default function WorkPage() {
  // ✅ default to 'graphic' so visuals show first
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('graphic')

  // store per-category visible counts
  const initialCounts = useMemo(() => {
    const map = new Map<string, number>()
    CATEGORIES.forEach((c) => map.set(c, PAGE_SIZE))
    return map
  }, [])

  const [counts, setCounts] = useState<Map<string, number>>(initialCounts)

  // helper to get projects for a category
  const visibleList = useMemo(() => {
    const filtered =
      active === 'all'
        ? projects.filter((p) => p.category !== 'product')
        : projects.filter((p) => p.category === active)

    const max = counts.get(active) ?? PAGE_SIZE
    return filtered.slice(0, max)
  }, [active, counts])

  const totalForActive = useMemo(() => {
    const filtered =
      active === 'all'
        ? projects.filter((p) => p.category !== 'product')
        : projects.filter((p) => p.category === active)

    return filtered.length
  }, [active])

  function handleSetActive(cat: (typeof CATEGORIES)[number]) {
    setActive(cat)
    setCounts((prev) => {
      const next = new Map(prev)
      if (!next.get(cat) || next.get(cat)! < PAGE_SIZE) {
        next.set(cat, PAGE_SIZE)
      }
      return next
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleLoadMore() {
    setCounts((prev) => {
      const next = new Map(prev)
      const cur = next.get(active) ?? PAGE_SIZE
      next.set(active, cur + PAGE_SIZE)
      return next
    })
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
      </div>

      <h1 className="text-4xl font-bold tracking-tight">Selected Work</h1>
      <p className="text-slate-600 mt-2 max-w-2xl">
        A curated collection of Web and Graphic projects.
      </p>

      {/* Category controls */}
      <div className="mt-8 flex gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => handleSetActive(c)}
            className={`text-sm px-3 py-2 rounded ${
              active === c ? 'bg-slate-900 text-white' : 'border'
            }`}
            aria-pressed={active === c}
          >
            {c === 'all' ? 'All' : c[0].toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleList.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      {/* Load more */}
      <div className="mt-8 flex justify-center">
        {visibleList.length < totalForActive && (
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 rounded border hover:bg-slate-50"
            aria-label="Load more projects"
          >
            Load more
          </button>
        )}
      </div>
    </main>
  )
}
