"use client";

import { useEffect, useMemo, useState } from "react";
import { newArrivals, type NewArrival } from "@/data/newArrivals";
import { formatPrice } from "@/lib/utils";

const STORAGE_KEY = "xigongfu-arrival-subs";

function monthLabel(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月`;
}

function dayOfMonth(dateStr: string): number {
  return new Date(dateStr).getDate();
}

function daysUntil(dateStr: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  return Math.ceil((target.getTime() - now.getTime()) / 86400000);
}

export default function NewArrivalsPage() {
  const [subs, setSubs] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSubs(JSON.parse(raw) as string[]);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subs));
    }
  }, [subs, loaded]);

  function toggleSub(id: string) {
    setSubs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  // 按月份分组
  const grouped = useMemo(() => {
    const map = new Map<string, NewArrival[]>();
    for (const item of newArrivals) {
      const key = monthLabel(item.date);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(item);
    }
    return [...map.entries()];
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="font-display text-4xl text-cocoa">新品日历</h1>
      <p className="mt-3 text-sm text-cocoa-light">
        每月上新计划一览，订阅「到货提醒」，上新第一时间通知你
      </p>

      {grouped.map(([month, items]) => (
        <div key={month} className="mt-12">
          {/* 月份标题 */}
          <div className="flex items-center gap-4">
            <h2 className="font-display text-2xl text-cocoa">{month}</h2>
            <span className="h-px flex-1 bg-brand-200" />
            <span className="text-xs tracking-widest text-cocoa-light">
              {items.length} 款上新
            </span>
          </div>

          <ul className="mt-6 space-y-4">
            {items.map((item) => {
              const subscribed = subs.includes(item.id);
              const days = daysUntil(item.date);
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-5 border border-brand-200 bg-white p-5"
                >
                  {/* 日期块 */}
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center bg-brand-500 text-white">
                    <span className="font-display text-2xl leading-none">
                      {dayOfMonth(item.date)}
                    </span>
                    <span className="mt-1 text-[10px] tracking-widest">日</span>
                  </div>

                  {/* 信息 */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm text-cocoa">{item.name}</h3>
                      <span className="bg-brand-100 px-2 py-0.5 text-[10px] tracking-widest text-cocoa-light">
                        {item.category}
                      </span>
                      {days >= 0 && days <= 7 && (
                        <span className="bg-brand-500 px-2 py-0.5 text-[10px] tracking-widest text-white">
                          {days === 0 ? "今日上新" : `${days} 天后`}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-cocoa-light">{item.hint}</p>
                    <p className="mt-1 text-xs text-cocoa">
                      预计售价 {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* 订阅按钮 */}
                  <button
                    type="button"
                    onClick={() => toggleSub(item.id)}
                    className={`shrink-0 border px-4 py-2 text-xs tracking-widest transition ${
                      subscribed
                        ? "border-brand-500 bg-brand-500 text-white"
                        : "border-brand-300 text-cocoa hover:border-brand-500"
                    }`}
                  >
                    {subscribed ? "已订阅提醒" : "到货提醒"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {subs.length > 0 && (
        <p className="mt-10 text-center text-xs text-cocoa-light">
          已订阅 {subs.length} 款新品的到货提醒，上新后将通过微信通知你
        </p>
      )}
    </section>
  );
}
