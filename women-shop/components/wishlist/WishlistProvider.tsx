"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface WishlistContextValue {
  slugList: string[];
  toggle: (slug: string, price?: number) => void;
  has: (slug: string) => boolean;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  /** 收藏时记录的价格，用于降价提醒 */
  priceAtAdd: (slug: string) => number | undefined;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

const STORAGE_KEY = "xigongfu-wishlist";
const PRICE_KEY = "xigongfu-wishlist-prices";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [slugList, setSlugList] = useState<string[]>([]);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSlugList(JSON.parse(raw) as string[]);
      const rawPrices = localStorage.getItem(PRICE_KEY);
      if (rawPrices) setPrices(JSON.parse(rawPrices) as Record<string, number>);
    } catch {
      // 忽略脏数据
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slugList));
      localStorage.setItem(PRICE_KEY, JSON.stringify(prices));
    }
  }, [slugList, prices, loaded]);

  function toggle(slug: string, price?: number) {
    setSlugList((prev) => {
      if (prev.includes(slug)) {
        setPrices((p) => {
          const next = { ...p };
          delete next[slug];
          return next;
        });
        return prev.filter((s) => s !== slug);
      }
      if (price !== undefined) {
        setPrices((p) => ({ ...p, [slug]: price }));
      }
      return [...prev, slug];
    });
  }

  function remove(slug: string) {
    setSlugList((prev) => prev.filter((s) => s !== slug));
    setPrices((p) => {
      const next = { ...p };
      delete next[slug];
      return next;
    });
  }

  function clear() {
    setSlugList([]);
    setPrices({});
  }

  function has(slug: string) {
    return slugList.includes(slug);
  }

  function priceAtAdd(slug: string) {
    return prices[slug];
  }

  return (
    <WishlistContext.Provider
      value={{ slugList, toggle, has, remove, clear, count: slugList.length, priceAtAdd }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist 必须在 WishlistProvider 内使用");
  }
  return ctx;
}
