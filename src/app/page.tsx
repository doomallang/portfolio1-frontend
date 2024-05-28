'use client'

import { useEffect } from 'react'
import useLink from '@/hooks/useLink'
import { RouteUrl } from '@/enums/url'

export default function App() {
  const { onLink } = useLink()

  useEffect(() => {
    onLink(RouteUrl.HOME)
  }, [])

  return <div></div>
}
