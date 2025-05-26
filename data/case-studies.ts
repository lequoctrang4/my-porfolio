import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "urbox-plus",
    title: "UrBox Plus Membership System",
    client: "UrBox",
    description:
      "Designed and developed a comprehensive membership system for UrBox that enhances user loyalty through tiered membership levels, personalized rewards, and exclusive benefits.",
    image: "/urbox.svg?height=200&width=400",
    technologies: [
      "React Native",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Next.js",
    ],
    outcomes: [
      "Increased user engagement and retention",
      "Seamless integration with existing loyalty programs",
      "Enhanced user experience through personalized rewards",
      "Improved partner program integration",
    ],
    link: "#",
  },
  {
    id: "booking-platform",
    title: "B2B Appointment Management System",
    client: "Beauty Industry Client",
    description:
      "Developed a comprehensive B2B appointment booking platform for beauty services with dual applications for customers and business managers, featuring location-based search, staff management, and detailed analytics.",
    image: "/minno.svg?height=200&width=400",
    technologies: [
      "Next.js",
      "React.js",
      "React Query",
      "Zustand",
      "TailwindCSS",
      "SCSS",
      "MUI",
      "i18n",
    ],
    outcomes: [
      "Created a dual-application system within a single codebase",
      "Implemented location-based salon search and availability checking",
      "Built a comprehensive management system for business owners",
      "Delivered a fully responsive, multi-language booking experience",
      "Integrated role-based access control for different user types",
    ],
    link: "https://minnonow.com",
  },
  {
    id: "kfund24",
    title: "Kfund24 Financial Platform",
    client: "Kfund24",
    description:
      "Developed a promotional website for a financial program targeting Korean SMEs, focusing on responsive design and optimal user experience across devices.",
    image: "/kfund.png?height=200&width=400",
    technologies: ["ReactJS", "SCSS", "REST API", "Responsive Design"],
    outcomes: [
      "Created a fully responsive website optimized for both mobile and desktop",
      "Implemented efficient frontend logic using React hooks and state management",
      "Integrated APIs for dynamic content display",
      "Improved site performance and loading times",
    ],
    link: "https://www.kfund24.com/",
  },
  {
    id: "fashion-fusion",
    title: "Fashion Fusion App Clothe",
    client: "E-commerce Startup",
    description:
      "Designed and developed a comprehensive fashion e-commerce platform with advanced features including product recommendations, image search, and secure payment processing.",
    image: "/HomePage.png?height=200&width=400",
    technologies: [
      "React Native",
      "Node.js",
      "Redux Toolkit",
      "React Query",
      "TypeScript",
      "Prisma",
    ],
    outcomes: [
      "Increased user engagement by 45%",
      "Reduced cart abandonment by 30%",
      "Improved search accuracy by 60%",
      "Streamlined checkout process",
    ],
    link: "https://drive.google.com/file/d/1Kv36S6JKnxEPmquTXa4gFg9Loge_EUb2/view?usp=sharing",
  },
  // {
  //   id: "bankhub-console",
  //   title: "BankHub Console",
  //   client: "FinTech Company",
  //   description:
  //     "Created a unified banking dashboard that allows users to manage multiple bank accounts in one place, with transaction tracking, search functionality, and detailed analytics.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   technologies: [
  //     "Node.js",
  //     "React",
  //     "TypeScript",
  //     "Prisma",
  //     "Zod",
  //     "React Query",
  //     "ChartJs",
  //   ],
  //   outcomes: [
  //     "Consolidated data from 5+ banking APIs",
  //     "Reduced account management time by 70%",
  //     "Improved transaction visibility",
  //     "Enhanced security with multi-factor authentication",
  //   ],
  //   link: "https://console.bankhub.dev",
  // },
];
