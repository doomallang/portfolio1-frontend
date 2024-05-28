'use client'

import style from '@/app/freeNotice/write/_module/css/form.module.css'
import { Button } from 'antd'
import { ViewTitle } from '@/enums/text'
import { useEffect, useState } from 'react'
import { useFreeNoticeViewQuery } from '@/queries/query.free.notice'
import { useParams } from 'next/navigation'
import useLink from '@/hooks/useLink'
import ContentsTitle from '@/components/ContentsTitle'

export default function FreeNoticeViewContent() {
  const { freeNoticeIdx } = useParams()
  const { data, isSuccess, refetch } = useFreeNoticeViewQuery(freeNoticeIdx.toString())
  const { onBack } = useLink()

  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (isSuccess) {
      setTitle(data.data.title)
      setText(data.data.content)
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [freeNoticeIdx])

  return (
    <div className={style.formContainer}>
      <ContentsTitle title={title} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <Button type="primary" className={style.button} onClick={onBack}>
        {ViewTitle.LIST}
      </Button>
    </div>
  )
}
