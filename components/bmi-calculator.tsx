"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResultPanel } from "@/components/result-panel"
import { calculateBMI } from "@/lib/calculator-utils"
import { Activity } from "lucide-react"

export function BMICalculator() {
  const [weightKg, setWeightKg] = useState(70)
  const [heightCm, setHeightCm] = useState(170)
  const [weightLbs, setWeightLbs] = useState(154)
  const [heightIn, setHeightIn] = useState(67)

  const validWeightKg = Math.max(1, Math.min(500, weightKg || 70))
  const validHeightCm = Math.max(1, Math.min(300, heightCm || 170))
  const validWeightLbs = Math.max(1, Math.min(1100, weightLbs || 154))
  const validHeightIn = Math.max(1, Math.min(120, heightIn || 67))

  const resultMetric = calculateBMI(validWeightKg, validHeightCm)
  const resultImperial = calculateBMI(validWeightLbs * 0.453592, validHeightIn * 2.54)

  const getBMIColor = (bmi: number) => {
    if (bmi < 18.5) return "text-blue-600 dark:text-blue-400"
    if (bmi < 25) return "text-green-600 dark:text-green-400"
    if (bmi < 30) return "text-orange-600 dark:text-orange-400"
    return "text-red-600 dark:text-red-400"
  }

  const getBMIBgColor = (bmi: number) => {
    if (bmi < 18.5)
      return "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800"
    if (bmi < 25)
      return "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800"
    if (bmi < 30)
      return "from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800"
    return "from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800"
  }

  return (
    <Card className="shadow-lg border-2">
      <CardContent className="pt-6">
        <Tabs defaultValue="metric" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
            <TabsTrigger value="metric" className="text-base">
              Metric (kg/cm)
            </TabsTrigger>
            <TabsTrigger value="imperial" className="text-base">
              Imperial (lbs/in)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="metric" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="weight-kg" className="text-base font-semibold">
                  Weight (kg)
                </Label>
                <Input
                  id="weight-kg"
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value) || 0)}
                  placeholder="70"
                  className="text-lg h-12"
                  min="1"
                  max="500"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="height-cm" className="text-base font-semibold">
                  Height (cm)
                </Label>
                <Input
                  id="height-cm"
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                  placeholder="170"
                  className="text-lg h-12"
                  min="1"
                  max="300"
                />
              </div>
            </div>
            <ResultPanel
              result={<span className={getBMIColor(resultMetric.bmi)}>{resultMetric.bmi}</span>}
              label="Your BMI"
              sublabel={`${resultMetric.category} - ${resultMetric.healthy}`}
              icon={Activity}
            />
          </TabsContent>

          <TabsContent value="imperial" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="weight-lbs" className="text-base font-semibold">
                  Weight (lbs)
                </Label>
                <Input
                  id="weight-lbs"
                  type="number"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(Number(e.target.value) || 0)}
                  placeholder="154"
                  className="text-lg h-12"
                  min="1"
                  max="1100"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="height-in" className="text-base font-semibold">
                  Height (inches)
                </Label>
                <Input
                  id="height-in"
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(Number(e.target.value) || 0)}
                  placeholder="67"
                  className="text-lg h-12"
                  min="1"
                  max="120"
                />
              </div>
            </div>
            <ResultPanel
              result={<span className={getBMIColor(resultImperial.bmi)}>{resultImperial.bmi}</span>}
              label="Your BMI"
              sublabel={`${resultImperial.category} - ${resultImperial.healthy}`}
              icon={Activity}
            />
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-6 bg-muted/50 rounded-xl">
          <h3 className="font-bold text-lg mb-4">BMI Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-2 border-blue-200 dark:border-blue-800">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">&lt; 18.5</span>
              <div className="text-blue-700 dark:text-blue-300 font-medium mt-1">Underweight</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-2 border-green-200 dark:border-green-800">
              <span className="text-green-600 dark:text-green-400 font-bold text-lg">18.5 - 24.9</span>
              <div className="text-green-700 dark:text-green-300 font-medium mt-1">Normal</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-2 border-orange-200 dark:border-orange-800">
              <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">25 - 29.9</span>
              <div className="text-orange-700 dark:text-orange-300 font-medium mt-1">Overweight</div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-2 border-red-200 dark:border-red-800">
              <span className="text-red-600 dark:text-red-400 font-bold text-lg">≥ 30</span>
              <div className="text-red-700 dark:text-red-300 font-medium mt-1">Obese</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
