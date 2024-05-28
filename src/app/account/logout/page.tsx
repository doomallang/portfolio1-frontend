import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const LogoutBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Logout() {
  return <LogoutBody />
}
