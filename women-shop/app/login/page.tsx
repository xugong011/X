"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.replace("/member");
  }, [isLoggedIn, router]);

  if (isLoggedIn) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^1\d{10}$/.test(phone)) {
      alert("请输入 11 位手机号");
      return;
    }
    setLoading(true);
    // 模拟网络延迟
    setTimeout(() => {
      login(phone);
      router.push("/member");
    }, 600);
  }

  return (
    <section className="mx-auto max-w-sm px-6 py-24">
      <div className="text-center">
        <h1 className="font-display text-3xl text-cocoa">登录西宫赋</h1>
        <p className="mt-2 text-sm text-cocoa-light">输入手机号即可登录/注册</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="手机号"
          maxLength={11}
          className="w-full border-b border-brand-300 bg-transparent py-3 text-center text-lg tracking-widest text-cocoa placeholder:text-cocoa-light focus:border-brand-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full bg-brand-500 py-3.5 text-sm tracking-widest text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
        >
          {loading ? "登录中…" : "一键登录"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs leading-relaxed text-cocoa-light">
        演示站点，不会发送验证码
      </p>

      <div className="mt-8 text-center">
        <Button href="/" variant="outline" className="text-xs">
          返回首页
        </Button>
      </div>
    </section>
  );
}