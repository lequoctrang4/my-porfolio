export type Capability = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  evidence: { label: string; href: string };
  additionalEvidence?: { label: string; href: string };
};

// Capabilities and evidence come from the existing experience and project data.
// Add specific AI tools or workflows only after the portfolio owner confirms them.
export const capabilities: Capability[] = [
  {
    id: "mobile",
    title: "Build across mobile platforms",
    description:
      "Build with React Native and Expo, work on native iOS and Android implementations in Swift and Kotlin, and connect authentication, SDKs and purchase flows.",
    tools: ["React Native / Expo", "Swift / SwiftUI", "Kotlin / Compose", "RevenueCat"],
    evidence: { label: "BookWise: native iOS & Android migration", href: "#project-bookwise-native" },
    additionalEvidence: { label: "BookWise: app, web & subscriptions", href: "#project-bookwise" },
  },
  {
    id: "product",
    title: "Turn business flows into products",
    description:
      "Translate booking, membership and rewards workflows into responsive interfaces, with localization and access control built in.",
    tools: ["Next.js", "React", "TypeScript"],
    evidence: { label: "In practice: B2B booking platform", href: "#project-booking-platform" },
  },
  {
    id: "systems",
    title: "Connect services & data",
    description:
      "Build APIs for mobile apps and management portals, work across relational and document databases, and connect real-time features.",
    tools: ["NestJS", "PostgreSQL", "MongoDB", "WebSocket"],
    evidence: { label: "In practice: UrBox membership system", href: "#project-urbox-plus" },
  },
  {
    id: "ai",
    title: "Build with AI, across the stack",
    description:
      "Use AI vibe coding across app, web and native code. Build AI-powered product flows, from drawing uploads and generation jobs to animated pets with persistent local progress.",
    tools: ["AI vibe coding", "Generation workflows", "API integration", "Local persistence"],
    evidence: { label: "AI Pet: drawing-to-companion workflow", href: "#project-ai-pet" },
  },
];

export const workingPrinciples = [
  { title: "Product thinking", description: "Start with the user flow and the business problem." },
  { title: "AI vibe coding", description: "Work with AI across app, web and native code." },
  { title: "Production care", description: "Follow through on releases, crashes and performance issues." },
];
