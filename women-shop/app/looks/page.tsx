"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug } from "@/data/products";

interface Look {
  id: string;
  image: string; // 复用商品图作为买家秀
  author: string;
  height: string;
  size: string;
  comment: string;
  slug: string; // 关联商品
  likes: number;
}

const LOOKS: Look[] = [
  {
    id: "lk1",
    image: "/images/products/plain-white-collar-dress.jpg",
    author: "青子",
    height: "164cm",
    size: "M",
    comment: "素白长裙上身就是行走的画报，立领太显气质了。",
    slug: "plain-white-collar-dress",
    likes: 86,
  },
  {
    id: "lk2",
    image: "/images/products/ink-slip-dress.jpg",
    author: "晚风",
    height: "168cm",
    size: "M",
    comment: "丝缎在光线下真的会流动，配开衫通勤无压力。",
    slug: "ink-slip-dress",
    likes: 64,
  },
  {
    id: "lk3",
    image: "/images/products/smoke-blazer.jpg",
    author: "北巷",
    height: "160cm",
    size: "S",
    comment: "小个子也能撑起来的廓形西装，烟灰色很特别。",
    slug: "smoke-blazer",
    likes: 58,
  },
  {
    id: "lk4",
    image: "/images/products/silk-cloud-shirt.jpg",
    author: "山月",
    height: "170cm",
    size: "L",
    comment: "真丝衬衫配半裙，办公室最干净的那身。",
    slug: "silk-cloud-shirt",
    likes: 47,
  },
  {
    id: "lk5",
    image: "/images/products/noir-long-coat.jpg",
    author: "雾里",
    height: "166cm",
    size: "M",
    comment: "长大衣一裹就有气场，羊毛很暖。",
    slug: "noir-long-coat",
    likes: 52,
  },
  {
    id: "lk6",
    image: "/images/products/mist-knit-cardigan.jpg",
    author: "云深",
    height: "158cm",
    size: "均码",
    comment: "软糯开衫，小个子穿是慵懒的 oversize。",
    slug: "mist-knit-cardigan",
    likes: 39,
  },
  {
    id: "lk7",
    image: "/images/products/ink-a-line-skirt.jpg",
    author: "拾光",
    height: "162cm",
    size: "M",
    comment: "高腰 A 字裙是真的显腿长，墨色百搭。",
    slug: "ink-a-line-skirt",
    likes: 33,
  },
  {
    id: "lk8",
    image: "/images/products/ivory-pleated-skirt.jpg",
    author: "南絮",
    height: "165cm",
    size: "M",
    comment: "百褶走起来很好看，素白配深色上衣刚刚好。",
    slug: "ivory-pleated-skirt",
    likes: 28,
  },
];

export default function LooksPage() {
  const [liked, setLiked] = useState<string[]>([]);

  function toggleLike(id: string) {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-4xl text-cocoa">买家秀</h1>
      <p className="mt-3 text-sm text-cocoa-light">
        来自真实买家的上身分享，欢迎投稿你的穿搭
      </p>

      <div className="mt-10 columns-2 gap-6 md:columns-3 lg:columns-4">
        {LOOKS.map((look) => {
          const product = getProductBySlug(look.slug);
          const isLiked = liked.includes(look.id);
          return (
            <div key={look.id} className="mb-6 break-inside-avoid border border-brand-200 bg-white">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-100">
                <Image
                  src={look.image}
                  alt={`${look.author} 的买家秀`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-cocoa">{look.author}</p>
                  <p className="text-xs text-cocoa-light">
                    {look.height} · {look.size}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-light">
                  {look.comment}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  {product && (
                    <Link
                      href={`/collection/${product.slug}`}
                      className="text-xs text-cocoa underline underline-offset-4 transition-colors hover:text-cocoa-light"
                    >
                      {product.name}
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleLike(look.id)}
                    className={`flex items-center gap-1 text-xs transition-colors ${
                      isLiked ? "text-cocoa" : "text-cocoa-light hover:text-cocoa"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {look.likes + (isLiked ? 1 : 0)}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
