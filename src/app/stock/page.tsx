import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const StockBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Stock() {
  return <StockBody />
}
