import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  faqs: FaqItem[]
}

export function FAQSection({ faqs }: FaqSectionProps) {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold gradient-text">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-border">
            <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
