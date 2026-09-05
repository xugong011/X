import { products } from "@/data/products";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

/** 「你可能也喜欢」同品类推荐 */
export default function SimilarProducts({ product }: { product: Product }) {
  const similar = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  if (similar.length === 0) return null;

  return (
    <div className="mt-16 border-t border-brand-200 pt-10">
      <h2 className="font-display text-2xl text-cocoa">你可能也喜欢</h2>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {similar.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
