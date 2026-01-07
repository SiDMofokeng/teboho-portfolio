// src/components/GraphicSlider.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { projects } from '@/data/projects'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function GraphicSlider() {
  const slides = projects
    .filter((p) => p.category === 'graphic')
    .map((p) => (p.images && p.images.length > 0 ? p.images[0] : null))
    .filter(Boolean) as string[]

  const doubled = [...slides, ...slides]
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)


  // compute duration based on number of slides (CSS variable)
  const speedPerSlide = 2.8
  const duration = Math.max(12, slides.length * speedPerSlide)

  useEffect(() => {
    if (!trackRef.current) return
    // set CSS variable
    trackRef.current.style.setProperty('--marquee-duration', `${duration}s`)
  }, [duration])

  // Pause / play toggles the 'paused' class
  function togglePause(val?: boolean) {
    setPaused((prev) => typeof val === 'boolean' ? val : !prev)
  }

  // Scroll by one item width (used by prev/next). Works best when animation is paused.
  function scrollByStep(step = 1) {
    const container = trackRef.current
    if (!container) return
    // temporarily pause animation
    container.classList.add('paused')
    // compute item width (first child)
    const first = container.querySelector('.marquee-item') as HTMLElement | null
    if (!first) return
    const w = first.getBoundingClientRect().width + 16 // gap
    container.scrollBy({ left: w * step, behavior: 'smooth' })
    // after scroll ends, remove pause after a short delay
    setTimeout(() => {
      if (!paused) container.classList.remove('paused')
    }, 600)
  }

  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Graphic Work — visual highlights</h3>
          <div className="flex items-center gap-2">
            <button
              aria-label={paused ? 'Play slider' : 'Pause slider'}
              onClick={() => togglePause(!paused)}
              className="text-sm px-3 py-1 border rounded"
            >
              {paused ? 'Play' : 'Pause'}
            </button>

            <button aria-label="Previous" onClick={() => scrollByStep(-1)} className="text-sm px-3 py-1 border rounded">Prev</button>
            <button aria-label="Next" onClick={() => scrollByStep(1)} className="text-sm px-3 py-1 border rounded">Next</button>
          </div>
        </div>

        <div className="overflow-hidden relative" role="region" aria-label="Graphic work slider">
          <div
            ref={trackRef}
            className={`marquee-track ${paused ? 'paused' : ''}`}
            style={{ display: 'flex' }}
          >
            {doubled.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="marquee-item flex-shrink-0 rounded-lg overflow-hidden border bg-white cursor-pointer"
                style={{ width: 320, height: 200 }}
                onClick={() => { setCurrentIndex(idx % slides.length); setLightboxOpen(true) }}
              >
                <img src={src} alt={`Graphic ${idx % slides.length + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={slides.map((s) => ({ src: s }))}
          />

        </div>
      </div>
    </div>
  )
}
