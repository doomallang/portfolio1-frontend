import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const JoinBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Join() {
  return <JoinBody />
}
