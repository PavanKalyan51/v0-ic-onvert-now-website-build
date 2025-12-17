import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { Calendar, Clock, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Date Tools - Date Calculators and Converters | iConvertNow",
  description:
    "Free date tools including date difference calculator, age calculator, business days calculator, and more. Accurate and easy to use.",
}

export default function DateToolsPage() {
  const tools = [
    {
      title: "Date Difference Calculator",
      description: "Calculate the exact difference between two dates in years, months, and days",
      href: "/tools/date/date-difference",
      icon: Calendar,
    },
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, days, and even hours",
      href: "/tools/date/age-calculator",
      icon: Clock,
    },
    {
      title: "Business Days Calculator",
      description: "Calculate working days between dates excluding weekends",
      href: "/tools/date/business-days",
      icon: Briefcase,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text text-balance">
              Date Tools
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Powerful date calculators for all your needs. Calculate date differences, age, business days, and more
              with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
