import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const FreeNoticeBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function FreeNotice() {
  return <FreeNoticeBody />
}
