// 商品分类
export type Category = "dress" | "top" | "skirt" | "outer" | "knit" | "accessory";

// 商品信息
export interface Product {
  slug: string;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  category: Category;
  description: string;
  sizes: string[];
  /** 颜色色块（hex 值），用于色卡展示 */
  colors: string[];
  tags: string[];
  /** 商品图路径（放在 public/images/products/ 下）；留空则显示渐变占位 */
  image?: string;
  /** 商品多图（含主图），用于详情页轮播；若为空则使用 image */
  images?: string[];
  /** 尺码对照表（可选），首行为表头 */
  sizeChart?: {
    headers: string[];
    rows: string[][];
  };
  /** 是否为首页精选 */
  featured?: boolean;
}

// 分类的中文显示名
export const CATEGORY_LABELS: Record<Category, string> = {
  dress: "连衣裙",
  top: "上衣",
  skirt: "半身裙",
  outer: "外套",
  knit: "针织",
  accessory: "配饰",
};