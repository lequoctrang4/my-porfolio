"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

import { skills, skillLevels } from "@/data/skills"
import type { Skill } from "@/types"

export function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set mounted to true on client
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    // Initial update after component mounts
    if (mounted) {
      // Small delay to ensure the container has rendered properly
      const timer = setTimeout(() => {
        updateDimensions()
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [mounted])

  // Add a separate effect for the resize listener
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    if (mounted) {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [mounted])

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  const filteredSkills = activeCategory ? skills.filter((skill) => skill.category === activeCategory) : skills

  // Only render the content after mounting to avoid hydration issues
  if (!mounted) {
    return <div className="h-[500px] border rounded-lg p-4 bg-background/50 backdrop-blur-sm"></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className={`px-3 py-1 rounded-full text-sm ${
            activeCategory === null ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {skillLevels.map((item) => (
          <div key={item.level} className="flex items-center gap-2 text-sm">
            <span className="font-medium">{item.level}:</span>
            <span className="text-muted-foreground">{item.description}</span>
          </div>
        ))}
      </div>

      <div
        ref={containerRef}
        className="relative h-[500px] border rounded-lg p-4 bg-background/50 backdrop-blur-sm"
        data-skill-bubble
      >
        {dimensions.width > 0 &&
          dimensions.height > 0 &&
          filteredSkills.map((skill, index) => {
            // Calculate positions in a circular pattern
            const angle = (index * 2 * Math.PI) / filteredSkills.length
            const radius = Math.min(dimensions.width, dimensions.height) * 0.35
            const x = dimensions.width / 2 + radius * Math.cos(angle) - 50
            const y = dimensions.height / 2 + radius * Math.sin(angle) - 50

            // Adjust color for dark mode visibility
            const isDarkMode = theme === "dark"
            const bubbleColor = isDarkMode && skill.color === "#000000" ? "#FFFFFF" : skill.color

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x,
                  y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="absolute w-[100px] h-[100px] flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: `${bubbleColor}20`,
                  border: `2px solid ${bubbleColor}`,
                  borderRadius: "50%",
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="text-center">
                  <div className="font-medium text-sm">{skill.name}</div>
                </div>
              </motion.div>
            )
          })}

        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card p-4 rounded-lg shadow-lg z-20 w-[200px]"
          >
            <h3 className="font-bold">{hoveredSkill.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">{hoveredSkill.category}</p>
            <div className="mt-2 text-sm font-medium" style={{ color: hoveredSkill.color }}>
              {hoveredSkill.level}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
