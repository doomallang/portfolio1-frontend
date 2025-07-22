import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const Map2Body = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Map2() {
  return <Map2Body />
}
