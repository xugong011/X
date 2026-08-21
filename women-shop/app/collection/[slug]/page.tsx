import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { CATEGORY_LABELS } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
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
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* 面包屑 */}
      <nav className="mb-6 text-sm text-cocoa-light">
        <Link href="/collection" className="hover:text-brand-600">
          商品橱窗
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cocoa">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        {/* 主图占位 */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-blush to-lilac shadow-soft">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl drop-shadow-sm">👗</span>
          </div>
          {product.tags.includes("热卖") && (
            <span className="absolute left-5 top-5 rounded-full bg-brand-500 px-3 py-1.5 text-sm font-medium text-white">
              🔥 热卖单品
            </span>
          )}
        </div>

        {/* 商品信息 */}
        <div>
          <p className="text-sm text-cocoa-light">{CATEGORY_LABELS[product.category]}</p>
          <h1 className="mt-2 text-3xl font-bold text-cocoa">{product.name}</h1>
          <p className="mt-1 text-sm text-cocoa-light">{product.nameEn}</p>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-brand-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-cocoa-light line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* 标签 */}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 描述 */}
          <p className="mt-6 text-sm leading-relaxed text-cocoa-light">
            {product.description}
          </p>

          {/* 颜色 */}
          <div className="mt-6">
            <h3 className="font-medium text-cocoa">颜色</h3>
            <div className="mt-3 flex gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="h-8 w-8 rounded-full ring-1 ring-brand-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* 尺码 */}
          <div className="mt-6">
            <h3 className="font-medium text-cocoa">尺码</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full border border-brand-200 px-4 py-1.5 text-sm text-cocoa"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* 下单引导 */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact">微信联系下单 ♡</Button>
            <p className="text-sm text-cocoa-light">
              添加微信 {siteConfig.wechat}，一对一选款
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}