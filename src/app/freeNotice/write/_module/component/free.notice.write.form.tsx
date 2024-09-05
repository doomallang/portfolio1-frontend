'use client'

import { Button, Form, Input } from 'antd'
import { ViewTitle } from '@/enums/text'
import style from '../css/form.module.css'
import HtmlEditor from '@/components/HtmlEditor'
import { useState } from 'react'
import useAuthStore from '@/stores/store.auth'
import { addFreeNotice } from '@/api/api.free.notice'
import useLink from '@/hooks/useLink'
import { RouteUrl } from '@/enums/url'

export default function FreeNoticeWriteForm() {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [form] = Form.useForm()

  const { onLink } = useLink()

  async function onClickRegist() {
    const response = await addFreeNotice('0', title, text)

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
