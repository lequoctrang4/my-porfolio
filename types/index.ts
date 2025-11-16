import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Common types used throughout the application
export type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Proficient" | "Intermediate" | "Beginner";
  category: string;
  color: string;
};

export type WorkExperience = {
  title: string;
  company: string;
  period: string;
  logo: string | StaticImport;
  description?: string;
  website: string;
  responsibilities: {
    title: string;
    items: string[];
  }[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export type Certificate = {
  name: string;
  issuer?: string;
  date: string;
  description?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  technologies: string[];
  outcomes: string[];
  link?: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  summary: string;
  details: {
    [key: string]: string;
  };
};
