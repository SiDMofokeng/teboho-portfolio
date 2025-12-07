import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import SectionHeader from '@/components/SectionHeader'
import TimelineItem from '@/components/TimelineItem'
import { projects } from '@/data/projects'

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

            <a href="/cv.pdf" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:opacity-95">
              Download CV
            </a>
          </div>
        </div>

        {/* Hero right: responsive profile image with fallback */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl bg-gradient-to-tr from-slate-50 to-white border p-8 shadow-lg flex items-center justify-center">
            <div className="w-56 h-56 rounded-lg overflow-hidden bg-slate-100">
              <picture>
                {/* If you add /public/images/profile.jpg it will be used */}
                <source srcSet="/images/profile.jpg" type="image/jpeg" />
                {/* Fallback: the SVG placeholder we created */}
                <img
                  src="/images/profile-placeholder.svg"
                  alt="Profile — Teboho Sydney Mofokeng"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>

      </div>

      {/* Featured */}
      <div className="mt-16">
        <SectionHeader title="Featured Projects" subtitle="Selected work — design & engineering." />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>

      {/* Skills & Timeline */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <SectionHeader title="Approach & Skills" subtitle="Design + Development" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-slate-700">Design</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                {designSkills.map((s) => (
                  <li key={s} className="text-sm">• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-700">Development</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                {devSkills.map((s) => (
                  <li key={s} className="text-sm">• {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader title="Experience" subtitle="Select roles" />
          <div className="mt-4 space-y-4 text-slate-600">
            <TimelineItem year="2021–Present" role="Founder — Mzansi Exploration" />
            <TimelineItem year="2018–2021" role="Lead Frontend — ServiceProof" />
            <TimelineItem year="2015–2018" role="Graphic Designer — Freelance" />
          </div>
        </div>
      </div>
    </section>
  )
}
