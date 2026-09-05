"use client";

import { useState } from "react";
import Image from "next/image";
import { toInitials } from "@/lib/utils";

interface Props {
  name: string;
  images?: string[];
  image?: string;
}

export default function ProductGallery({ name, images, image }: Props) {
  const list = images && images.length > 0 ? images : image ? [image] : [];
  const [active, setActive] = useState(0);
  const current = list[active] ?? image;

  return (
    <div>
      {/* 主图 */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-100">
        {current ? (
          <Image
            src={current}
            alt={`${name} ${active + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="select-none font-display text-8xl tracking-[0.3em] text-brand-300">
              {toInitials(name)}
            </span>
          </div>
        )}
      </div>

      {/* 缩略图 */}
      {list.length > 1 && (
        <div className="mt-4 flex gap-3">
          {list.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`查看第 ${i + 1} 张图`}
              className={`relative h-24 w-20 shrink-0 overflow-hidden bg-brand-100 transition ${
                i === active
                  ? "ring-2 ring-brand-500"
                  : "ring-1 ring-brand-200 hover:ring-brand-400"
              }`}
            >
              <Image
                src={src}
                alt={`${name} 缩略图 ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}