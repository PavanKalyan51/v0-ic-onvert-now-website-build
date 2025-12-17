"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Briefcase } from "lucide-react"
import { ResultPanel } from "@/components/result-panel"

export function BusinessDaysCalculator() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateBusinessDays = () => {
    if (!startDate || !endDate) return

    const start = new Date(startDate)
    const end = new Date(endDate)
    let count = 0
    const current = new Date(start)

    while (current <= end) {
      const dayOfWeek = current.getDay()
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++
      }
      current.setDate(current.getDate() + 1)
    }

    setResult(count)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-base font-medium">
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate" className="text-base font-medium">
                End Date
              </Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-12 text-base"
              />
            </div>
          </div>

          <Button onClick={calculateBusinessDays} className="w-full h-12 text-base" size="lg">
            <Briefcase className="w-5 h-5 mr-2" />
            Calculate Business Days
          </Button>
        </div>
      </Card>

      {result !== null && (
        <ResultPanel
          title="Business Days"
          value={`${result} days`}
          icon={Calendar}
          subtitle="Excluding weekends (Saturday & Sunday)"
        />
      )}

      <Card className="p-6 bg-muted/50 border-dashed">
        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium">About Business Days</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Business days calculator counts weekdays only (Monday to Friday), excluding weekends. Perfect for project
              planning, delivery estimates, and deadline calculations.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
