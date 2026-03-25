'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'
import { formatUSD } from '@/lib/utils/currency'
import MarketHoursNotice from '@/components/shop/MarketHoursNotice'
import { useMarketHoursStatus } from '@/lib/hooks/useMarketHoursStatus'

export default function CartPage() {
  const [mounted, setMounted] = useState(false)
  const { isOpen: isMarketOpen } = useMarketHoursStatus()
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQty = useCartStore((s) => s.updateQty)
  const subtotal = useCartStore((s) => s.subtotal)

  useEffect(() => {
    useCartStore.persist.rehydrate()
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-cream-dark rounded w-1/3" />
          <div className="h-24 bg-cream-dark rounded" />
          <div className="h-24 bg-cream-dark rounded" />
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h1 className="text-2xl font-heading font-bold text-charcoal mb-2">Your cart is empty</h1>
        <p className="text-muted mb-6">Browse our selection of gold, silver, and platinum bullion.</p>
        <Link
          href="/shop"
          className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-6 py-3 rounded transition-colors"
        >
          Shop Now
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl font-heading font-bold text-charcoal mb-6">
          Your Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
        </h1>

        <div className="space-y-3 mb-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-border rounded-lg p-4 flex items-center gap-4"
            >
              {/* Placeholder image */}
              <div className="w-14 h-14 bg-cream-dark rounded flex items-center justify-center text-2xl flex-shrink-0">
                {item.metal === 'gold' ? '🥇' :
                 item.metal === 'silver' ? '🥈' :
                 item.metal === 'platinum' ? '💎' : '⚪'}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-charcoal text-sm truncate">{item.name}</p>
                <p className="text-xs text-muted">{item.weightOzt} oz · {item.metal}</p>
                <p className="font-mono text-sm font-medium text-charcoal mt-0.5">
                  {formatUSD(item.priceSnapshot)} each
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => updateQty(item.id, item.quantity - 1)}
                  className="w-7 h-7 border border-border rounded hover:border-gold text-charcoal hover:text-gold transition-colors flex items-center justify-center text-sm"
                >
                  -
                </button>
                <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQty(item.id, item.quantity + 1)}
                  className="w-7 h-7 border border-border rounded hover:border-gold text-charcoal hover:text-gold transition-colors flex items-center justify-center text-sm"
                >
                  +
                </button>
              </div>

              <div className="text-right flex-shrink-0 min-w-[80px]">
                <p className="font-mono font-bold text-charcoal text-sm">
                  {formatUSD(item.priceSnapshot * item.quantity)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-red-400 hover:text-red-600 transition-colors mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white border border-border rounded-lg p-5">
          {!isMarketOpen && <MarketHoursNotice compact className="mb-4" />}
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted">Subtotal</span>
            <span className="font-mono font-medium">{formatUSD(subtotal())}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted">Shipping</span>
            <span className="text-muted">Calculated at checkout</span>
          </div>
          <div className="border-t border-border pt-3 mt-3 flex justify-between">
            <span className="font-semibold text-charcoal">Estimated Total</span>
            <span className="font-mono font-bold text-charcoal text-lg">{formatUSD(subtotal())}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-4 block w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 px-4 rounded text-center transition-colors"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-2 block w-full text-center text-sm text-muted hover:text-charcoal transition-colors py-2"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
