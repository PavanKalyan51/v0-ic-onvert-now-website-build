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
  title: "EST to IST Converter - Eastern Time to India Time | iConvertNow",
  description:
    "Convert EST (Eastern Standard Time) to IST (India Standard Time) instantly. Accurate timezone conversion with current time display. Free and easy to use.",
  keywords: ["EST to IST", "Eastern time to India time", "EST IST conversion", "time difference EST IST"],
}

export default function EstToIstPage() {
  const faqs = [
    {
      question: "What is the time difference between EST and IST?",
      answer:
        "India Standard Time (IST) is 10 hours and 30 minutes ahead of Eastern Standard Time (EST). When it is 12:00 PM (noon) in EST, it is 10:30 PM the same day in IST.",
    },
    {
      question: "Which cities use EST?",
      answer:
        "Major cities in the EST timezone include New York, Boston, Miami, Toronto, Philadelphia, and Washington D.C.",
    },
    {
      question: "What about Eastern Daylight Time (EDT)?",
      answer:
        "During Daylight Saving Time (usually March to November), Eastern Time becomes EDT (UTC-4), making the difference with IST 9 hours and 30 minutes instead of 10 hours and 30 minutes.",
    },
    {
      question: "Best time for meetings between EST and IST?",
      answer:
        "The most practical overlap is early morning EST (7:00 AM - 10:00 AM EST) which corresponds to evening IST (5:30 PM - 8:30 PM IST), allowing both parties to meet during business or reasonable hours.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Time Tools", href: "/tools/time" },
            { label: "EST to IST", href: "/tools/time/est-to-ist" },
          ]}
        />

        <ToolHeader
          icon={Clock}
          title="EST to IST Converter"
          description="Convert Eastern Standard Time to India Standard Time with real-time accuracy"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <TimezoneConverterAdvanced
            fromTimezone="EST"
            toTimezone="IST"
            title="Eastern Time to India Time"
            description="Real-time conversion between EST and IST timezones"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent title="About EST to IST Time Conversion">
            <p className="mb-4">
              Converting between Eastern Standard Time (EST) and India Standard Time (IST) is crucial for business
              communications, remote work coordination, and personal connections between the US East Coast and India.
            </p>
            <p className="mb-4">
              The 10.5-hour time difference means when it's morning in New York, it's evening in India, making real-time
              collaboration challenging but manageable with proper scheduling.
            </p>
          </SEOContent>

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("time", "/tools/time/est-to-ist")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
