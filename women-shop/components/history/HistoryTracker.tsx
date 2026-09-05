"use client";

import { useEffect } from "react";
import { useHistory } from "./HistoryProvider";

/** 详情页浏览历史打点（客户端静默记录） */
export default function HistoryTracker({ slug }: { slug: string }) {
  const { add } = useHistory();

  useEffect(() => {
    add(slug);
  }, [slug, add]);

  return null;
}
