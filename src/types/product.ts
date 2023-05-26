const PRODUCT = {
  '100': '예적금',
  '200': '대출',
  '300': '카드',
  '400': '제휴',
  '500': '보험',
} as const

export type ProductKey = keyof typeof PRODUCT
export type ProductValue = (typeof PRODUCT)[keyof typeof PRODUCT]
