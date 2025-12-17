"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign } from "lucide-react"
import { ResultPanel } from "@/components/result-panel"

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000")
  const [rate, setRate] = useState("7")
  const [time, setTime] = useState("5")
  const [frequency, setFrequency] = useState("12")
  const [result, setResult] = useState<{ amount: number; interest: number } | null>(null)

  const calculate = () => {
    const p = Number.parseFloat(principal) || 0
    const r = Number.parseFloat(rate) / 100 || 0
    const t = Number.parseFloat(time) || 0
    const n = Number.parseInt(frequency) || 12

    const amount = p * Math.pow(1 + r / n, n * t)
    const interest = amount - p

    setResult({ amount, interest })
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="principal" className="text-base font-medium">
                Principal Amount ($)
              </Label>
              <Input
                id="principal"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="10000"
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rate" className="text-base font-medium">
                Annual Interest Rate (%)
              </Label>
              <Input
                id="rate"
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="7"
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-base font-medium">
                Time Period (Years)
              </Label>
              <Input
                id="time"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="5"
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="frequency" className="text-base font-medium">
                Compound Frequency
              </Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Annually</SelectItem>
                  <SelectItem value="4">Quarterly</SelectItem>
                  <SelectItem value="12">Monthly</SelectItem>
                  <SelectItem value="365">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={calculate} className="w-full h-12 text-base" size="lg">
            <TrendingUp className="w-5 h-5 mr-2" />
            Calculate Compound Interest
          </Button>
        </div>
      </Card>

      {result && (
        <div className="grid md:grid-cols-2 gap-4">
          <ResultPanel
            title="Final Amount"
            value={`$${result.amount.toFixed(2)}`}
            icon={DollarSign}
            subtitle="Principal + Interest"
          />
          <ResultPanel
            title="Total Interest"
            value={`$${result.interest.toFixed(2)}`}
            icon={TrendingUp}
            subtitle="Interest Earned"
          />
        </div>
      )}

      <Card className="p-6 bg-muted/50 border-dashed">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium">About Compound Interest</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compound interest is calculated on the initial principal and accumulated interest from previous periods.
              The more frequently interest compounds, the faster your investment grows.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
