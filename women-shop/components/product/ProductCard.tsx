import Link from "next/link";
import type { Product } from "@/types/product";
import { CATEGORY_LABELS } from "@/types/product";
import { formatPrice, toInitials } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/collection/${product.slug}`} className="group">
      {/* 占位图 */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-100 transition-colors duration-300 group-hover:bg-brand-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="select-none font-display text-4xl tracking-[0.25em] text-brand-400 transition-colors group-hover:text-brand-500">
            {toInitials(product.nameEn)}
          </span>
        </div>
        {product.tags.includes("热卖") && (
          <span className="absolute left-3 top-3 bg-brand-500 px-2 py-0.5 text-[10px] tracking-widest text-white">
            HOT
          </span>
        )}
      </div>

      <div className="pt-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-cocoa-light">
          {CATEGORY_LABELS[product.category]}
        </p>
        <h3 className="mt-1.5 truncate text-sm text-cocoa transition-opacity group-hover:opacity-70">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-cocoa">
          {formatPrice(product.price)}
          {product.originalPrice && (
            <span className="ml-2 text-cocoa-light line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}