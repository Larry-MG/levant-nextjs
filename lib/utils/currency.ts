export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatChange(change: number): string {
  const sign = change >= 0 ? '+' : ''
  return `${sign}${formatUSD(change)}`
}

export function formatChangePercent(pct: number): string {
  const sign = pct >= 0 ? '+' : ''
  return `${sign}${pct.toFixed(2)}%`
}

export function calcProductPrice(
  spotAsk: number,
  weightOzt: number,
  premiumRate: number
): number {
  return spotAsk * weightOzt * (1 + premiumRate)
}
