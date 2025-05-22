"use client"

import { useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  title?: string
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Section({ children, className = "", id, title }: SectionProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  if (inView) {
    controls.start("visible")
  }

  return (
    <motion.section
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      className={`py-12 scroll-mt-20 ${className}`}
      id={id}
    >
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
      {children}
    </motion.section>
  )
}
