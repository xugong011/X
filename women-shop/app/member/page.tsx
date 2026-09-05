"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/components/auth/AuthProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { useHistory } from "@/components/history/HistoryProvider";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

const SIZES = ["XS", "S", "M", "L", "XL"];

const mockOrders = [
  { id: "XG20240901", date: "2024-09-01", amount: 399, status: "已完成", item: "素白立领长裙" },
  { id: "XG20240815", date: "2024-08-15", amount: 269, status: "已完成", item: "墨色A字半裙" },
];

export default function MemberPage() {
  const { user, logout, isLoggedIn } = useAuth();
  const { slugList } = useWishlist();
  const { slugs: historySlugs, clear: clearHistory } = useHistory();
  const router = useRouter();
  const [points, setPoints] = useState(0);
  const [preferredSize, setPreferredSize] = useState("M");
  const [address, setAddress] = useState("景德镇艺术职业大学");

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
      return;
    }
    setPoints(128);
    setPreferredSize(localStorage.getItem("xigongfu-size-pref") || "M");
  }, [isLoggedIn, router]);

  useEffect(() => {
    localStorage.setItem("xigongfu-size-pref", preferredSize);
  }, [preferredSize]);

  if (!isLoggedIn) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <div className="flex items-end justify-between border-b border-brand-200 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cocoa-light">会员中心</p>
          <h1 className="mt-2 font-display text-4xl text-cocoa">{user?.nickname}</h1>
          <p className="mt-1 text-sm text-cocoa-light">{user?.phone}</p>
        </div>
        <button
          type="button"
          onClick={() => { logout(); router.push("/"); }}
          className="text-xs text-cocoa-light hover:text-cocoa"
        >
          退出登录
        </button>
      </div>

      {/* 积分 */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="border border-brand-200 bg-white p-5">
          <p className="text-xs text-cocoa-light">可用积分</p>
          <p className="mt-1 font-display text-3xl text-cocoa">{points}</p>
          <p className="mt-1 text-xs text-cocoa-light">100 积分 = ¥1</p>
        </div>
        <div className="border border-brand-200 bg-white p-5">
          <p className="text-xs text-cocoa-light">心愿单</p>
          <p className="mt-1 font-display text-3xl text-cocoa">{slugList.length}</p>
          <Link href="/wishlist" className="mt-1 text-xs text-cocoa-light underline hover:text-cocoa">
            查看
          </Link>
        </div>
        <div className="border border-brand-200 bg-white p-5">
          <p className="text-xs text-cocoa-light">常穿尺码</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setPreferredSize(s)}
                className={`border px-2 py-1 text-xs transition ${
                  preferredSize === s
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-brand-300 text-cocoa-light hover:border-brand-500"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 收货地址 */}
      <div className="mt-8 border border-brand-200 bg-white p-5">
        <h2 className="text-xs uppercase tracking-widest text-cocoa-light">默认收货地址</h2>
        <div className="mt-3 flex items-center gap-3">
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex-1 border-b border-brand-200 bg-transparent py-1 text-sm text-cocoa focus:border-brand-500 focus:outline-none"
          />
          <span className="text-xs text-cocoa-light">自动保存</span>
        </div>
      </div>

      {/* 订单 */}
      <div className="mt-8">
        <h2 className="text-xs uppercase tracking-widest text-cocoa-light">最近订单</h2>
        <div className="mt-3 divide-y divide-brand-200 border border-brand-200 bg-white">
          {mockOrders.map((o) => (
            <div key={o.id} className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm text-cocoa">{o.item}</p>
                <p className="mt-0.5 text-xs text-cocoa-light">{o.id} · {o.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-cocoa">{formatPrice(o.amount)}</p>
                <p className="mt-0.5 text-xs text-cocoa-light">{o.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 浏览历史 */}
      {historySlugs.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-widest text-cocoa-light">浏览历史</h2>
            <button type="button" onClick={clearHistory} className="text-xs text-cocoa-light hover:text-cocoa">
              清空
            </button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {historySlugs.slice(0, 4).map((slug) => {
              const p = getProductBySlug(slug);
              if (!p) return null;
              return (
                <Link key={slug} href={`/collection/${slug}`} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-brand-100">
                    {p.image && (
                      <Image src={p.image} alt={p.name} fill sizes="25vw" className="object-cover transition-transform group-hover:scale-105" />
                    )}
                  </div>
                  <p className="mt-2 truncate text-xs text-cocoa">{p.name}</p>
                  <p className="text-xs text-cocoa-light">{formatPrice(p.price)}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Button href="/collection" variant="outline">继续购物</Button>
      </div>
    </section>
  );
}