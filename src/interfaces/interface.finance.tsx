interface Stock {
  stockUid?: number
  code?: string
  name?: string
  sector?: string
  per?: number
  pbr?: number
  roe?: number
  debtRatio?: number
  marketCap?: number
  recommended?: boolean
  stock?: number
  score?: number
  epsGrowth?: number
  dividendYield?: number

  nowPrice?: string
  diffPrice?: string
  diffRate?: string

  stockPrices?: StockPrice[]
}

interface StockPrice {
  stockPriceUid?: number
  code?: string
  date?: string
  open?: number
  high?: number
  low?: number
  close?: number
  volume?: number
  ma5?: number
  ma10?: number
  ma20?: number
  upper?: number
  lower?: number
  ret?: number
  goldenCross?: boolean
  isTrendingUp?: boolean
  macd?: number
  signal?: number
  histogram?: number
  score?: number
}

interface NowPrice {
  stockCode?: string
  price?: string
  diffPrice?: string
  diffRate?: string
}

interface News {
  title?: string
  link?: string
  description?: string
  pubDate?: string
}

export type { StockPrice, Stock, NowPrice, News }
