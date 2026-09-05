import Image from "next/image";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      {/* 文案 */}
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-cocoa-light">
          Oriental Minimalism · Womenswear
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-cocoa sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-cocoa-light">
          {siteConfig.intro}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/collection">浏览商品</Button>
          <Button href="/about" variant="outline">
            关于我们
          </Button>
        </div>
      </div>

      {/* 主视觉 */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-100">
        <Image
          src="/images/hero-main.jpg"
          alt={`${siteConfig.name} 主视觉`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}