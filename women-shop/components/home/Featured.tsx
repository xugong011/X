import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";

export default function Featured() {
  const featured = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-cocoa sm:text-3xl">本期精选 ♡</h2>
          <p className="mt-2 text-sm text-cocoa-light">
            店长私藏的几件，闭眼入都不会错
          </p>
        </div>
        <Button href="/collection" variant="outline" className="hidden sm:inline-flex">
          全部商品
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}