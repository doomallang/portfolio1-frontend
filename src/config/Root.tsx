import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Root({ children }: Props) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
