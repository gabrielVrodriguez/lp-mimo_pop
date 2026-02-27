"use client"

import { useState, useEffect } from "react"

/**
 * Hook que detecta se o usuário fez scroll além de um threshold.
 * @param threshold - pixels de scroll para ativar (padrão: 50)
 */
export function useScroll(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isScrolled
}
