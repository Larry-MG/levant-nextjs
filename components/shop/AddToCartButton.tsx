'use client'
import { useState } from 'react'
import { useCartStore } from '@/lib/store/cart'
import type { CartItem } from '@/lib/store/cart'

interface Props {
  product: Omit<CartItem, 'quantity'>
}

export default function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem)
  const openCart = useCartStore((s) => s.openCart)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      openCart()
    }, 600)
  }

  return (
    <button
      onClick={handleAdd}
      className={`w-full py-2.5 px-6 rounded-lg text-sm font-semibold transition-colors ${
        added
          ? 'bg-green-600 text-white'
          : 'bg-gold hover:bg-gold-dark text-charcoal'
      }`}
    >
      {added ? '✓ Added' : 'Add to Cart'}
    </button>
  )
}
