import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import VisualProjectLayout from '@/components/projects/VisualProjectLayout'

type PageProps = {
  params: Promise<{ slug?: string }> | { slug?: string }
}

export default async function ProductProjectPage({ params }: PageProps) {
  const resolved = await params
  const slug = resolved?.slug

  if (!slug) return notFound()

  const project = projects.find(
    p => p.slug === slug && p.category === 'product'
  )

  if (!project) return notFound()

  return <VisualProjectLayout project={project} />
}
