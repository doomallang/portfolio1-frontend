'use client'

import FreeNoticeWriteTitle from '@/app/freeNotice/write/_module/component/free.notice.write.title'
import style from './_module/css/body.module.css'
import FreeNoticeWriteForm from '@/app/freeNotice/write/_module/component/free.notice.write.form'
import { useEffect } from 'react'
import { validToken } from '@/api/api.common'
import useLink from '@/hooks/useLink'

export default function FreeNoticeWriteBody() {
  const { onBack } = useLink()
  useEffect(() => {
    valid()
  }, [])

  async function valid() {
    const response = await validToken()
    if (response.code !== 200) {
      onBack()
    }
  }

  return (
    <>
      <div className={style.bodyContainer}>
        <FreeNoticeWriteTitle />
        <FreeNoticeWriteForm />
      </div>
    </>
  )
}
