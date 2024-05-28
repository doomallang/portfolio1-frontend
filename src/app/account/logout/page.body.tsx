'use client'

import { useEffect } from 'react'
import useLink from '@/hooks/useLink'
import useAuthStore from '@/stores/store.auth'
import { RouteUrl } from '@/enums/url'

export default function LogoutBody() {
  const { onLink } = useLink()
  const { path } = useAuthStore()

  useEffect(() => {
    localStorage.clear()

    onLink(path === null || path === '' ? RouteUrl.HOME : path)
  }, [])

  return (
    <>
      <div></div>
    </>
  )
}
