// src/components/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  const nav = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">TS</div>
            <div className="text-sm font-semibold">Teboho Sydney Mofokeng</div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden md:flex gap-6 items-center">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                `text-sm px-2 py-1 rounded ${isActive(n.href) ? 'bg-white text-black font-semibold' : 'text-white/90 hover:underline'}`
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setOpen((s) => !s)} aria-label="Open menu" className="px-2 py-1 border rounded text-white/90">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`text-sm px-2 py-2 rounded ${isActive(n.href) ? 'bg-white text-black font-semibold' : 'text-white/90 hover:underline'}`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
