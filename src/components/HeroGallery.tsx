// src/components/HeroGallery.tsx
'use client'

import React, { useState } from 'react'
import { projects } from '@/data/projects'
import { heroImages } from '@/data/heroImages'

/**
 * HeroGallery (config-first)
 * - If `heroImages` has entries, use them (this lets you control exactly which images are used).
 * - Entries may include an optional `slug` so clicking thumbnail can open the matching project page later.
 * - If `heroImages` is empty, fallback to product-project first-images, then graphics.
 */

export default function HeroGallery() {
  // Normalize config images (if any)
  const configured = Array.isArray(heroImages) && heroImages.length > 0
    ? heroImages.map((h) => ({ img: h.img, title: h.alt ?? '', slug: h.slug ?? null }))
    : []

  // If no configured images, fallback to product projects then graphics (one image per project)
  const productProjects = projects.filter((p) => p.category === 'product' && Array.isArray(p.images) && p.images.length > 0)
  const fallbackGraphics = projects.filter((p) => p.category === 'graphic' && Array.isArray(p.images) && p.images.length > 0)
  const sourceProjects = productProjects.length > 0 ? productProjects : fallbackGraphics

  const autoThumbs = sourceProjects.map((p) => ({ img: p.images![0], title: p.title, slug: p.slug }))

  const thumbs = configured.length > 0 ? configured : autoThumbs

  if (!thumbs.length) return null

  // main image: default to first thumb
  const [active, setActive] = useState(0)
  const currentImg = thumbs[active]?.img ?? thumbs[0].img

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_140px] gap-6 items-start">
          {/* MAIN IMAGE */}
          <div className="rounded-lg overflow-hidden border bg-slate-50">
            <img src={currentImg} alt={`Hero ${active + 1}`} className="w-full h-[420px] object-cover" loading="eager" />
          </div>

          {/* THUMBNAILS */}
          <div>
            {/* vertical for md+, horizontal on small */}
            <div className="hidden md:flex md:flex-col md:gap-3 md:max-h-[420px] md:overflow-auto">
              {thumbs.map((t, i) => (
                <button
                  key={`${t.img}-${i}`}
                  onClick={() => setActive(i)}
                  className={`rounded-md overflow-hidden border ${i === active ? 'ring-2 ring-slate-900' : ''}`}
                  aria-label={`Show ${t.title || `Image ${i + 1}`}`}
                  style={{ width: '100%', height: 150 }}
                >
                  <img src={t.img} alt={t.title || `Thumb ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            {/* small-screen horizontal thumbnails */}
            <div className="md:hidden mt-3">
              <div className="flex gap-3 overflow-x-auto py-2">
                {thumbs.map((t, i) => (
                  <button
                    key={'m-' + t.img + i}
                    onClick={() => setActive(i)}
                    className={`flex-none rounded-md overflow-hidden border ${i === active ? 'ring-2 ring-slate-900' : ''}`}
                    style={{ width: 120, height: 80 }}
                    aria-label={`Show ${t.title || `Image ${i + 1}`}`}
                  >
                    <img src={t.img} alt={t.title || `Thumb ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
