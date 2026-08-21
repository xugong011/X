/** 价格格式化为 ¥xxx */
export function formatPrice(price: number): string {
  return `¥${price.toFixed(0)}`;
}

/** 取英文名前两个单词的首字母，用于占位 monogram */
export function toInitials(nameEn: string): string {
  return nameEn
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}