"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href="/" className="text-xl font-bold text-brand-600">
          {siteConfig.name}
        </Link>

        {/* 桌面端导航 */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-cocoa transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-cocoa transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-cocoa transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-cocoa transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}