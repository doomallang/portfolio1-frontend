import clientHttpClient from '@/util/clientHttpClient'
import { FinanceApi } from '@/enums/url'

export async function getStockList(sector: string) {
  return await clientHttpClient.get(FinanceApi.STOCK_LIST, { sector: sector })
}

export async function getRecommendStockList() {
  return await clientHttpClient.get(FinanceApi.STOCK_RECOMMEND_LIST)
}

export async function getStock(stockUid: number) {
  return await clientHttpClient.get(FinanceApi.STOCK, { stockUid: `${stockUid}` })
}

export async function getNowStockPrice(stockCode: string) {
  return await clientHttpClient.get(FinanceApi.STOCK_PRICE, { stockCode: `${stockCode}` })
}

export async function getNewsList(stockName: string) {
  return await clientHttpClient.get(FinanceApi.STOCK_NEWS, { stockName: `${stockName}` })
}
