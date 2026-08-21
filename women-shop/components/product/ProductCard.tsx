import Link from "next/link";
import type { Product } from "@/types/product";
import { CATEGORY_LABELS } from "@/types/product";
import { formatPrice } from "@/lib/utils";

// 占位渐变（商品没有真实图片时使用）
const GRADIENTS = [
  "from-brand-100 via-brand-200 to-brand-300",
  "from-brand-100 via-cream to-lilac",
  "from-cream via-blush to-brand-200",
  "from-lilac via-brand-100 to-blush",
];

function pickGradient(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 997;
  }
  return GRADIENTS[hash % GRADIENTS.length];
}

export default function ProductCard({ product }: { product: Product }) {
  const gradient = pickGradient(product.slug);

  return (
    <Link
      href={`/collection/${product.slug}`}
      className="group overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1.5"
    >
      {/* 图片占位 / 后续替换为 <Image> */}
      <div
        className={`relative aspect-[3/4] w-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <span className="text-6xl drop-shadow-sm select-none">🧸</span>
        {product.tags.includes("热卖") && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-500 px-2.5 py-1 text-xs font-medium text-white">
            HOT
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-cocoa-light">{CATEGORY_LABELS[product.category]}</p>
        <h3 className="mt-1 truncate font-medium text-cocoa group-hover:text-brand-600">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-brand-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-cocoa-light line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}