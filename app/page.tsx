"use client";

import type React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { BlogSection } from "@/components/sections/blog-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CaseStudiesSection />
        {/* <BlogSection /> */}
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
