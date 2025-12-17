"use client"

import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ToolCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export function ToolCard({ title, description, href, icon: Icon }: ToolCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
        <Card className="h-full transition-all hover:shadow-xl hover:border-primary/50 hover:bg-gradient-to-br hover:from-background hover:to-muted/30">
          <CardHeader className="p-5 md:p-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:shadow-xl"
            >
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.div>
            <CardTitle className="text-base md:text-lg group-hover:gradient-text transition-all text-balance">
              {title}
            </CardTitle>
            <CardDescription className="text-sm md:text-base leading-relaxed text-pretty">
              {description}
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  )
}
