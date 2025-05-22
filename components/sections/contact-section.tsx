import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { contactInfo } from "@/data/personal-info"

export function ContactSection() {
  return (
    <Section id="contact" title="Contact Me">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Get In Touch</h3>
          <p className="text-muted-foreground">
            I'm currently available for freelance work or full-time positions. If you have a project that needs some
            creative work, feel free to contact me.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <Link href={contactInfo.linkedin} className="hover:underline">
                linkedin.com/in/trang-le-quoc-327268251
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-primary" />
              <Link href={contactInfo.github} className="hover:underline">
                github.com/lequoctrang4
              </Link>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input id="name" className="w-full px-3 py-2 border rounded-md" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input id="subject" className="w-full px-3 py-2 border rounded-md" placeholder="Subject" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border rounded-md resize-none"
                placeholder="Your message"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  )
}
