"use client"

import type React from "react"
import { useEffect, useState } from "react"

import { useScrollTo } from "@/hooks/use-scroll-to"

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ScrollLink({ href, children, className = "" }: ScrollLinkProps) {
  const { scrollToHash } = useScrollTo()
  const [mounted, setMounted] = useState(false)

  // Set mounted to true on client
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (href.startsWith("#") && mounted) {
      scrollToHash(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
