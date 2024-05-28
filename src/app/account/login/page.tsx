import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const LoginBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Login() {
  return <LoginBody />
}
