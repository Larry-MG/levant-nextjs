'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'
import { formatUSD } from '@/lib/utils/currency'

export default function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen)
  const closeCart = useCartStore((s) => s.closeCart)
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQty = useCartStore((s) => s.updateQty)
  const subtotal = useCartStore((s) => s.subtotal)

  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const metalIcon = (metal: string) =>
    metal === 'gold' ? '🥇' : metal === 'silver' ? '🥈' : metal === 'platinum' ? '💎' : '⚪'

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0">
          <h2 className="font-heading font-semibold text-charcoal text-lg">
            Your Cart
            {items.length > 0 && (
              <span className="ml-2 text-sm font-normal text-muted">
                ({items.reduce((s, i) => s + i.quantity, 0)} {items.reduce((s, i) => s + i.quantity, 0) === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-muted hover:text-charcoal transition-colors rounded-lg hover:bg-cream"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="text-5xl mb-4">🛒</div>
            <p className="font-heading font-semibold text-charcoal text-lg mb-1">Your cart is empty</p>
            <p className="text-sm text-muted mb-6">Add some gold or silver to get started.</p>
            <button
              onClick={closeCart}
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-3 bg-cream rounded-lg p-3">
                  <div className="w-10 h-10 bg-cream-dark rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    {metalIcon(item.metal)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-charcoal leading-snug line-clamp-2">{item.name}</p>
                    <p className="text-xs text-muted mt-0.5">{item.weightOzt} oz · {item.metal}</p>
                    <p className="text-xs font-mono font-medium text-charcoal mt-0.5">{formatUSD(item.priceSnapshot)} each</p>
                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="w-6 h-6 border border-border rounded text-charcoal hover:border-gold hover:text-gold transition-colors flex items-center justify-center text-sm leading-none"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="w-6 h-6 border border-border rounded text-charcoal hover:border-gold hover:text-gold transition-colors flex items-center justify-center text-sm leading-none"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <p className="font-mono font-bold text-charcoal text-sm">
                      {formatUSD(item.priceSnapshot * item.quantity)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-400 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-5 py-4 flex-shrink-0 bg-white space-y-3">
              {/* Payment note */}
              <div className="flex items-start gap-2 bg-gold/10 rounded-lg px-3 py-2.5 text-xs text-charcoal/70">
                <svg className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>We accept <strong>wire transfer</strong> and <strong>direct deposit</strong> only. Our team will contact you with payment instructions.</span>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Estimated total</span>
                <span className="font-mono font-bold text-charcoal text-lg">{formatUSD(subtotal())}</span>
              </div>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="block w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 px-4 rounded-lg text-center text-sm transition-colors"
              >
                Proceed to Checkout →
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
