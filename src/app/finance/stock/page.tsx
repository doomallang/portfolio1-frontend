import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import { getStockSectorList } from '@/api/server/api.finance'

const FinanceStockBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default async function FinanceStock() {
  const response = await getStockSectorList()

  return <FinanceStockBody sectorList={response.data} />
}
