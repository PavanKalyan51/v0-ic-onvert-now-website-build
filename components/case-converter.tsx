"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { convertCase } from "@/lib/text-utils"
import { Copy, Check } from "lucide-react"

export function CaseConverter() {
  const [text, setText] = useState("")
  const [copied, setCopied] = useState(false)

  const cases = [
    { label: "UPPERCASE", value: "upper" as const },
    { label: "lowercase", value: "lower" as const },
    { label: "Title Case", value: "title" as const },
    { label: "Sentence case", value: "sentence" as const },
    { label: "camelCase", value: "camel" as const },
    { label: "snake_case", value: "snake" as const },
  ]

  const handleConvert = (caseType: "upper" | "lower" | "title" | "sentence" | "camel" | "snake") => {
    if (!text) return
    setText(convertCase(text, caseType))
    setCopied(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Your Text</label>
            <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <Textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              setCopied(false)
            }}
            placeholder="Enter or paste your text here..."
            className="min-h-[200px] text-base leading-relaxed"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cases.map((c) => (
            <Button
              key={c.value}
              variant="outline"
              onClick={() => handleConvert(c.value)}
              className="h-auto py-3 font-mono hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 dark:hover:from-cyan-950 dark:hover:to-purple-950 hover:border-primary transition-all"
            >
              {c.label}
            </Button>
          ))}
        </div>

        {text && (
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Character count</div>
            <div className="text-2xl font-bold text-primary">{text.length}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
