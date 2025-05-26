import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { contactInfo } from "@/data/personal-info"

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground">© 2024 Lê Quốc Trạng. All rights reserved.</div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href={contactInfo.linkedin} className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={contactInfo.github} className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
