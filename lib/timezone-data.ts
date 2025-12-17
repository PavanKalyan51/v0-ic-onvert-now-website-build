export const timezones = [
  { label: "Pacific Standard Time (PST)", value: "America/Los_Angeles", abbr: "PST", offset: -8 },
  { label: "Eastern Standard Time (EST)", value: "America/New_York", abbr: "EST", offset: -5 },
  { label: "Central Standard Time (CST)", value: "America/Chicago", abbr: "CST", offset: -6 },
  { label: "Mountain Standard Time (MST)", value: "America/Denver", abbr: "MST", offset: -7 },
  { label: "Greenwich Mean Time (GMT)", value: "Europe/London", abbr: "GMT", offset: 0 },
  { label: "India Standard Time (IST)", value: "Asia/Kolkata", abbr: "IST", offset: 5.5 },
  { label: "China Standard Time (CST)", value: "Asia/Shanghai", abbr: "CST", offset: 8 },
  { label: "Japan Standard Time (JST)", value: "Asia/Tokyo", abbr: "JST", offset: 9 },
  { label: "Australian Eastern Time (AEDT)", value: "Australia/Sydney", abbr: "AEDT", offset: 11 },
  { label: "Central European Time (CET)", value: "Europe/Paris", abbr: "CET", offset: 1 },
  { label: "Singapore Time (SGT)", value: "Asia/Singapore", abbr: "SGT", offset: 8 },
  { label: "Dubai Time (GST)", value: "Asia/Dubai", abbr: "GST", offset: 4 },
  { label: "Moscow Time (MSK)", value: "Europe/Moscow", abbr: "MSK", offset: 3 },
  { label: "Brazil Time (BRT)", value: "America/Sao_Paulo", abbr: "BRT", offset: -3 },
  { label: "Coordinated Universal Time (UTC)", value: "UTC", abbr: "UTC", offset: 0 },
]

export function convertTimezone(
  hour: number,
  minute: number,
  fromOffset: number,
  toOffset: number,
): { hour: number; minute: number; nextDay: boolean; prevDay: boolean } {
  const totalMinutes = hour * 60 + minute
  const offsetDiff = (toOffset - fromOffset) * 60
  let newTotalMinutes = totalMinutes + offsetDiff

  let nextDay = false
  let prevDay = false

  if (newTotalMinutes >= 24 * 60) {
    newTotalMinutes -= 24 * 60
    nextDay = true
  } else if (newTotalMinutes < 0) {
    newTotalMinutes += 24 * 60
    prevDay = true
  }

  return {
    hour: Math.floor(newTotalMinutes / 60),
    minute: newTotalMinutes % 60,
    nextDay,
    prevDay,
  }
}
