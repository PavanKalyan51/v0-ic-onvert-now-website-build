export interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogTitle?: string
  ogDescription?: string
}

export function generateTimezoneMetadata(from: string, to: string, variant = "default"): SEOData {
  const variants: Record<string, { title: string; description: string }> = {
    default: {
      title: `${from} to ${to} Converter - Convert ${from} Time to ${to}`,
      description: `Convert ${from} to ${to} time instantly. Free ${from} to ${to} timezone converter with current time, time difference, and conversion table. Accurate and easy to use.`,
    },
    convert: {
      title: `Convert ${from} to ${to} Time - Instant ${from} ${to} Converter`,
      description: `Quickly convert ${from} time to ${to}. Get instant results with our free ${from} to ${to} time zone converter. Perfect for scheduling meetings across time zones.`,
    },
    time: {
      title: `${from} Time to ${to} - ${from} to ${to} Time Converter`,
      description: `What time is ${from} in ${to}? Convert ${from} time to ${to} instantly. Free online ${from} ${to} time zone calculator with DST adjustments.`,
    },
  }

  const data = variants[variant] || variants.default

  return {
    title: data.title,
    description: data.description,
    keywords: [`${from} to ${to}`, `${from} time`, `${to} time`, "timezone converter", "time converter", "time zone"],
    canonical: `/tools/time/${from.toLowerCase()}-to-${to.toLowerCase()}`,
    ogTitle: data.title,
    ogDescription: data.description,
  }
}

export function generateStructuredData(type: "Calculator" | "FAQPage", data: any) {
  if (type === "Calculator") {
    return {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: data.name,
      description: data.description,
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }
  }

  if (type === "FAQPage") {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.questions.map((q: { question: string; answer: string }) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    }
  }

  return null
}
