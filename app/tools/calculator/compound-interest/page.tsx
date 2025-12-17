import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompoundInterestCalculator } from "@/components/compound-interest-calculator"
import { ToolHeader } from "@/components/tool-header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { SEOContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "Compound Interest Calculator - Calculate Investment Returns | iConvertNow",
  description:
    "Calculate compound interest for investments and savings. See how your money grows over time with different compounding frequencies.",
}

export default function CompoundInterestPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/tools/calculator" },
    { label: "Compound Interest Calculator" },
  ]

  const faqs = [
    {
      question: "What is compound interest?",
      answer:
        "Compound interest is interest calculated on the initial principal and the accumulated interest from previous periods. It's often called 'interest on interest' and makes your investment grow faster than simple interest.",
    },
    {
      question: "How does compounding frequency affect returns?",
      answer:
        "More frequent compounding results in higher returns. Daily compounding grows your investment faster than monthly or annual compounding because interest is calculated and added more often.",
    },
    {
      question: "What's the difference between compound and simple interest?",
      answer:
        "Simple interest is calculated only on the principal amount, while compound interest is calculated on the principal plus accumulated interest. Compound interest grows exponentially over time.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <BreadcrumbNav items={breadcrumbs} />

          <ToolHeader
            title="Compound Interest Calculator"
            description="Calculate how your investment grows over time with compound interest. See the power of compounding with different frequencies."
            category="calculator"
          />

          <CompoundInterestCalculator />

          <SEOContent
            title="About Compound Interest Calculator"
            content="The Compound Interest Calculator helps you understand how your investments grow over time. By calculating interest on both the principal and accumulated interest, you can see the exponential growth potential of your savings and investments. This tool supports different compounding frequencies (annually, quarterly, monthly, daily) to show how frequency impacts your returns."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools category="calculator" currentHref="/tools/calculator/compound-interest" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
