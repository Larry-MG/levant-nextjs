'use client'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/lib/store/cart'

export default function CartIcon() {
  const [mounted, setMounted] = useState(false)
  const totalItems = useCartStore((s) => s.totalItems)
  const openCart = useCartStore((s) => s.openCart)

  useEffect(() => {
    useCartStore.persist.rehydrate()
    setMounted(true)
  }, [])

  const count = mounted ? totalItems() : 0

  return (
    <button
      onClick={openCart}
      className="relative p-2 text-gold hover:text-gold-light transition-colors"
      aria-label="Open cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-gold text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center leading-none">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  )
}
