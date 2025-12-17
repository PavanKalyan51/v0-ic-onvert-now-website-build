import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { FAQSection } from "@/components/faq-section"
import { SEOContent } from "@/components/seo-content"
import { WordCounter } from "@/components/word-counter"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Word Counter - Count Words, Characters, and Sentences",
  description:
    "Free word counter tool to count words, characters, sentences, and paragraphs. Real-time text analysis with reading time estimation.",
  keywords: ["word counter", "character counter", "count words", "text counter", "word count tool"],
}

export default function WordCounterPage() {
  const faqs = [
    {
      question: "How does the word counter work?",
      answer:
        "The word counter analyzes your text in real-time as you type. It counts words by identifying text separated by spaces, characters including or excluding spaces, sentences by punctuation marks, and paragraphs by line breaks.",
    },
    {
      question: "Does the word counter count special characters?",
      answer:
        "Yes, the character count includes all characters including letters, numbers, punctuation, and special characters. We also provide a count without spaces for your convenience.",
    },
    {
      question: "Can I use this for academic papers?",
      answer:
        "Our word counter is perfect for checking word counts in essays, research papers, articles, and any other written content. It provides accurate counts that match most academic requirements.",
    },
    {
      question: "What is reading time based on?",
      answer:
        "Reading time is calculated based on an average reading speed of 200 words per minute. This is the standard reading speed for most adults.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Text Tools", href: "/tools/text" },
            { label: "Word Counter", href: "/tools/text/word-counter" },
          ]}
        />

        <ToolHeader
          icon={FileText}
          title="Word Counter"
          description="Count words, characters, sentences, and paragraphs in your text instantly"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <WordCounter />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent
            title="About Word Counter"
            content="Our word counter tool provides real-time text analysis as you type or paste your content. It accurately counts words, characters (with and without spaces), sentences, paragraphs, and even estimates reading time. Perfect for writers, students, content creators, and anyone who needs precise text statistics."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("text", "/tools/text/word-counter")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
