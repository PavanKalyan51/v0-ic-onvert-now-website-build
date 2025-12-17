import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ToolHeader } from "@/components/tool-header"
import { FAQSection } from "@/components/faq-section"
import { SEOContent } from "@/components/seo-content"
import { BMICalculator } from "@/components/bmi-calculator"
import { RelatedTools } from "@/components/related-tools"
import { getRelatedTools } from "@/lib/related-tools-data"
import { Activity } from "lucide-react"

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Your Body Mass Index & Health Category",
  description:
    "Free BMI calculator to determine your Body Mass Index and health category. Check if you're underweight, normal weight, overweight, or obese.",
  keywords: ["BMI calculator", "body mass index", "BMI chart", "calculate BMI", "healthy weight"],
}

export default function BMICalculatorPage() {
  const faqs = [
    {
      question: "What is BMI?",
      answer:
        "BMI (Body Mass Index) is a measure of body fat based on height and weight. It's calculated by dividing your weight in kilograms by the square of your height in meters.",
    },
    {
      question: "What is a healthy BMI range?",
      answer:
        "A healthy BMI range is 18.5 to 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30+ is considered obese.",
    },
    {
      question: "Is BMI accurate for everyone?",
      answer:
        "BMI is a useful screening tool but has limitations. It doesn't account for muscle mass, bone density, or fat distribution. Athletes with high muscle mass may have high BMI despite being healthy.",
    },
    {
      question: "How can I improve my BMI?",
      answer:
        "Improving your BMI involves maintaining a balanced diet and regular exercise. Consult with healthcare professionals for personalized advice on reaching a healthy weight.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Calculators", href: "/tools/calculator" },
            { label: "BMI Calculator", href: "/tools/calculator/bmi" },
          ]}
        />

        <ToolHeader
          icon={Activity}
          title="BMI Calculator"
          description="Calculate your Body Mass Index and discover your health category based on height and weight"
        />

        <div className="max-w-4xl mx-auto mb-12">
          <BMICalculator />
        </div>

        <div className="max-w-4xl mx-auto">
          <SEOContent
            title="About BMI Calculator"
            content="Our BMI calculator helps you determine your Body Mass Index and understand your weight category. BMI is a widely used indicator of healthy body weight based on your height and weight. Use this tool to check if you're in a healthy weight range and get insights into your health status."
          />

          <FAQSection faqs={faqs} />

          <RelatedTools tools={getRelatedTools("calculator", "/tools/calculator/bmi")} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
