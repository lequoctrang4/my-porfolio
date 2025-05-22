"use client"

import { useCallback } from "react"

export function useScrollTo() {
  const scrollToElement = useCallback((elementId: string) => {
    // Only run on client side
    if (typeof window === "undefined") return

    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  const scrollToHash = useCallback(
    (hash: string) => {
      // Only run on client side
      if (typeof window === "undefined") return

      // Remove the # from the hash
      const id = hash.replace("#", "")
      scrollToElement(id)
    },
    [scrollToElement],
  )

  return { scrollToElement, scrollToHash }
}
