import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">Teboho M.</Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/work" className="hover:underline">Work</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="rounded-md px-3 py-2 border hover:bg-slate-50">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
