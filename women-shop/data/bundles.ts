// 搭配套装：slug → 推荐搭配的商品 slug 列表
export const bundleMap: Record<string, string[]> = {
  "plain-white-collar-dress": ["silver-drop-earrings", "ink-silk-hair-ribbon"],
  "ink-slip-dress": ["mist-knit-cardigan", "silver-drop-earrings"],
  "silk-cloud-shirt": ["ink-a-line-skirt", "silver-drop-earrings"],
  "charcoal-turtleneck": ["ivory-pleated-skirt", "ink-silk-hair-ribbon"],
  "ink-a-line-skirt": ["silk-cloud-shirt", "charcoal-turtleneck"],
  "ivory-pleated-skirt": ["charcoal-turtleneck", "mist-knit-cardigan"],
  "smoke-blazer": ["silk-cloud-shirt", "ink-a-line-skirt"],
  "noir-long-coat": ["ash-turtleneck", "ink-a-line-skirt"],
  "mist-knit-cardigan": ["ink-slip-dress", "ivory-pleated-skirt"],
  "ash-turtleneck": ["noir-long-coat", "ink-a-line-skirt"],
  "silver-drop-earrings": ["ink-slip-dress", "plain-white-collar-dress"],
  "ink-silk-hair-ribbon": ["plain-white-collar-dress", "ivory-pleated-skirt"],
};

/** 套装优惠：组合立减金额 */
export const BUNDLE_DISCOUNT = 30;
