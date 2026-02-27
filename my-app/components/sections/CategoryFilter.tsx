import type { ProductCategory, CategoryFilter as CategoryFilterType } from "@/types"

interface CategoryFilterProps {
  categories: CategoryFilterType[]
  activeCategory: ProductCategory
  onCategoryChange: (category: ProductCategory) => void
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => onCategoryChange(key)}
          className={`flex items-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 shadow-sm
            ${activeCategory === key
              ? "bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-orange-200 scale-105"
              : "bg-white/70 text-amber-600 hover:bg-white backdrop-blur-md"
            }`}
        >
          <Icon fill="currentColor" className="mr-2 h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  )
}
