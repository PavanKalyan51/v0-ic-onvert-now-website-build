"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResultPanel } from "@/components/result-panel"
import { calculatePercentage, calculatePercentageOf, calculatePercentageIncrease } from "@/lib/calculator-utils"
import { Percent } from "lucide-react"

export function PercentageCalculator() {
  const [value1, setValue1] = useState("100")
  const [percent1, setPercent1] = useState("20")

  const [part, setPart] = useState("25")
  const [whole, setWhole] = useState("200")

  const [oldValue, setOldValue] = useState("100")
  const [newValue, setNewValue] = useState("150")

  const result1 = calculatePercentage(Number(value1) || 0, Number(percent1) || 0)
  const result2 = calculatePercentageOf(Number(part) || 0, Number(whole) || 1)
  const result3 = calculatePercentageIncrease(Number(oldValue) || 1, Number(newValue) || 0)

  return (
    <Card className="shadow-lg border-2">
      <CardContent className="pt-6">
        <Tabs defaultValue="of" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="of" className="text-sm md:text-base">
              % of Number
            </TabsTrigger>
            <TabsTrigger value="is" className="text-sm md:text-base">
              What % is
            </TabsTrigger>
            <TabsTrigger value="change" className="text-sm md:text-base">
              % Change
            </TabsTrigger>
          </TabsList>

          <TabsContent value="of" className="space-y-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="percent1" className="text-base font-semibold">
                  Percentage (%)
                </Label>
                <Input
                  id="percent1"
                  type="number"
                  value={percent1}
                  onChange={(e) => setPercent1(e.target.value)}
                  placeholder="20"
                  className="text-lg h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="value1" className="text-base font-semibold">
                  Of Number
                </Label>
                <Input
                  id="value1"
                  type="number"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder="100"
                  className="text-lg h-12"
                />
              </div>
            </div>
            <ResultPanel
              result={result1.toFixed(2)}
              sublabel={`${percent1}% of ${value1} = ${result1.toFixed(2)}`}
              icon={Percent}
            />
          </TabsContent>

          <TabsContent value="is" className="space-y-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="part" className="text-base font-semibold">
                  This Number
                </Label>
                <Input
                  id="part"
                  type="number"
                  value={part}
                  onChange={(e) => setPart(e.target.value)}
                  placeholder="25"
                  className="text-lg h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="whole" className="text-base font-semibold">
                  Out of Total
                </Label>
                <Input
                  id="whole"
                  type="number"
                  value={whole}
                  onChange={(e) => setWhole(e.target.value)}
                  placeholder="200"
                  className="text-lg h-12"
                />
              </div>
            </div>
            <ResultPanel
              result={`${result2.toFixed(2)}%`}
              sublabel={`${part} is ${result2.toFixed(2)}% of ${whole}`}
              icon={Percent}
            />
          </TabsContent>

          <TabsContent value="change" className="space-y-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="oldValue" className="text-base font-semibold">
                  Old Value
                </Label>
                <Input
                  id="oldValue"
                  type="number"
                  value={oldValue}
                  onChange={(e) => setOldValue(e.target.value)}
                  placeholder="100"
                  className="text-lg h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="newValue" className="text-base font-semibold">
                  New Value
                </Label>
                <Input
                  id="newValue"
                  type="number"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder="150"
                  className="text-lg h-12"
                />
              </div>
            </div>
            <ResultPanel
              result={`${result3 > 0 ? "+" : ""}${result3.toFixed(2)}%`}
              sublabel={`${result3 > 0 ? "Increase" : result3 < 0 ? "Decrease" : "No change"} from ${oldValue} to ${newValue}`}
              icon={Percent}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
