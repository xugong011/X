"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { CATEGORY_LABELS } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

const MAX_COMPARE = 3;

// 面料映射（演示数据）
const FABRICS: Record<string, string> = {
  "plain-white-collar-dress": "高支棉",
  "ink-slip-dress": "桑蚕丝缎",
  "silk-cloud-shirt": "100% 真丝",
  "charcoal-turtleneck": "精梳棉罗纹",
  "ink-a-line-skirt": "TR 斜纹",
  "ivory-pleated-skirt": "雪纺压褶",
  "smoke-blazer": "羊毛混纺",
  "noir-long-coat": "双面羊毛呢",
  "mist-knit-cardigan": "马海毛混纺",
  "ash-turtleneck": "粗针羊毛",
  "silver-drop-earrings": "S925 银",
  "ink-silk-hair-ribbon": "桑蚕丝缎",
};

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, slug];
    });
  }

  const items = selected
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is (typeof products)[number] => !!p);

  // 找出最低价用于高亮
  const minPrice = items.length > 0 ? Math.min(...items.map((p) => p.price)) : 0;

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-4xl text-cocoa">商品对比</h1>
      <p className="mt-3 text-sm text-cocoa-light">
        选择 2-3 件商品，对比面料、尺码与价格
      </p>

      {/* 选择器 */}
      <div className="mt-8 border border-brand-200 bg-white p-5">
        <p className="text-xs tracking-widest text-cocoa-light">
          已选 {selected.length}/{MAX_COMPARE}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {products.map((p) => {
            const active = selected.includes(p.slug);
            const disabled = !active && selected.length >= MAX_COMPARE;
            return (
              <button
                key={p.slug}
                type="button"
                disabled={disabled}
                onClick={() => toggle(p.slug)}
                className={`border px-3 py-1.5 text-xs transition ${
                  active
                    ? "border-brand-500 bg-brand-500 text-white"
                    : disabled
                      ? "cursor-not-allowed border-brand-200 text-brand-300"
                      : "border-brand-300 text-cocoa hover:border-brand-500"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 对比表格 */}
      {items.length < 2 ? (
        <div className="mt-10 border border-dashed border-brand-300 py-20 text-center">
          <p className="text-sm text-cocoa-light">至少选择 2 件商品开始对比</p>
          <div className="mt-6">
            <Button href="/collection" variant="outline">
              去橱窗挑选
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="w-28 border-b border-brand-200 p-3 text-left text-xs tracking-widest text-cocoa-light">
                  对比项
                </th>
                {items.map((p) => (
                  <th key={p.slug} className="border-b border-brand-200 p-3 text-center">
                    <Link href={`/collection/${p.slug}`} className="group inline-block">
                      <div className="relative mx-auto h-32 w-24 overflow-hidden bg-brand-100">
                        {p.image && (
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="96px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <p className="mt-2 text-sm text-cocoa group-hover:opacity-70">
                        {p.name}
                      </p>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              <tr>
                <td className="border-b border-brand-100 p-3 text-left text-xs tracking-widest text-cocoa-light">
                  价格
                </td>
                {items.map((p) => (
                  <td key={p.slug} className="border-b border-brand-100 p-3">
                    <span
                      className={
                        p.price === minPrice
                          ? "font-medium text-cocoa underline underline-offset-4"
                          : "text-cocoa"
                      }
                    >
                      {formatPrice(p.price)}
                    </span>
                    {p.originalPrice && (
                      <span className="ml-1 text-xs text-cocoa-light line-through">
                        {formatPrice(p.originalPrice)}
                      </span>
                    )}
                    {p.price === minPrice && (
                      <span className="ml-1 bg-brand-500 px-1.5 py-0.5 text-[10px] text-white">
                        最低
                      </span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-brand-100 p-3 text-left text-xs tracking-widest text-cocoa-light">
                  分类
                </td>
                {items.map((p) => (
                  <td key={p.slug} className="border-b border-brand-100 p-3 text-cocoa">
                    {CATEGORY_LABELS[p.category]}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-brand-100 p-3 text-left text-xs tracking-widest text-cocoa-light">
                  面料
                </td>
                {items.map((p) => (
                  <td key={p.slug} className="border-b border-brand-100 p-3 text-cocoa">
                    {FABRICS[p.slug] ?? "—"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-brand-100 p-3 text-left text-xs tracking-widest text-cocoa-light">
                  可选尺码
                </td>
                {items.map((p) => (
                  <td key={p.slug} className="border-b border-brand-100 p-3 text-cocoa">
                    {p.sizes.join(" / ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-brand-100 p-3 text-left text-xs tracking-widest text-cocoa-light">
                  可选颜色
                </td>
                {items.map((p) => (
                  <td key={p.slug} className="border-b border-brand-100 p-3">
                    <span className="inline-flex justify-center gap-1.5">
                      {p.colors.map((c) => (
                        <span
                          key={c}
                          style={{ backgroundColor: c }}
                          className="inline-block h-4 w-4 rounded-full ring-1 ring-brand-300"
                        />
                      ))}
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-b border-brand-100 p-3 text-left text-xs tracking-widest text-cocoa-light">
                  标签
                </td>
                {items.map((p) => (
                  <td key={p.slug} className="border-b border-brand-100 p-3">
                    <span className="flex flex-wrap justify-center gap-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-brand-100 px-2 py-0.5 text-[10px] text-cocoa-light"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3" />
                {items.map((p) => (
                  <td key={p.slug} className="p-3">
                    <Link
                      href={`/collection/${p.slug}`}
                      className="inline-block border border-brand-300 px-5 py-2 text-xs tracking-widest text-cocoa transition hover:border-brand-500 hover:bg-brand-50"
                    >
                      查看详情
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
