"use client"

import { useState, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import { siteConfig } from "@/config/site"
import { products } from "@/data/products"
import { categories } from "@/data/navigation"
import type { ProductCategory } from "@/types"
import { ProductCard } from "./ProductCard"
import { CategoryFilter } from "./CategoryFilter"

export function ProductCarrousel() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("todos")
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory)

  const onApiChange = useCallback((newApi: CarouselApi) => {
    if (!newApi) return
    setApi(newApi)
    setCount(newApi.scrollSnapList().length)
    setCurrent(newApi.selectedScrollSnap())
    newApi.on("select", () => setCurrent(newApi.selectedScrollSnap()))
  }, [])

  const handleCategoryChange = (category: ProductCategory) => {
    setActiveCategory(category)
    api?.scrollTo(0)
  }

  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-linear-to-b from-surface-warm via-surface-orange to-surface-cream py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-4xl font-black tracking-tight md:text-6xl">
            Nossos{" "}
            <span className="bg-linear-to-r from-orange-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              mimos
            </span>{" "}
            incríveis
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-stone-500 md:text-xl">
            Cada peça é única, feita à mão com amor.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <Carousel
          setApi={onApiChange}
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-7xl"
        >
          <CarouselContent className="-ml-4">
            {filteredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-6 bg-white/90 border-0 shadow-xl" />
          <CarouselNext className="hidden md:flex -right-6 bg-white/90 border-0 shadow-xl" />
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {[...Array(count)].map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 
                ${current === i
                  ? "w-8 bg-linear-to-r from-orange-500 to-orange-600 shadow-md"
                  : "w-2.5 bg-stone-300"
                }`}
            />
          ))}
        </div>

        <p className="text-center mt-10 text-sm font-medium text-stone-400">
          💡 Valores podem variar de acordo com a complexidade do projeto.{" "}
          <a
            href={siteConfig.whatsappUrl}
            className="underline decoration-dotted text-orange-500 hover:text-orange-700 transition-colors duration-200"
          >
            Fale conosco!
          </a>
        </p>
      </div>
    </section>
  )
}
