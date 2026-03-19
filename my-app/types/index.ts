import type { LucideIcon } from "lucide-react"

// --- Navigation ---

export interface NavLink {
  href: string
  label: string
  icon?: LucideIcon
  emoji?: string
}

// --- Products ---

export type ProductCategory =
  | "todos"
  | "funkos"
  | "casais"
  | "action"
  | "pets"
  | "profissoes"
  | "casamentos"
  | "familia"

  //

export interface Product {
  id: number
  name: string
  price: string
  category: ProductCategory
  cloudinaryId?: string
  tag?: string
  tagColor?: string
  rating: number
  description: string
}

export interface CategoryFilter {
  key: ProductCategory
  label: string
  icon: LucideIcon
}

// --- How It Works ---

export interface Step {
  step: string
  title: string
  description: string
  icon: string
  color: string
  gradient: string
  shadow: string
}

// --- Particles ---

export interface Particle {
  position: string
  size: string
  color: string
  delay?: string
  duration?: string
}

// --- Social ---

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
}
