// src/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-lg font-semibold">Teboho Sydney Mofokeng</div>
          <p className="mt-2 text-sm text-white/80">Graphic Designer & Full-Stack Developer — crafting brands and web apps.</p>
        </div>

        <div>
          <div className="font-medium">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/work" className="hover:underline">Work</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Connect</div>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Twitter" className="text-white/90 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 5.92c-.64.28-1.32.47-2.04.55.73-.44 1.3-1.14 1.57-1.98-.68.4-1.44.69-2.25.85A3.52 3.52 0 0 0 12.2 8.5c0 .28.03.55.09.81-2.93-.15-5.53-1.56-7.27-3.7-.3.52-.47 1.12-.47 1.76 0 1.22.62 2.3 1.56 2.93-.57-.02-1.1-.17-1.57-.43v.04c0 1.7 1.2 3.12 2.79 3.44-.29.08-.6.12-.92.12-.23 0-.45-.02-.67-.07.45 1.4 1.74 2.42 3.28 2.45A7.06 7.06 0 0 1 3 19.54 9.94 9.94 0 0 0 8.76 21c6.64 0 10.28-5.5 10.28-10.27v-.47c.7-.5 1.3-1.12 1.77-1.82-.64.29-1.32.48-2.03.57.73-.44 1.3-1.13 1.57-1.97z"/></svg>
            </a>

            <a href="#" aria-label="LinkedIn" className="text-white/90 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v12H0zM8 8h4.8v1.6h.1c.7-1.2 2.4-2.4 4.9-2.4 5.2 0 6.2 3.4 6.2 7.8V20H19v-6.1c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V20H8z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-white/70">
          © {new Date().getFullYear()} Teboho Sydney Mofokeng — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
