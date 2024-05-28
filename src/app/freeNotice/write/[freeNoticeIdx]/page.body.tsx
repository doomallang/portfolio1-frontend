'use client'

import style from '@/app/freeNotice/write/_module/css/body.module.css'
import FreeNoticeWriteTitle from '@/app/freeNotice/write/_module/component/free.notice.write.title'
import FreeNoticeModifyForm from '@/app/freeNotice/write/[freeNoticeIdx]/_module/component/free.notice.modify.form'
import { useEffect } from 'react'
import useLink from '@/hooks/useLink'

export default function FreeNoticeModifyBody() {
  const { onBack } = useLink()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token || token.length < 1) {
      onBack()
    }
  }, [])

  return (
    <>
      <div className={style.bodyContainer}>
        <FreeNoticeWriteTitle />
        <FreeNoticeModifyForm />
      </div>
    </>
  )
}
