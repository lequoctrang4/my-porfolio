import { Section } from "@/components/section"
import { personalInfo } from "@/data/personal-info"

export function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>
            I am a middle-level Fullstack Developer with over 2 years of experience in building modern web and mobile
            applications. I specialize in React, Node.js, and TypeScript, with a strong focus on creating responsive,
            accessible, and performant user interfaces.
          </p>
          <p>
            My expertise includes developing web services using Node.js, Django, .NET, and Spring Boot, as well as
            building frontend applications with React.js and React Native. I have experience with database technologies
            like MySQL and PostgreSQL, and I'm proficient in using Prisma ORM.
          </p>
          <p>
            I'm passionate about solving complex problems and continuously learning new technologies to enhance my
            skills and deliver high-quality software solutions.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(personalInfo.details).map(([key, value]) => (
              <div key={key}>
                <h3 className="font-medium">{key}</h3>
                <p className="text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
