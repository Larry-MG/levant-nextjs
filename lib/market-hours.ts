const PST_OFFSET_MS = 8 * 60 * 60 * 1000
const MARKET_OPEN_MINUTES = 9 * 60
const MARKET_CLOSE_MINUTES = 14 * 60

export const MARKET_HOURS_LABEL = '9:00 AM to 2:00 PM Pacific Standard Time'
export const MARKET_HOURS_NOTICE = `The market is currently closed. We are open from ${MARKET_HOURS_LABEL}, Monday through Friday.`

export function getMarketHoursStatus(date = new Date()) {
  const pstDate = new Date(date.getTime() - PST_OFFSET_MS)
  const dayOfWeek = pstDate.getUTCDay()
  const minutesIntoDay = pstDate.getUTCHours() * 60 + pstDate.getUTCMinutes()

  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5
  const isOpen = isWeekday && minutesIntoDay >= MARKET_OPEN_MINUTES && minutesIntoDay < MARKET_CLOSE_MINUTES

  return {
    isOpen,
    label: MARKET_HOURS_LABEL,
    notice: MARKET_HOURS_NOTICE,
  }
}
