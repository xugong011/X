"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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

// 热门搜索词（标签云）
const HOT_WORDS = ["连衣裙", "真丝", "显瘦", "通勤", "国风", "外套", "配饰", "高级感"];

type SortKey = "default" | "price-asc" | "price-desc" | "new";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "default", label: "默认" },
  { key: "price-asc", label: "价格升序" },
  { key: "price-desc", label: "价格降序" },
  { key: "new", label: "新品优先" },
];

export default function CollectionPage() {
  const [active, setActive] = useState<Category | "all">("all");
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    let list =
      active === "all"
        ? products
        : products.filter((p) => p.category === active);

    const kw = keyword.trim().toLowerCase();
    if (kw) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(kw) ||
          p.nameEn.toLowerCase().includes(kw) ||
          p.tags.some((t) => t.toLowerCase().includes(kw)),
      );
    }

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "new":
        list = [
          ...list.filter((p) => p.tags.includes("新品")),
          ...list.filter((p) => !p.tags.includes("新品")),
        ];
        break;
      default:
        break;
    }

    return list;
  }, [active, keyword, sort]);

  const currentLabel = active === "all" ? "全部" : CATEGORY_LABELS[active];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-4xl text-cocoa">商品橱窗</h1>
      <p className="mt-3 text-sm text-cocoa-light">
        {currentLabel} · 共 {filtered.length} 件
      </p>

      {/* 大家都在搜（热门搜索词标签云） */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-xs tracking-widest text-cocoa-light">大家都在搜：</span>
        {HOT_WORDS.map((w) => (
          <button
            key={w}
            type="button"
            onClick={() => setKeyword(w)}
            className={`border px-3 py-1 text-xs transition ${
              keyword === w
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-brand-200 bg-white text-cocoa-light hover:border-brand-500 hover:text-cocoa"
            }`}
          >
            {w}
          </button>
        ))}
        <Link
          href="/compare"
          className="ml-auto text-xs text-cocoa-light underline underline-offset-4 transition-colors hover:text-cocoa"
        >
          商品对比 →
        </Link>
      </div>

      {/* 搜索 + 排序 */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="搜索商品名称或标签…"
            className="w-full border-b border-brand-300 bg-transparent py-2 pr-8 text-sm text-cocoa placeholder:text-cocoa-light focus:border-brand-500 focus:outline-none"
          />
          <span className="absolute right-0 top-2 text-cocoa-light">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-cocoa-light">排序</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-brand-300 bg-white px-3 py-1.5 text-sm text-cocoa focus:border-brand-500 focus:outline-none"
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

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