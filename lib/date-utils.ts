export function calculateDateDifference(date1: Date, date2: Date) {
  const start = new Date(date1)
  const end = new Date(date2)

  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years--
    months += 12
  }

  const weeks = Math.floor(diffDays / 7)
  const hours = Math.floor(diffTime / (1000 * 60 * 60))
  const minutes = Math.floor(diffTime / (1000 * 60))

  return {
    years,
    months,
    days,
    totalDays: diffDays,
    weeks,
    hours,
    minutes,
  }
}

export function calculateAge(birthDate: Date) {
  const today = new Date()
  return calculateDateDifference(birthDate, today)
}

export function addBusinessDays(startDate: Date, days: number): Date {
  const result = new Date(startDate)
  let daysToAdd = days

  while (daysToAdd > 0) {
    result.setDate(result.getDate() + 1)
    const dayOfWeek = result.getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--
    }
  }

  return result
}

export function countBusinessDays(startDate: Date, endDate: Date): number {
  let count = 0
  const current = new Date(startDate)
  const end = new Date(endDate)

  while (current <= end) {
    const dayOfWeek = current.getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++
    }
    current.setDate(current.getDate() + 1)
  }

  return count
}
