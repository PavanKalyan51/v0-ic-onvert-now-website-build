import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { FAQSection } from "@/components/faq-section"
import { SEOContent } from "@/components/seo-content"
import { AgeCalculator } from "@/components/age-calculator"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { Cake } from "lucide-react"

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Your Exact Age in Years, Months, Days",
  description:
    "Free age calculator to find your exact age in years, months, weeks, and days. Calculate age from birth date with precision.",
  keywords: ["age calculator", "calculate age", "how old am I", "age in days", "birth date calculator"],
}

export default function AgeCalculatorPage() {
  const faqs = [
    {
      question: "How is age calculated?",
      answer:
        "Age is calculated by finding the difference between your birth date and the current date. We break it down into years, months, and days, accounting for leap years and varying month lengths.",
    },
    {
      question: "Why does my age in days seem high?",
      answer:
        "Your age in days includes every single day you've been alive, which can quickly add up to tens of thousands of days. For example, a 25-year-old has lived approximately 9,125 days.",
    },
    {
      question: "Does this work for future dates?",
      answer: "Yes! You can calculate how many days until a future birthday or event by entering a date in the future.",
    },
    {
      question: "How accurate is the age calculator?",
      answer:
        "Our age calculator is 100% accurate and accounts for leap years, different month lengths, and all calendar variations. It provides exact age down to the day.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Date Tools", href: "/tools/date" },
            { label: "Age Calculator", href: "/tools/date/age-calculator" },
          ]}
        />

        <ToolHeader
          icon={Cake}
          title="Age Calculator"
          description="Calculate your exact age in years, months, weeks, and days from your birth date"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <AgeCalculator />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent
            title="About Age Calculator"
            content="Our age calculator helps you find your exact age from your birth date. Get detailed breakdowns in years, months, weeks, days, hours, and even minutes. Perfect for knowing exactly how old you are or calculating time until a future date."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("date", "/tools/date/age-calculator")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
