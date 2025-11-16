import type { WorkExperience } from "@/types";

export const workExperiences: WorkExperience[] = [
  {
    title: "Mobile App Developer",
    logo: require("../public/btaskee-logo.png"),
    company: "bTaskee company limited",
    website: "https://www.btaskee.com/",
    period: "Jul 2025 - Present",
    responsibilities: [
      {
        title: "React Native Developer",
        items: [
          "Migrating the legacy bTaskee mobile application into a new Super App using re.pack architecture & Module Federation",
          "Managing app versions across environments (dev, staging, production)",
          "Managing and maintaining the remote module system in the Super App architecture",
          "Fixing bugs and handling crashes to improve app stability",
          "Integrating various third-party SDKs",
          "Implementing WebSocket for realtime functionalities",
          "Implementing authentication using Ory Kratos",
          "Integrating social login methods",
          "Integrating AI Agent into the mobile application",
          "Developing and integrating voice chat features",
          "Developing and integrating voice call features",
        ],
      },
      {
        title: "Key Achievements",
        items: [
          "Successfully migrated the legacy application into a scalable Super App architecture",
          "Stabilized and ensured smooth operation of the remote module system",
          "Reduced crash rates through proactive bug fixing and crash handling",
          "Unified authentication flow by integrating Ory Kratos and social login",
          "Integrated AI Agent into the mobile application",
          "Delivered voice chat and voice call functionalities into the app",
        ],
      },
    ],
  },
  {
    title: "Mobile App / Fullstack Developer",
    logo: require("../public/urbox-logo.png"),
    website: "https://urbox.vn/",
    company: "UrBox - Digital Rewards & Loyalty Solution",
    period: "Jul 2024 - Jul 2025",
    responsibilities: [
      {
        title: "React Native Developer",
        items: [
          "Developing the UrBox application for both Android and iOS platforms",
          "Building, enhancing, and revamping features like Membership programs to increase user loyalty",
          "Integrating partner programs, allowing users to redeem vouchers directly in the app",
          "Fixing bugs and optimizing application performance",
        ],
      },
      {
        title: "Backend Developer",
        items: [
          "Building and developing APIs for mobile apps and management portal systems using NestJS",
          "Developing APIs using FeathersJS for various management modules",
          "Contributing to the development of a partner reward system on the Next.js platform",
          "Working with MongoDB and PostgreSQL database management systems",
        ],
      },
      {
        title: "Frontend Developer (Next.js)",
        items: [
          "Building loyalty pages for customers, embedded in WebView on the app or used directly",
          "Revamping the old browser-based UI system using Next.js, improving performance and user experience",
        ],
      },
      {
        title: "Key Achievements",
        items: [
          "Developed the UrBox Plus project, a membership upgrade system for users",
          "Successfully revamped the partner program, seamlessly integrating it into the UrBox app",
          "Mastered and improved the performance of the loyalty system UI on the web",
          "Enhanced and stabilized the API system, quickly resolving production issues",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer",
    logo: require("../public/casso-logo.png"),
    company: "Casso",
    website: "https://casso.vn/",
    period: "Jun 2023 - May 2024",
    responsibilities: [
      {
        title: "Responsibilities",
        items: [
          "Developed web services using Node.js, Django, .NET, and Spring Boot",
          "Built websites using React.js with TypeScript, React Query, and Redux",
          "Developed demo checkout applications with React Native and Flutter for customers",
          "Worked with technologies including Express.js, Prisma, MySQL, and Socket.io",
          "Collaborated with cross-functional teams to deliver high-quality software solutions",
        ],
      },
    ],
  },
];
