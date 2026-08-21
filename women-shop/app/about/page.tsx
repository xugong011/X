import { siteConfig } from "@/data/site";
import Story from "@/components/home/Story";

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-display text-4xl text-cocoa sm:text-5xl">关于 {siteConfig.name}</h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cocoa-light">
          {siteConfig.intro}
        </p>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cocoa-light">
          从第一件衣服开始，我们就想做一个「让人穿了会笑」的小店。不追爆款，只选那些真正衬你、让你自在又自信的单品。每一件都经过我们反复试穿，确认版型、面料、颜色都刚刚好，才会挂上货架。
        </p>
      </section>

      <Story />

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl text-cocoa">我们的承诺</h2>
        <ul className="mx-auto mt-6 max-w-md space-y-3 text-left text-sm text-cocoa-light">
          <li>严选面料，亲肤透气，从源头把控品质。</li>
          <li>真实尺码参考 + 一对一选款，减少退换烦恼。</li>
          <li>每一单都用心包装，让拆快递也变成小惊喜。</li>
        </ul>
      </section>
    </>
  );
}