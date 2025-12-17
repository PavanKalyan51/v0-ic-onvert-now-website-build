import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { Clock } from "lucide-react"
import { TimezoneConverterAdvanced } from "@/components/timezone-converter-advanced"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"

export const metadata: Metadata = {
  title: "PST to IST Converter - Pacific Time to India Time | iConvertNow",
  description:
    "Convert PST (Pacific Standard Time) to IST (India Standard Time) instantly. Accurate timezone conversion with current time display. Free and easy to use.",
  keywords: [
    "PST to IST",
    "Pacific time to India time",
    "timezone converter",
    "PST IST conversion",
    "time difference PST IST",
  ],
}

export default function PstToIstPage() {
  const faqs = [
    {
      question: "What is the time difference between PST and IST?",
      answer:
        "India Standard Time (IST) is 13 hours and 30 minutes ahead of Pacific Standard Time (PST). When it is 12:00 PM (noon) in PST, it is 1:30 AM the next day in IST.",
    },
    {
      question: "Does India observe Daylight Saving Time?",
      answer:
        "No, India does not observe Daylight Saving Time. India Standard Time (IST) remains UTC+5:30 throughout the year.",
    },
    {
      question: "What about Pacific Daylight Time (PDT)?",
      answer:
        "During Daylight Saving Time (usually March to November), Pacific Time becomes PDT (UTC-7), making the difference with IST 12 hours and 30 minutes instead of 13 hours and 30 minutes.",
    },
    {
      question: "Which cities use PST?",
      answer: "Major cities in the PST timezone include Los Angeles, San Francisco, Seattle, Las Vegas, and Portland.",
    },
    {
      question: "Which cities use IST?",
      answer:
        "All of India uses IST, including major cities like Mumbai, Delhi, Bangalore, Kolkata, Chennai, and Hyderabad.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Time Tools", href: "/tools/time" },
            { label: "PST to IST", href: "/tools/time/pst-to-ist" },
          ]}
        />

        <ToolHeader
          icon={Clock}
          title="PST to IST Converter"
          description="Convert Pacific Standard Time to India Standard Time with real-time accuracy"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <TimezoneConverterAdvanced
            fromTimezone="PST"
            toTimezone="IST"
            title="Pacific Time to India Time"
            description="Real-time conversion between PST and IST timezones"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent title="About PST to IST Time Conversion">
            <p className="mb-4">
              Converting between Pacific Standard Time (PST) and India Standard Time (IST) is essential for coordinating
              meetings, calls, and events between the US West Coast and India. Our PST to IST converter provides
              instant, accurate timezone conversion to help you schedule across time zones with confidence.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Understanding the Time Difference</h3>
            <p className="mb-4">
              India Standard Time is 13 hours and 30 minutes ahead of Pacific Standard Time. This significant time
              difference means that when it's business hours in California (PST), it's late night or early morning the
              next day in India. This makes scheduling meetings particularly challenging and requires careful planning.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Daylight Saving Time Considerations</h3>
            <p className="mb-4">
              It's important to note that while India does not observe Daylight Saving Time, the United States does.
              During Daylight Saving Time (typically March through November), Pacific Time becomes PDT (Pacific Daylight
              Time, UTC-7), which reduces the time difference to 12 hours and 30 minutes.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Best Times for Meetings</h3>
            <p>
              The most practical time for meetings between PST and IST is typically early morning in PST (7:00 AM - 9:00
              AM PST), which corresponds to evening hours in IST (8:30 PM - 10:30 PM IST). This allows both parties to
              participate during reasonable working or after-work hours.
            </p>
          </SEOContent>

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("time", "/tools/time/pst-to-ist")} />
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "PST to IST Converter",
            description: "Convert Pacific Standard Time to India Standard Time",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  )
}
