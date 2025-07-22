import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const Map3Body = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Map3() {
  return <Map3Body />
}
