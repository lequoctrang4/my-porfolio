import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/section";
import { workExperiences } from "@/data/experience";
import type { WorkExperience } from "@/types";

function CompanyMark({ experience }: { experience: WorkExperience }) {
  const mark = experience.logo ? (
    <Image src={experience.logo} alt="" className="h-12 w-12 rounded-lg object-contain" width={48} height={48} />
  ) : <span className="company-monogram" aria-hidden="true">CB</span>;

  return experience.website ? (
    <a href={experience.website} target="_blank" rel="noopener noreferrer" aria-label={experience.company} className="shrink-0 hover:opacity-80">{mark}</a>
  ) : <span className="shrink-0">{mark}</span>;
}

export function ExperienceSection() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-6">
        {workExperiences.map((experience) => (
          <Card key={experience.id} id={`experience-${experience.id}`} className="scroll-mt-24">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex gap-4 items-center min-w-0">
                  <CompanyMark experience={experience} />
                  <div className="min-w-0">
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription className="mt-1">{experience.company}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:items-end shrink-0 text-sm text-muted-foreground">
                  {experience.current && <Badge variant="secondary">Current</Badge>}
                  <span>{experience.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {experience.responsibilities.map((responsibility) => (
                  <div key={responsibility.title}>
                    <h3 className="font-medium mb-2">{responsibility.title}</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {responsibility.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
