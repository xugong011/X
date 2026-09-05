"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { getProductBySlug } from "@/data/products";
import { bundleMap, BUNDLE_DISCOUNT } from "@/data/bundles";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/components/cart/CartProvider";

/** 详情页「搭配一套更优惠」组合推荐 */
export default function BundleOffer({ product }: { product: Product }) {
  const partners = (bundleMap[product.slug] ?? [])
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => !!p)
    .slice(0, 2);

  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (partners.length === 0) return null;

  const all = [product, ...partners];
  const total = all.reduce((sum, p) => sum + p.price, 0);
  const bundlePrice = total - BUNDLE_DISCOUNT;

  function handleAddAll() {
    for (const p of all) {
      addItem({ slug: p.slug, size: p.sizes[0], color: p.colors[0] }, 1);
    }
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="mt-16 border-t border-brand-200 pt-10">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-2xl text-cocoa">搭配一套更优惠</h2>
        <span className="text-xs tracking-widest text-cocoa-light">
          组合立减 {formatPrice(BUNDLE_DISCOUNT)}
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-stretch">
        {all.map((p, i) => (
          <div key={p.slug} className="flex items-center gap-6">
            {i > 0 && (
              <span className="hidden font-display text-2xl text-brand-300 md:block">+</span>
            )}
            <Link href={`/collection/${p.slug}`} className="group flex flex-1 items-center gap-4">
              <div className="relative h-28 w-20 shrink-0 overflow-hidden bg-brand-100">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div>
                <p className="text-sm text-cocoa transition-opacity group-hover:opacity-70">
                  {p.name}
                </p>
                <p className="mt-1 text-xs text-cocoa-light">{formatPrice(p.price)}</p>
                {i === 0 && (
                  <span className="mt-1 inline-block bg-brand-100 px-2 py-0.5 text-[10px] tracking-widest text-cocoa-light">
                    当前商品
                  </span>
                )}
              </div>
            </Link>
          </div>
        ))}

        {/* 组合价 */}
        <div className="flex flex-col justify-center border-t border-brand-200 pt-4 md:ml-auto md:border-0 md:pt-0 md:pl-8">
          <p className="text-xs text-cocoa-light">
            合计 <span className="line-through">{formatPrice(total)}</span>
          </p>
          <p className="mt-1 font-display text-2xl text-cocoa">
            {formatPrice(bundlePrice)}
          </p>
          <button
            type="button"
            onClick={handleAddAll}
            className="mt-3 bg-brand-500 px-6 py-2.5 text-xs tracking-widest text-white transition-colors hover:bg-brand-700"
          >
            {added ? "已加入购物车" : "一键购入整套"}
          </button>
        </div>
      </div>
    </div>
  );
}
