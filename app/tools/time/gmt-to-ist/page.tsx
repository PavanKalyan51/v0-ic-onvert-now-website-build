import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { TimezoneConverterAdvanced } from "@/components/timezone-converter-advanced"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "GMT to IST Converter - Greenwich Time to India Time | iConvertNow",
  description:
    "Convert GMT (Greenwich Mean Time) to IST (India Standard Time) instantly. Accurate timezone conversion tool for UK to India time differences.",
  keywords: ["GMT to IST", "Greenwich time to India time", "UK to India time", "GMT IST conversion"],
}

export default function GmtToIstPage() {
  const faqs = [
    {
      question: "What is the time difference between GMT and IST?",
      answer:
        "India Standard Time (IST) is 5 hours and 30 minutes ahead of Greenwich Mean Time (GMT). When it is 12:00 PM (noon) in GMT, it is 5:30 PM the same day in IST.",
    },
    {
      question: "Which cities use GMT?",
      answer: "GMT is used primarily by London, Dublin, Lisbon, and several cities in West Africa like Accra.",
    },
    {
      question: "What about British Summer Time (BST)?",
      answer:
        "During summer months (usually March to October), the UK observes BST (UTC+1) instead of GMT, reducing the time difference with IST to 4 hours and 30 minutes.",
    },
    {
      question: "Is GMT the same as UTC?",
      answer:
        "GMT and UTC are nearly identical for practical purposes. UTC is the modern time standard, while GMT is the historic time zone. The difference is negligible for everyday use.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Time Tools", href: "/tools/time" },
            { label: "GMT to IST", href: "/tools/time/gmt-to-ist" },
          ]}
        />

        <ToolHeader
          icon={Clock}
          title="GMT to IST Converter"
          description="Convert Greenwich Mean Time to India Standard Time instantly and accurately"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <TimezoneConverterAdvanced
            fromTimezone="GMT"
            toTimezone="IST"
            title="GMT to India Time"
            description="Real-time conversion between GMT and IST timezones"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent title="About GMT to IST Time Conversion">
            <p className="mb-4">
              The time difference between GMT and IST is particularly important for UK-India business relations,
              international flights, and global communications. With a manageable 5.5-hour difference, coordination is
              easier compared to US-India timezones.
            </p>
          </SEOContent>

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("time", "/tools/time/gmt-to-ist")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
