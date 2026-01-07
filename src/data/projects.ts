// src/data/projects.ts
export type Project = {
  slug: string
  title: string
  role?: string
  category: 'web' | 'graphic' | 'product'
  images?: string[]
  logo?: string
  tags?: string[]
  description?: string
  details?: string
  links?: {
    live?: string
    repo?: string
    caseStudy?: string
  }
}

/**
 * Projects dataset
 * - Graphic projects double as "visuals" for the home slider.
 * - Web projects include live/repo links or logos.
 * - Product projects include product imagery.
 *
 * NOTE: ensure the referenced image files exist under public/images/{graphics,products,web}
 */

export const projects: Project[] = [
  // -------------------------
  // GRAPHIC / VISUALS (10)
  // -------------------------
  {
    slug: 'visual-poster-series',
    title: 'Business Cards',
    role: 'Designer',
    category: 'graphic',
    images: [
      '/images/graphics/Mnotho Waboya Business Cards.jpg',
      '/images/graphics/Business_Card_Mockup-2.jpg'
    ],
    tags: ['Logo', 'Business Card', 'Adobe CC'],
    description: 'A series of business card designs.'
  },
  {
    slug: 'brand-identity-exploration',
    title: 'Posters / Flyers',
    role: 'Designer',
    category: 'graphic',
    images: [
      '/images/graphics/g16.jpg',
      '/images/graphics/g13.jpg',
      '/images/graphics/g14.jpg',
      '/images/graphics/g12.jpg',
      '/images/graphics/g11.jpg',
      '/images/graphics/g15.jpg'
    ],
    tags: ['Posters', 'Flyers', 'Photoshop'],
    description: 'A series of design posters.'
  },
  {
    slug: 'printing-maru',
    title: 'Printing — Maphiris Book (T-Shirt)',
    role: 'Print Production',
    category: 'graphic',
    images: ['/images/graphics/g10.jpg'],
    tags: ['Printing', 'Production', 'Photoshop'],
    description: 'Preparing artwork for print for Maphiris T-Shirts.'
  },
  {
    slug: 'typesetting-book',
    title: 'Logo Designs',
    role: 'Designer',
    category: 'graphic',
    images: [
      '/images/projects/logos/leafymunchies.png',
      '/images/graphics/Mnotho Waboya Logo 3.jpg',
      '/images/projects/logos/rustivia.jpg',
      '/images/projects/logos/epicsouth.jpg'
    ],
    tags: ['Logo', 'Branding', 'Illustrator'],
    description: 'A series of logo designs.'
  },
  {
    slug: 'social-carousel',
    title: 'Event Invites',
    role: 'Graphic Designer',
    category: 'graphic',
    images: [
      '/images/graphics/g4.jpg',
      '/images/graphics/g8.jpg',
      '/images/graphics/g6.jpg',
    ],
    tags: ['Events', 'Visuals', 'Photoshop'],
    description: 'Invites for various types of events.'
  },
  {
    slug: 'packaging-labels',
    title: 'Mockup — Company Profile Cover',
    role: 'Designer',
    category: 'graphic',
    images: ['/images/graphics/g1.jpg'],
    tags: ['Profile', 'Design', 'Photoshop'],
    description: 'Product mockups for a company profile cover page.'
  },
  {
    slug: 'photoshoot-studio',
    title: 'Mockups — Magwaza Wines',
    role: 'Photographer / Stylist',
    category: 'graphic',
    images: [
      '/images/projects/mockups/magwaza/bottle-1.jpg',
      '/images/projects/mockups/magwaza/bottle-2.jpg',
      '/images/projects/mockups/magwaza/bottle-3.jpg',
      '/images/projects/mockups/magwaza/bottle-4.jpg',
      '/images/projects/mockups/magwaza/bottle-5.jpg',
      '/images/projects/mockups/magwaza/bottle-6.jpg'
    ],
    tags: ['Mockup', 'Design', 'Photoshop'],
    description: 'Design mockups for a wine bottle.'
  },
  {
    slug: 'photoshoot-event',
    title: 'Product Profile — Aqua Air',
    role: 'Designer',
    category: 'graphic',
    images: [
      '/images/projects/Profile/Brochure.jpg',
      '/images/projects/Profile/Page-1.jpg',
      '/images/projects/Profile/Page-2.jpg',
      '/images/projects/Profile/Page-3.jpg',
      '/images/projects/Profile/Page-4.jpg'
    ],
    tags: ['Brochure', 'Typesetting', 'Adobe Indesign'],
    description: 'Product Brochure for a water company.'
  },

  // -------------------------
  // PRODUCT PROJECTS
  // -------------------------
  {
    slug: 'video-products-showcase',
    title: 'Video Product — Showcase Platform',
    role: 'Product Designer / Frontend',
    category: 'product',
    images: ['/images/products/product1.jpg'],
    tags: ['Video', 'Product'],
    description: 'A platform for browsing and previewing video products.',
    details: 'Built interactive previews and metadata pages for each video product.'
  },
  {
    slug: 'powerpro-product',
    title: 'PowerPro Product Page',
    role: 'Frontend',
    category: 'product',
    images: [
      '/images/products/product2.jpg', 
      '/images/products/product3.jpg'
    ],
    tags: ['UI', 'Product Design'],
    description: 'Product page & marketing assets for generator control unit.',
    details: 'Worked on product shots, specification layout and CTA funnels.'
  },

  // -------------------------
  // WEB PROJECTS (8)
  // -------------------------
  {
    slug: 'serviceproof-dashboard',
    title: 'Le-Vin Wine Lounge Website',
    role: 'Full-Stack Dev',
    category: 'web',
    images: [
      '/images/web/pbs.png'
    ],
    logo: '/images/web/pbs.png',
    tags: ['Wordpress', 'PHP', 'UX'],
    description: 'Built responsive website & booking functionality.',
    links: {
      live: 'https://levin.co.za/',
    },
    details: 'Built responsive website & booking functionality.'
  },
  {
    slug: 'fwil-signup-portal',
    title: 'FWiL — Website & Admin Dashboard',
    role: 'Web Design & Development',
    category: 'web',
    logo: '/images/web/logo2.png',
    tags: ['Node', 'React', 'Portal', 'Tailwind'],
    description: 'Website and admin portal for For Women in Law (FWiL).',
    links: {
      live: 'https://fwil-site.vercel.app/',
    }
  },
  {
    slug: 'video-products-site',
    title: 'Maphiris Book Website',
    role: 'Web Design & Development',
    category: 'web',
    logo: '/images/web/logo3.png',
    tags: ['HTML', 'PHP', 'CSS'],
    description: 'A website for Maphiris Marvelous Money Moves.',
    links: {
      live: 'https://maphirisbooks.co.za/'
    }
  },
  {
    slug: 'marketing-landing-1',
    title: '5 Klippa Web App',
    role: 'Developer',
    category: 'web',
    logo: '/images/web/logo4.png',
    tags: ['React', 'Node', 'Js'],
    description: 'Web App for a financial platform.',
    links: {
      live: 'https://5klippa.vercel.app/login'
    }
  },
  {
    slug: 'saas-analytics',
    title: 'Kelvin Air Website',
    role: 'Frontend Web Developer',
    category: 'web',
    logo: '/images/web/kelvinair.png',
    tags: ['HTML', 'PHP', 'CSS'],
    description: 'Website for an air space company.',
    links: {
      live: 'https://kelvinairspace.com/'
    }
  },
  {
    slug: 'ecommerce-demo',
    title: 'Morero Website',
    role: 'Design and Development',
    category: 'web',
    logo: '/images/web/morero.png',
    tags: ['Wordpress', 'PHP', 'HTML', 'CSS'],
    description: 'Website for a renewable energy company.',
    links: {
      live: 'https://morero.co.ls/'
    }
  },
  {
    slug: 'portfolio-showcase-site',
    title: 'Portfolio Showcase',
    role: 'Full-Stack Dev',
    category: 'web',
    tags: ['Next.js', 'Design'],
    description: 'Personal portfolio template and CMS integration.'
  },
  {
    slug: 'signup-miniapp',
    title: 'Signup Mini App',
    role: 'Frontend',
    category: 'web',
    tags: ['Signup', 'UX'],
    description: 'Small signup / onboarding micro app.'
  }
]
