import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { FAQSection } from "@/components/faq-section"
import { SEOContent } from "@/components/seo-content"
import { CaseConverter } from "@/components/case-converter"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { Type } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Converter - Convert Text to Uppercase, Lowercase, Title Case",
  description:
    "Free case converter tool to change text case instantly. Convert to uppercase, lowercase, title case, sentence case, camelCase, and snake_case.",
  keywords: ["case converter", "uppercase", "lowercase", "title case", "text converter", "change case"],
}

export default function CaseConverterPage() {
  const faqs = [
    {
      question: "What is title case?",
      answer:
        "Title case capitalizes the first letter of each major word in a sentence. It's commonly used for titles, headings, and proper nouns. Articles, conjunctions, and prepositions are typically lowercase unless they start the title.",
    },
    {
      question: "What is the difference between camelCase and snake_case?",
      answer:
        "camelCase removes spaces and capitalizes the first letter of each word except the first. snake_case replaces spaces with underscores and makes everything lowercase. Both are common naming conventions in programming.",
    },
    {
      question: "Can I convert multiple paragraphs at once?",
      answer:
        "Yes! Our case converter works with text of any length, including multiple paragraphs. Simply paste your text and select the desired case format.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Text Tools", href: "/tools/text" },
            { label: "Case Converter", href: "/tools/text/case-converter" },
          ]}
        />

        <ToolHeader
          icon={Type}
          title="Case Converter"
          description="Convert text between different cases: uppercase, lowercase, title case, and more"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <CaseConverter />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent
            title="About Case Converter"
            content="Our case converter tool makes it easy to change the case of your text instantly. Whether you need to convert to uppercase for emphasis, lowercase for consistency, title case for headings, or programming cases like camelCase and snake_case, this tool handles it all with one click."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("text", "/tools/text/case-converter")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
