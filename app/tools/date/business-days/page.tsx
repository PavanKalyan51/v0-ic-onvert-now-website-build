import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BusinessDaysCalculator } from "@/components/business-days-calculator"
import { ToolHeader } from "@/components/tool-header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Business Days Calculator - Count Working Days Between Dates | iConvertNow",
  description:
    "Calculate business days between two dates excluding weekends. Perfect for project planning and deadline estimation.",
}

export default function BusinessDaysPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Date Tools", href: "/tools/date" },
    { label: "Business Days Calculator" },
  ]

  const faqs = [
    {
      question: "What are business days?",
      answer:
        "Business days are weekdays (Monday through Friday) excluding weekends (Saturday and Sunday). They represent typical working days in most countries.",
    },
    {
      question: "Does this calculator account for holidays?",
      answer:
        "This calculator counts all weekdays and excludes weekends. It does not account for public holidays as these vary by country and region.",
    },
    {
      question: "How is the calculation done?",
      answer:
        "The calculator counts each day between the start and end dates, excluding Saturdays and Sundays, to give you the total number of business days.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <BreadcrumbNav items={breadcrumbs} />

          <ToolHeader
            title="Business Days Calculator"
            description="Calculate the number of business days (weekdays) between two dates, excluding weekends."
            category="date"
          />

          <BusinessDaysCalculator />

          <SEOContent
            title="About Business Days Calculator"
            content="The Business Days Calculator helps you determine the number of working days between two dates. It automatically excludes weekends (Saturday and Sunday) to give you an accurate count of business days. This tool is essential for project planning, delivery scheduling, and deadline calculations in professional settings."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools category="date" currentHref="/tools/date/business-days" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
