"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Layers, Copy, Check } from "lucide-react"

export function RemoveDuplicateLines() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [copied, setCopied] = useState(false)

  const removeDuplicates = () => {
    const lines = inputText.split("\n")
    const uniqueLines = Array.from(new Set(lines))
    setOutputText(uniqueLines.join("\n"))
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const clear = () => {
    setInputText("")
    setOutputText("")
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input" className="text-base font-medium">
              Input Text (One line per entry)
            </Label>
            <Textarea
              id="input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text with duplicate lines..."
              className="min-h-[200px] resize-none text-base font-mono"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={removeDuplicates} className="flex-1 h-12 text-base" size="lg">
              <Layers className="w-5 h-5 mr-2" />
              Remove Duplicates
            </Button>
            <Button onClick={clear} variant="outline" className="h-12 text-base bg-transparent">
              Clear
            </Button>
          </div>
        </div>
      </Card>

      {outputText && (
        <Card className="p-6 md:p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Result (Unique Lines)</Label>
              <Button onClick={copyToClipboard} variant="outline" size="sm">
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <Textarea
              value={outputText}
              readOnly
              className="min-h-[200px] resize-none text-base font-mono bg-background"
            />
          </div>
        </Card>
      )}

      <Card className="p-6 bg-muted/50 border-dashed">
        <div className="flex items-start gap-3">
          <Layers className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium">How it works</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This tool removes all duplicate lines from your text, keeping only unique entries. Perfect for cleaning up
              lists, removing redundant data, or processing text files.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
