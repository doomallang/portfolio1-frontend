'use client'

import { Layout } from 'antd'
import Top from '@/components/container/Top'
import Bottom from '@/components/container/Bottom'
import { ReactNode } from 'react'
import style from './_module/css/container.module.css'

const { Header, Footer, Sider, Content } = Layout

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return (
    <>
      <div className={style.contentsContainer}>
        <div className={style.header}>
          <Top />
        </div>
        <div className={style.content}>{children}</div>
      </div>
    </>
  )
}
