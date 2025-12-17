"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { timezones, convertTimeAdvanced, getCurrentTimeInTimezone } from "@/lib/timezone-utils"
import { Clock, ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface TimezoneConverterProps {
  fromTimezone: string
  toTimezone: string
  title: string
  description: string
}

export function TimezoneConverterAdvanced({ fromTimezone, toTimezone, title, description }: TimezoneConverterProps) {
  const [hour, setHour] = useState("12")
  const [minute, setMinute] = useState("00")
  const [period, setPeriod] = useState("PM")
  const [result, setResult] = useState({ time: "", date: "", dayDiff: "" })
  const [currentTime, setCurrentTime] = useState({ from: "", to: "" })

  useEffect(() => {
    const now = new Date()
    const hours = now.getHours()
    setHour(String(hours > 12 ? hours - 12 : hours || 12))
    setMinute(String(now.getMinutes()).padStart(2, "0"))
    setPeriod(hours >= 12 ? "PM" : "AM")

    const updateCurrentTimes = () => {
      setCurrentTime({
        from: getCurrentTimeInTimezone(fromTimezone),
        to: getCurrentTimeInTimezone(toTimezone),
      })
    }

    updateCurrentTimes()
    const interval = setInterval(updateCurrentTimes, 1000)
    return () => clearInterval(interval)
  }, [fromTimezone, toTimezone])

  useEffect(() => {
    if (hour && minute) {
      const converted = convertTimeAdvanced(hour, minute, period, fromTimezone, toTimezone)
      setResult(converted)
    }
  }, [hour, minute, period, fromTimezone, toTimezone])

  const fromInfo = timezones[fromTimezone]
  const toInfo = timezones[toTimezone]

  const setToCurrentTime = () => {
    const now = new Date()
    const hours = now.getHours()
    setHour(String(hours > 12 ? hours - 12 : hours || 12))
    setMinute(String(now.getMinutes()).padStart(2, "0"))
    setPeriod(hours >= 12 ? "PM" : "AM")
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="shadow-xl border-2">
        <CardHeader className="space-y-3">
          <CardTitle className="text-2xl md:text-3xl gradient-text">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Current Time Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-950/50 dark:to-indigo-950/50 rounded-2xl border-2 border-cyan-200 dark:border-cyan-800">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Current time in {fromInfo.name}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                {currentTime.from}
              </div>
              <div className="text-xs text-muted-foreground">{fromInfo.offset}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Current time in {toInfo.name}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                {currentTime.to}
              </div>
              <div className="text-xs text-muted-foreground">{toInfo.offset}</div>
            </div>
          </div>

          {/* Converter */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <Label className="text-lg font-semibold">Convert Time from {fromInfo.abbreviation}</Label>
                <Button variant="outline" size="sm" onClick={setToCurrentTime} className="gap-2 bg-transparent">
                  <Clock className="w-4 h-4" />
                  Now
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="hour" className="text-sm">
                    Hour
                  </Label>
                  <Select value={hour} onValueChange={setHour}>
                    <SelectTrigger id="hour" className="h-14 text-xl font-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((h) => (
                        <SelectItem key={h} value={h} className="text-lg font-mono">
                          {h}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="minute" className="text-sm">
                    Minute
                  </Label>
                  <Select value={minute} onValueChange={setMinute}>
                    <SelectTrigger id="minute" className="h-14 text-xl font-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")).map((m) => (
                        <SelectItem key={m} value={m} className="text-lg font-mono">
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="period" className="text-sm">
                    AM/PM
                  </Label>
                  <Select value={period} onValueChange={setPeriod}>
                    <SelectTrigger id="period" className="h-14 text-xl font-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AM" className="text-lg font-mono">
                        AM
                      </SelectItem>
                      <SelectItem value="PM" className="text-lg font-mono">
                        PM
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-4">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <ArrowRight className="w-8 h-8 text-primary" />
              </motion.div>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-50 via-indigo-50 to-purple-50 dark:from-cyan-950/50 dark:via-indigo-950/50 dark:to-purple-950/50 rounded-2xl border-2 border-primary/30 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Clock className="w-5 h-5" />
                Time in {toInfo.abbreviation}
              </div>
              <div className="text-5xl md:text-6xl font-bold gradient-text font-mono">{result.time || "--:-- --"}</div>
              <div className="flex items-center gap-2 text-base text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {result.date || "Select a time"}
              </div>
              {result.dayDiff && (
                <div className="text-sm font-medium text-primary bg-white/50 dark:bg-black/20 px-4 py-2 rounded-lg inline-block">
                  {result.dayDiff}
                </div>
              )}
            </div>
          </div>

          {/* Timezone Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-2 border-border">
            <div className="space-y-3 p-5 rounded-xl bg-muted/30">
              <h4 className="font-bold flex items-center gap-2 text-lg text-cyan-600 dark:text-cyan-400">
                <Clock className="w-5 h-5" />
                {fromInfo.name}
              </h4>
              <p className="text-sm font-semibold text-muted-foreground">{fromInfo.offset}</p>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Major cities:</span>{" "}
                <span className="text-muted-foreground">{fromInfo.cities.join(", ")}</span>
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-xl bg-muted/30">
              <h4 className="font-bold flex items-center gap-2 text-lg text-indigo-600 dark:text-indigo-400">
                <Clock className="w-5 h-5" />
                {toInfo.name}
              </h4>
              <p className="text-sm font-semibold text-muted-foreground">{toInfo.offset}</p>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Major cities:</span>{" "}
                <span className="text-muted-foreground">{toInfo.cities.join(", ")}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
