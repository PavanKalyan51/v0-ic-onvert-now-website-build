"use client"

import type React from "react"
import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface ResultPanelProps {
  result: string | React.ReactNode
  label?: string
  sublabel?: string
  icon?: LucideIcon
}

export function ResultPanel({ result, label = "Result", sublabel, icon: Icon }: ResultPanelProps) {
  const IconComponent = Icon || CheckCircle2

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="p-8 bg-gradient-to-br from-cyan-50/50 via-indigo-50/50 to-purple-50/50 dark:from-cyan-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border-2 border-primary/20 shadow-xl">
        <div className="flex items-start gap-4">
          <IconComponent className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-sm font-semibold text-muted-foreground mb-3">{label}</div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{result}</div>
            {sublabel && <div className="text-base text-muted-foreground font-medium">{sublabel}</div>}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
