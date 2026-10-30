"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navigation = [
  ["About", "about"], ["Work", "case-studies"],
  ["Experience", "experience"], ["Capabilities", "skills"], ["Contact", "contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <a href="#hero" className="wordmark" aria-label="Lê Quốc Trạng, back to top">lqt<span>®</span></a>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm hover:text-primary">{label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex"><a href="#contact">Let’s talk <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
          <Button variant="outline" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="container flex flex-col gap-4 border-t py-5 lg:hidden">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>}
    </header>
  );
}
