import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      {/* 文案 */}
      <div className="text-center md:text-left">
        <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-600">
          韩系甜美 · 小众选款
        </span>
        <h1 className="korean-heart mt-5 text-4xl font-bold leading-tight text-cocoa sm:text-5xl">
          {siteConfig.name}
          <span className="block text-brand-500">{siteConfig.nameEn}</span>
        </h1>
        <p className="mt-4 text-lg text-cocoa-light">{siteConfig.slogan}</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cocoa-light md:mx-0">
          {siteConfig.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Button href="/collection">逛逛商品</Button>
          <Button href="/about" variant="outline">
            认识我们
          </Button>
        </div>
      </div>

      {/* 主视觉占位 */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
        <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-brand-200 via-blush to-lilac shadow-soft" />
        <div className="absolute inset-0 rotate-2 rounded-[2.5rem] bg-white/40 backdrop-blur-sm" />
        <div className="absolute inset-6 flex flex-col items-center justify-center rounded-[2rem] bg-cream/80 text-center">
          <p className="px-6 text-sm text-cocoa-light">
            这里是你的主视觉图位 —— 后续替换成店铺招牌照即可
          </p>
        </div>
      </div>
    </section>
  );
}