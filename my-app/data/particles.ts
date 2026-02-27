import type { Particle } from "@/types"

export const defaultParticles: Particle[] = [
  {
    position: "top-[15%] left-[12%]",
    size: "w-16 h-16",
    color: "bg-amber-500/25",
    duration: "6s",
  },
  {
    position: "top-[60%] right-[10%]",
    size: "w-24 h-24",
    color: "bg-pink-500/25",
    delay: "1s",
    duration: "8s",
  },
  {
    position: "bottom-[20%] left-[30%]",
    size: "w-12 h-12",
    color: "bg-orange-500/25",
    delay: "2s",
    duration: "7s",
  },
]
