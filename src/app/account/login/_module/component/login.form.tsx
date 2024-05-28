'use client'

import style from '../css/form.module.css'
import { Button, Form, Input, notification } from 'antd'
import { ViewDesc, ViewTitle } from '@/enums/text'
import { useState } from 'react'
import { aesEncrypt } from '@/util/aesUtil'
import { login } from '@/api/api.account'
import useLink from '@/hooks/useLink'
import useAuthStore from '@/stores/store.auth'
import { RouteUrl } from '@/enums/url'

export default function LoginForm() {
  const [form] = Form.useForm()
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [api, contextHolder] = notification.useNotification()
  const { onLink } = useLink()
  const { path } = useAuthStore()

  const openNotification = (title: string, desc: string) => {
    api.info({
      message: title,
      description: desc,
      placement: 'top',
    })
  }

  async function onClickLogin() {
    const encPassword = aesEncrypt(password)

    const response = await login(id, encPassword)
    if (response.data.token !== null) {
      localStorage.setItem('accountId', response.data.accountId)
      localStorage.setItem('avatar', response.data.avatar)
      localStorage.setItem('token', response.data.token)
      onLink(path === null || path === '' ? RouteUrl.HOME : path)
    } else {
      openNotification(ViewTitle.LOGIN_FAIL, ViewDesc.LOGIN_FAIL_DESC)
    }
  }

  return (
    <>
      {contextHolder}
      <div className={style.formContainer}>
        <Form form={form} layout={'vertical'}>
          <Form.Item label={ViewTitle.ID}>
            <Input value={id} onChange={(e) => setId(e.target.value)} />
          </Form.Item>
          <Form.Item label={ViewTitle.PASSWORD}>
            <Input
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className={style.button} onClick={onClickLogin}>
              {ViewTitle.LOGIN}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
