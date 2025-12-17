"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ResultPanel } from "@/components/result-panel"
import { calculateDateDifference } from "@/lib/date-utils"
import { Calendar, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DateDifferenceCalculator() {
  const today = new Date().toISOString().split("T")[0]
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)

  const setToday = (setter: (date: string) => void) => {
    setter(new Date().toISOString().split("T")[0])
  }

  const start = new Date(startDate)
  const end = new Date(endDate)

  // Validate dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return <div>Please select valid dates</div>
  }

  const diff = calculateDateDifference(start, end)

  return (
    <Card className="shadow-lg border-2">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <Label htmlFor="start-date" className="flex items-center gap-2 text-base font-semibold">
              <Calendar className="w-5 h-5 text-cyan-500" />
              Start Date
            </Label>
            <div className="flex gap-2">
              <Input
                id="start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="text-lg h-12"
                max={new Date().toISOString().split("T")[0]}
              />
              <Button variant="outline" size="sm" onClick={() => setToday(setStartDate)} className="whitespace-nowrap">
                Today
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="end-date" className="flex items-center gap-2 text-base font-semibold">
              <Calendar className="w-5 h-5 text-indigo-500" />
              End Date
            </Label>
            <div className="flex gap-2">
              <Input
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="text-lg h-12"
                max={new Date().toISOString().split("T")[0]}
              />
              <Button variant="outline" size="sm" onClick={() => setToday(setEndDate)} className="whitespace-nowrap">
                Today
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <ResultPanel
            result={`${diff.years} years, ${diff.months} months, ${diff.days} days`}
            label="Time Difference"
            icon={TrendingUp}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-5 text-center bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{diff.totalDays}</div>
              <div className="text-sm text-cyan-700 dark:text-cyan-300 font-medium mt-1">Total Days</div>
            </Card>
            <Card className="p-5 text-center bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{diff.weeks}</div>
              <div className="text-sm text-indigo-700 dark:text-indigo-300 font-medium mt-1">Weeks</div>
            </Card>
            <Card className="p-5 text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {diff.hours.toLocaleString()}
              </div>
              <div className="text-sm text-purple-700 dark:text-purple-300 font-medium mt-1">Hours</div>
            </Card>
            <Card className="p-5 text-center bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-2 border-pink-200 dark:border-pink-800">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">{diff.minutes.toLocaleString()}</div>
              <div className="text-sm text-pink-700 dark:text-pink-300 font-medium mt-1">Minutes</div>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
