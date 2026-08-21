"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { CATEGORY_LABELS, type Category } from "@/types/product";
import ProductGrid from "@/components/product/ProductGrid";

const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "dress", label: "连衣裙" },
  { key: "top", label: "上衣" },
  { key: "skirt", label: "半身裙" },
  { key: "outer", label: "外套" },
  { key: "knit", label: "针织" },
  { key: "accessory", label: "配饰" },
];

export default function CollectionPage() {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);
  const currentLabel = active === "all" ? "全部" : CATEGORY_LABELS[active];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-4xl text-cocoa">商品橱窗</h1>
      <p className="mt-3 text-sm text-cocoa-light">
        {currentLabel} · 共 {filtered.length} 件
      </p>

      {/* 分类筛选 */}
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-brand-200 pb-5">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={`text-sm tracking-widest transition-colors ${
              active === f.key
                ? "text-cocoa underline underline-offset-8"
                : "text-cocoa-light hover:text-cocoa"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <ProductGrid products={filtered} />
      </div>
    </section>
  );
}