import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TextComparison } from "@/components/text-comparison"
import { ToolHeader } from "@/components/tool-header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Text Comparison Tool - Compare Two Texts Line by Line | iConvertNow",
  description:
    "Compare two texts and find differences instantly. Perfect for document revision and version comparison.",
}

export default function TextComparisonPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Text Tools", href: "/tools/text" },
    { label: "Text Comparison" },
  ]

  const faqs = [
    {
      question: "How does the text comparison work?",
      answer:
        "The tool compares two texts line by line and identifies where they differ. It provides a clear indication of whether the texts are identical or shows the number and location of differences.",
    },
    {
      question: "What can I use this tool for?",
      answer:
        "This tool is perfect for comparing document revisions, checking for plagiarism, finding changes between versions, or verifying that two texts are identical.",
    },
    {
      question: "Does it show what the differences are?",
      answer: "Yes, the tool shows which lines contain differences, making it easy to locate where the texts diverge.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <BreadcrumbNav items={breadcrumbs} />

          <ToolHeader
            title="Text Comparison Tool"
            description="Compare two texts line by line to find differences and verify if they are identical."
            category="text"
          />

          <TextComparison />

          <SEOContent
            title="About Text Comparison Tool"
            content="The Text Comparison Tool helps you compare two texts and identify differences. Whether you're reviewing document changes, checking for duplicates, or verifying text accuracy, this tool provides instant line-by-line comparison. Simply paste your texts and get immediate results showing any differences between them."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools category="text" currentHref="/tools/text/text-comparison" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
