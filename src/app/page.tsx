import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import SectionHeader from '@/components/SectionHeader'
import TimelineItem from '@/components/TimelineItem'
import { projects } from '@/data/projects'
import GraphicSlider from '@/components/GraphicSlider'
import AboutInfographics from '@/components/AboutInfographics'
import HeroGallery from '@/components/HeroGallery'

const featuredProjects = projects.slice(0, 3)

export default function Home() {
  const designSkills = ['Branding', 'Illustration', 'Layout', 'Figma', 'Prototyping']
  const devSkills = ['React', 'Next.js', 'Tailwind', 'PHP', 'WordPress', 'API Design']

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-500">Hi, I’m</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">Teboho Sydney Mofokeng</h1>
          <p className="mt-2 text-xl text-slate-700">Graphic Designer & Full-Stack Developer</p>

          <p className="mt-6 text-slate-600 max-w-xl">
            I design clean, usable interfaces and build reliable web applications — blending visual craft with pragmatic engineering to ship delightful digital products.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/work" className="inline-flex items-center justify-center rounded-md border border-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">
              View Work
            </Link>

            {/* <a href="/cv.pdf" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:opacity-95">
              Download CV
            </a> */}
          </div>
        </div>

        {/* Hero right: responsive profile image with fallback */}
        <HeroGallery />

      </div>

      {/* Featured */}
      <div className="mt-16">
        <SectionHeader title="Featured Web Projects" subtitle="Selected work — design & engineering." />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="Print & Web Graphix" subtitle="Selected posters, campaigns & visual assets" />
        <GraphicSlider />
      </div>

      {/* Skills & Timeline */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8">
        
              {/* Skills */}
              <AboutInfographics />

      </div>

    </section>
  )
}
