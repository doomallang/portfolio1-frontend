'use client'

import { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'
import useLink from '@/hooks/useLink'
import { addFreeNotice } from '@/api/api.free.notice'
import { RouteUrl } from '@/enums/url'
import style from '../css/form.module.css'
import { ViewTitle } from '@/enums/text'
import HtmlEditor from '@/components/HtmlEditor'
import { useParams } from 'next/navigation'
import { useFreeNoticeViewQuery } from '@/queries/query.free.notice'

export default function FreeNoticeModifyForm() {
  const { freeNoticeIdx } = useParams()
  const { data, isSuccess, refetch } = useFreeNoticeViewQuery(freeNoticeIdx.toString())
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [form] = Form.useForm()

  const { onLink } = useLink()

  useEffect(() => {
    if (isSuccess) {
      setTitle(data.data.title)
      setText(data.data.content)
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [freeNoticeIdx])

  async function onClickRegist() {
    const accountId = localStorage.getItem('accountId')
    const response = await addFreeNotice(freeNoticeIdx.toString(), title, text, accountId!)

    if (response.status === 200) {
      onLink(RouteUrl.FREE_NOTICE)
    }
  }

  return (
    <div className={style.formContainer}>
      <Form form={form} layout={'vertical'}>
        <Form.Item label={ViewTitle.TITLE_TEXT}>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label={ViewTitle.CONTENT}>
          <HtmlEditor text={text} setText={setText} />
        </Form.Item>
        <div className={style.buttonContainer}>
          <Form.Item>
            <Button type="primary" className={style.button} onClick={onClickRegist}>
              {ViewTitle.REGIST}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
