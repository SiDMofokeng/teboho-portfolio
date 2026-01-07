// src/components/ImageGallery.tsx
'use client'

import React, { useEffect, useMemo, useState } from 'react'

type Props = {
  images: string[]
}

export default function ImageGallery({ images }: Props) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images])
  if (!safeImages.length) return null

  const [active, setActive] = useState(0)

  // Lightbox state
  const [open, setOpen] = useState(false)

  const current = safeImages[Math.min(active, safeImages.length - 1)]

  function prev() {
    setActive((i) => (i - 1 + safeImages.length) % safeImages.length)
  }

  function next() {
    setActive((i) => (i + 1) % safeImages.length)
  }

  function close() {
    setOpen(false)
  }

  // Keyboard controls for modal
  useEffect(() => {
    if (!open) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, safeImages.length])

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-[92px_1fr] gap-4 items-start">
        {/* Thumbnails (left on md+) */}
        <div className="hidden md:flex md:flex-col gap-3 max-h-[420px] overflow-auto pr-1">
          {safeImages.map((src, i) => (
            <button
              key={`${src}-${i}`}
              onClick={() => setActive(i)}
              className={`rounded-md overflow-hidden border bg-white ${
                i === active ? 'ring-2 ring-slate-900' : ''
              }`}
              style={{ width: 84, height: 64 }}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="w-full">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative w-full rounded-xl overflow-hidden border bg-slate-50"
            aria-label="Open image viewer"
          >
            {/* IMPORTANT: object-contain so it doesn't crop */}
            <div className="h-[420px] w-full overflow-hidden flex items-center justify-center">
              <img
                src={current}
                alt={`Project image ${active + 1}`}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>

            {/* Subtle store-style overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-3 right-3 text-xs bg-black/70 text-white px-3 py-2 rounded-lg">
                Click to view full
              </div>
            </div>
          </button>

          {/* Small screen thumbnails (horizontal) */}
          <div className="md:hidden mt-3">
            <div className="flex gap-3 overflow-x-auto py-2">
              {safeImages.map((src, i) => (
                <button
                  key={`m-${src}-${i}`}
                  onClick={() => setActive(i)}
                  className={`flex-none rounded-md overflow-hidden border bg-white ${
                    i === active ? 'ring-2 ring-slate-900' : ''
                  }`}
                  style={{ width: 120, height: 80 }}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img src={src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative w-full max-w-6xl bg-black/20 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/60 text-white">
              <div className="text-sm">
                {active + 1} / {safeImages.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-sm"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-sm"
                  aria-label="Next image"
                >
                  →
                </button>
                <button
                  onClick={close}
                  className="px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-sm"
                  aria-label="Close viewer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="bg-black flex items-center justify-center">
              <img
                src={current}
                alt={`Full image ${active + 1}`}
                className="max-h-[78vh] w-auto max-w-full object-contain"
                loading="eager"
              />
            </div>

            {/* Bottom thumbnails */}
            {safeImages.length > 1 && (
              <div className="bg-black/80 px-4 py-3">
                <div className="flex gap-3 overflow-x-auto py-1">
                  {safeImages.map((src, i) => (
                    <button
                      key={`lb-${src}-${i}`}
                      onClick={() => setActive(i)}
                      className={`flex-none rounded-md overflow-hidden border ${
                        i === active ? 'ring-2 ring-white border-white/40' : 'border-white/20'
                      }`}
                      style={{ width: 110, height: 72 }}
                      aria-label={`Select image ${i + 1}`}
                    >
                      <img src={src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
