"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Calculator, FileText, ArrowRight, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const popularTools = [
    {
      title: "PST to IST Converter",
      description: "Convert Pacific Standard Time to India Standard Time instantly",
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
      title: "Date Difference Calculator",
      description: "Calculate days, months, and years between two dates",
      href: "/tools/date/date-difference",
      icon: Calendar,
    },
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, and days",
      href: "/tools/date/age-calculator",
      icon: Calendar,
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages quickly and accurately",
      href: "/tools/calculator/percentage",
      icon: Calculator,
    },
    {
      title: "Word Counter",
      description: "Count words, characters, and sentences in your text",
      href: "/tools/text/word-counter",
      icon: FileText,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Animation */}
      <section className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance gradient-text leading-tight">
              Convert Anything. Instantly.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 text-balance leading-relaxed px-4"
          >
            World-class timezone converters, date calculators, and text utilities. Fast, accurate, and always free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 gradient-brand hover:opacity-90 transition-opacity"
            >
              <Link href="#popular-tools">
                Get Started <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 bg-transparent">
              <Link href="/tools/time">Browse All Tools</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features with Animation */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Instant results with no waiting. All calculations happen in your browser.",
                delay: 0,
              },
              {
                icon: Shield,
                title: "100% Private",
                desc: "Your data never leaves your device. No tracking, no storage.",
                delay: 0.1,
              },
              {
                icon: Globe,
                title: "Always Free",
                desc: "No hidden fees, no subscriptions. Free forever for everyone.",
                delay: 0.2,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="text-center px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg"
                >
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tools with Animation */}
      <section id="popular-tools" className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 gradient-text">Popular Tools</h2>
            <p className="text-base md:text-lg text-muted-foreground">Most used converters and calculators</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {popularTools.map((tool, i) => (
              <motion.div
                key={tool.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ToolCard {...tool} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 gradient-text">
                Browse by Category
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">Find the perfect tool for your needs</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  href: "/tools/time",
                  icon: Clock,
                  title: "Time Tools",
                  desc: "Timezone converters and time calculations",
                  delay: 0,
                },
                {
                  href: "/tools/date",
                  icon: Calendar,
                  title: "Date Tools",
                  desc: "Date calculations and calendars",
                  delay: 0.1,
                },
                {
                  href: "/tools/calculator",
                  icon: Calculator,
                  title: "Calculators",
                  desc: "Financial and general calculators",
                  delay: 0.2,
                },
                {
                  href: "/tools/text",
                  icon: FileText,
                  title: "Text Tools",
                  desc: "Text manipulation and analysis",
                  delay: 0.3,
                },
              ].map((cat) => (
                <motion.div
                  key={cat.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: cat.delay }}
                >
                  <Link href={cat.href} className="group block">
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      className="p-6 md:p-8 bg-card border border-border rounded-xl md:rounded-2xl transition-all hover:border-primary/50"
                    >
                      <cat.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg md:text-xl font-bold mb-2">{cat.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{cat.desc}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
