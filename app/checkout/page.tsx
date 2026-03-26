'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'
import { formatUSD } from '@/lib/utils/currency'
import MarketHoursNotice from '@/components/shop/MarketHoursNotice'
import { useMarketHoursStatus } from '@/lib/hooks/useMarketHoursStatus'
import { MARKET_HOURS_NOTICE } from '@/lib/market-hours'

type Step = 'contact' | 'review'

interface ContactData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  notes: string
}

const initialContact: ContactData = {
  name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', notes: '',
}

function StepIndicator({ current }: { current: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: 'contact', label: '1. Your Info' },
    { key: 'review', label: '2. Review & Submit' },
  ]
  return (
    <div className="flex gap-2 mb-8">
      {steps.map((s) => (
        <div
          key={s.key}
          className={`flex-1 text-center py-2.5 rounded-lg text-sm font-medium border transition-colors ${
            s.key === current
              ? 'bg-gold text-charcoal border-gold'
              : 'bg-white text-muted border-border'
          }`}
        >
          {s.label}
        </div>
      ))}
    </div>
  )
}

function Field({
  label, value, onChange, type = 'text', placeholder, maxLength, required = true,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  maxLength?: number
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
        {label}{required && <span className="text-gold ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 bg-white transition-colors"
      />
    </div>
  )
}

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<Step>('contact')
  const [contact, setContact] = useState<ContactData>(initialContact)
  const [errors, setErrors] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)

  const router = useRouter()
  const { isOpen: isMarketOpen } = useMarketHoursStatus()
  const items = useCartStore((s) => s.items)
  const subtotal = useCartStore((s) => s.subtotal)
  const clearCart = useCartStore((s) => s.clearCart)

  useEffect(() => {
    useCartStore.persist.rehydrate()
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h1 className="text-2xl font-heading font-bold text-charcoal mb-3">Your cart is empty</h1>
        <Link href="/shop" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors">
          Shop Now
        </Link>
      </div>
    )
  }

  if (!isMarketOpen) {
    return (
      <div className="bg-cream min-h-screen py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-border rounded-xl p-6 sm:p-8 text-center">
            <h1 className="text-2xl font-heading font-bold text-charcoal mb-3">Checkout is currently unavailable</h1>
            <p className="text-sm text-muted mb-6">
              Orders can only be placed during active market hours.
            </p>
            <MarketHoursNotice className="mb-6 text-left" />
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/cart"
                className="border border-border bg-white hover:border-gold text-charcoal font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Back to Cart
              </Link>
              <Link
                href="/shop"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function validate() {
    const errs: string[] = []
    if (!contact.name.trim()) errs.push('Full name is required')
    if (!contact.email.includes('@')) errs.push('Valid email is required')
    if (!contact.phone.trim()) errs.push('Phone number is required')
    if (!contact.address.trim()) errs.push('Address is required')
    if (!contact.city.trim()) errs.push('City is required')
    if (!contact.zip.trim()) errs.push('ZIP code is required')
    setErrors(errs)
    return errs.length === 0
  }

  function handleContinue(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) {
      setErrors([])
      setStep('review')
    }
  }

  async function handleSubmit() {
    if (!isMarketOpen) {
      setErrors([MARKET_HOURS_NOTICE])
      return
    }

    setSubmitting(true)
    const orderNumber = Math.floor(10_000_000 + Math.random() * 90_000_000).toString()

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderNumber,
          contact,
          items,
          subtotal: subtotal(),
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        setErrors([payload?.error ?? 'Unable to submit your order request right now. Please try again shortly.'])
        return
      }

      clearCart()
      router.push(`/checkout/success?order=${orderNumber}`)
    } catch {
      setErrors(['Unable to submit your order request right now. Please try again shortly.'])
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-cream min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl font-heading font-bold text-charcoal mb-2">Place an Order</h1>
        <p className="text-sm text-muted mb-6">
          Fill in your details and one of our specialists will reach out to confirm your order and arrange payment.
        </p>

        <StepIndicator current={step} />

        {!isMarketOpen && <MarketHoursNotice className="mb-6" />}

        {/* Payment method banner */}
        <div className="flex items-start gap-3 bg-gold/10 border border-gold/20 rounded-lg px-4 py-3 mb-6">
          <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-charcoal">Wire Transfer &amp; Direct Deposit Only</p>
            <p className="text-xs text-muted mt-0.5">
              We do not accept credit cards or online payments. After you submit your order, our team will contact you with payment and delivery instructions.
            </p>
          </div>
        </div>

        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            {errors.map((e) => (
              <p key={e} className="text-sm text-red-600">{e}</p>
            ))}
          </div>
        )}

        {/* Contact/Shipping step */}
        {step === 'contact' && (
          <form onSubmit={handleContinue}>
            <div className="bg-white border border-border rounded-xl p-6 space-y-4">
              <h2 className="font-heading font-semibold text-charcoal text-lg mb-2">Your Information</h2>
              <Field label="Full Name" value={contact.name} onChange={(v) => setContact((s) => ({ ...s, name: v }))} placeholder="John Smith" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email" type="email" value={contact.email} onChange={(v) => setContact((s) => ({ ...s, email: v }))} placeholder="john@example.com" />
                <Field label="Phone" type="tel" value={contact.phone} onChange={(v) => setContact((s) => ({ ...s, phone: v }))} placeholder="(555) 555-5555" />
              </div>
              <Field label="Address" value={contact.address} onChange={(v) => setContact((s) => ({ ...s, address: v }))} placeholder="123 Main St" />
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <Field label="City" value={contact.city} onChange={(v) => setContact((s) => ({ ...s, city: v }))} placeholder="Los Angeles" />
                </div>
                <Field label="State" value={contact.state} onChange={(v) => setContact((s) => ({ ...s, state: v }))} placeholder="CA" maxLength={2} />
                <Field label="ZIP" value={contact.zip} onChange={(v) => setContact((s) => ({ ...s, zip: v }))} placeholder="90210" maxLength={10} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5">
                  Notes <span className="font-normal normal-case text-muted">(optional)</span>
                </label>
                <textarea
                  value={contact.notes}
                  onChange={(e) => setContact((s) => ({ ...s, notes: e.target.value }))}
                  placeholder="Any special requests or questions for our team..."
                  rows={3}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 bg-white transition-colors resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 rounded-lg transition-colors"
            >
              Review Order →
            </button>
          </form>
        )}

        {/* Review step */}
        {step === 'review' && (
          <div>
            <div className="bg-white border border-border rounded-xl p-6 space-y-5">
              <h2 className="font-heading font-semibold text-charcoal text-lg">Order Review</h2>

              {/* Items */}
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Items</p>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-charcoal">{item.name} &times; {item.quantity}</span>
                      <span className="font-mono font-medium">{formatUSD(item.priceSnapshot * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border mt-3 pt-3 flex justify-between font-semibold">
                  <span>Estimated Total</span>
                  <span className="font-mono">{formatUSD(subtotal())}</span>
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Contact</p>
                <p className="text-sm text-charcoal">{contact.name}</p>
                <p className="text-sm text-muted">{contact.email} · {contact.phone}</p>
              </div>

              {/* Delivery */}
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Delivery Address</p>
                <p className="text-sm text-charcoal">{contact.address}</p>
                <p className="text-sm text-muted">{contact.city}, {contact.state} {contact.zip}</p>
              </div>

              {contact.notes && (
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Notes</p>
                  <p className="text-sm text-charcoal">{contact.notes}</p>
                </div>
              )}

              {/* Payment reminder */}
              <div className="bg-cream rounded-lg px-4 py-3 text-sm text-charcoal/70 leading-relaxed">
                After submitting, our team will reach out within <strong className="text-charcoal">1 business day</strong> to confirm pricing and provide <strong className="text-charcoal">wire transfer or direct deposit</strong> instructions. Prices are locked once confirmed.
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setStep('contact')}
                className="flex-1 border border-border bg-white hover:border-gold text-charcoal font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting || !isMarketOpen}
                className="flex-[2] bg-gold hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60 text-charcoal font-bold py-3 rounded-lg transition-colors"
              >
                {submitting ? 'Submitting…' : 'Submit Order Request'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
