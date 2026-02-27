import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/data/navigation"
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from "@/components/common/SocialIcons"
import type { SocialLink } from "@/types"

const socialLinks: SocialLink[] = [
  { icon: InstagramIcon, href: siteConfig.socialLinks.instagram, label: "Instagram" },
  { icon: WhatsAppIcon, href: siteConfig.whatsappUrl, label: "WhatsApp" },
  { icon: TikTokIcon, href: siteConfig.socialLinks.tiktok, label: "TikTok" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-footer-dark),var(--color-footer-darker))]">
      {/* Top decorative border */}
      <div className="h-1 w-full bg-[linear-gradient(to_right,var(--color-primary),var(--color-accent-pink),var(--color-accent-violet),var(--color-primary))]" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <span className="text-3xl font-black bg-clip-text text-transparent block mb-3 bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent-pink))]">
              {siteConfig.name}
            </span>
            <p className="text-sm leading-relaxed mb-6 text-white/50">
              {siteConfig.description} ✨
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/[0.08] text-white/50 hover:bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-dark))] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(249,115,22,0.3)]"
                >
                  <social.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all duration-200 no-underline flex items-center gap-2 group text-white/50 hover:text-orange-500 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <div className="space-y-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200 no-underline text-white/50 hover:text-green-500"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {siteConfig.whatsappNumber}
              </a>
              <p className="text-sm text-white/50">
                📍 {siteConfig.location}
              </p>
              <p className="text-sm text-white/50">
                📦 Enviamos para todo o Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados. Feito com ❤️
            </p>
            <p className="text-xs text-white/20">{siteConfig.slogan}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
