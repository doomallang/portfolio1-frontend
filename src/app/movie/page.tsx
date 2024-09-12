import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const MovieBody = dynamic(() => import('./page.body'), {
  loading: () => <Loading />,
})

export default function Movie() {
  return <MovieBody />
}
