# Mimo Pop — Landing Page

Landing page desenvolvida para a **Mimo Pop**, loja de presentes personalizados da minha esposa, especializada em Funkos customizados, action figures e peças únicas feitas à mão.

O projeto nasceu com dois objetivos: entregar uma página funcional e bonita para o negócio dela, e ao mesmo tempo servir como campo de testes para explorar a arquitetura e as funcionalidades do **Next.js 15+ com App Router**.

---

## Objetivo

- Criar uma LP simples, rápida e visualmente atraente para converter visitantes em clientes via WhatsApp
- Explorar na prática a arquitetura do Next.js App Router, Server/Client Components, e o ecossistema moderno de React 19

---

## Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org) | Framework principal (App Router) |
| [React 19](https://react.dev) | UI |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilização |
| [Framer Motion](https://www.framer.com/motion) | Animações de scroll reveal |
| [Embla Carousel](https://www.embla-carousel.com) | Carrossel de produtos |
| [Radix UI](https://www.radix-ui.com) / [shadcn/ui](https://ui.shadcn.com) | Componentes de UI acessíveis |
| [Lucide React](https://lucide.dev) | Ícones |

---

## Arquitetura

```
my-app/
├── app/                  # App Router (layout, page, globals.css)
├── components/
│   ├── common/           # Componentes reutilizáveis (ScrollReveal, CtaButton, etc.)
│   ├── layout/           # Header, Footer, MobileNav
│   ├── sections/         # Seções da página (Hero, Produtos, Como Funciona, CTA)
│   └── ui/               # Primitivos de UI (shadcn/ui)
├── config/               # Configurações do site (nome, links, WhatsApp)
├── data/                 # Dados estáticos (produtos, steps, trust signals, etc.)
├── hooks/                # Custom hooks (useScrollReveal, useScroll)
├── lib/                  # Utilitários (cn)
├── public/               # Assets estáticos
└── types/                # Tipos compartilhados
```

### Decisões de arquitetura

- **Server Components por padrão** — apenas seções com interatividade (carrossel, filtro de categoria) são marcadas com `"use client"`
- **Dados como módulos TypeScript** — sem banco de dados ou API; os produtos e configurações ficam em `data/` e `config/`, fáceis de editar
- **`ScrollReveal` genérico com Framer Motion** — componente flexível que aceita `direction`, `delay`, `duration`, `distance`, `scaleFrom` e `as` (tag HTML), reutilizável em qualquer parte da página
- **Separação clara de responsabilidades** — layout, seções, componentes comuns e primitivos de UI em pastas distintas

---

## Seções da página

| Seção | Descrição |
|---|---|
| `HeroSection` | Apresentação principal com badge, título, CTA e trust signals |
| `ProductCarrousel` | Carrossel de produtos com filtro por categoria |
| `HowItWorks` | Passo a passo do processo de pedido (desktop e mobile) |
| `CtaSection` | Call-to-action final com link direto para o WhatsApp |

---

## Rodando localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 3001)
npm run dev

# Build de produção
npm run build
```

Acesse https://lp-mimo-pop.vercel.app/

---

## Aprendizados

- Composição de Server e Client Components no App Router
- Scroll reveal performático com `useInView` do Framer Motion sem `motion.create()` em render
- Integração do Embla Carousel com estado controlado (api, current, count) sem causar loops de re-render
- Tailwind CSS v4 com novas APIs de tema e utilitários

