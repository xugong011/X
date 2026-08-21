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
    <section className="bg-gradient-to-b from-transparent to-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-cocoa sm:text-3xl">关于粉萌衣橱</h2>
          <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed text-cocoa-light">
            我们相信，好看的衣服是写给自己的情书。做一个甜甜的女孩，从一件对的衣服开始。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-soft"
            >
              <h3 className="font-bold text-cocoa">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}