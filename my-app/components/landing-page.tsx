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
const products = [
  {
    id: 1,
    name: "Funko Personalizado",
    price: "R$ 150",
    image: "/funko-single.png",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    id: 2,
    name: "Casal em Funko",
    price: "R$ 280",
    image: "/funko-couple.png",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    id: 3,
    name: "Action Figure Custom",
    price: "R$ 200",
    image: "/action-figure.png",
    bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
  },
]

// Pricing data
const pricingPlans = [
  {
    id: 1,
    name: "Funko Personalizado",
    price: "150",
    description: "Perfeito para presentear alguém especial",
    icon: Star,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    features: [
      "1 boneco personalizado",
      "Baseado em foto",
      "Caixa decorativa",
      "Entrega em até 15 dias",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
  {
    id: 2,
    name: "Action Figure",
    price: "200",
    description: "Para os fãs de super-heróis e personagens",
    icon: Zap,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    features: [
      "1 figure articulado",
      "Alta qualidade",
      "Pose personalizada",
      "Base decorativa inclusa",
    ],
    popular: true,
    buttonVariant: "default" as const,
  },
  {
    id: 3,
    name: "Sob Encomenda",
    price: "Consulte",
    description: "Projetos especiais e complexos",
    icon: Package,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    features: [
      "Projetos únicos",
      "Múltiplos personagens",
      "Cenários e dioramas",
      "Orçamento personalizado",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigation */}
     

      {/* Hero Section */}
     

      {/* Products Section */}
      <section id="produtos" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm bg-yellow-100 text-yellow-700 border-yellow-200">
              🎁 Nossos Produtos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Conheça nossas{" "}
              <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">
                criações
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Cada peça é única e feita especialmente para você
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`${product.bgColor} p-6 aspect-square flex items-center justify-center relative`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" className="bg-white/90 backdrop-blur shadow-lg">
                      <Package className="w-4 h-4 mr-2" />
                      Ver detalhes
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg text-foreground">{product.name}</h3>
                  <p className="text-orange-500 font-medium">A partir de {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-gradient-to-b from-amber-50/50 to-orange-50/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm bg-amber-100 text-amber-700 border-amber-200">
              💰 Investimento
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preços que{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                cabem no bolso
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Valores podem variar de acordo com a complexidade do projeto
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => {
              const IconComponent = plan.icon
              return (
                <Card
                  key={plan.id}
                  className={`relative overflow-visible transition-all duration-300 hover:shadow-xl ${plan.popular ? 'ring-2 ring-orange-400 shadow-lg shadow-orange-500/20' : ''
                    }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1 shadow-lg">
                        ⭐ Mais pedido
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pt-8">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${plan.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-6 h-6 ${plan.iconColor}`} />
                    </div>

                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>

                    {/* Price */}
                    <div className="mt-4">
                      <span className="text-sm text-muted-foreground">A partir de </span>
                      <span className="text-3xl font-bold text-foreground">
                        {plan.price === "Consulte" ? "" : "R$ "}
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full ${plan.popular
                          ? 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg'
                          : ''
                        }`}
                    >
                      Quero esse!
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

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