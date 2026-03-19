"use client"

import { useState, useEffect } from "react"

/**
 * Hook que detecta se o usuário fez scroll além de um threshold.
 * @param threshold - pixels de scroll para ativar (padrão: 50)
 */
export function useScroll(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isScrolled
}
