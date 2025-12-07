// src/app/contact/page.tsx
'use client'

import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'

// TODO: replace this with your actual Formspree endpoint (get it from https://formspree.io)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/movgnaqp'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload: Record<string, string> = {}
    formData.forEach((v, k) => {
      payload[k] = String(v)
    })

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(data?.error || 'Submission failed')
      }
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err?.message || 'Network error')
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <SectionHeader title="Contact" subtitle="Get in touch — freelance, job enquiries or collaborations" />

      <p className="mt-4 text-slate-700">
        Email direct: <a href="mailto:hello@teboho.design" className="underline">hello@teboho.design</a>
      </p>

      <div className="mt-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <label className="text-sm">
            <div className="mb-1">Your name</div>
            <input name="name" required className="w-full border rounded px-3 py-2" />
          </label>

          <label className="text-sm">
            <div className="mb-1">Your email</div>
            <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
          </label>

          <label className="text-sm">
            <div className="mb-1">Message</div>
            <textarea name="message" rows={6} required className="w-full border rounded px-3 py-2" />
          </label>

          {/* optional subject */}
          <input type="hidden" name="_subject" value="New portfolio enquiry" />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm disabled:opacity-60"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && <div className="text-sm text-green-600">Thanks — message sent.</div>}
            {status === 'error' && <div className="text-sm text-rose-600">Error: {errorMessage}</div>}
          </div>
        </form>
      </div>
    </main>
  )
}
