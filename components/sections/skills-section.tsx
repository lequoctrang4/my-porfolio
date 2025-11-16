import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { skills } from "@/data/skills";

interface SkillCardProps {
  name: string;
  level: string;
}

function SkillCard({ name, level }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground">{level}</div>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  // Group skills by level for the technical skills tab
  const technicalSkills = skills.reduce<Record<string, string[]>>(
    (acc, skill) => {
      if (!acc[skill.level]) {
        acc[skill.level] = [];
      }
      acc[skill.level].push(skill.name);
      return acc;
    },
    {}
  );

  // Soft skills
  const softSkills = {
    Advanced: [
      "Problem Solving",
      "Team Working",
      "Time Management",
      "Communication",
      "AI Tools for Coding",
      "Independent Research",
    ],
    Intermediate: ["Project Management"],
  };

  return (
    <Section id="skills" title="Skills">
      <Tabs defaultValue="technical">
        <TabsList className="mb-6">
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="technical">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(technicalSkills).flatMap(([level, skillNames]) =>
              skillNames.map((name) => (
                <SkillCard key={name} name={name} level={level} />
              ))
            )}
          </div>
        </TabsContent>
        <TabsContent value="soft">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(softSkills).flatMap(([level, skillNames]) =>
              skillNames.map((name) => (
                <SkillCard key={name} name={name} level={level} />
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
