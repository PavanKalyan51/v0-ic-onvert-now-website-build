import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RemoveDuplicateLines } from "@/components/remove-duplicate-lines"
import { ToolHeader } from "@/components/tool-header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Remove Duplicate Lines - Clean Up Text Instantly | iConvertNow",
  description: "Remove duplicate lines from text instantly. Perfect for cleaning lists and removing redundant entries.",
}

export default function RemoveDuplicatesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Text Tools", href: "/tools/text" },
    { label: "Remove Duplicate Lines" },
  ]

  const faqs = [
    {
      question: "How does the duplicate removal work?",
      answer:
        "The tool analyzes each line in your text and removes any lines that appear more than once, keeping only the first occurrence of each unique line.",
    },
    {
      question: "Does it preserve the order of lines?",
      answer:
        "Yes, the tool maintains the original order of lines while removing duplicates, keeping the first occurrence of each unique line.",
    },
    {
      question: "What can I use this for?",
      answer:
        "This tool is perfect for cleaning up email lists, removing duplicate entries from data files, processing text logs, or organizing any list with redundant entries.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <BreadcrumbNav items={breadcrumbs} />

          <ToolHeader
            title="Remove Duplicate Lines"
            description="Instantly remove duplicate lines from your text while preserving the original order."
            category="text"
          />

          <RemoveDuplicateLines />

          <SEOContent
            title="About Remove Duplicate Lines Tool"
            content="The Remove Duplicate Lines tool helps you clean up text by eliminating redundant entries. Whether you're processing data files, cleaning up lists, or organizing text content, this tool quickly identifies and removes duplicate lines while maintaining the original order of unique entries."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools category="text" currentHref="/tools/text/remove-duplicates" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
