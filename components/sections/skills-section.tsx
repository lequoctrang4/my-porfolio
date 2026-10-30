import { ArrowUpRight, Blocks, Braces, Smartphone, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/section";
import { capabilities, workingPrinciples } from "@/data/capabilities";

const icons = { mobile: Smartphone, product: Blocks, systems: Braces, ai: Sparkles };

export function SkillsSection() {
  return (
    <Section id="skills" title="What I bring">
      <div className="capabilities-intro">
        <p className="capabilities-lead">From a product problem<br /><span>to something people can use.</span></p>
        <p className="capabilities-context">Mobile, web, backend and AI integration — grounded in projects I’ve worked on. Each capability below connects to that work.</p>
      </div>
      <div className="capabilities-grid">
        {capabilities.map((capability, index) => {
          const Icon = icons[capability.id as keyof typeof icons];
          return (
            <Card key={capability.id} className="capability-card">
              <div className="capability-topline"><Icon size={22} aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul className="capability-tools" aria-label={`Tools for ${capability.title}`}>
                {capability.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
              <div className="capability-evidence-links">
                {[capability.evidence, capability.additionalEvidence].filter((item) => item !== undefined).map((evidence) => (
                  <a key={evidence.href} href={evidence.href} className="capability-evidence">{evidence.label}<ArrowUpRight size={15} aria-hidden="true" /></a>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
      <div className="working-principles" aria-label="How I work">
        <span className="principles-label">HOW I WORK</span>
        {workingPrinciples.map((principle) => <div key={principle.title}><h3>{principle.title}</h3><p>{principle.description}</p></div>)}
      </div>
    </Section>
  );
}
