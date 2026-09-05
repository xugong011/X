"use client";

import { useWishlist } from "@/components/wishlist/WishlistProvider";

export default function WishlistButton({ slug }: { slug: string }) {
  const { toggle, has } = useWishlist();
  const liked = has(slug);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-label={liked ? "取消收藏" : "加入收藏"}
      title={liked ? "已收藏" : "加入收藏"}
      className="relative flex h-10 w-10 items-center justify-center text-cocoa transition-colors hover:text-brand-500"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}