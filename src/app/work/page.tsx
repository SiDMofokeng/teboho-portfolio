// src/app/work/page.tsx
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Work | Teboho Sydney Mofokeng",
  description: "Design & development portfolio projects by Teboho Sydney Mofokeng.",
};

export default function WorkPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Selected Work</h1>
      <p className="text-slate-600 mt-2 max-w-2xl">
        A collection of design, branding and full-stack development projects
        I’ve worked on. More projects will be added as I upload my case studies.
      </p>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
