import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const FreeNoticeModifyBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function FreeNoticeModify() {
  return <FreeNoticeModifyBody />
}
