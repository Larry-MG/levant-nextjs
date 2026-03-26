const MARKET_TIME_ZONE = 'America/Los_Angeles'
const MARKET_OPEN_MINUTES = 9 * 60
const MARKET_CLOSE_MINUTES = 14 * 60
const WEEKDAY_ORDER = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const MARKET_HOURS_LABEL = '9:00 AM to 2:00 PM Pacific Time'
export const MARKET_HOURS_NOTICE = `The market is currently closed. We are open from ${MARKET_HOURS_LABEL}, Monday through Friday.`

function getPacificDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: MARKET_TIME_ZONE,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  })

  const parts = formatter.formatToParts(date)
  const weekday = parts.find((part) => part.type === 'weekday')?.value ?? 'Sun'
  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? '0')
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? '0')

  return {
    weekday,
    dayOfWeek: WEEKDAY_ORDER.indexOf(weekday),
    minutesIntoDay: hour * 60 + minute,
  }
}

export function getMarketHoursStatus(date = new Date()) {
  const pacific = getPacificDateParts(date)
  const isWeekday = pacific.dayOfWeek >= 1 && pacific.dayOfWeek <= 5
  const isOpen = isWeekday && pacific.minutesIntoDay >= MARKET_OPEN_MINUTES && pacific.minutesIntoDay < MARKET_CLOSE_MINUTES

  return {
    isOpen,
    label: MARKET_HOURS_LABEL,
    notice: MARKET_HOURS_NOTICE,
  }
}
