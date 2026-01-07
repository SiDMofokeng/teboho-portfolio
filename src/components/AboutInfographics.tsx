// src/components/AboutInfographics.tsx
'use client'

import React from 'react'

type Skill = { name: string; value: number } // value 0-100

const designSkills: Skill[] = [
  { name: 'Branding', value: 90 },
  { name: 'Illustration', value: 78 },
  { name: 'Layout', value: 88 },
  { name: 'Figma', value: 82 },
  { name: 'Prototyping', value: 76 }
]

const devSkills: Skill[] = [
  { name: 'HTML5', value: 92 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 88 },
  { name: 'React', value: 88 },
  { name: 'Next.js', value: 84 },
  { name: 'PHP', value: 70 },
  { name: 'SQL', value: 75 }
]

const tools = [
  'Supabase',
  'Firebase',
  'AWS',
  'Azure',
  'Adobe CC',
  'Blender (basic)',
  'Unreal Engine (basic)'
]

// === Updated experience entries (from your provided list) ===
const experience = [
  {
    year: 'Jan 2024 – Present',
    title: 'MeetSA',
    details:
      'Freelance Web Developer. Builds and integrates front-end features, handles platform updates.'
  },
  {
    year: 'Aug 2022 – Present',
    title: 'Mzansi Holdings',
    details:
      'Multimedia Designer working across branding, video, UI/UX, web design and corporate identity.'
  },
  {
    year: 'Jul 2022',
    title: 'Peermed HealthCare Centre',
    details: 'SEO and web development support during a short engagement.'
  },
  {
    year: 'Jan 2022 – Aug 2022',
    title: 'Udigital',
    details: 'Freelance web developer handling multiple website build-outs.'
  },
  {
    year: 'Apr 2021 – Jun 2022',
    title: 'Alliance Fleet',
    details: 'WordPress development, HTML/CSS/JS work and corporate identity rebranding.'
  },
  {
    year: '2015 – Feb 2021',
    title: 'C4G Foundation (Volunteer)',
    details: 'Volunteer graphic designer supporting campaigns and creative collateral.'
  },
  {
    year: 'May 2020 – Sep 2020',
    title: 'PBS Solutions',
    details: 'Lead designer on software UI using HTML, jQuery, JS and PHP.'
  },
  {
    year: 'Apr 2019 – May 2019',
    title: 'Ferra Solutions',
    details: 'UX/UI designer for a mobile app prototype project.'
  },
  {
    year: 'May 2017 – Sep 2020',
    title: 'MBeesWax Digital Hosting (11 Spades)',
    details: 'Brand architecture and graphic design work across the group.'
  },
  {
    year: 'Nov 2017 – Mar 2019',
    title: 'Moipone Fleet',
    details:
      'Social media, photography, videography, WordPress sites and corporate rebranding.'
  },
  {
    year: 'Nov 2015 – Aug 2017',
    title: 'AutoTrader',
    details:
      'WordPress and HTML5 web design, plus print ads for weekly and monthly publications.'
  }
]


export default function AboutInfographics() {
  // helper for skill bars
  const SkillBars = ({ list }: { list: Skill[] }) => (
    <div className="space-y-3">
      {list.map((s) => (
        <div key={s.name}>
          <div className="flex justify-between text-sm mb-1">
            <div className="text-slate-700">{s.name}</div>
            <div className="text-slate-500">{s.value}%</div>
          </div>
          <div className="w-full bg-slate-100 rounded h-3 overflow-hidden">
            <div
              className="h-3 rounded bg-gradient-to-r from-slate-800 to-slate-500"
              style={{ width: `${Math.max(4, s.value)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">Approach & Skills — Infographic Overview</h2>

      <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-slate-900 text-white rounded-full">
        10+ years experience
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* 1 — Skill bars (Design) */}
        <div>
          <h3 className="text-lg font-medium mb-4">Design — Skills</h3>
          <SkillBars list={designSkills} />
        </div>

        {/* 2 — Experience timeline (constrained height, scrollable on md+) */}
        <div>
          <h3 className="text-lg font-medium mb-4">Experience — Timeline</h3>

          {/* Constrain the timeline column height on medium+ and allow internal scroll */}
          <div className="relative pl-6 md:max-h-[420px] md:overflow-auto md:pr-3">
            {/* vertical line (fills the scrollable area) */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200" />

            <ul className="space-y-8">
              {experience.map((exp) => (
                <li key={exp.year} className="relative">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-slate-900 border-4 border-white" />
                  <div className="text-sm text-slate-500">{exp.year}</div>
                  <div className="mt-1 text-slate-800 font-medium">{exp.title}</div>
                  <div className="mt-1 text-sm text-slate-600 line-clamp-2">{exp.details}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3 — Development Skills & Tools */}
        <div>
          <h3 className="text-lg font-medium mb-4">Development — Skills & Tools</h3>

          <div className="flex flex-col gap-4">
            <div>
              <SkillBars list={devSkills} />
            </div>

            <div className="mt-2">
              <h4 className="text-sm font-medium mb-2">Tools & Platforms</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                {tools.map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 10 10" className="flex-shrink-0" aria-hidden>
                      <circle cx="5" cy="5" r="5" fill="#111827" />
                    </svg>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
