import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        {/* 品牌 */}
        <div>
          <div className="font-display text-lg tracking-[0.25em] text-cocoa">
            {siteConfig.nameEn}
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cocoa-light">
            {siteConfig.slogan}
          </p>
        </div>

        {/* 导航 */}
        <div>
          <h4 className="text-xs tracking-widest text-cocoa">导航</h4>
          <div className="mt-4 flex flex-col gap-2.5 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cocoa-light transition-colors hover:text-cocoa"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 联系 */}
        <div>
          <h4 className="text-xs tracking-widest text-cocoa">联系</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cocoa-light">
            <li>微信：{siteConfig.wechat}</li>
            <li>电话：{siteConfig.phone}</li>
            <li>地址：{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-200 py-6 text-center text-xs text-cocoa-light">
        © {new Date().getFullYear()} {siteConfig.nameEn}
      </div>
    </footer>
  );
}