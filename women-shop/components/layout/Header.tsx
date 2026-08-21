"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/components/cart/CartProvider";

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 8h14l-1.2 12H6.2L5 8z" />
      <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalQuantity } = useCart();

  const cartTrigger = (
    <Link
      href="/cart"
      aria-label={`购物车，共 ${totalQuantity} 件`}
      className="relative flex h-10 w-10 items-center justify-center text-cocoa transition-colors hover:text-cocoa-light"
    >
      <CartIcon />
      {totalQuantity > 0 && (
        <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-500 px-1 text-[10px] leading-none text-white">
          {totalQuantity}
        </span>
      )}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200 bg-[#fafafa]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-lg tracking-[0.25em] text-cocoa">
          {siteConfig.nameEn}
        </Link>

        {/* 桌面端导航 */}
        <div className="hidden items-center gap-10 text-xs md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracking-widest text-cocoa-light transition-colors hover:text-cocoa"
            >
              {link.label}
            </Link>
          ))}
          {cartTrigger}
        </div>

        {/* 移动端：购物车 + 汉堡 */}
        <div className="flex items-center gap-1 md:hidden">
          {cartTrigger}
          <button
            type="button"
            aria-label="菜单"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-cocoa transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-cocoa transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-cocoa transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}