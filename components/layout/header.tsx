"use client"

import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollLink } from "@/components/scroll-link"

export function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleHireMeClick = () => {
    if (mounted) {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">LQT</div>
        <nav className="hidden md:flex items-center gap-6">
          <ScrollLink href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </ScrollLink>
          <ScrollLink href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
            Experience
          </ScrollLink>
          <ScrollLink href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
            Skills
          </ScrollLink>
          <ScrollLink href="#case-studies" className="text-sm font-medium hover:underline underline-offset-4">
            Case Studies
          </ScrollLink>
          <ScrollLink href="#blog" className="text-sm font-medium hover:underline underline-offset-4">
            Blog
          </ScrollLink>
          <ScrollLink href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </ScrollLink>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative z-10">
            <ThemeToggle />
          </div>
          <Button onClick={handleHireMeClick}>
            Hire Me <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
