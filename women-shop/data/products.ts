import type { Product } from "@/types/product";

// 占位商品数据 —— 后续可替换为真实商品，或接入后端 / CMS / 飞书多维表格
export const products: Product[] = [
  {
    slug: "cherry-blossom-dress",
    name: "樱花泡泡袖连衣裙",
    nameEn: "Cherry Blossom Dress",
    price: 329,
    originalPrice: 399,
    category: "dress",
    description:
      "轻盈的泡泡袖与收腰剪裁，搭配温柔的樱花粉，穿上就是韩剧女主本人。面料亲肤透气，适合约会与日常出街。",
    sizes: ["S", "M", "L"],
    colors: ["#ffc9dd", "#fff0f5", "#c9b8ff"],
    tags: ["新品", "热卖", "显瘦"],
    featured: true,
  },
  {
    slug: "cloud-knit-cardigan",
    name: "云朵小熊针织开衫",
    nameEn: "Cloud Bear Cardigan",
    price: 259,
    category: "knit",
    description:
      "软糯的针织面料像云朵一样包裹你，胸口点缀一只刺绣小熊，可爱值拉满，秋冬内搭外穿都好看。",
    sizes: ["均码"],
    colors: ["#fffaf5", "#ffd9e6", "#c9b8ff"],
    tags: ["可爱", "百搭"],
    featured: true,
  },
  {
    slug: "tulip-mini-skirt",
    name: "郁金香高腰半身裙",
    nameEn: "Tulip Mini Skirt",
    price: 199,
    category: "skirt",
    description:
      "A 字高腰版型，衬得腿又细又长。郁金香曲线拼接设计，甜美里带一点小心机。",
    sizes: ["S", "M"],
    colors: ["#f45f9e", "#4a3a44"],
    tags: ["显高", "热卖"],
    featured: true,
  },
  {
    slug: "milky-tee",
    name: "奶杏色蝴蝶结短袖",
    nameEn: "Milky Bow Tee",
    price: 159,
    category: "top",
    description:
      "基础却不单调的奶杏色 T 恤，领口蝴蝶结是点睛之笔，日常通勤约会通通能打。",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#fffaf5", "#ffd9e6"],
    tags: ["基础款", "百搭"],
    featured: false,
  },
  {
    slug: "strawberry-hoodie",
    name: "草莓奶油连帽卫衣",
    nameEn: "Strawberry Hoodie",
    price: 289,
    category: "outer",
    description:
      "奶油白底色搭配草莓刺绣，宽松落肩版型慵懒又减龄，oversize 遮肉神器。",
    sizes: ["均码"],
    colors: ["#fff0f5", "#ff7eb3"],
    tags: ["慵懒风", "减龄"],
    featured: true,
  },
  {
    slug: "pearl-hair-clip",
    name: "珍珠蝴蝶结发夹",
    nameEn: "Pearl Bow Clip",
    price: 39,
    category: "accessory",
    description:
      "小巧的珍珠与丝带蝴蝶结组合，夹在发间一秒提升精致度，是整套 look 的点睛单品。",
    sizes: ["均码"],
    colors: ["#ffffff", "#ffd9e6"],
    tags: ["配饰", "性价比"],
    featured: false,
  },
  {
    slug: "lavender-skirt",
    name: "薰衣草紫百褶裙",
    nameEn: "Lavender Pleated Skirt",
    price: 229,
    category: "skirt",
    description:
      "行走时裙摆轻轻摆动，薰衣草紫温柔又显白，配浅色上衣就是梦中情搭。",
    sizes: ["S", "M", "L"],
    colors: ["#c9b8ff", "#e6defc"],
    tags: ["温柔", "显白"],
    featured: false,
  },
  {
    slug: "mocha-coat",
    name: "摩卡色软呢短外套",
    nameEn: "Mocha Tweed Coat",
    price: 459,
    originalPrice: 559,
    category: "outer",
    description:
      "小香风软呢面料挺括有型，摩卡色高级耐看，通勤约会都能轻松驾驭。",
    sizes: ["S", "M"],
    colors: ["#c8a188", "#4a3a44"],
    tags: ["小香风", "高级感"],
    featured: false,
  },
];

// 按分类筛选
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

// 首页精选
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

// 根据 slug 查找单个商品
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}