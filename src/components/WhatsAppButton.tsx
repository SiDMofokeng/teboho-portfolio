// src/components/WhatsAppButton.tsx
'use client'

import React from 'react'

/**
 * Floating WhatsApp button.
 * Replace PHONE_NUMBER with your full international number (no plus signs/spaces), e.g. 2771xxxxxxx
 * The URL will open WhatsApp (mobile app or web).
 */

const PHONE_NUMBER = '27813408126' // <-- REPLACE this with your number (e.g. 2771xxxxxxx)
const DEFAULT_MESSAGE = encodeURIComponent('Hi — I saw your portfolio and would like to work on a project with you.')

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${DEFAULT_MESSAGE}`

  return (
    <div aria-hidden className="fixed z-50 right-5 bottom-5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group block w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: '#25D366' }} // official WhatsApp green
      >
        {/* WhatsApp icon (white) */}
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path fill="white" d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 .01 5.36 0 12.01c0 2.12.56 4.19 1.63 6.01L0 24l6.14-1.61A11.94 11.94 0 0 0 12 24c6.63 0 12-5.36 12-11.99 0-3.2-1.25-6.2-3.48-8.51z"/>
          <path fill="white" d="M12 23.99a11.94 11.94 0 0 1-5.5-1.35l-.39-.23-3.65.96.98-3.56-.25-.39A11.94 11.94 0 0 1 0 12.01C0 5.37 5.36 0 12 0s12 5.36 12 12c0 6.63-5.36 11.99-12 11.99z" opacity="0"/>
          <path fill="#25D366" d="M17.6 14.23c-.3-.15-1.77-.87-2.04-.97-.28-.11-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.67.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.29.3-.48.1-.19.04-.36-.02-.5-.06-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.67-.51-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.45 1.03 2.85 1.17 3.05.14.2 2.02 3.12 4.9 4.37 2.88 1.25 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.13-.26-.19-.56-.34z"/>
        </svg>
      </a>
    </div>
  )
}
