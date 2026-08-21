import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { CATEGORY_LABELS } from "@/types/product";
import { formatPrice, toInitials } from "@/lib/utils";
import AddToCart from "@/components/product/AddToCart";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name ?? "商品" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      {/* 面包屑 */}
      <nav className="mb-8 text-xs tracking-widest text-cocoa-light">
        <Link href="/collection" className="transition-colors hover:text-cocoa">
          商品橱窗
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cocoa">{product.name}</span>
      </nav>

      <div className="grid gap-12 md:grid-cols-2">
        {/* 主图 */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-100 md:sticky md:top-24 md:self-start">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="select-none font-display text-8xl tracking-[0.3em] text-brand-300">
                {toInitials(product.nameEn)}
              </span>
            </div>
          )}
          {product.tags.includes("新品") && (
            <span className="absolute left-4 top-4 bg-brand-500 px-2.5 py-1 text-[11px] tracking-widest text-white">
              NEW
            </span>
          )}
        </div>

        {/* 商品信息 */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cocoa-light">
            {CATEGORY_LABELS[product.category]}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-cocoa">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-cocoa-light">{product.nameEn}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-2xl text-cocoa">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-cocoa-light line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="mt-6 leading-relaxed text-cocoa-light">
            {product.description}
          </p>

          {/* 规格选择 + 加入购物车 */}
          <AddToCart product={product} />

          {/* 标签 */}
          <div className="mt-8 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="bg-brand-100 px-3 py-1 text-xs text-cocoa-light"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 下单引导 */}
          <div className="mt-8 border-t border-brand-200 pt-6">
            <p className="text-sm text-cocoa-light">
              下单问题可加微信 {siteConfig.wechat}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}