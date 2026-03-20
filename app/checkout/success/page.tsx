'use client'
import { Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function OrderSuccessContent() {
  const params = useSearchParams()
  const orderNumber = useMemo(
    () => params.get('order') ?? Math.floor(10_000_000 + Math.random() * 90_000_000).toString(),
    [params]
  )

  return (
    <div className="bg-cream min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-heading font-bold text-charcoal mb-2">Order Request Received!</h1>
        <p className="text-muted mb-1">Thank you — we&apos;ll be in touch soon.</p>
        <p className="text-sm text-muted mb-6">
          Reference <span className="font-mono font-semibold text-charcoal">#{orderNumber}</span>
        </p>

        <div className="bg-white border border-border rounded-xl p-5 text-left mb-6 space-y-4">
          <p className="text-sm text-charcoal leading-relaxed">
            Your order request has been received. One of our specialists will contact you within{' '}
            <strong>1 business day</strong> to confirm availability, lock in your price, and arrange payment.
          </p>

          <div className="border-t border-border pt-4">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Payment Information</p>
            <div className="flex items-start gap-3 bg-gold/10 rounded-lg px-3 py-2.5">
              <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-charcoal/80 leading-relaxed">
                We accept <strong>wire transfer</strong> and <strong>direct deposit</strong> only. Our team will provide full banking instructions when they contact you.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-muted pt-1">
            <p className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Order request received
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Confirmation email on its way
            </p>
            <p className="flex items-center gap-2">
              <span className="text-muted/50">○</span> Specialist will contact you within 1 business day
            </p>
            <p className="flex items-center gap-2">
              <span className="text-muted/50">○</span> Payment &amp; delivery instructions to follow
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="/shop"
            className="bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="border border-border hover:border-gold text-charcoal hover:text-gold py-3 rounded-lg transition-colors text-sm font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="bg-cream min-h-screen flex items-center justify-center" />}>
      <OrderSuccessContent />
    </Suspense>
  )
}
