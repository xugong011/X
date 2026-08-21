import { siteConfig } from "@/data/site";

const HIGHLIGHTS = [
  {
    title: "东方甄选",
    desc: "以黑白灰为底色，去繁就简，只挑干净耐看、经得起时间的好衣裳。",
  },
  {
    title: "留白剪裁",
    desc: "利落的线条与挺括面料，上身自在，穿出不动声色的好气质。",
  },
  {
    title: "贴心服务",
    desc: "微信一对一选款，支持到店试穿，帮你搭出属于你的留白穿搭。",
  },
];

export default function Story() {
  return (
    <section className="border-t border-brand-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-cocoa">关于 {siteConfig.name}</h2>
          <p className="mt-4 leading-relaxed text-cocoa-light">
            好看的衣裳，是写给自己的留白。从一件对的衣服开始，穿出属于你的从容。
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