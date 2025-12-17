import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-12 md:mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Time Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/time/pst-to-ist"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  PST to IST
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/time/est-to-ist"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  EST to IST
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/time/gmt-to-ist"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GMT to IST
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Date Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/date/date-difference"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Date Difference
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/date/age-calculator"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Age Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Calculators</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/calculator/percentage"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Percentage
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/calculator/emi"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/calculator/bmi"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  BMI Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Text Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/text/word-counter"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Word Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/text/case-converter"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Case Converter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2025 iConvertNow. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link
              href="/privacy"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
