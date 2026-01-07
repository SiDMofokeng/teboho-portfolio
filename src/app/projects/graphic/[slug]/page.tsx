// src/app/projects/graphic/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, Project } from '@/data/projects'
import Breadcrumb from '@/components/Breadcrumb'
import VisualProjectLayout from '@/components/projects/VisualProjectLayout'

type PageProps = {
  params: Promise<{ slug?: string }> | { slug?: string }
}

export default async function GraphicProjectPage({ params }: PageProps) {
  const resolved = await params
  const slug = resolved?.slug
  if (!slug || typeof slug !== 'string') return notFound()

  const project: Project | undefined = projects.find(
    (p) => p.slug === slug && p.category === 'graphic'
  )
  if (!project) return notFound()

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Work', href: '/work' },
            { label: project.title },
          ]}
        />
      </div>

      <div className="mb-8">
        <Link href="/work" className="text-sm underline inline-block">
          ← Back to all work
        </Link>
      </div>

      <VisualProjectLayout project={project} />
    </main>
  )
}
