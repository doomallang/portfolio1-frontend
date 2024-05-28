import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const FreeNoticeViewBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function FreeNoticeView() {
  return <FreeNoticeViewBody />
}
