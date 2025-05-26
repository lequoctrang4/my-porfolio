import Image from "next/image";
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
        <Card key={study.id} className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full bg-[#EAEAEA]">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                fill
                className="object-contain"
              />
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
                    <h4 className="font-medium mb-2">Key Outcomes</h4>
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
                <Button
                  variant={"link"}
                  onClick={() => window.open(study.link, "_blank")}
                  className="text-primary flex items-center hover:underline"
                >
                  View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
