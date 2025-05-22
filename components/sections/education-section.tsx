import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"
import { certificates, education } from "@/data/education"

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      {education.map((edu, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">{edu.period}</div>
            </div>
          </CardHeader>
          {edu.description && (
            <CardContent>
              <p>{edu.description}</p>
            </CardContent>
          )}
        </Card>
      ))}

      <h2 className="text-3xl font-bold my-8">Certificates</h2>
      {certificates.map((cert, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{cert.name}</CardTitle>
                {cert.description && <CardDescription>{cert.description}</CardDescription>}
              </div>
              <div className="text-sm text-muted-foreground">{cert.date}</div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </Section>
  )
}
