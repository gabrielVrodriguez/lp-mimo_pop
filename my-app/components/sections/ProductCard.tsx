import Image from "next/image"
import type { Product } from "@/types"
import { tagColorMap } from "@/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group h-full rounded-3xl border border-white/60 bg-white/80 p-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/15 backdrop-blur-xl">
      <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-linear-to-br from-amber-100 via-amber-200 to-amber-400">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
        />
        {product.tag && (
          <div
            className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg bg-linear-to-br ${tagColorMap[product.tagColor || "orange"]}`}
          >
            {product.tag}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-1 text-lg font-bold text-stone-900">{product.name}</h3>
        <p className="mb-2 min-h-10 text-sm leading-relaxed text-stone-500">
          {product.description}
        </p>
        <div className="h-px bg-linear-to-r from-transparent via-orange-200 to-transparent my-2" />
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-stone-400">A partir de</span>
          <span className="bg-linear-to-br from-orange-500 to-orange-600 bg-clip-text text-3xl font-black text-transparent">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  )
}
