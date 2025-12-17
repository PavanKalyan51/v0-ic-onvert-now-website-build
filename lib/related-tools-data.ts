import {
  Clock,
  Calendar,
  FileText,
  Percent,
  DollarSign,
  Activity,
  Type,
  Cake,
  Briefcase,
  TrendingUp,
  Globe,
  GitCompare,
  Layers,
  Hash,
} from "lucide-react"

// Time/Timezone Related Tools
export const timeRelatedTools = [
  {
    title: "Universal Timezone Converter",
    description: "Convert time between any timezones worldwide",
    href: "/tools/time/timezone-converter",
    icon: Globe,
  },
  {
    title: "PST to IST Converter",
    description: "Convert Pacific Standard Time to India Standard Time",
    href: "/tools/time/pst-to-ist",
    icon: Clock,
  },
  {
    title: "EST to IST Converter",
    description: "Convert Eastern Standard Time to India Standard Time",
    href: "/tools/time/est-to-ist",
    icon: Clock,
  },
  {
    title: "GMT to IST Converter",
    description: "Convert Greenwich Mean Time to India Standard Time",
    href: "/tools/time/gmt-to-ist",
    icon: Clock,
  },
]

// Date Related Tools
export const dateRelatedTools = [
  {
    title: "Date Difference Calculator",
    description: "Calculate the exact difference between two dates",
    href: "/tools/date/date-difference",
    icon: Calendar,
  },
  {
    title: "Age Calculator",
    description: "Calculate your exact age in years, months, and days",
    href: "/tools/date/age-calculator",
    icon: Cake,
  },
  {
    title: "Business Days Calculator",
    description: "Calculate working days between dates",
    href: "/tools/date/business-days",
    icon: Briefcase,
  },
]

// Calculator Related Tools
export const calculatorRelatedTools = [
  {
    title: "Percentage Calculator",
    description: "Calculate percentages and percentage changes",
    href: "/tools/calculator/percentage",
    icon: Percent,
  },
  {
    title: "EMI Calculator",
    description: "Calculate loan EMI and interest",
    href: "/tools/calculator/emi",
    icon: DollarSign,
  },
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    href: "/tools/calculator/bmi",
    icon: Activity,
  },
  {
    title: "Compound Interest Calculator",
    description: "Calculate investment returns over time",
    href: "/tools/calculator/compound-interest",
    icon: TrendingUp,
  },
]

// Text Related Tools
export const textRelatedTools = [
  {
    title: "Word Counter",
    description: "Count words, characters, and sentences",
    href: "/tools/text/word-counter",
    icon: FileText,
  },
  {
    title: "Character Counter",
    description: "Count characters, letters, and digits",
    href: "/tools/text/character-counter",
    icon: Hash,
  },
  {
    title: "Case Converter",
    description: "Convert text to different cases",
    href: "/tools/text/case-converter",
    icon: Type,
  },
  {
    title: "Text Comparison",
    description: "Compare two texts and find differences",
    href: "/tools/text/text-comparison",
    icon: GitCompare,
  },
  {
    title: "Remove Duplicate Lines",
    description: "Remove duplicate lines from text",
    href: "/tools/text/remove-duplicates",
    icon: Layers,
  },
]

// Helper function to get related tools excluding current tool
export function getRelatedTools(category: "time" | "date" | "calculator" | "text", currentHref: string) {
  let allTools
  switch (category) {
    case "time":
      allTools = timeRelatedTools
      break
    case "date":
      allTools = dateRelatedTools
      break
    case "calculator":
      allTools = calculatorRelatedTools
      break
    case "text":
      allTools = textRelatedTools
      break
    default:
      return []
  }
  return allTools.filter((tool) => tool.href !== currentHref)
}
