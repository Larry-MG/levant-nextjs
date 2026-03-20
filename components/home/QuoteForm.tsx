'use client'

import { useState } from 'react'
import type { ContactPayload } from '@/app/api/contact/route'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const payload: ContactPayload = {
      formType: 'home-quote',
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone: phone || undefined,
      message: message || undefined,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('success')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="space-y-3 text-center py-8">
        <div className="text-gold text-4xl mb-4">✓</div>
        <p className="text-cream font-semibold text-lg">Message sent!</p>
        <p className="text-cream/50 text-sm">We&rsquo;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-gold text-sm hover:text-gold-light transition-colors underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors"
      />
      <textarea
        rows={4}
        placeholder="Describe what you have (gold jewelry, silver coins, etc.)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-white/8 border border-white/15 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none transition-colors resize-none"
      />
      {status === 'error' && (
        <p className="text-red-400 text-xs">Something went wrong — please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 text-charcoal font-semibold py-3.5 rounded-lg transition-colors text-sm"
      >
        {status === 'loading' ? 'Sending…' : 'Send Quote Request'}
      </button>
      <p className="text-center text-xs text-cream/30">
        We respond within 24 hours. Your information is never shared.
      </p>
    </form>
  )
}
