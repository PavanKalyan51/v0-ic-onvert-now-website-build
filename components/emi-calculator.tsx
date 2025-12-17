"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { ResultPanel } from "@/components/result-panel"
import { calculateEMI } from "@/lib/calculator-utils"
import { IndianRupee } from "lucide-react"

export function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(240) // months

  const validPrincipal = Math.max(10000, principal)
  const validRate = Math.max(0.1, Math.min(30, rate))
  const validTenure = Math.max(12, Math.min(360, tenure))

  const result = calculateEMI(validPrincipal, validRate, validTenure)

  return (
    <Card className="shadow-lg border-2">
      <CardContent className="pt-6 space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Loan Amount (₹)</Label>
              <Input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Math.max(10000, Number(e.target.value) || 10000))}
                className="w-40 text-right text-lg font-mono h-12"
                min="10000"
                step="10000"
              />
            </div>
            <Slider
              value={[principal]}
              onValueChange={([v]) => setPrincipal(v)}
              min={100000}
              max={10000000}
              step={50000}
              className="py-4"
            />
            <div className="text-sm text-muted-foreground text-right font-semibold">
              ₹ {principal.toLocaleString("en-IN")}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Interest Rate (% per year)</Label>
              <Input
                type="number"
                value={rate}
                onChange={(e) => setRate(Math.max(0.1, Math.min(30, Number(e.target.value) || 0.1)))}
                className="w-40 text-right text-lg font-mono h-12"
                step="0.1"
                min="0.1"
                max="30"
              />
            </div>
            <Slider value={[rate]} onValueChange={([v]) => setRate(v)} min={1} max={20} step={0.1} className="py-4" />
            <div className="text-sm text-muted-foreground text-right font-semibold">{rate.toFixed(1)}% per annum</div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Loan Tenure (months)</Label>
              <Input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Math.max(12, Math.min(360, Number(e.target.value) || 12)))}
                className="w-40 text-right text-lg font-mono h-12"
                min="12"
                max="360"
                step="12"
              />
            </div>
            <Slider
              value={[tenure]}
              onValueChange={([v]) => setTenure(v)}
              min={12}
              max={360}
              step={12}
              className="py-4"
            />
            <div className="text-sm text-muted-foreground text-right font-semibold">
              {tenure} months ({(tenure / 12).toFixed(1)} years)
            </div>
          </div>
        </div>

        <ResultPanel
          result={`₹${result.emi.toLocaleString("en-IN")}`}
          label="Monthly EMI"
          sublabel="Equated Monthly Installment"
          icon={IndianRupee}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-2 border-cyan-200 dark:border-cyan-800">
            <div className="text-sm text-cyan-700 dark:text-cyan-300 font-semibold mb-2">Principal Amount</div>
            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
              ₹{result.principal.toLocaleString("en-IN")}
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-2 border-indigo-200 dark:border-indigo-800">
            <div className="text-sm text-indigo-700 dark:text-indigo-300 font-semibold mb-2">Total Interest</div>
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ₹{result.totalInterest.toLocaleString("en-IN")}
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-2 border-purple-200 dark:border-purple-800">
            <div className="text-sm text-purple-700 dark:text-purple-300 font-semibold mb-2">Total Payment</div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              ₹{result.totalAmount.toLocaleString("en-IN")}
            </div>
          </Card>
        </div>

        <div className="p-4 bg-muted/50 rounded-xl">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> This is an approximate calculation. Actual EMI
            may vary based on the lender's terms and conditions.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
