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
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

const STORAGE_KEY = "xigongfu-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [slugList, setSlugList] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSlugList(JSON.parse(raw) as string[]);
    } catch {
      // 忽略脏数据
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slugList));
    }
  }, [slugList, loaded]);

  function toggle(slug: string) {
    setSlugList((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug],
    );
  }

  function remove(slug: string) {
    setSlugList((prev) => prev.filter((s) => s !== slug));
  }

  function clear() {
    setSlugList([]);
  }

  function has(slug: string) {
    return slugList.includes(slug);
  }

  return (
    <WishlistContext.Provider
      value={{ slugList, toggle, has, remove, clear, count: slugList.length }}
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