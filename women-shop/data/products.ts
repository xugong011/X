import type { Product } from "@/types/product";

// 商品数据 —— 黑白简约国风系，贴合「西宫赋」审美
export const products: Product[] = [
  {
    slug: "plain-white-collar-dress",
    name: "素白立领长裙",
    nameEn: "Plain White Collar Dress",
    price: 399,
    originalPrice: 459,
    category: "dress",
    description:
      "高立领与小A字裙摆，线条干净利落。素白色泽自带清冷气质，通勤或日常都能穿出留白之美。",
    sizes: ["S", "M", "L"],
    colors: ["#f5f4f1"],
    tags: ["新品", "国风", "显瘦"],
    featured: true,
    image: "/images/products/plain-white-collar-dress.jpg",
  },
  {
    slug: "ink-slip-dress",
    name: "墨色丝缎吊带裙",
    nameEn: "Ink Slip Dress",
    price: 429,
    category: "dress",
    description:
      "丝缎面料自带柔和光泽，细肩带垂坠版型，行走间如水墨流淌，简约而不失风骨。",
    sizes: ["S", "M", "L"],
    colors: ["#1a1a1a"],
    tags: ["丝缎", "显瘦", "气质"],
    featured: true,
    image: "/images/products/ink-slip-dress.jpg",
  },
  {
    slug: "silk-cloud-shirt",
    name: "云白真丝衬衫",
    nameEn: "Silk Cloud Shirt",
    price: 339,
    category: "top",
    description:
      "宽松的廓形与真丝垂坠感，若隐若现的松弛。暗门襟设计更显利落，是衣橱里的留白单品。",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#f1ede6"],
    tags: ["真丝", "通勤", "简约"],
    featured: true,
    image: "/images/products/silk-cloud-shirt.jpg",
  },
  {
    slug: "charcoal-turtleneck",
    name: "玄灰高领打底",
    nameEn: "Charcoal Turtleneck",
    price: 219,
    category: "top",
    description:
      "细罗纹高领打底，包裹感刚好，玄灰色沉稳百搭，单穿或叠搭都干净利落。",
    sizes: ["S", "M", "L"],
    colors: ["#3f3f3f"],
    tags: ["基础款", "百搭"],
    featured: false,
    image: "/images/products/charcoal-turtleneck.jpg",
  },
  {
    slug: "ink-a-line-skirt",
    name: "墨色A字半裙",
    nameEn: "Ink A-Line Skirt",
    price: 269,
    category: "skirt",
    description:
      "利落的A字版型修饰腿型，墨色沉静显瘦，高腰设计轻松拉长比例。",
    sizes: ["S", "M", "L"],
    colors: ["#1a1a1a"],
    tags: ["显高", "百搭"],
    featured: true,
    image: "/images/products/ink-a-line-skirt.jpg",
  },
  {
    slug: "ivory-pleated-skirt",
    name: "素白百褶裙",
    nameEn: "Ivory Pleated Skirt",
    price: 289,
    category: "skirt",
    description:
      "细密的刀褶随步伐轻轻摆动，素白柔和显白，配上一件深色上衣便是恰到好处的留白。",
    sizes: ["S", "M", "L"],
    colors: ["#f5f4f1"],
    tags: ["温柔", "显白"],
    featured: false,
    image: "/images/products/ivory-pleated-skirt.jpg",
  },
  {
    slug: "smoke-blazer",
    name: "烟灰廓形西装",
    nameEn: "Smoke Tailored Blazer",
    price: 559,
    originalPrice: 629,
    category: "outer",
    description:
      "oversize 廓形带着不动声色的力量感，烟灰色高级耐看，内搭白衬衫就是成套的气场。",
    sizes: ["S", "M"],
    colors: ["#8a8a8a"],
    tags: ["廓形", "通勤", "高级感"],
    featured: true,
    image: "/images/products/smoke-blazer.jpg",
  },
  {
    slug: "noir-long-coat",
    name: "玄色长款大衣",
    nameEn: "Noir Long Coat",
    price: 699,
    category: "outer",
    description:
      "利落的翻领与挺括羊毛面料，长款剪裁大气从容，一件就能撑起整个冬季的通勤造型。",
    sizes: ["S", "M", "L"],
    colors: ["#1a1a1a", "#2b2b2b"],
    tags: ["长款", "大气", "高级感"],
    featured: true,
    image: "/images/products/noir-long-coat.jpg",
  },
  {
    slug: "mist-knit-cardigan",
    name: "云雾针织开衫",
    nameEn: "Mist Knit Cardigan",
    price: 329,
    category: "knit",
    description:
      "松软的开衫无扣设计，如云雾般轻盈包裹，米白温柔叠搭性强，衣橱里的实用留白。",
    sizes: ["均码"],
    colors: ["#ece7df"],
    tags: ["慵懒风", "百搭"],
    featured: true,
    image: "/images/products/mist-knit-cardigan.jpg",
  },
  {
    slug: "ash-turtleneck",
    name: "玄灰高领毛衣",
    nameEn: "Ash Turtleneck Sweater",
    price: 299,
    category: "knit",
    description:
      "粗针织高领毛衣，垂坠厚实，玄灰色块干净，单穿温暖有质感，秋冬的克制选择。",
    sizes: ["S", "M", "L"],
    colors: ["#8a8a8a", "#555555"],
    tags: ["保暖", "简约"],
    featured: false,
    image: "/images/products/ash-turtleneck.jpg",
  },
  {
    slug: "silver-drop-earrings",
    name: "素白银饰耳环",
    nameEn: "Silver Drop Earrings",
    price: 129,
    category: "accessory",
    description:
      "简洁的垂坠银饰，一点亮就足以为整套黑白造型收尾，低调而不失细节。",
    sizes: ["均码"],
    colors: ["#c4c4c4"],
    tags: ["配饰", "简约"],
    featured: false,
    image: "/images/products/silver-drop-earrings.jpg",
  },
  {
    slug: "ink-silk-hair-ribbon",
    name: "墨色丝缎发带",
    nameEn: "Ink Silk Hair Ribbon",
    price: 89,
    category: "accessory",
    description:
      "墨色丝缎裹成的蝴蝶结，束发或绕颈皆宜，是整套素色里的一处雅致点缀。",
    sizes: ["均码"],
    colors: ["#1a1a1a"],
    tags: ["配饰", "发饰", "国风"],
    featured: false,
    image: "/images/products/ink-silk-hair-ribbon.jpg",
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