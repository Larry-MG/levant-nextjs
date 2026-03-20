import Image from 'next/image'
import Link from 'next/link'
import { formatUSD } from '@/lib/utils/currency'
import type { ShopProduct } from '@/lib/fiztrade/types'

const METAL_THEME = {
  gold:      { badge: 'bg-gold text-charcoal',       glow: 'rgba(201,168,76,0.18)'   },
  silver:    { badge: 'bg-[#B8B8B8] text-charcoal',  glow: 'rgba(192,192,192,0.15)'  },
  platinum:  { badge: 'bg-[#D8D8F0] text-[#4040A0]', glow: 'rgba(192,192,224,0.15)'  },
  palladium: { badge: 'bg-[#D0C8E0] text-[#503080]', glow: 'rgba(192,184,216,0.15)'  },
} as const

interface Props {
  product: ShopProduct
}

export default function ProductCard({ product }: Props) {
  const theme = METAL_THEME[product.metal] ?? METAL_THEME.gold

  return (
    <Link
      href={`/shop/${product.code}`}
      className="group block bg-white border border-border hover:border-gold/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image */}
      <div
        className="relative h-48 flex items-center justify-center"
        style={{ background: `radial-gradient(ellipse at 50% 60%, ${theme.glow} 0%, transparent 70%), #F5F0E8` }}
      >
        {product.imageUrl ? (
          <div className="relative w-32 h-32 group-hover:scale-[1.06] transition-transform duration-500 ease-out">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
              sizes="128px"
              unoptimized={false}
            />
          </div>
        ) : (
          <span className="text-6xl text-charcoal/10">
            {product.metal === 'gold' ? '◈' : product.metal === 'silver' ? '◇' : '◆'}
          </span>
        )}

        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider ${theme.badge}`}>
          {product.metal}
        </span>
      </div>

      {/* Info */}
      <div className="px-4 pt-3.5 pb-4">
        <p className="text-charcoal text-[13px] font-semibold leading-snug line-clamp-2 mb-2.5">
          {product.name}
        </p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] text-muted/50 uppercase tracking-widest font-semibold mb-0.5">Ask</p>
            <p className="font-mono font-bold text-lg text-charcoal leading-none">
              {formatUSD(product.ask)}
            </p>
          </div>
          <span className="text-[10px] text-muted/50 group-hover:text-gold transition-colors font-medium">
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}
