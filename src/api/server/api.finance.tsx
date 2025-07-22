import { FinanceApi } from '@/enums/url'
import serverHttpClient from '@/util/serverHttpClient'

export async function getStockSectorList() {
  return await serverHttpClient.get(FinanceApi.STOCK_SECTOR_LIST)
}
