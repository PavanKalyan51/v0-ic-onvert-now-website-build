import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { FAQSection } from "@/components/faq-section"
import { SEOContent } from "@/components/seo-content"
import { EMICalculator } from "@/components/emi-calculator"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "EMI Calculator - Calculate Loan EMI, Interest & Payment Schedule",
  description:
    "Free EMI calculator for home loans, car loans, and personal loans. Calculate monthly EMI, total interest, and payment schedule instantly.",
  keywords: ["EMI calculator", "loan calculator", "home loan EMI", "car loan EMI", "calculate EMI"],
}

export default function EMICalculatorPage() {
  const faqs = [
    {
      question: "What is EMI?",
      answer:
        "EMI stands for Equated Monthly Installment. It's a fixed payment amount made by a borrower to a lender at a specified date each month. EMI is used to pay off both interest and principal each month.",
    },
    {
      question: "How is EMI calculated?",
      answer:
        "EMI is calculated using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is the principal loan amount, R is the monthly interest rate, and N is the loan tenure in months.",
    },
    {
      question: "Can I prepay my loan?",
      answer:
        "Most loans allow prepayment, which can significantly reduce your total interest paid. Check with your lender about prepayment charges and conditions.",
    },
    {
      question: "What affects my EMI amount?",
      answer:
        "Three factors affect your EMI: the loan amount (principal), the interest rate, and the loan tenure. Increasing the tenure reduces EMI but increases total interest paid.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Calculators", href: "/tools/calculator" },
            { label: "EMI Calculator", href: "/tools/calculator/emi" },
          ]}
        />

        <ToolHeader
          icon={DollarSign}
          title="EMI Calculator"
          description="Calculate your loan EMI, total interest, and payment breakdown for home loans, car loans, and personal loans"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <EMICalculator />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent
            title="About EMI Calculator"
            content="Our EMI calculator helps you plan your loan repayment by calculating the monthly installment amount. Whether you're taking a home loan, car loan, or personal loan, this tool gives you instant insights into your monthly payments, total interest, and repayment schedule."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("calculator", "/tools/calculator/emi")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
