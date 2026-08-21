import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-100 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        {/* 品牌 */}
        <div>
          <div className="text-lg font-bold text-brand-600">
            {siteConfig.name}
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cocoa-light">
            {siteConfig.slogan}
          </p>
        </div>

        {/* 导航 */}
        <div>
          <h4 className="font-medium text-cocoa">快速导航</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cocoa-light transition-colors hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 联系 */}
        <div>
          <h4 className="font-medium text-cocoa">联系我们</h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-cocoa-light">
            <li>微信：{siteConfig.wechat}</li>
            <li>电话：{siteConfig.phone}</li>
            <li>地址：{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100 py-5 text-center text-xs text-cocoa-light">
        © {new Date().getFullYear()} {siteConfig.name}. 用心做衣服，偷偷喜欢每一个你。
      </div>
    </footer>
  );
}