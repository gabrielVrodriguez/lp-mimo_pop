import { siteConfig } from "@/config/site"
import { WhatsAppIcon } from "./SocialIcons"
import { cn } from "@/lib/utils"

interface CtaButtonProps {
  text: string
  variant?: "hero" | "section" | "compact" | "inverse"
  className?: string
}

const variantStyles = {
  hero: `inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-xl text-white no-underline
    bg-linear-to-r from-orange-500 to-orange-600
    shadow-[0_8px_0_var(--color-primary-deep),0_15px_40px_rgba(249,115,22,0.3)]
    hover:-translate-y-1 hover:shadow-[0_12px_0_var(--color-primary-deep),0_20px_50px_rgba(249,115,22,0.4)]
    active:translate-y-1 active:shadow-[0_2px_0_var(--color-primary-deep),0_5px_15px_rgba(249,115,22,0.2)]
    transition-all duration-300`,

  section: `inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white no-underline
    bg-linear-to-r from-orange-500 to-orange-600
    shadow-lg shadow-orange-500/30
    hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40
    transition-all duration-300`,

  compact: `flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white no-underline
    bg-linear-to-r from-orange-500 to-orange-600
    shadow-lg shadow-orange-500/30
    hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5
    active:translate-y-0.5 active:shadow-sm
    transition-all duration-300`,

  inverse: `inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl no-underline
    bg-white text-rose-500
    shadow-[0_8px_0_rgba(0,0,0,0.15),0_15px_40px_rgba(0,0,0,0.2)]
    hover:-translate-y-[3px] hover:shadow-[0_12px_0_rgba(0,0,0,0.15),0_20px_50px_rgba(0,0,0,0.25)]
    active:translate-y-[4px] active:shadow-[0_2px_0_rgba(0,0,0,0.15),0_5px_15px_rgba(0,0,0,0.15)]
    transition-all duration-300`,
}

const iconSizes = {
  hero: "w-8 h-8",
  section: "w-4 h-4",
  compact: "w-4 h-4",
  inverse: "w-7 h-7",
}

export function CtaButton({ text, variant = "section", className }: CtaButtonProps) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variantStyles[variant], className)}
    >
      <WhatsAppIcon className={iconSizes[variant]} />
      {text}
    </a>
  )
}
