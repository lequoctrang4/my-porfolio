import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BookingPlatformDetail() {
  return (
    <Section title="B2B Appointment Management System">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="text-base px-4 py-1">
            Freelance Project
          </Badge>
          <Link href="#case-studies" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to all case studies
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
            <p className="mb-4">
              A B2B appointment booking platform for beauty services (salons, spas, etc.), consisting of two web
              applications developed within the same codebase:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Client App (booking.minno.vn)</strong> - For customers to search and book appointments
              </li>
              <li>
                <strong>Manager App (manager.minno.vn)</strong> - For businesses to manage their salon operations
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Client App</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Location-based salon search with time and service filters</li>
                    <li>Detailed salon views with images, staff, services, reviews, and location</li>
                    <li>Appointment booking with staff-specific availability</li>
                    <li>Appointment history and upcoming bookings management</li>
                    <li>Authentication system: registration, login, password recovery</li>
                    <li>Responsive design optimized for all devices</li>
                    <li>Multi-language support</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Manager App</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Staff management with permissions, schedules, and time off</li>
                    <li>Customer, appointment, and revenue management</li>
                    <li>Service, review, and salon information management</li>
                    <li>Customer notifications</li>
                    <li>Role-based access control for different account types</li>
                    <li>Desktop-optimized interface</li>
                    <li>Multi-language support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold mb-3">Technical Implementation</h3>
            <p className="mb-4">
              The project was built using modern web technologies to ensure performance, scalability, and
              maintainability:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Next.js</strong> - For server-side rendering and routing, with rewrites/redirects to run both
                apps in one codebase
              </li>
              <li>
                <strong>React.js</strong> - For building the user interface components
              </li>
              <li>
                <strong>React Query</strong> - For efficient data fetching and state management
              </li>
              <li>
                <strong>Zustand</strong> - For lightweight global state management
              </li>
              <li>
                <strong>TailwindCSS, SCSS, MUI</strong> - For building the user interface
              </li>
              <li>
                <strong>i18n</strong> - For multi-language support
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3">My Role & Contributions</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Developed the entire frontend for the Client App</li>
              <li>
                Contributed to key features in the Manager App including appointment creation, customer management, and
                authentication
              </li>
              <li>Implemented multi-language support using i18n</li>
              <li>Created responsive interfaces optimized for all devices</li>
              <li>Collaborated with backend and UI teams to ensure seamless user experience</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Outcomes & Impact</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Successfully delivered a dual-application system within a single codebase</li>
              <li>Created an intuitive booking experience for end users</li>
              <li>Provided businesses with comprehensive tools to manage their operations</li>
              <li>Built a scalable platform that can accommodate future feature additions</li>
            </ul>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">Project Details</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground">Client</div>
                    <div>Beauty Industry Client</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Team Size</div>
                    <div>3 Developers</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">My Role</div>
                    <div>Frontend Developer</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div>2023</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Live URLs</div>
                    <div className="flex flex-col gap-1">
                      <Link
                        href="https://booking.minno.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        booking.minno.vn <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                      <Link
                        href="https://manager.minno.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        manager.minno.vn <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React.js", "React Query", "Zustand", "TailwindCSS", "SCSS", "MUI", "i18n"].map(
                    (tech) => (
                      <Badge key={tech} variant="outline" className="bg-primary/10">
                        {tech}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="https://booking.minno.vn" target="_blank" rel="noopener noreferrer">
                  Visit Client App <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="https://manager.minno.vn" target="_blank" rel="noopener noreferrer">
                  Visit Manager App <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
