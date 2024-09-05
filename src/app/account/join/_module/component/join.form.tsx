import style from '../css/form.module.css'
import { Button, Form, Input, notification } from 'antd'
import { ErrorDesc, ErrorTitle, ViewDesc, ViewTitle } from '@/enums/text'
import { useState } from 'react'
import { isEmptyObject, validateEmail, validatePass } from '@/util/common'
import { join } from '@/api/api.account'
import { aesEncrypt } from '@/util/aesUtil'

export default function JoinForm() {
  const [form] = Form.useForm()
  const [account, setAccount] = useState<Account>({
    accountIdx: 0,
    accountId: '',
    password: '',
    name: '',
    nickname: '',
    email: '',
  })
  const [api, contextHolder] = notification.useNotification()

  function openNotification(title: string, desc: string) {
    api.info({
      message: title,
      description: desc,
      placement: 'top',
    })
  }

  function onChangeAccount(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target
    setAccount({
      ...account,
      [id]: value,
    })
  }

  function validateAccount() {
    const key = isEmptyObject(account)
    if (key !== '') {
      openNotification(ErrorTitle.EMPTY_OBJECT_ERROR, key + ErrorDesc.EMPTY_OBJECT_ERROR_DESC)
      return false
    }
    if (!validatePass(account.password)) {
      openNotification(ErrorTitle.PASSWORD_ERROR, ErrorDesc.PASSWORD_ERROR_DESC)
      return false
    }
    if (!validateEmail(account.email)) {
      openNotification(ErrorTitle.EMAIL_ERROR, ErrorDesc.EMAIL_ERROR_DESC)
      return false
    }
    return true
  }

  async function onClickJoin() {
    if (validateAccount()) {
      const encPassword = aesEncrypt(account.password)
      await join(account.accountId, encPassword, account.name, account.nickname, account.email)
    }
  }

  return (
    <>
      {contextHolder}
      <div className={style.formContainer}>
        <Form form={form} layout={'vertical'}>
          <Form.Item label={ViewTitle.ID}>
            <Input
              id={'accountId'}
              value={account.accountId}
              onChange={onChangeAccount}
              placeholder={ViewDesc.ID_PLACE_HOLDER}
            />
          </Form.Item>
          <Form.Item label={ViewTitle.PASSWORD}>
            <Input
              id={'password'}
              type={'password'}
              value={account.password}
              onChange={onChangeAccount}
              placeholder={ViewDesc.PASSWORD_PLACE_HOLDER}
            />
          </Form.Item>
          <Form.Item label={ViewTitle.NAME}>
            <Input
              id={'name'}
              value={account.name}
              onChange={onChangeAccount}
              placeholder={ViewDesc.NAME_PLACE_HOLDER}
            />
          </Form.Item>
          <Form.Item label={ViewTitle.NICKNAME}>
            <Input
              id={'nickname'}
              value={account.nickname}
              onChange={onChangeAccount}
              placeholder={ViewDesc.NICKNAME_PLACE_HOLDER}
            />
          </Form.Item>
          <Form.Item label={ViewTitle.EMAIL}>
            <Input
              id={'email'}
              value={account.email}
              onChange={onChangeAccount}
              placeholder={ViewDesc.EMAIL_PLACE_HOLDER}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className={style.button} onClick={onClickJoin}>
              {ViewTitle.JOIN}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
