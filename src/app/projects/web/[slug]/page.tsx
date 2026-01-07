// src/app/projects/web/[slug]/page.tsx
import { notFound, redirect } from 'next/navigation'
import { projects } from '@/data/projects'

type PageProps = {
  params: Promise<{ slug?: string }> | { slug?: string }
}

export default async function WebProjectRedirectPage({ params }: PageProps) {
  const resolved = await params
  const slug = resolved?.slug
  if (!slug || typeof slug !== 'string') return notFound()

  const project = projects.find((p) => p.slug === slug && p.category === 'web')
  if (!project) return notFound()

  // If the project has a live link, send the user there.
  if (project.links?.live) {
    redirect(project.links.live)
  }

  // Otherwise, fall back to the Work page.
  redirect('/work')
}
