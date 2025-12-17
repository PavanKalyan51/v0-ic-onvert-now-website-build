import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { Percent, DollarSign, Activity, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Online Calculators - Financial and General Calculators | iConvertNow",
  description:
    "Free online calculators including percentage, EMI, BMI, and compound interest calculators. Fast, accurate, and easy to use.",
}

export default function CalculatorToolsPage() {
  const tools = [
    {
      title: "Percentage Calculator",
      description: "Calculate percentages, percentage changes, and increase/decrease instantly",
      href: "/tools/calculator/percentage",
      icon: Percent,
    },
    {
      title: "EMI Calculator",
      description: "Calculate loan EMI, total interest, and complete payment schedule",
      href: "/tools/calculator/emi",
      icon: DollarSign,
    },
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and get your health category instantly",
      href: "/tools/calculator/bmi",
      icon: Activity,
    },
    {
      title: "Compound Interest Calculator",
      description: "Calculate investment returns with compound interest over time",
      href: "/tools/calculator/compound-interest",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text text-balance">
              Online Calculators
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Free online calculators for financial planning, health metrics, and everyday calculations with instant
              results.
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
