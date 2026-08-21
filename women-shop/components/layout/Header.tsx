"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

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
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}