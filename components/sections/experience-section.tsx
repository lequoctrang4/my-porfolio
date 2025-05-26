import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"
import { workExperiences } from "@/data/experience"

export function ExperienceSection() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-6">
        {workExperiences.map((experience, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.company}</CardDescription>
                </div>
                <div className="text-sm text-muted-foreground">{experience.period}</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {experience.responsibilities.map((responsibility, idx) => (
                  <div key={idx}>
                    <h3 className="font-medium mb-2">{responsibility.title}</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {responsibility.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
