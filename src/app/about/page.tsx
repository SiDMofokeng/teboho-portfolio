// src/app/about/page.tsx
import Link from "next/link";

export const metadata = {
  title: "About | Teboho Sydney Mofokeng",
  description: "About Teboho — Graphic Designer & Full-Stack Developer",
};

export default function AboutPage() {
  const designSkills = [
    "Branding & Identity",
    "Illustration",
    "Layout & Typography",
    "Figma / Prototyping",
    "Design Systems"
  ];
  const devSkills = [
    "React / Next.js",
    "Tailwind CSS",
    "PHP / WordPress",
    "API Design",
    "Testing & CI"
  ];
  const experience = [
    { year: "2021–Present", role: "Founder — Mzansi Exploration" },
    { year: "2018–2021", role: "Lead Frontend — ServiceProof" },
    { year: "2015–2018", role: "Graphic Designer — Freelance" }
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* Top: hero */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="mt-4 text-slate-700 text-lg">
            I’m <strong>Teboho Sydney Mofokeng</strong> — a Graphic Designer and Full-Stack Developer who builds
            polished design systems and production web apps. I combine visual craft with pragmatic engineering
            to deliver products that look great and work reliably.
          </p>

          <div className="mt-6 text-slate-600 space-y-4">
            <p>
              I enjoy solving product problems — from shaping a brand identity to architecting a maintainable frontend.
              My process centers on research, rapid prototyping, and shipping incremental improvements that users notice.
            </p>
            <p>
              When I’m not designing or coding, I read about systems thinking, mentor junior designers, and tinker with
              side projects that help people save time.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <a href="/cv.pdf" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm">
              Download CV
            </a>

            <Link href="/contact" className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2 text-sm">
              Contact me
            </Link>
          </div>
        </div>

        {/* Profile image column */}
        <div className="flex items-center justify-center">
          <div className="w-56 h-56 rounded-xl overflow-hidden border bg-slate-50">
            <picture>
              <source srcSet="/images/profile.jpg" type="image/jpeg" />
              <img
                src="/images/profile-placeholder.svg"
                alt="Teboho Sydney Mofokeng — profile"
                className="w-full h-full object-cover"
                width={224}
                height={224}
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold">Design Skills</h3>
          <p className="mt-2 text-slate-600 text-sm">Tools & capabilities I use when designing.</p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
            {designSkills.map((s) => (
              <li key={s} className="text-sm">• {s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Development Skills</h3>
          <p className="mt-2 text-slate-600 text-sm">Technologies I use for building and shipping apps.</p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
            {devSkills.map((s) => (
              <li key={s} className="text-sm">• {s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <div className="mt-4 space-y-3 text-slate-700">
          {experience.map((e) => (
            <div key={e.role} className="flex items-start gap-4">
              <div className="w-28 text-xs text-slate-400">{e.year}</div>
              <div className="text-sm">{e.role}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
