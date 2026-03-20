'use client'

import { useState } from 'react'
import type { ContactPayload } from '@/app/api/contact/route'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const payload: ContactPayload = {
      formType: 'contact-quote',
      name,
      email,
      phone: phone || undefined,
      category: category || undefined,
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
        setName('')
        setPhone('')
        setEmail('')
        setCategory('')
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
      <div className="text-center py-12">
        <div className="text-gold text-5xl mb-4">✓</div>
        <p className="font-heading font-bold text-xl text-charcoal mb-2">Message sent!</p>
        <p className="text-muted text-sm">We&rsquo;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-gold text-sm hover:text-gold-dark transition-colors underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
          What do you have?
        </label>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
        >
          <option value="">Select a category</option>
          <option>Gold coins or bars</option>
          <option>Silver coins or bars</option>
          <option>Platinum or palladium</option>
          <option>Jewelry</option>
          <option>Estate or scrap gold</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-border rounded px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold bg-white resize-none"
          placeholder="Describe your items and any questions you have..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-xs">Something went wrong — please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 text-charcoal font-semibold py-3 rounded transition-colors"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
