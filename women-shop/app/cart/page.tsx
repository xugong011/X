"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clear, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-cocoa">购物车</h1>
        <p className="mt-4 text-cocoa-light">购物车还是空的</p>
        <div className="mt-8">
          <Button href="/collection">去逛逛</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="font-display text-4xl text-cocoa">购物车</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        {/* 商品列表 */}
        <div className="divide-y divide-brand-200 lg:col-span-2">
          {items.map((item) => {
            const product = getProductBySlug(item.slug);
            if (!product) return null;
            return (
              <div
                key={`${item.slug}-${item.size}-${item.color}`}
                className="flex gap-4 py-6"
              >
                {/* 缩略图占位 */}
                <Link
                  href={`/collection/${product.slug}`}
                  className="flex h-28 w-20 shrink-0 items-center justify-center bg-brand-100"
                >
                  <span className="font-display text-sm tracking-widest text-brand-400">
                    {product.nameEn.charAt(0)}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/collection/${product.slug}`}
                        className="text-sm text-cocoa transition-opacity hover:opacity-70"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs text-cocoa-light">
                        尺码：{item.size} · 颜色：
                        <span
                          className="ml-1 inline-block h-3 w-3 rounded-full align-middle ring-1 ring-brand-300"
                          style={{ backgroundColor: item.color }}
                        />
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug, item.size, item.color)}
                      className="text-xs text-cocoa-light transition-colors hover:text-cocoa"
                    >
                      移除
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border border-brand-300">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.slug,
                            item.size,
                            item.color,
                            item.quantity - 1,
                          )
                        }
                        className="px-3 py-1 text-cocoa hover:bg-brand-50"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.slug,
                            item.size,
                            item.color,
                            item.quantity + 1,
                          )
                        }
                        className="px-3 py-1 text-cocoa hover:bg-brand-50"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-cocoa">
                      {formatPrice(product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 合计 */}
        <div className="h-fit border border-brand-200 bg-white p-6">
          <h2 className="font-display text-lg text-cocoa">订单合计</h2>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-cocoa-light">商品总额</span>
            <span className="text-cocoa">{formatPrice(totalAmount)}</span>
          </div>
          <p className="mt-2 text-xs text-cocoa-light">
            运费与优惠以微信确认为准
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <Button href="/contact">去结算</Button>
            <button
              type="button"
              onClick={clear}
              className="text-center text-xs text-cocoa-light transition-colors hover:text-cocoa"
            >
              清空购物车
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}