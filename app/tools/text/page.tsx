import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { FileText, Type, GitCompare, Layers, Hash } from "lucide-react"

export const metadata: Metadata = {
  title: "Text Tools - Word Counter, Case Converter & More | iConvertNow",
  description:
    "Free text tools including word counter, character counter, case converter, and text comparison. Process and analyze text instantly.",
}

export default function TextToolsPage() {
  const tools = [
    {
      title: "Word Counter",
      description: "Count words, characters, sentences, and paragraphs in your text instantly",
      href: "/tools/text/word-counter",
      icon: FileText,
    },
    {
      title: "Character Counter",
      description: "Count characters, letters, digits, spaces, and punctuation in real-time",
      href: "/tools/text/character-counter",
      icon: Hash,
    },
    {
      title: "Case Converter",
      description: "Convert text to uppercase, lowercase, title case, sentence case, and more",
      href: "/tools/text/case-converter",
      icon: Type,
    },
    {
      title: "Text Comparison",
      description: "Compare two texts line by line and find differences instantly",
      href: "/tools/text/text-comparison",
      icon: GitCompare,
    },
    {
      title: "Remove Duplicate Lines",
      description: "Remove duplicate lines from text while preserving order",
      href: "/tools/text/remove-duplicates",
      icon: Layers,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text text-balance">
              Text Tools
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              Powerful text manipulation and analysis tools. Count words, convert cases, compare texts, and process text
              with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
