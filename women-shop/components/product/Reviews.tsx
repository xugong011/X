"use client";

import { useEffect, useState } from "react";
import { seedReviews, type Review } from "@/data/reviews";
import { useAuth } from "@/components/auth/AuthProvider";

const LIKES_KEY = "xigongfu-review-likes";
const USER_REVIEWS_KEY = "xigongfu-user-reviews";

function Stars({ value }: { value: number }) {
  return (
    <span className="text-xs tracking-widest text-cocoa" aria-label={`${value} 星`}>
      {"★".repeat(value)}
      <span className="text-brand-300">{"★".repeat(5 - value)}</span>
    </span>
  );
}

export default function Reviews({ slug }: { slug: string }) {
  const { user } = useAuth();
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [extraLikes, setExtraLikes] = useState<Record<string, number>>({});
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const likes = localStorage.getItem(LIKES_KEY);
      if (likes) setLikedIds(JSON.parse(likes) as string[]);
      const extra = localStorage.getItem(`${LIKES_KEY}-count`);
      if (extra) setExtraLikes(JSON.parse(extra) as Record<string, number>);
      const mine = localStorage.getItem(`${USER_REVIEWS_KEY}-${slug}`);
      if (mine) setUserReviews(JSON.parse(mine) as Review[]);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, [slug]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(LIKES_KEY, JSON.stringify(likedIds));
    localStorage.setItem(`${LIKES_KEY}-count`, JSON.stringify(extraLikes));
  }, [likedIds, extraLikes, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(`${USER_REVIEWS_KEY}-${slug}`, JSON.stringify(userReviews));
  }, [userReviews, slug, loaded]);

  const all = [...userReviews, ...seedReviews.filter((r) => r.slug === slug)];

  function toggleLike(id: string) {
    const liked = likedIds.includes(id);
    setLikedIds((prev) => (liked ? prev.filter((x) => x !== id) : [...prev, id]));
    setExtraLikes((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + (liked ? -1 : 1) }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = content.trim();
    if (!text) return;
    const review: Review = {
      id: `u${Date.now()}`,
      slug,
      author: user ? user.nickname : "匿名买家",
      rating,
      content: text,
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
    };
    setUserReviews((prev) => [review, ...prev]);
    setContent("");
    setRating(5);
  }

  return (
    <div className="mt-16 border-t border-brand-200 pt-10">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-2xl text-cocoa">评价晒单</h2>
        <span className="text-xs text-cocoa-light">{all.length} 条评价</span>
      </div>

      {/* 评价列表 */}
      {all.length === 0 ? (
        <p className="mt-6 text-sm text-cocoa-light">还没有评价，来抢沙发～</p>
      ) : (
        <ul className="mt-6 space-y-6">
          {all.map((r) => {
            const liked = likedIds.includes(r.id);
            const likes = r.likes + (extraLikes[r.id] ?? 0);
            return (
              <li key={r.id} className="border-b border-brand-100 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs text-cocoa">
                      {r.author.slice(0, 1)}
                    </span>
                    <div>
                      <p className="text-sm text-cocoa">{r.author}</p>
                      <Stars value={r.rating} />
                    </div>
                  </div>
                  <span className="text-xs text-cocoa-light">
                    {r.date}
                    {r.size ? ` · 购入 ${r.size}` : ""}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-light">{r.content}</p>
                <button
                  type="button"
                  onClick={() => toggleLike(r.id)}
                  className={`mt-3 inline-flex items-center gap-1.5 border px-3 py-1 text-xs transition ${
                    liked
                      ? "border-brand-500 bg-brand-500 text-white"
                      : "border-brand-300 text-cocoa-light hover:border-brand-500 hover:text-cocoa"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  有用 {likes}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* 写评价 */}
      <form onSubmit={submit} className="mt-8 border border-brand-200 bg-white p-5">
        <p className="text-xs tracking-widest text-cocoa">写下你的评价</p>
        <div className="mt-3 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              aria-label={`${n} 星`}
              className={`text-lg transition ${n <= rating ? "text-cocoa" : "text-brand-300"}`}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
          placeholder="说说面料、版型、上身效果…"
          className="mt-3 w-full border border-brand-200 bg-transparent p-3 text-sm text-cocoa placeholder:text-cocoa-light focus:border-brand-500 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-3 bg-brand-500 px-6 py-2 text-xs tracking-widest text-white transition-colors hover:bg-brand-700"
        >
          发布评价
        </button>
      </form>
    </div>
  );
}
