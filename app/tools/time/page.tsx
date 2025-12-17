import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { Clock, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Time & Timezone Tools - Convert Any Timezone | iConvertNow",
  description:
    "Free timezone converters and time tools. Convert PST to IST, EST to IST, GMT to IST, and any timezone combination instantly and accurately.",
  keywords: ["timezone converter", "time converter", "world clock", "time zones", "PST to IST", "EST to IST"],
}

export default function TimeToolsPage() {
  const tools = [
    {
      title: "Universal Timezone Converter",
      description: "Convert time between any timezones in the world with support for 100+ timezones",
      href: "/tools/time/timezone-converter",
      icon: Globe,
    },
    {
      title: "PST to IST Converter",
      description: "Convert Pacific Standard Time to India Standard Time with AM/PM format",
      href: "/tools/time/pst-to-ist",
      icon: Clock,
    },
    {
      title: "EST to IST Converter",
      description: "Convert Eastern Standard Time to India Standard Time instantly",
      href: "/tools/time/est-to-ist",
      icon: Clock,
    },
    {
      title: "GMT to IST Converter",
      description: "Convert Greenwich Mean Time to India Standard Time accurately",
      href: "/tools/time/gmt-to-ist",
      icon: Clock,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text text-balance">
              Time & Timezone Tools
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Convert between timezones instantly and accurately. Perfect for scheduling meetings, coordinating with
              remote teams, and planning travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
