/** 价格格式化为 ¥xxx */
export function formatPrice(price: number): string {
  return `¥${price.toFixed(0)}`;
}