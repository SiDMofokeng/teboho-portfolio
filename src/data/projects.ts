// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  role: string;
  img: string;
  tags: string[];
  description?: string;
  details?: string; // longer case study / overview
};

export const projects: Project[] = [
  {
    slug: 'mzansi-brand',
    title: 'Brand Refresh — Mzansi Co.',
    role: 'Designer + Frontend',
    img: '/images/project-mzansi.jpg',
    tags: ['Branding', 'UI/UX', 'React'],
    description: 'Brand refresh and website front-end for Mzansi Co.',
    details:
      'Problem: outdated identity and inconsistent UI. Process: research, moodboards, Figma prototypes, React implementation. Outcome: improved conversion and modernized brand language.'
  },
  {
    slug: 'serviceproof-dashboard',
    title: 'ServiceProof Dashboard',
    role: 'Full-Stack Dev',
    img: '/images/project-serviceproof.jpg',
    tags: ['Next.js', 'PHP', 'UX'],
    description: 'Admin dashboard for field service proof-of-work app.',
    details:
      'Built a responsive dashboard using Next.js and integrated with existing PHP APIs. Focused on UX for technicians and simple CSV export.'
  },
  {
    slug: 'powerpro-ui',
    title: 'PowerPro Generator UI',
    role: 'Frontend',
    img: '/images/project-powerpro.jpg',
    tags: ['UI', 'Accessibility', 'Tailwind'],
    description: 'UI improvements and accessibility upgrades for PowerPro.',
    details:
      'Improved visual hierarchy, added keyboard navigation and better ARIA attributes, resulting in accessibility score improvements.'
  }
];
