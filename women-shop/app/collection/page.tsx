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
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-cocoa">商品橱窗</h1>
      <p className="mt-2 text-sm text-cocoa-light">
        {currentLabel} · 共 {filtered.length} 件
      </p>

      {/* 分类筛选 */}
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === f.key
                ? "bg-brand-500 text-white shadow-soft"
                : "border border-brand-200 bg-white text-cocoa hover:bg-brand-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <ProductGrid products={filtered} />
      </div>
    </section>
  );
}