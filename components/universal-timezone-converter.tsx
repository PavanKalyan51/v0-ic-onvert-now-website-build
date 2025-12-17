"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, ArrowRight, Calendar } from "lucide-react"
import { timezones, convertTimezone } from "@/lib/timezone-data"
import { ResultPanel } from "@/components/result-panel"

export function UniversalTimezoneConverter() {
  const [fromTimezone, setFromTimezone] = useState(timezones[0])
  const [toTimezone, setToTimezone] = useState(timezones[5])
  const [hour, setHour] = useState(9)
  const [minute, setMinute] = useState(0)
  const [period, setPeriod] = useState<"AM" | "PM">("AM")
  const [result, setResult] = useState<string>("")

  useEffect(() => {
    calculateConversion()
  }, [fromTimezone, toTimezone, hour, minute, period])

  const calculateConversion = () => {
    let hour24 = hour
    if (period === "PM" && hour !== 12) {
      hour24 = hour + 12
    } else if (period === "AM" && hour === 12) {
      hour24 = 0
    }

    const converted = convertTimezone(hour24, minute, fromTimezone.offset, toTimezone.offset)

    let resultHour = converted.hour
    let resultPeriod: "AM" | "PM" = "AM"

    if (resultHour === 0) {
      resultHour = 12
      resultPeriod = "AM"
    } else if (resultHour === 12) {
      resultPeriod = "PM"
    } else if (resultHour > 12) {
      resultHour = resultHour - 12
      resultPeriod = "PM"
    }

    const formattedMinute = String(converted.minute).padStart(2, "0")
    const dayNote = converted.nextDay ? " (+1 day)" : converted.prevDay ? " (-1 day)" : ""

    setResult(`${resultHour}:${formattedMinute} ${resultPeriod}${dayNote}`)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors">
        <div className="space-y-6">
          {/* From Timezone */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              <Clock className="w-4 h-4" />
              From Timezone
            </div>
            <div className="grid gap-4">
              <div>
                <Label className="text-base mb-2 block">Select Timezone</Label>
                <Select
                  value={fromTimezone.value}
                  onValueChange={(value) => {
                    const tz = timezones.find((t) => t.value === value)
                    if (tz) setFromTimezone(tz)
                  }}
                >
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label className="text-base mb-2 block">Hour</Label>
                  <Select value={hour.toString()} onValueChange={(v) => setHour(Number(v))}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                        <SelectItem key={h} value={h.toString()}>
                          {h}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base mb-2 block">Minute</Label>
                  <Select value={minute.toString()} onValueChange={(v) => setMinute(Number(v))}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                        <SelectItem key={m} value={m.toString()}>
                          {String(m).padStart(2, "0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base mb-2 block">AM/PM</Label>
                  <Select value={period} onValueChange={(v: "AM" | "PM") => setPeriod(v)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="PM">PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 p-3">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* To Timezone */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              <Clock className="w-4 h-4" />
              To Timezone
            </div>
            <div>
              <Label className="text-base mb-2 block">Select Timezone</Label>
              <Select
                value={toTimezone.value}
                onValueChange={(value) => {
                  const tz = timezones.find((t) => t.value === value)
                  if (tz) setToTimezone(tz)
                }}
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      {result && (
        <ResultPanel
          title="Converted Time"
          value={result}
          icon={Calendar}
          subtitle={`${fromTimezone.abbr} to ${toTimezone.abbr}`}
        />
      )}

      <Card className="p-6 bg-muted/50 border-dashed">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Quick Tip</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Select any two timezones to instantly convert times. Perfect for scheduling meetings across different time
              zones or planning international calls.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
