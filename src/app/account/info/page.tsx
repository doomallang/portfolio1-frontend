import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const AccountInfoBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function AccountInfo() {
  return <AccountInfoBody />
}
