// 管理后台模拟数据
export interface AdminOrder {
  id: string;
  customer: string;
  phone: string;
  items: string;
  amount: number;
  status: "待付款" | "待发货" | "已发货" | "已完成" | "已退款";
  date: string;
}

export const adminOrders: AdminOrder[] = [
  { id: "XG2026090501", customer: "青**子", phone: "138****2233", items: "素白立领长裙 ×1", amount: 399, status: "待发货", date: "2026-09-05" },
  { id: "XG2026090402", customer: "晚**风", phone: "159****8871", items: "墨色丝缎吊带裙 ×1 + 素白银饰耳环 ×1", amount: 558, status: "待发货", date: "2026-09-04" },
  { id: "XG2026090401", customer: "山**月", phone: "186****0924", items: "云白真丝衬衫 ×1", amount: 339, status: "已发货", date: "2026-09-04" },
  { id: "XG2026090303", customer: "北**巷", phone: "137****5562", items: "烟灰廓形西装 ×1", amount: 559, status: "已发货", date: "2026-09-03" },
  { id: "XG2026090201", customer: "雾**里", phone: "150****3308", items: "玄色长款大衣 ×1", amount: 699, status: "已完成", date: "2026-09-02" },
  { id: "XG2026090102", customer: "拾**光", phone: "187****7745", items: "墨色A字半裙 ×1 + 玄灰高领打底 ×1", amount: 488, status: "已完成", date: "2026-09-01" },
  { id: "XG2026083101", customer: "云**深", phone: "135****9917", items: "云雾针织开衫 ×1", amount: 329, status: "已退款", date: "2026-08-31" },
];

export interface AdminMember {
  id: string;
  nickname: string;
  phone: string;
  orders: number;
  spent: number;
  joinedAt: string;
}

export const adminMembers: AdminMember[] = [
  { id: "m1", nickname: "青**子", phone: "138****2233", orders: 5, spent: 1866, joinedAt: "2026-03-12" },
  { id: "m2", nickname: "晚**风", phone: "159****8871", orders: 3, spent: 1287, joinedAt: "2026-04-02" },
  { id: "m3", nickname: "山**月", phone: "186****0924", orders: 2, spent: 678, joinedAt: "2026-05-19" },
  { id: "m4", nickname: "北**巷", phone: "137****5562", orders: 4, spent: 1547, joinedAt: "2026-02-25" },
  { id: "m5", nickname: "雾**里", phone: "150****3308", orders: 1, spent: 699, joinedAt: "2026-08-30" },
  { id: "m6", nickname: "拾**光", phone: "187****7745", orders: 2, spent: 757, joinedAt: "2026-06-14" },
];

// 库存（按商品 slug 初始化的模拟库存）
export const initialStock: Record<string, number> = {
  "plain-white-collar-dress": 36,
  "ink-slip-dress": 22,
  "silk-cloud-shirt": 48,
  "charcoal-turtleneck": 65,
  "ink-a-line-skirt": 41,
  "ivory-pleated-skirt": 18,
  "smoke-blazer": 12,
  "noir-long-coat": 9,
  "mist-knit-cardigan": 27,
  "ash-turtleneck": 33,
  "silver-drop-earrings": 80,
  "ink-silk-hair-ribbon": 54,
};
