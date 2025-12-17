import Link from "next/link"
import Image from "next/image"
import { Clock, Calculator, FileText, Calendar, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Header() {
  const navItems = [
    { href: "/tools/time", icon: Clock, label: "Time Tools" },
    { href: "/tools/date", icon: Calendar, label: "Date Tools" },
    { href: "/tools/calculator", icon: Calculator, label: "Calculators" },
    { href: "/tools/text", icon: FileText, label: "Text Tools" },
  ]

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="iConvertNow" width={40} height={40} className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-bold text-xl gradient-text">iConvertNow</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Convert Anything. Instantly.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {item.label}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card">
              <div className="flex flex-col gap-2 mt-8">
                <div className="mb-4 pb-4 border-b border-border">
                  <h2 className="font-bold text-lg gradient-text">Navigation</h2>
                  <p className="text-xs text-muted-foreground mt-1">Choose your tool category</p>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 text-base hover:text-primary transition-all p-3 rounded-lg hover:bg-muted/50 border border-transparent hover:border-primary/20"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
