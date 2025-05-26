import type { BlogPost } from "@/types"

export const blogPosts: BlogPost[] = [
  {
    id: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    excerpt:
      "Learn how to optimize your React applications for better performance using memoization, code splitting, and more.",
    coverImage: "/placeholder.svg?height=200&width=400",
    date: "June 15, 2024",
    readTime: "8 min read",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: "nodejs-microservices",
    title: "Building Scalable Microservices with Node.js",
    excerpt:
      "A comprehensive guide to designing and implementing microservices architecture using Node.js and Express.",
    coverImage: "/placeholder.svg?height=200&width=400",
    date: "May 28, 2024",
    readTime: "12 min read",
    tags: ["Node.js", "Microservices", "Backend"],
  },
  {
    id: "react-native-animations",
    title: "Creating Fluid Animations in React Native",
    excerpt:
      "Explore techniques for building smooth, performant animations in React Native using the Animated API and Reanimated.",
    coverImage: "/placeholder.svg?height=200&width=400",
    date: "April 10, 2024",
    readTime: "10 min read",
    tags: ["React Native", "Animation", "Mobile"],
  },
]
