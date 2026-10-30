import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DesignSwitcher } from "@/components/design-switcher";
import type { Design } from "@/lib/designs";

export function Portfolio({ design = "studio" }: { design?: Design }) {
  return (
    <div className="portfolio min-h-screen bg-background text-foreground" data-design={design}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <div className="container"><DesignSwitcher design={design} /></div>
      <main id="main-content" className="container">
        <HeroSection design={design} />
        <div className="portfolio-sections">
          <AboutSection />
          <CaseStudiesSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
