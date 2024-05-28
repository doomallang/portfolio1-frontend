import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const FreeNoticeWriteBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function FreeNoticeWrite() {
  return <FreeNoticeWriteBody />
}
