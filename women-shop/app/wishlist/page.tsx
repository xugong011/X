"use client";

import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function WishlistPage() {
  const { slugList, remove, clear } = useWishlist();

  if (slugList.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-cocoa">心愿单</h1>
        <p className="mt-4 text-cocoa-light">还没有收藏的单品</p>
        <div className="mt-8">
          <Button href="/collection">去逛逛</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <div className="mb-8 flex items-end justify-between border-b border-brand-200 pb-6">
        <h1 className="font-display text-4xl text-cocoa">心愿单</h1>
        <button
          type="button"
          onClick={clear}
          className="text-xs text-cocoa-light transition-colors hover:text-cocoa"
        >
          清空心愿单
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {slugList.map((slug) => {
          const product = getProductBySlug(slug);
          if (!product) return null;
          return (
            <div key={slug} className="group">
              <div className="relative">
                <Link href={`/collection/${product.slug}`}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-100">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => remove(slug)}
                  aria-label="移除此收藏"
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center bg-white/80 text-cocoa transition-colors hover:text-brand-500"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="pt-4 text-center">
                <h3 className="truncate text-sm text-cocoa">{product.name}</h3>
                <p className="mt-1 text-sm text-cocoa">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}