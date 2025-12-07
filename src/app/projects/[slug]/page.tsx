// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'

// Explicit typing for route params to satisfy TypeScript
type PageProps = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const p = projects.find((x) => x.slug === params.slug)

  if (!p) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-10 px-6">
      <Link href="/work" className="text-sm underline inline-block">
        ← Back to all work
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">{p.title}</h1>
      <p className="text-slate-500 mt-2">{p.role}</p>

      <div className="mt-6">
        <img src={p.img} alt={p.title} className="w-full rounded-xl object-cover" />
      </div>

      <div className="prose prose-slate mt-6">
        <p>{p.details}</p>
      </div>
    </article>
  )
}
