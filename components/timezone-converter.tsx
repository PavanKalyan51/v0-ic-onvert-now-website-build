"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { convertTime, getCurrentTimeInTimezone, timezones } from "@/lib/timezone-utils"
import { Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface TimezoneConverterProps {
  fromTimezone: string
  toTimezone: string
  title: string
  description: string
}

export function TimezoneConverter({ fromTimezone, toTimezone, title, description }: TimezoneConverterProps) {
  const [inputTime, setInputTime] = useState("12:00")
  const [result, setResult] = useState({ time: "", date: "" })
  const [currentTime, setCurrentTime] = useState({ from: "", to: "" })

  useEffect(() => {
    // Set initial time to current time in source timezone
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    setInputTime(`${hours}:${minutes}`)

    // Update current times
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
    if (inputTime) {
      const converted = convertTime(inputTime, fromTimezone, toTimezone)
      setResult(converted)
    }
  }, [inputTime, fromTimezone, toTimezone])

  const fromInfo = timezones[fromTimezone]
  const toInfo = timezones[toTimezone]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-full shadow-lg border-2">
        <CardHeader>
          <CardTitle className="text-2xl gradient-text">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Time Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-950 dark:to-indigo-950 rounded-2xl border-2 border-cyan-200 dark:border-cyan-800">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Current time in {fromInfo.name}</div>
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{currentTime.from}</div>
              <div className="text-xs text-muted-foreground mt-1">{fromInfo.offset}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Current time in {toInfo.name}</div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{currentTime.to}</div>
              <div className="text-xs text-muted-foreground mt-1">{toInfo.offset}</div>
            </div>
          </div>

          {/* Converter */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="time-input" className="text-base font-semibold">
                Enter time in {fromInfo.abbreviation}
              </Label>
              <Input
                id="time-input"
                type="time"
                value={inputTime}
                onChange={(e) => setInputTime(e.target.value)}
                className="text-lg h-12"
              />
            </div>

            <div className="flex items-center justify-center py-2">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <ArrowRight className="w-6 h-6 text-primary" />
              </motion.div>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 via-indigo-50 to-purple-50 dark:from-cyan-950 dark:via-indigo-950 dark:to-purple-950 rounded-2xl border-2 border-primary/30 shadow-lg">
              <div className="text-sm text-muted-foreground mb-2 font-medium">
                Converted time in {toInfo.abbreviation}
              </div>
              <div className="text-4xl font-bold gradient-text mb-1">{result.time || "--:--"}</div>
              <div className="text-sm text-muted-foreground">{result.date || "Select a time"}</div>
            </div>
          </div>

          {/* Timezone Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-cyan-500" />
                {fromInfo.name}
              </h4>
              <p className="text-sm text-muted-foreground font-medium">{fromInfo.offset}</p>
              <p className="text-sm leading-relaxed">
                <span className="font-medium">Major cities:</span> {fromInfo.cities.join(", ")}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-indigo-500" />
                {toInfo.name}
              </h4>
              <p className="text-sm text-muted-foreground font-medium">{toInfo.offset}</p>
              <p className="text-sm leading-relaxed">
                <span className="font-medium">Major cities:</span> {toInfo.cities.join(", ")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
