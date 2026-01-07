// src/app/admin/page.tsx
'use client'

import { useState } from 'react'
import { projects as initialProjects } from '@/data/projects'
import prettify from '@/lib/prettify'

export default function AdminPage() {
  const [text, setText] = useState(() => JSON.stringify(initialProjects, null, 2))
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState(initialProjects)

  function handlePreview() {
    try {
      const parsed = JSON.parse(text)
      // basic validation: must be an array
      if (!Array.isArray(parsed)) throw new Error('JSON must be an array of projects')
      setPreview(parsed)
      setError(null)
    } catch (err: any) {
      setError(err.message || 'Invalid JSON')
    }
  }

  function handleDownload() {
    const blob = new Blob([prettify(text)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'projects.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold">Admin — Local JSON Editor</h1>
      <p className="mt-2 text-slate-600">Edit your projects JSON here. Preview renders below. Download to save and then paste into <code>src/data/projects.ts</code>.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium">Projects JSON</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={24} className="w-full border rounded p-2 font-mono text-sm" />
          <div className="mt-3 flex gap-3">
            <button onClick={handlePreview} className="px-3 py-2 rounded border">Preview</button>
            <button onClick={handleDownload} className="px-3 py-2 rounded bg-slate-900 text-white">Download JSON</button>
            <button onClick={() => setText(JSON.stringify(initialProjects, null, 2))} className="px-3 py-2 rounded border">Reset</button>
          </div>
          {error && <div className="mt-3 text-sm text-rose-600">Error: {error}</div>}
        </div>

        <div>
          <label className="text-sm font-medium">Preview (first 10 projects)</label>
          <div className="mt-2 space-y-3 max-h-[520px] overflow-auto border rounded p-3 bg-white">
            {preview.slice(0, 10).map((p: any) => (
              <div key={p.slug} className="p-2 border rounded">
                <div className="text-sm font-medium">{p.title} <span className="text-xs text-slate-500">({p.category})</span></div>
                <div className="text-xs text-slate-600">{p.description}</div>
              </div>
            ))}
            {preview.length === 0 && <div className="text-sm text-slate-500">No projects</div>}
          </div>
        </div>
      </div>
    </main>
  )
}
