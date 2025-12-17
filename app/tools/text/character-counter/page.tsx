import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CharacterCounter } from "@/components/character-counter"
import { ToolHeader } from "@/components/tool-header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Character Counter - Count Characters, Letters & More | iConvertNow",
  description:
    "Count characters, letters, digits, spaces, and punctuation in your text instantly. Real-time character counting tool.",
}

export default function CharacterCounterPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Text Tools", href: "/tools/text" },
    { label: "Character Counter" },
  ]

  const faqs = [
    {
      question: "What does the character counter count?",
      answer:
        "The character counter provides detailed statistics including total characters, characters without spaces, letters, digits, spaces, and punctuation marks.",
    },
    {
      question: "How is this different from word counter?",
      answer:
        "While a word counter focuses on word and sentence count, the character counter provides detailed character-level analysis including specific counts for letters, digits, and punctuation.",
    },
    {
      question: "Why would I need to count characters?",
      answer:
        "Character counting is useful for social media posts (Twitter, SMS), meta descriptions, form fields with character limits, and any content with specific character requirements.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <BreadcrumbNav items={breadcrumbs} />

          <ToolHeader
            title="Character Counter"
            description="Count characters, letters, digits, and more in your text instantly with real-time analysis."
            category="text"
          />

          <CharacterCounter />

          <SEOContent
            title="About Character Counter"
            content="The Character Counter provides comprehensive text analysis by counting characters, letters, digits, spaces, and punctuation in real-time. Whether you're checking character limits for social media, writing meta descriptions, or analyzing text content, this tool gives you instant detailed statistics about your text."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools category="text" currentHref="/tools/text/character-counter" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
