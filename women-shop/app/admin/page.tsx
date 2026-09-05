"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "@/data/products";
import { CATEGORY_LABELS } from "@/types/product";
import { adminOrders, adminMembers, initialStock } from "@/data/admin";
import { seedReviews } from "@/data/reviews";
import { newArrivals } from "@/data/newArrivals";
import { formatPrice } from "@/lib/utils";

const ADMIN_CODE = "xigongfu2026";
const STOCK_KEY = "xigongfu-admin-stock";

type Tab = "overview" | "products" | "orders" | "members" | "reviews" | "arrivals";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "数据总览" },
  { key: "products", label: "商品管理" },
  { key: "orders", label: "订单管理" },
  { key: "members", label: "会员管理" },
  { key: "reviews", label: "评价管理" },
  { key: "arrivals", label: "上新管理" },
];

const ORDER_STATUSES = ["待付款", "待发货", "已发货", "已完成", "已退款"];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [code, setCode] = useState("");
  const [tab, setTab] = useState<Tab>("overview");
  const [stock, setStock] = useState<Record<string, number>>(initialStock);
  const [orderList, setOrderList] = useState(adminOrders);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STOCK_KEY);
      if (raw) setStock({ ...initialStock, ...(JSON.parse(raw) as Record<string, number>) });
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STOCK_KEY, JSON.stringify(stock));
  }, [stock, loaded]);

  const stats = useMemo(() => {
    const valid = orderList.filter((o) => o.status !== "已退款" && o.status !== "待付款");
    const revenue = valid.reduce((s, o) => s + o.amount, 0);
    const lowStock = products.filter((p) => (stock[p.slug] ?? 0) < 15).length;
    return {
      revenue,
      orderCount: orderList.length,
      memberCount: adminMembers.length,
      productCount: products.length,
      reviewCount: seedReviews.length,
      arrivalCount: newArrivals.length,
      lowStock,
    };
  }, [orderList, stock]);

  function tryLogin(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim() === ADMIN_CODE) setAuthed(true);
    else alert("口令不正确");
  }

  function changeStock(slug: string, delta: number) {
    setStock((prev) => ({
      ...prev,
      [slug]: Math.max(0, (prev[slug] ?? 0) + delta),
    }));
  }

  function cycleOrderStatus(id: string) {
    setOrderList((prev) =>
      prev.map((o) => {
        if (o.id !== id) return o;
        const idx = ORDER_STATUSES.indexOf(o.status);
        return { ...o, status: ORDER_STATUSES[(idx + 1) % ORDER_STATUSES.length] as typeof o.status };
      }),
    );
  }

  // 口令门
  if (!authed) {
    return (
      <section className="mx-auto max-w-sm px-6 py-24">
        <h1 className="text-center font-display text-3xl text-cocoa">管理后台</h1>
        <p className="mt-2 text-center text-xs text-cocoa-light">请输入管理口令进入</p>
        <form onSubmit={tryLogin} className="mt-8">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="管理口令"
            className="w-full border border-brand-300 bg-white px-4 py-3 text-sm text-cocoa placeholder:text-cocoa-light focus:border-brand-500 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-brand-500 py-3 text-sm tracking-widest text-white transition-colors hover:bg-brand-700"
          >
            进入后台
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-end justify-between border-b border-brand-200 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cocoa-light">Admin</p>
          <h1 className="mt-2 font-display text-4xl text-cocoa">管理后台</h1>
        </div>
        <button
          type="button"
          onClick={() => setAuthed(false)}
          className="text-xs text-cocoa-light hover:text-cocoa"
        >
          退出
        </button>
      </div>

      {/* 选项卡 */}
      <div className="mt-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`border px-4 py-2 text-xs tracking-widest transition ${
              tab === t.key
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-brand-300 text-cocoa hover:border-brand-500"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 数据总览 */}
      {tab === "overview" && (
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "成交额", value: formatPrice(stats.revenue) },
              { label: "订单数", value: String(stats.orderCount) },
              { label: "会员数", value: String(stats.memberCount) },
              { label: "在售商品", value: String(stats.productCount) },
              { label: "评价数", value: String(stats.reviewCount) },
              { label: "待上新", value: String(stats.arrivalCount) },
              { label: "低库存预警", value: String(stats.lowStock) },
              { label: "转化率", value: "3.8%" },
            ].map((s) => (
              <div key={s.label} className="border border-brand-200 bg-white p-5">
                <p className="text-xs text-cocoa-light">{s.label}</p>
                <p className="mt-2 font-display text-2xl text-cocoa">{s.value}</p>
              </div>
            ))}
          </div>
          {stats.lowStock > 0 && (
            <p className="mt-4 border border-brand-300 bg-brand-50 px-4 py-3 text-xs text-cocoa">
              库存预警：有 {stats.lowStock} 件商品库存低于 15 件，请及时补货。
            </p>
          )}
        </div>
      )}

      {/* 商品管理 */}
      {tab === "products" && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-200 text-left text-xs tracking-widest text-cocoa-light">
                <th className="p-3">商品</th>
                <th className="p-3">分类</th>
                <th className="p-3">售价</th>
                <th className="p-3">库存</th>
                <th className="p-3">状态</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const count = stock[p.slug] ?? 0;
                return (
                  <tr key={p.slug} className="border-b border-brand-100">
                    <td className="p-3 text-cocoa">{p.name}</td>
                    <td className="p-3 text-cocoa-light">{CATEGORY_LABELS[p.category]}</td>
                    <td className="p-3 text-cocoa">{formatPrice(p.price)}</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => changeStock(p.slug, -1)}
                          className="h-6 w-6 border border-brand-300 text-cocoa hover:border-brand-500"
                        >
                          -
                        </button>
                        <span className={count < 15 ? "font-medium text-cocoa underline" : "text-cocoa"}>
                          {count}
                        </span>
                        <button
                          type="button"
                          onClick={() => changeStock(p.slug, 1)}
                          className="h-6 w-6 border border-brand-300 text-cocoa hover:border-brand-500"
                        >
                          +
                        </button>
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 text-[10px] tracking-widest ${
                          count === 0
                            ? "bg-brand-500 text-white"
                            : count < 15
                              ? "bg-brand-200 text-cocoa"
                              : "bg-brand-100 text-cocoa-light"
                        }`}
                      >
                        {count === 0 ? "售罄" : count < 15 ? "低库存" : "在售"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* 订单管理 */}
      {tab === "orders" && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-200 text-left text-xs tracking-widest text-cocoa-light">
                <th className="p-3">订单号</th>
                <th className="p-3">客户</th>
                <th className="p-3">内容</th>
                <th className="p-3">金额</th>
                <th className="p-3">状态（点击流转）</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((o) => (
                <tr key={o.id} className="border-b border-brand-100">
                  <td className="p-3 text-cocoa">
                    {o.id}
                    <span className="block text-xs text-cocoa-light">{o.date}</span>
                  </td>
                  <td className="p-3 text-cocoa-light">
                    {o.customer}
                    <span className="block text-xs">{o.phone}</span>
                  </td>
                  <td className="p-3 text-cocoa-light">{o.items}</td>
                  <td className="p-3 text-cocoa">{formatPrice(o.amount)}</td>
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => cycleOrderStatus(o.id)}
                      className={`border px-3 py-1 text-xs transition ${
                        o.status === "已退款"
                          ? "border-brand-300 text-cocoa-light"
                          : o.status === "已完成"
                            ? "border-brand-500 bg-brand-500 text-white"
                            : "border-brand-300 text-cocoa hover:border-brand-500"
                      }`}
                    >
                      {o.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 会员管理 */}
      {tab === "members" && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-200 text-left text-xs tracking-widest text-cocoa-light">
                <th className="p-3">会员</th>
                <th className="p-3">手机号</th>
                <th className="p-3">订单数</th>
                <th className="p-3">累计消费</th>
                <th className="p-3">注册时间</th>
              </tr>
            </thead>
            <tbody>
              {adminMembers.map((m) => (
                <tr key={m.id} className="border-b border-brand-100">
                  <td className="p-3 text-cocoa">{m.nickname}</td>
                  <td className="p-3 text-cocoa-light">{m.phone}</td>
                  <td className="p-3 text-cocoa">{m.orders}</td>
                  <td className="p-3 text-cocoa">{formatPrice(m.spent)}</td>
                  <td className="p-3 text-cocoa-light">{m.joinedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 评价管理 */}
      {tab === "reviews" && (
        <ul className="mt-8 space-y-4">
          {seedReviews.map((r) => {
            const p = products.find((x) => x.slug === r.slug);
            return (
              <li key={r.id} className="border border-brand-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-cocoa">
                    {r.author}
                    <span className="ml-2 text-xs text-cocoa-light">
                      {p?.name ?? r.slug} · {r.date} · {"★".repeat(r.rating)}
                    </span>
                  </p>
                  <span className="text-xs text-cocoa-light">获赞 {r.likes}</span>
                </div>
                <p className="mt-2 text-sm text-cocoa-light">{r.content}</p>
              </li>
            );
          })}
        </ul>
      )}

      {/* 上新管理 */}
      {tab === "arrivals" && (
        <ul className="mt-8 space-y-4">
          {newArrivals.map((n) => (
            <li key={n.id} className="flex items-center justify-between border border-brand-200 bg-white p-5">
              <div>
                <p className="text-sm text-cocoa">{n.name}</p>
                <p className="mt-1 text-xs text-cocoa-light">
                  {n.date} · {n.category} · 预计 {formatPrice(n.price)}
                </p>
              </div>
              <span className="bg-brand-100 px-2 py-0.5 text-[10px] tracking-widest text-cocoa-light">
                待上新
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
