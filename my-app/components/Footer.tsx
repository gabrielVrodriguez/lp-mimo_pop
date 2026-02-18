"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons"

const navLinks = [
    { href: "#produtos", label: "Produtos" },
    { href: "#precos", label: "Preços" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#contato", label: "Contato" },
]

const socialLinks = [
    { icon: faInstagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: faWhatsapp, href: "https://wa.me/13997567987", label: "WhatsApp" },
    { icon: faTiktok, href: "https://tiktok.com/", label: "TikTok" },
]

export function Footer() {
    return (
        <footer
            className="relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #1C1917, #0C0A09)",
            }}
        >
            {/* Top decorative border */}
            <div
                className="h-1 w-full"
                style={{
                    background: "linear-gradient(to right, #F97316, #EC4899, #8B5CF6, #F97316)",
                }}
            />

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    {/* Brand */}
                    <div>
                        <span
                            className="text-3xl font-black bg-clip-text text-transparent block mb-3"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #F97316, #EC4899)",
                            }}
                        >
                            Mimo Pop
                        </span>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                            Transformando memórias em arte. Cada peça é única,
                            feita à mão com amor e dedicação. ✨
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                                    style={{
                                        background: "rgba(255,255,255,0.08)",
                                        color: "rgba(255,255,255,0.5)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, #F97316, #EA580C)"
                                        e.currentTarget.style.color = "white"
                                        e.currentTarget.style.transform = "translateY(-2px)"
                                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(249,115,22,0.3)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.08)"
                                        e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                                        e.currentTarget.style.transform = "translateY(0)"
                                        e.currentTarget.style.boxShadow = "none"
                                    }}
                                >
                                    <FontAwesomeIcon icon={social.icon} style={{ width: "18px", height: "18px" }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5" style={{ letterSpacing: "0.1em" }}>
                            Navegação
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-all duration-200 no-underline flex items-center gap-2 group"
                                        style={{ color: "rgba(255,255,255,0.5)" }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#F97316"
                                            e.currentTarget.style.transform = "translateX(4px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                                            e.currentTarget.style.transform = "translateX(0)"
                                        }}
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ background: "#F97316" }}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5" style={{ letterSpacing: "0.1em" }}>
                            Contato
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="https://wa.me/13997567987"
                                className="flex items-center gap-3 text-sm transition-all duration-200 no-underline"
                                style={{ color: "rgba(255,255,255,0.5)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "#22C55E" }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)" }}
                            >
                                <FontAwesomeIcon icon={faWhatsapp} style={{ width: "16px", height: "16px" }} />
                                (13) 99756-7987
                            </a>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                                📍 Santos, SP - Brasil
                            </p>
                            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                                📦 Enviamos para todo o Brasil
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-12 pt-8"
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                            © 2026 Mimo Pop. Todos os direitos reservados. Feito com ❤️
                        </p>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                            Presentes que viram memórias
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
