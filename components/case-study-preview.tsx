import Image from "next/image";
import { assetPath } from "@/lib/assets";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/case-studies";
import { Button } from "./ui/button";

export function CaseStudyPreview() {
  return (
    <div className="space-y-8">
      {caseStudies.map((study) => (
        <Card key={study.id} id={`project-${study.id}`} className="overflow-hidden scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full bg-[#EAEAEA]">
              {study.image ? <Image
                src={assetPath(study.image)}
                alt={study.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              /> : <div className="project-type-cover">
                <span className="project-cover-label">{study.id === "ai-pet" ? "AI PRODUCT" : "PRODUCT ENGINEERING"}</span>
                <span className="project-cover-name">{study.id === "ai-pet" ? "AI Pet" : "BookWise"}</span>
                <span className="project-cover-platform">{study.id === "bookwise-native" ? "SWIFT / KOTLIN" : study.id === "ai-pet" ? "DRAW → GENERATE → CARE" : "READ / LISTEN / DISCOVER"}</span>
              </div>}
            </div>
            <div className="flex flex-col p-6">
              <CardHeader className="p-0 pb-4">
                <div className="mb-2">
                  <Badge variant="outline">{study.client}</Badge>
                </div>
                <CardTitle className="text-2xl">{study.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 py-4 flex-grow">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Project highlights</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {study.outcomes.map((outcome, index) => (
                        <li key={index} className="text-sm">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-4">
                {study.link && study.link !== "#" ? (
                  <Button variant="link" asChild className="px-0 text-primary">
                    <a href={study.link} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                ) : <span className="text-sm text-muted-foreground">Project overview</span>}
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
