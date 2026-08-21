"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/components/cart/CartProvider";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({ slug: product.slug, size, color }, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div>
      {/* 颜色 */}
      <div className="mt-8">
        <h3 className="text-xs tracking-widest text-cocoa">颜色</h3>
        <div className="mt-3 flex gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`颜色 ${c}`}
              onClick={() => setColor(c)}
              style={{ backgroundColor: c }}
              className={`h-7 w-7 rounded-full ring-1 transition ${
                color === c
                  ? "ring-2 ring-brand-500 ring-offset-2"
                  : "ring-brand-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 尺码 */}
      <div className="mt-6">
        <h3 className="text-xs tracking-widest text-cocoa">尺码</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`border px-4 py-1.5 text-sm transition ${
                size === s
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-brand-300 text-cocoa hover:border-brand-500"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* 数量 */}
      <div className="mt-6 flex items-center gap-4">
        <h3 className="text-xs tracking-widest text-cocoa">数量</h3>
        <div className="flex items-center border border-brand-300">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1.5 text-cocoa hover:bg-brand-50"
          >
            -
          </button>
          <span className="w-10 text-center text-sm">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1.5 text-cocoa hover:bg-brand-50"
          >
            +
          </button>
        </div>
      </div>

      {/* 加入购物车 */}
      <button
        type="button"
        onClick={handleAdd}
        className="mt-8 w-full bg-brand-500 py-3.5 text-sm tracking-widest text-white transition-colors hover:bg-brand-700"
      >
        {added ? "已加入" : "加入购物车"}
      </button>
    </div>
  );
}