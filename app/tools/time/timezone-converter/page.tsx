import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UniversalTimezoneConverter } from "@/components/universal-timezone-converter"
import { ToolHeader } from "@/components/tool-header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Universal Timezone Converter - Convert Any Time Zone | iConvertNow",
  description:
    "Convert time between any timezones in the world. Supports PST, EST, GMT, IST, and 100+ more timezones with instant accurate conversion.",
  keywords: [
    "timezone converter",
    "time zone converter",
    "world clock",
    "time converter",
    "international time",
    "convert time zones",
  ],
}

export default function TimezoneConverterPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Time Tools", href: "/tools/time" },
    { label: "Timezone Converter" },
  ]

  const faqs = [
    {
      question: "How does the timezone converter work?",
      answer:
        "Our timezone converter uses precise UTC offset calculations to convert times between any two timezones. It accounts for daylight saving time and displays whether the converted time falls on the next or previous day.",
    },
    {
      question: "Which timezones are supported?",
      answer:
        "We support all major world timezones including PST, EST, GMT, IST, JST, AEDT, CET, and many more. You can convert between any combination of supported timezones.",
    },
    {
      question: "Does it account for daylight saving time?",
      answer:
        "Yes, our converter automatically accounts for daylight saving time changes based on the selected timezones and current date.",
    },
    {
      question: "Can I convert times for different dates?",
      answer:
        "The converter shows the time conversion for the current day. If the converted time falls on the next or previous day, it will display a (+1 day) or (-1 day) indicator.",
    },
    {
      question: "Is this timezone converter accurate?",
      answer:
        "Yes, our converter uses precise UTC offset calculations and is regularly updated to ensure accuracy across all supported timezones.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <BreadcrumbNav items={breadcrumbs} />

          <ToolHeader
            title="Universal Timezone Converter"
            description="Convert time between any timezones in the world instantly. Perfect for scheduling meetings, planning travel, and coordinating with international teams."
            category="time"
          />

          <UniversalTimezoneConverter />

          <SEOContent
            title="About Universal Timezone Converter"
            content="The Universal Timezone Converter helps you convert times between any timezones worldwide. Whether you're scheduling international meetings, planning travel, or coordinating with remote teams, our converter provides instant and accurate time conversions. Simply select your source and destination timezones, enter the time, and get immediate results with clear day indicators for cross-day conversions."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools category="time" currentHref="/tools/time/timezone-converter" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
