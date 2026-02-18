import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Star, Zap, Package, Check, MessageCircle, Mouse } from "lucide-react"

// Metadata for SEO
export const metadata = {
  title: "Mimo Pop - Funkos Personalizados e Action Figures Únicos",
  description: "Transforme memórias em arte! Funkos personalizados, action figures e presentes únicos feitos com amor e criatividade.",
}

// Product data

// Pricing data


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigation */}
     

      {/* Hero Section */}
     

      {/* Products Section */}
      

          {/* Products Grid */}
          

      {/* Pricing Section */}
      
      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm bg-purple-100 text-purple-700 border-purple-200">
              ✨ Como Funciona
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simples e{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                descomplicado
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Em poucos passos, você tem seu mimo personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Escolha", desc: "Selecione o tipo de produto que deseja", icon: "🎯" },
              { step: "2", title: "Envie fotos", desc: "Mande as referências pelo WhatsApp", icon: "📸" },
              { step: "3", title: "Aprovação", desc: "Receba o esboço e aprove o design", icon: "✅" },
              { step: "4", title: "Receba", desc: "Seu mimo chega em casa com carinho", icon: "🎁" },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="text-orange-500 text-sm font-medium mb-1">Passo {item.step}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para criar seu mimo?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato agora e transforme suas ideias em presentes inesquecíveis!
          </p>
          <Button
            size="lg"
            className="bg-white text-rose-600 hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Mimo Pop
              </span>
              <p className="text-background/60 text-sm mt-2">
                Transformando memórias em arte ✨
              </p>
            </div>

            <div className="flex gap-6 text-sm text-background/60">
              <Link href="#produtos" className="hover:text-background transition-colors">Produtos</Link>
              <Link href="#precos" className="hover:text-background transition-colors">Preços</Link>
              <Link href="#como-funciona" className="hover:text-background transition-colors">Como Funciona</Link>
              <Link href="#contato" className="hover:text-background transition-colors">Contato</Link>
            </div>
          </div>

          <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/40">
            <p>© 2026 Mimo Pop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}