import { siteConfig } from "@/data/site";

const HIGHLIGHTS = [
  {
    title: "韩系精选",
    desc: "紧跟首尔流行趋势，用心挑每一件好看又好穿的单品。",
  },
  {
    title: "温柔质感",
    desc: "亲肤柔软的面料，穿上的那一刻就像被云朵轻轻抱住。",
  },
  {
    title: "甜心服务",
    desc: "微信一对一选款，支持上门试穿，做你的专属搭配师。",
  },
];

export default function Story() {
  return (
    <section className="border-t border-brand-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-cocoa">关于 {siteConfig.name}</h2>
          <p className="mt-4 leading-relaxed text-cocoa-light">
            我们相信，好看的衣服是写给自己的情书。做一个甜甜的女孩，从一件对的衣服开始。
          </p>
        </div>

        <div className="grid gap-px bg-brand-200 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="bg-[#fafafa] p-8">
              <h3 className="font-display text-lg text-cocoa">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}