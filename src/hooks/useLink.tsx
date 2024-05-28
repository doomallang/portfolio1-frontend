import { useRouter } from 'next/navigation'
import useAuthStore from '@/stores/store.auth'

export default function useLink() {
  const { setAccountId, setPath, setAvatar } = useAuthStore()
  const router = useRouter()

  const onLink = (link: string) => {
    const accountId = localStorage.getItem('accountId')
    const avatar = localStorage.getItem('avatar')
    const token = localStorage.getItem('token')

    if (token !== null && token!.length > 0) {
      setAccountId(accountId!)
      setAvatar(avatar!)
    } else {
      setAccountId('')
    }

    if (link !== '/account/join' && link !== '/account/login' && link !== '/account/logout') {
      setPath(link + window.location.search)
    }

    router.push(link + window.location.search)
  }

  const onBack = () => {
    router.back()
  }

  return {
    onLink,
    onBack,
  }
}
