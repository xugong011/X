import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";

export default function Featured() {
  const featured = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between border-b border-brand-200 pb-6">
        <div>
          <h2 className="font-display text-3xl text-cocoa">精选单品</h2>
          <p className="mt-2 text-sm text-cocoa-light">店长私藏的几件，闭眼入都不会错</p>
        </div>
        <Button href="/collection" variant="outline" className="hidden sm:inline-flex">
          全部商品
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}