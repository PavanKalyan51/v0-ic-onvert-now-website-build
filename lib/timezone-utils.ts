export interface TimezoneInfo {
  name: string
  abbreviation: string
  offset: string
  cities: string[]
}

export const timezones: Record<string, TimezoneInfo> = {
  PST: {
    name: "Pacific Standard Time",
    abbreviation: "PST",
    offset: "UTC-8",
    cities: ["Los Angeles", "San Francisco", "Seattle", "Las Vegas"],
  },
  PDT: {
    name: "Pacific Daylight Time",
    abbreviation: "PDT",
    offset: "UTC-7",
    cities: ["Los Angeles", "San Francisco", "Seattle", "Las Vegas"],
  },
  EST: {
    name: "Eastern Standard Time",
    abbreviation: "EST",
    offset: "UTC-5",
    cities: ["New York", "Boston", "Miami", "Toronto"],
  },
  EDT: {
    name: "Eastern Daylight Time",
    abbreviation: "EDT",
    offset: "UTC-4",
    cities: ["New York", "Boston", "Miami", "Toronto"],
  },
  CST: {
    name: "Central Standard Time",
    abbreviation: "CST",
    offset: "UTC-6",
    cities: ["Chicago", "Dallas", "Houston", "Mexico City"],
  },
  CDT: {
    name: "Central Daylight Time",
    abbreviation: "CDT",
    offset: "UTC-5",
    cities: ["Chicago", "Dallas", "Houston", "Mexico City"],
  },
  IST: {
    name: "India Standard Time",
    abbreviation: "IST",
    offset: "UTC+5:30",
    cities: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
  },
  GMT: {
    name: "Greenwich Mean Time",
    abbreviation: "GMT",
    offset: "UTC+0",
    cities: ["London", "Dublin", "Lisbon", "Accra"],
  },
  MST: {
    name: "Mountain Standard Time",
    abbreviation: "MST",
    offset: "UTC-7",
    cities: ["Denver", "Phoenix", "Salt Lake City"],
  },
  MDT: {
    name: "Mountain Daylight Time",
    abbreviation: "MDT",
    offset: "UTC-6",
    cities: ["Denver", "Phoenix", "Salt Lake City"],
  },
  BST: {
    name: "British Summer Time",
    abbreviation: "BST",
    offset: "UTC+1",
    cities: ["London"],
  },
  CET: {
    name: "Central European Time",
    abbreviation: "CET",
    offset: "UTC+1",
    cities: ["Berlin", "Madrid", "Paris"],
  },
  CEST: {
    name: "Central European Summer Time",
    abbreviation: "CEST",
    offset: "UTC+2",
    cities: ["Berlin", "Madrid", "Paris"],
  },
  JST: {
    name: "Japan Standard Time",
    abbreviation: "JST",
    offset: "UTC+9",
    cities: ["Tokyo"],
  },
  AEST: {
    name: "Australian Eastern Standard Time",
    abbreviation: "AEST",
    offset: "UTC+10",
    cities: ["Sydney"],
  },
  AEDT: {
    name: "Australian Eastern Daylight Time",
    abbreviation: "AEDT",
    offset: "UTC+11",
    cities: ["Sydney"],
  },
}

export function convertTime(time: string, fromTimezone: string, toTimezone: string): { time: string; date: string } {
  // Parse the input time
  const [hours, minutes] = time.split(":").map(Number)

  // Create a date object with the input time
  const date = new Date()
  date.setHours(hours, minutes, 0, 0)

  // Get timezone offset mappings
  const timezoneOffsets: Record<string, number> = {
    PST: -8,
    PDT: -7,
    EST: -5,
    EDT: -4,
    CST: -6,
    CDT: -5,
    MST: -7,
    MDT: -6,
    IST: 5.5,
    GMT: 0,
    BST: 1,
    CET: 1,
    CEST: 2,
    JST: 9,
    AEST: 10,
    AEDT: 11,
  }

  const fromOffset = timezoneOffsets[fromTimezone] || 0
  const toOffset = timezoneOffsets[toTimezone] || 0

  // Calculate the difference
  const offsetDiff = toOffset - fromOffset

  // Add the offset difference
  date.setHours(date.getHours() + offsetDiff)

  // Format output
  const outputTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  const outputDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return { time: outputTime, date: outputDate }
}

export function getCurrentTimeInTimezone(timezone: string): string {
  const timezoneOffsets: Record<string, number> = {
    PST: -8,
    PDT: -7,
    EST: -5,
    EDT: -4,
    CST: -6,
    CDT: -5,
    MST: -7,
    MDT: -6,
    IST: 5.5,
    GMT: 0,
    BST: 1,
    CET: 1,
    CEST: 2,
    JST: 9,
    AEST: 10,
    AEDT: 11,
  }

  const offset = timezoneOffsets[timezone] || 0
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const tzDate = new Date(utc + 3600000 * offset)

  return tzDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

export function convertTimeAdvanced(
  hour: string,
  minute: string,
  period: string,
  fromTimezone: string,
  toTimezone: string,
): { time: string; date: string; dayDiff: string } {
  let hours24 = Number.parseInt(hour)

  // Convert to 24-hour format
  if (period === "PM" && hours24 !== 12) {
    hours24 += 12
  } else if (period === "AM" && hours24 === 12) {
    hours24 = 0
  }

  const minutes = Number.parseInt(minute)

  const date = new Date()
  date.setHours(hours24, minutes, 0, 0)

  const timezoneOffsets: Record<string, number> = {
    PST: -8,
    PDT: -7,
    EST: -5,
    EDT: -4,
    CST: -6,
    CDT: -5,
    MST: -7,
    MDT: -6,
    IST: 5.5,
    GMT: 0,
    BST: 1,
    CET: 1,
    CEST: 2,
    JST: 9,
    AEST: 10,
    AEDT: 11,
  }

  const fromOffset = timezoneOffsets[fromTimezone] || 0
  const toOffset = timezoneOffsets[toTimezone] || 0
  const offsetDiff = toOffset - fromOffset

  const originalDay = date.getDate()
  date.setHours(date.getHours() + offsetDiff)
  const newDay = date.getDate()

  let dayDiff = ""
  if (newDay > originalDay) {
    dayDiff = "Next day"
  } else if (newDay < originalDay) {
    dayDiff = "Previous day"
  } else {
    dayDiff = "Same day"
  }

  const outputTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  const outputDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return { time: outputTime, date: outputDate, dayDiff }
}
