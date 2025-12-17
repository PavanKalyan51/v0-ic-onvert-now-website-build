import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { FAQSection } from "@/components/faq-section"
import { SEOContent } from "@/components/seo-content"
import { PercentageCalculator } from "@/components/percentage-calculator"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Percentage Calculator - Calculate Percentages Instantly",
  description:
    "Free percentage calculator to find percentages, percentage increase/decrease, and percentage of a number. Fast, accurate, and easy to use.",
  keywords: ["percentage calculator", "calculate percentage", "percent", "percentage increase", "percentage of"],
}

export default function PercentageCalculatorPage() {
  const faqs = [
    {
      question: "How do you calculate a percentage of a number?",
      answer:
        "To calculate a percentage of a number, multiply the number by the percentage and divide by 100. For example, 20% of 150 is (150 × 20) / 100 = 30.",
    },
    {
      question: "How do you calculate percentage increase?",
      answer:
        "Percentage increase = ((New Value - Old Value) / Old Value) × 100. For example, if a value increases from 50 to 75, the percentage increase is ((75-50)/50) × 100 = 50%.",
    },
    {
      question: "What is the difference between percentage and percentile?",
      answer:
        "A percentage is a number out of 100, while a percentile represents a position in a dataset. For example, the 90th percentile means 90% of values are below that point.",
    },
    {
      question: "Can percentages be more than 100%?",
      answer:
        "Yes, percentages can exceed 100%. This is common when calculating percentage increases. For example, if something doubles, it has increased by 100%.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Calculators", href: "/tools/calculator" },
            { label: "Percentage Calculator", href: "/tools/calculator/percentage" },
          ]}
        />

        <ToolHeader
          icon={Calculator}
          title="Percentage Calculator"
          description="Calculate percentages, percentage increases, and percentage of numbers instantly"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <PercentageCalculator />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent
            title="About Percentage Calculator"
            content="Our percentage calculator makes it easy to calculate any percentage-related values. Whether you need to find what percentage one number is of another, calculate a percentage of a number, or determine percentage increase or decrease, this tool provides instant and accurate results."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("calculator", "/tools/calculator/percentage")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
