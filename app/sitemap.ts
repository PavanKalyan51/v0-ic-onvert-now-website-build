import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iconvertnow.com"

  // Time tools with programmatic SEO variants
  const timeTools = [
    "pst-to-ist",
    "ist-to-pst",
    "est-to-ist",
    "ist-to-est",
    "cst-to-ist",
    "ist-to-cst",
    "gmt-to-ist",
    "ist-to-gmt",
  ]

  const dateTools = ["date-difference", "age-calculator", "business-days"]

  const calculatorTools = ["percentage", "emi", "bmi", "compound-interest"]

  const textTools = ["word-counter", "case-converter", "remove-duplicates", "text-comparison"]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools/time`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/date`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/text`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Time tools
    ...timeTools.map((tool) => ({
      url: `${baseUrl}/tools/time/${tool}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Date tools
    ...dateTools.map((tool) => ({
      url: `${baseUrl}/tools/date/${tool}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Calculator tools
    ...calculatorTools.map((tool) => ({
      url: `${baseUrl}/tools/calculator/${tool}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Text tools
    ...textTools.map((tool) => ({
      url: `${baseUrl}/tools/text/${tool}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]
}
