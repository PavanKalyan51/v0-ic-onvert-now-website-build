"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { GitCompare, CheckCircle2, XCircle } from "lucide-react"

export function TextComparison() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [differences, setDifferences] = useState<string[]>([])
  const [isIdentical, setIsIdentical] = useState<boolean | null>(null)

  const compareTexts = () => {
    if (text1 === text2) {
      setIsIdentical(true)
      setDifferences([])
      return
    }

    setIsIdentical(false)
    const lines1 = text1.split("\n")
    const lines2 = text2.split("\n")
    const maxLines = Math.max(lines1.length, lines2.length)
    const diffs: string[] = []

    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || ""
      const line2 = lines2[i] || ""
      if (line1 !== line2) {
        diffs.push(`Line ${i + 1}: Different`)
      }
    }

    setDifferences(diffs)
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
          <div className="space-y-3">
            <Label className="text-base font-medium">Text 1</Label>
            <Textarea
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Paste your first text here..."
              className="min-h-[200px] resize-none text-base"
            />
          </div>
        </Card>

        <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
          <div className="space-y-3">
            <Label className="text-base font-medium">Text 2</Label>
            <Textarea
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Paste your second text here..."
              className="min-h-[200px] resize-none text-base"
            />
          </div>
        </Card>
      </div>

      <Button onClick={compareTexts} className="w-full h-12 text-base" size="lg">
        <GitCompare className="w-5 h-5 mr-2" />
        Compare Texts
      </Button>

      {isIdentical !== null && (
        <Card className={`p-6 ${isIdentical ? "bg-green-50 dark:bg-green-950" : "bg-amber-50 dark:bg-amber-950"}`}>
          <div className="flex items-center gap-3">
            {isIdentical ? (
              <>
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100">Texts are identical</p>
                  <p className="text-sm text-green-700 dark:text-green-300">No differences found</p>
                </div>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-semibold text-amber-900 dark:text-amber-100">
                    Found {differences.length} difference{differences.length !== 1 ? "s" : ""}
                  </p>
                  <div className="text-sm text-amber-700 dark:text-amber-300 mt-2 space-y-1">
                    {differences.slice(0, 5).map((diff, i) => (
                      <div key={i}>{diff}</div>
                    ))}
                    {differences.length > 5 && <div>...and {differences.length - 5} more</div>}
                  </div>
                </div>
              </>
            )}
          </div>
        </Card>
      )}

      <Card className="p-6 bg-muted/50 border-dashed">
        <div className="flex items-start gap-3">
          <GitCompare className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium">How it works</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This tool compares two texts line by line and highlights differences. Perfect for checking document
              revisions, comparing versions, or finding changes between texts.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
