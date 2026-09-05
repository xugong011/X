"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface HistoryContextValue {
  slugs: string[];
  add: (slug: string) => void;
  clear: () => void;
}

const HistoryContext = createContext<HistoryContextValue | null>(null);

const STORAGE_KEY = "xigongfu-history";
const MAX = 12;

export function HistoryProvider({ children }: { children: ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSlugs(JSON.parse(raw) as string[]);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    }
  }, [slugs, loaded]);

  function add(slug: string) {
    setSlugs((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, MAX));
  }

  function clear() {
    setSlugs([]);
  }

  return (
    <HistoryContext.Provider value={{ slugs, add, clear }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const ctx = useContext(HistoryContext);
  if (!ctx) throw new Error("useHistory 必须在 HistoryProvider 内使用");
  return ctx;
}