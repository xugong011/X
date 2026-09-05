import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { CATEGORY_LABELS } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import AddToCart from "@/components/product/AddToCart";
import ProductGallery from "@/components/product/ProductGallery";
import SizeChart from "@/components/product/SizeChart";
import WishlistButton from "@/components/wishlist/WishlistButton";
import HistoryTracker from "@/components/history/HistoryTracker";
import Reviews from "@/components/product/Reviews";
import SimilarProducts from "@/components/product/SimilarProducts";
import BundleOffer from "@/components/product/BundleOffer";
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
        {/* 商品图库（多图轮播） */}
        <div className="md:sticky md:top-24 md:self-start">
          <ProductGallery
            name={product.name}
            images={product.images}
            image={product.image}
          />
        </div>

        {/* 商品信息 */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cocoa-light">
                {CATEGORY_LABELS[product.category]}
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight text-cocoa">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-cocoa-light">{product.nameEn}</p>
            </div>
            <WishlistButton slug={product.slug} price={product.price} />
          </div>

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

          {/* 尺码对照表 */}
          {product.sizeChart && <SizeChart sizeChart={product.sizeChart} />}

          {/* 下单引导 */}
          <div className="mt-8 border-t border-brand-200 pt-6">
            <p className="text-sm text-cocoa-light">
              下单问题可加微信 {siteConfig.wechat}
            </p>
          </div>
        </div>
      </div>

      {/* 搭配套装 */}
      <BundleOffer product={product} />

      {/* 评价晒单 */}
      <Reviews slug={product.slug} />

      {/* 相似推荐 */}
      <SimilarProducts product={product} />
    </section>
  );
}