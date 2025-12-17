"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { countWords, countCharacters, countSentences, countParagraphs, getReadingTime } from "@/lib/text-utils"

export function WordCounter() {
  const [text, setText] = useState("")

  const words = countWords(text || "")
  const charsWithSpaces = countCharacters(text || "", true)
  const charsWithoutSpaces = countCharacters(text || "", false)
  const sentences = countSentences(text || "")
  const paragraphs = countParagraphs(text || "")
  const readingTime = getReadingTime(text || "")

  const stats = [
    { label: "Words", value: words, color: "text-cyan-500" },
    { label: "Characters", value: charsWithSpaces, color: "text-indigo-500" },
    { label: "Characters (no spaces)", value: charsWithoutSpaces, color: "text-purple-500" },
    { label: "Sentences", value: sentences, color: "text-cyan-500" },
    { label: "Paragraphs", value: paragraphs, color: "text-indigo-500" },
    { label: "Reading Time", value: `${readingTime} min`, color: "text-purple-500" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here..."
            className="min-h-[300px] text-base leading-relaxed resize-none"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 text-center bg-gradient-to-br from-muted/30 to-muted/10">
            <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}
