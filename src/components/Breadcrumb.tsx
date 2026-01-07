// src/components/Breadcrumb.tsx
import Link from 'next/link'

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-2 text-slate-600">
        {items.map((it, i) => (
          <li key={i} className="flex items-center">
            {it.href ? (
              <Link href={it.href} className="hover:underline">
                {it.label}
              </Link>
            ) : (
              <span aria-current={i === items.length - 1 ? 'page' : undefined} className={i === items.length - 1 ? 'text-slate-900 font-medium' : ''}>
                {it.label}
              </span>
            )}

            {i < items.length - 1 && <span className="mx-2 text-slate-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
