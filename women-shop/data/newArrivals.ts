// 新品日历数据（上新计划）
export interface NewArrival {
  id: string;
  name: string;
  nameEn: string;
  date: string; // YYYY-MM-DD
  category: string;
  price: number;
  hint: string;
}

export const newArrivals: NewArrival[] = [
  {
    id: "na1",
    name: "霜白盘扣衬衫",
    nameEn: "Frost White Knot Shirt",
    date: "2026-09-10",
    category: "上衣",
    price: 359,
    hint: "手工盘扣 + 高支棉，秋日第一件国风衬衫",
  },
  {
    id: "na2",
    name: "黛色缎面半裙",
    nameEn: "Dark Teal Satin Skirt",
    date: "2026-09-18",
    category: "半身裙",
    price: 319,
    hint: "低饱和黛色，缎面微光，行走如水",
  },
  {
    id: "na3",
    name: "墨白渐变丝巾",
    nameEn: "Ink Gradient Scarf",
    date: "2026-09-25",
    category: "配饰",
    price: 159,
    hint: "水墨晕染渐变，系颈或缠包柄皆宜",
  },
  {
    id: "na4",
    name: "玄黑羊毛斗篷",
    nameEn: "Noir Wool Cape",
    date: "2026-10-08",
    category: "外套",
    price: 799,
    hint: "冬季主打，一体剪裁斗篷，气场担当",
  },
  {
    id: "na5",
    name: "月白针织连衣裙",
    nameEn: "Moonlight Knit Dress",
    date: "2026-10-16",
    category: "连衣裙",
    price: 469,
    hint: "细针密织，温柔包裹，单穿即完整",
  },
  {
    id: "na6",
    name: "石灰直筒长裤",
    nameEn: "Limestone Straight Pants",
    date: "2026-10-23",
    category: "裤装",
    price: 339,
    hint: "垂坠西装料，直筒微阔，通勤新选",
  },
  {
    id: "na7",
    name: "素银一字发簪",
    nameEn: "Silver Bar Hairpin",
    date: "2026-11-06",
    category: "配饰",
    price: 119,
    hint: "极简一字簪，哑光素银，点睛盘发",
  },
  {
    id: "na8",
    name: "云灰羊绒围巾",
    nameEn: "Cloud Grey Cashmere Scarf",
    date: "2026-11-13",
    category: "配饰",
    price: 429,
    hint: "100% 羊绒，轻若无物，入冬必备",
  },
];
