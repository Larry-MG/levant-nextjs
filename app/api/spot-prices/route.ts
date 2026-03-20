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
    console.error('Spot price error:', err)
    return NextResponse.json(
      {
        prices: [
          { metal: 'gold',      bid: 2462.88, ask: 2465.19, change: 12.40,  changePercent:  0.53, direction: 'up'   },
          { metal: 'silver',    bid:   30.92, ask:   30.99, change: -0.18,  changePercent: -0.61, direction: 'down' },
          { metal: 'platinum',  bid: 1027.11, ask: 1029.42, change:  3.60,  changePercent:  0.37, direction: 'up'   },
          { metal: 'palladium', bid: 1104.60, ask: 1107.75, change: -8.50,  changePercent: -0.80, direction: 'down' },
        ],
        updatedAt: new Date().toISOString(),
        fallback: true,
      },
      // Short cache on fallback so it retries the real API soon
      { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } },
    )
  }
}
