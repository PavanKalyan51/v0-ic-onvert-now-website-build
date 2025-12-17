"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface RelatedTool {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

interface RelatedToolsProps {
  tools: RelatedTool[]
  title?: string
}

export function RelatedTools({ tools, title = "Related Tools" }: RelatedToolsProps) {
  if (tools.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 border-t pt-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={tool.href} className="group block h-full">
              <Card className="p-5 h-full transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 text-white shrink-0">
                    <tool.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors flex items-center gap-1">
                      {tool.title}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
