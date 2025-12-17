import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { FAQSection } from "@/components/faq-section"
import { SEOContent } from "@/components/seo-content"
import { DateDifferenceCalculator } from "@/components/date-difference-calculator"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Date Difference Calculator - Calculate Days Between Two Dates",
  description:
    "Calculate the exact difference between two dates in years, months, weeks, and days. Free date difference calculator with detailed breakdown.",
  keywords: ["date difference", "days between dates", "date calculator", "date counter", "calculate days"],
}

export default function DateDifferencePage() {
  const faqs = [
    {
      question: "How do you calculate the difference between two dates?",
      answer:
        "To calculate the date difference, we subtract the earlier date from the later date and break down the result into years, months, weeks, and days. Our calculator handles leap years and different month lengths automatically.",
    },
    {
      question: "Does this calculator include both start and end dates?",
      answer:
        "The calculator counts from the start date up to but not including the end date. If you want to include both dates, the result will be one day more than displayed.",
    },
    {
      question: "Can I calculate negative date differences?",
      answer:
        "Yes, you can enter dates in any order. The calculator will always show the absolute difference between the two dates.",
    },
    {
      question: "How accurate is the date difference calculator?",
      answer:
        "Our calculator is 100% accurate and accounts for leap years, different month lengths, and time zones. It uses precise date arithmetic to ensure reliable results.",
    },
    {
      question: "What is the maximum date range I can calculate?",
      answer:
        "You can calculate differences between any two dates, whether they are days, years, or even centuries apart. There are no limits on the date range.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Date Tools", href: "/tools/date" },
            { label: "Date Difference", href: "/tools/date/date-difference" },
          ]}
        />

        <ToolHeader
          icon={Calendar}
          title="Date Difference Calculator"
          description="Calculate the exact difference between two dates in years, months, weeks, and days"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <DateDifferenceCalculator />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent
            title="About Date Difference Calculator"
            content="Our date difference calculator helps you find the exact time between two dates. Whether you're planning an event, tracking a project timeline, or calculating your age, this tool provides instant and accurate results. The calculator shows the difference in multiple formats including years, months, weeks, days, hours, and minutes."
          />

          <SEOContent
            title="How to Use the Date Difference Calculator"
            content="Simply select your start date and end date using the date pickers. The calculator will instantly show you the difference in various time units. You can see the breakdown in years, months, and days, as well as the total number of days, weeks, and hours between the dates."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("date", "/tools/date/date-difference")} />
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Date Difference Calculator",
            description: "Calculate the difference between two dates",
            applicationCategory: "UtilityApplication",
          }),
        }}
      />
    </div>
  )
}
