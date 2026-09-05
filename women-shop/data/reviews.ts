// 商品评价数据（种子数据，用户新增评价存 localStorage）
export interface Review {
  id: string;
  slug: string;
  author: string;
  rating: number; // 1-5
  content: string;
  date: string;
  likes: number;
  size?: string;
}

export const seedReviews: Review[] = [
  {
    id: "r1",
    slug: "plain-white-collar-dress",
    author: "青**子",
    rating: 5,
    content: "版型很正，立领显气质，白色是偏奶的白，不透。164/52 穿 M 刚好。",
    date: "2026-08-28",
    likes: 23,
    size: "M",
  },
  {
    id: "r2",
    slug: "plain-white-collar-dress",
    author: "一**墨",
    rating: 4,
    content: "面料比想象中厚实，秋天穿刚好。裙长到我小腿中部，小个子建议配跟鞋。",
    date: "2026-08-20",
    likes: 11,
    size: "S",
  },
  {
    id: "r3",
    slug: "ink-slip-dress",
    author: "晚**风",
    rating: 5,
    content: "丝缎光泽绝了，室内看是哑光黑，阳光下有流动感。搭开衫就是一套。",
    date: "2026-09-01",
    likes: 31,
    size: "M",
  },
  {
    id: "r4",
    slug: "silk-cloud-shirt",
    author: "山**月",
    rating: 5,
    content: "真丝手感很软糯，暗门襟很利落。通勤穿被同事问了三次链接。",
    date: "2026-08-25",
    likes: 18,
    size: "L",
  },
  {
    id: "r5",
    slug: "smoke-blazer",
    author: "北**巷",
    rating: 5,
    content: "廓形但不压个子，肩线做得漂亮。烟灰色比黑色特别，比浅灰耐看。",
    date: "2026-08-30",
    likes: 27,
    size: "S",
  },
  {
    id: "r6",
    slug: "noir-long-coat",
    author: "雾**里",
    rating: 5,
    content: "羊毛料子挺括不扎，长度到脚踝上方，冬天一件就够气场。",
    date: "2026-09-02",
    likes: 15,
    size: "M",
  },
  {
    id: "r7",
    slug: "ink-a-line-skirt",
    author: "拾**光",
    rating: 4,
    content: "高腰真的显腿长，A 字摆遮胯。墨色很正，配白衬衫绝配。",
    date: "2026-08-18",
    likes: 9,
    size: "M",
  },
  {
    id: "r8",
    slug: "mist-knit-cardigan",
    author: "云**深",
    rating: 5,
    content: "软糯不塌，米白色很温柔。均码我 158 穿是 oversize 的感觉，喜欢。",
    date: "2026-08-22",
    likes: 14,
  },
];

export function getReviewsBySlug(slug: string): Review[] {
  return seedReviews.filter((r) => r.slug === slug);
}
