import { Package, Heart, Zap, PawPrint, GraduationCap, Phone, FileQuestion, Sparkles, Cake, Users } from "lucide-react"
import type { NavLink, CategoryFilter } from "@/types"

export const navLinks: NavLink[] = [
  { href: "#produtos", label: "Produtos", icon: Package, emoji: "🛍️" },
  { href: "#como-funciona", label: "Como Funciona", icon: FileQuestion, emoji: "✨" },
  { href: "#contato", label: "Contato", icon: Phone, emoji: "💬" },
]

export const categories: CategoryFilter[] = [
  { key: "todos", label: "Todos", icon: Sparkles },
  { key: "funkos", label: "Funkos", icon: Package },
  { key: "casais", label: "Casais", icon: Heart },
  { key: "casamentos", label: "Casamentos", icon: Cake },
  { key: "action", label: "Action Figures", icon: Zap },
  { key: "pets", label: "Pets", icon: PawPrint },
  { key: "familia", label: "Família", icon: Users },
  
]
