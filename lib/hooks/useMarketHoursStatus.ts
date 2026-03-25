'use client'

import { useEffect, useState } from 'react'
import { getMarketHoursStatus } from '@/lib/market-hours'

export function useMarketHoursStatus() {
  const [status, setStatus] = useState(() => getMarketHoursStatus())

  useEffect(() => {
    const sync = () => setStatus(getMarketHoursStatus())
    sync()

    const interval = window.setInterval(sync, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return status
}
