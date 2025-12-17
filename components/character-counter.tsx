"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Type } from "lucide-react"

export function CharacterCounter() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    letters: 0,
    digits: 0,
    spaces: 0,
    punctuation: 0,
  })

  useEffect(() => {
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, "").length
    const letters = (text.match(/[a-zA-Z]/g) || []).length
    const digits = (text.match(/\d/g) || []).length
    const spaces = (text.match(/\s/g) || []).length
    const punctuation = (text.match(/[^\w\s]|_/g) || []).length

    setStats({
      characters,
      charactersNoSpaces,
      letters,
      digits,
      spaces,
      punctuation,
    })
  }, [text])

  return (
    <div className="space-y-6">
      <Card className="p-6 md:p-8 border-2 hover:border-primary/50 transition-colors">
        <div className="space-y-4">
          <Label htmlFor="text" className="text-base font-medium">
            Enter or Paste Your Text
          </Label>
          <Textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here..."
            className="min-h-[250px] resize-none text-base leading-relaxed"
          />
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="p-5 bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-950 dark:to-indigo-950 border-2 border-cyan-200 dark:border-cyan-800">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Characters</p>
            <p className="text-3xl font-bold gradient-text">{stats.characters}</p>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-2 border-indigo-200 dark:border-indigo-800">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Without Spaces</p>
            <p className="text-3xl font-bold gradient-text">{stats.charactersNoSpaces}</p>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Letters</p>
            <p className="text-3xl font-bold gradient-text">{stats.letters}</p>
          </div>
        </Card>

        <Card className="p-5 border-2">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Digits</p>
            <p className="text-2xl font-bold">{stats.digits}</p>
          </div>
        </Card>

        <Card className="p-5 border-2">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Spaces</p>
            <p className="text-2xl font-bold">{stats.spaces}</p>
          </div>
        </Card>

        <Card className="p-5 border-2">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Punctuation</p>
            <p className="text-2xl font-bold">{stats.punctuation}</p>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-muted/50 border-dashed">
        <div className="flex items-start gap-3">
          <Type className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium">About Character Counter</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Count characters, letters, digits, and more in real-time. Perfect for checking character limits for social
              media posts, essays, or any text content.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
