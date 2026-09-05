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
    images: [
      "/images/products/plain-white-collar-dress.jpg",
      "/images/products/plain-white-collar-dress-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "腰围(cm)", "衣长(cm)"],
      rows: [
        ["S", "84", "66", "115"],
        ["M", "88", "70", "117"],
        ["L", "92", "74", "119"],
      ],
    },
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
    images: [
      "/images/products/ink-slip-dress.jpg",
      "/images/products/ink-slip-dress-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "腰围(cm)", "衣长(cm)"],
      rows: [
        ["S", "82", "64", "110"],
        ["M", "86", "68", "112"],
        ["L", "90", "72", "114"],
      ],
    },
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
    images: [
      "/images/products/silk-cloud-shirt.jpg",
      "/images/products/silk-cloud-shirt-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "肩宽(cm)", "衣长(cm)", "袖长(cm)"],
      rows: [
        ["S", "96", "42", "68", "58"],
        ["M", "100", "43", "70", "59"],
        ["L", "104", "44", "72", "60"],
        ["XL", "108", "45", "74", "61"],
      ],
    },
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
    images: [
      "/images/products/charcoal-turtleneck.jpg",
      "/images/products/charcoal-turtleneck-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "衣长(cm)", "袖长(cm)"],
      rows: [
        ["S", "80", "60", "56"],
        ["M", "84", "62", "57"],
        ["L", "88", "64", "58"],
      ],
    },
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
    images: [
      "/images/products/ink-a-line-skirt.jpg",
      "/images/products/ink-a-line-skirt-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "腰围(cm)", "裙长(cm)"],
      rows: [
        ["S", "64", "78"],
        ["M", "68", "80"],
        ["L", "72", "82"],
      ],
    },
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
    images: [
      "/images/products/ivory-pleated-skirt.jpg",
      "/images/products/ivory-pleated-skirt-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "腰围(cm)", "裙长(cm)"],
      rows: [
        ["S", "64", "80"],
        ["M", "68", "82"],
        ["L", "72", "84"],
      ],
    },
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
    images: [
      "/images/products/smoke-blazer.jpg",
      "/images/products/smoke-blazer-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "肩宽(cm)", "衣长(cm)", "袖长(cm)"],
      rows: [
        ["S", "108", "46", "72", "60"],
        ["M", "112", "47", "74", "61"],
      ],
    },
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
    images: [
      "/images/products/noir-long-coat.jpg",
      "/images/products/noir-long-coat-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "肩宽(cm)", "衣长(cm)", "袖长(cm)"],
      rows: [
        ["S", "110", "44", "112", "58"],
        ["M", "114", "45", "114", "59"],
        ["L", "118", "46", "116", "60"],
      ],
    },
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
    images: [
      "/images/products/mist-knit-cardigan.jpg",
      "/images/products/mist-knit-cardigan-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "衣长(cm)", "袖长(cm)"],
      rows: [["均码", "110", "68", "58"]],
    },
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
    images: [
      "/images/products/ash-turtleneck.jpg",
      "/images/products/ash-turtleneck-detail.jpg",
    ],
    sizeChart: {
      headers: ["尺码", "胸围(cm)", "衣长(cm)", "袖长(cm)"],
      rows: [
        ["S", "96", "64", "57"],
        ["M", "100", "66", "58"],
        ["L", "104", "68", "59"],
      ],
    },
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
    images: [
      "/images/products/silver-drop-earrings.jpg",
      "/images/products/silver-drop-earrings-detail.jpg",
    ],
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
    images: [
      "/images/products/ink-silk-hair-ribbon.jpg",
      "/images/products/ink-silk-hair-ribbon-detail.jpg",
    ],
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