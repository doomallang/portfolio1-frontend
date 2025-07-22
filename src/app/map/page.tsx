import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const MapBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Map() {
  return <MapBody />
}
