"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ResultPanel } from "@/components/result-panel"
import { calculateAge } from "@/lib/date-utils"
import { Cake, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("2000-01-01")

  const birth = new Date(birthDate)
  if (isNaN(birth.getTime())) {
    return <div>Please select a valid birth date</div>
  }

  const age = calculateAge(birth)

  const setToday = () => {
    setBirthDate(new Date().toISOString().split("T")[0])
  }

  return (
    <Card className="shadow-lg border-2">
      <CardContent className="pt-6 space-y-8">
        <div className="space-y-3">
          <Label htmlFor="birth-date" className="flex items-center gap-2 text-lg font-bold">
            <Calendar className="w-6 h-6 text-primary" />
            Your Birth Date
          </Label>
          <div className="flex gap-2">
            <Input
              id="birth-date"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="text-lg h-14 font-mono"
              max={new Date().toISOString().split("T")[0]}
            />
            <Button variant="outline" size="lg" onClick={setToday} className="whitespace-nowrap px-6 bg-transparent">
              Today
            </Button>
          </div>
        </div>

        <ResultPanel
          result={`${age.years} years, ${age.months} months, ${age.days} days`}
          label="Your Current Age"
          icon={Cake}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-2 border-cyan-200 dark:border-cyan-800">
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{age.years}</div>
            <div className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">Years</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-2 border-indigo-200 dark:border-indigo-800">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
              {age.totalDays.toLocaleString()}
            </div>
            <div className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">Total Days</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-2 border-purple-200 dark:border-purple-800">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">{age.weeks}</div>
            <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">Weeks</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-2 border-pink-200 dark:border-pink-800">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-1">{age.hours.toLocaleString()}</div>
            <div className="text-sm text-pink-600 dark:text-pink-400 font-semibold">Hours</div>
          </Card>
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-cyan-50 via-indigo-50 to-purple-50 dark:from-cyan-950/50 dark:via-indigo-950/50 dark:to-purple-950/50 rounded-xl border-2 border-primary/20">
          <p className="text-lg leading-relaxed">
            <span className="gradient-text font-bold text-xl">🎉 Amazing!</span>
            <br />
            You have lived for approximately{" "}
            <span className="font-bold text-xl gradient-text">{age.minutes.toLocaleString()}</span> minutes!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
