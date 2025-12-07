import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function ProjectPage({ params }) {
  const p = projects.find((x) => x.slug === params.slug)

  if (!p) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-10">
      <Link href="/work" className="text-sm underline mb-4 inline-block">
        ← Back to all work
      </Link>

      <h1 className="text-3xl font-semibold">{p.title}</h1>
      <p className="text-slate-500 mt-2">{p.role}</p>

      <img src={p.img} className="w-full rounded-xl mt-6" alt={p.title} />

      <div className="prose prose-slate mt-6">
        <p>{p.details}</p>
      </div>
    </article>
  )
}
