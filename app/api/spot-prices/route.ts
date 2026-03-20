import { NextResponse } from 'next/server'
import { getSpotPrices } from '@/lib/fiztrade/client'

// Revalidate Next.js server cache every 5 minutes
export const revalidate = 300

// Cache-Control: fresh for 5 min, serve stale for up to 24 h while revalidating
const CACHE_HEADER = 'public, s-maxage=300, stale-while-revalidate=86400'

export async function GET() {
  try {
    const prices = await getSpotPrices()
    return NextResponse.json(
      { prices, updatedAt: new Date().toISOString() },
      { headers: { 'Cache-Control': CACHE_HEADER } },
    )
  } catch (err) {
    console.error('FizTrade spot price error:', err)
    return NextResponse.json(
      {
        prices: [
          { metal: 'gold',      bid: 2345.60, ask: 2347.80, change: 12.40,  changePercent:  0.53, direction: 'up'   },
          { metal: 'silver',    bid:   29.45, ask:   29.52, change: -0.18,  changePercent: -0.61, direction: 'down' },
          { metal: 'platinum',  bid:  978.20, ask:  980.40, change:  3.60,  changePercent:  0.37, direction: 'up'   },
          { metal: 'palladium', bid: 1052.00, ask: 1055.00, change: -8.50,  changePercent: -0.80, direction: 'down' },
        ],
        updatedAt: new Date().toISOString(),
        fallback: true,
      },
      // Short cache on fallback so it retries the real API soon
      { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } },
    )
  }
}
