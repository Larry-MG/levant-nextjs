import { MARKET_HOURS_NOTICE } from '@/lib/market-hours'

interface Props {
  compact?: boolean
  className?: string
}

export default function MarketHoursNotice({ compact = false, className = '' }: Props) {
  return (
    <div
      className={[
        'flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 text-amber-900',
        compact ? 'px-3 py-2.5 text-xs' : 'px-4 py-3 text-sm',
        className,
      ].filter(Boolean).join(' ')}
    >
      <svg className={`${compact ? 'mt-0.5 h-4 w-4' : 'mt-0.5 h-5 w-5'} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-4a1 1 0 100 2 1 1 0 000-2zm-1 4a1 1 0 000 2v2a1 1 0 102 0v-2a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <p className="leading-relaxed">{MARKET_HOURS_NOTICE}</p>
    </div>
  )
}
