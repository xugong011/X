import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

const CONTACTS = [
  { label: "微信", value: siteConfig.wechat, hint: "最常用，回复最快" },
  { label: "电话", value: siteConfig.phone },
  { label: "邮箱", value: siteConfig.email },
  { label: "门店地址", value: siteConfig.address },
  { label: "营业时间", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-cocoa sm:text-4xl">联系我们</h1>
        <p className="mt-3 text-cocoa-light">有任何喜欢的款式，欢迎随时来聊。</p>
      </div>

      <div className="mt-10 space-y-4">
        {CONTACTS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"
          >
            <div>
              <p className="text-xs text-cocoa-light">{item.label}</p>
              <p className="font-medium text-cocoa">{item.value}</p>
              {item.hint && <p className="text-xs text-cocoa-light">{item.hint}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-brand-50 p-8 text-center">
        <h2 className="text-xl font-bold text-cocoa">想来店里试试吗？</h2>
        <p className="mt-2 text-sm leading-relaxed text-cocoa-light">
          门店支持到店试穿与搭配建议，欢迎提前微信预约。
        </p>
        <div className="mt-5">
          <Button href="https://weixin.qq.com">添加微信预约</Button>
        </div>
      </div>
    </section>
  );
}