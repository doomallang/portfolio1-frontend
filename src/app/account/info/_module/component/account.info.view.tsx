import { useEffect, useState } from 'react'
import { getInfo, modifyAccount } from '@/api/api.account'
import { ErrorTitle, ViewDesc, ViewTitle } from '@/enums/text'

import style from '../css/view.module.css'
import { Button, Input, notification } from 'antd'
import AccountInfoPasswordModal from '@/app/account/info/_module/component/account.info.password.modal'
import AccountInfoAvatarModal from '@/app/account/info/_module/component/account.info.avatar.modal'
import useLink from '@/hooks/useLink'

export default function AccountInfoView() {
  const [account, setAccount] = useState<Account>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [nickname, setNickname] = useState('')

  const [api, contextHolder] = notification.useNotification()
  const { onBack } = useLink()

  function openNotification(title: string, desc: string) {
    api.info({
      message: title,
      description: desc,
      placement: 'top',
    })
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  useEffect(() => {
    getAccountInfo()
  }, [])

  async function getAccountInfo() {
    const accountId = localStorage.getItem('accountId')
    if (accountId !== null) {
      const response = await getInfo(accountId!)
      setAccount(response.data)
      setAvatar(response.data.avatar)
      setNickname(response.data.nickname)
    } else {
      onBack()
    }
  }

  function selectAvatar(link: string) {
    setAvatar(link)
    setIsAvatarModalOpen(false)
  }

  function onChangeNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value)
  }

  async function buttonClick() {
    if (account?.nickname === nickname && account?.avatar === avatar) {
      openNotification(ViewTitle.ACCOUNT_MODIFY, ViewDesc.NOT_CHANGE)
    }
    const response = await modifyAccount(nickname, avatar, account!.accountIdx)
    if (response.status === 200) {
      localStorage.setItem('avatar', avatar)
      openNotification(ViewTitle.ACCOUNT_MODIFY, ViewDesc.SUCCESS_DESC)
      getAccountInfo()
    }
  }

  return (
    <>
      {contextHolder}
      {account && (
        <>
          <AccountInfoPasswordModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            openNotification={openNotification}
            accountIdx={account.accountIdx}
          />
          <AccountInfoAvatarModal
            isAvatarModalOpen={isAvatarModalOpen}
            setIsAvatarModalOpen={setIsAvatarModalOpen}
            selectAvatar={selectAvatar}
          />
          <div className={style.viewContainer}>
            <div className={style.title}>{ViewTitle.ID}</div>
            <div className={style.content}>{account?.accountId}</div>

            <div className={style.title}>{ViewTitle.PASSWORD}</div>
            <div className={style.content}>
              <Button onClick={showModal}>{ViewTitle.PASSWORD_CHANGE}</Button>
            </div>

            <div className={style.title}>{ViewTitle.NAME}</div>
            <div className={style.content}>{account?.name}</div>

            <div className={style.title}>{ViewTitle.NICKNAME}</div>
            <div className={style.content}>
              <Input value={nickname} onChange={onChangeNickname} />
            </div>

            <div className={style.title}>{ViewTitle.EMAIL}</div>
            <div className={style.content}>{account?.email}</div>

            <div className={style.title}>{ViewTitle.AVATAR}</div>
            <div className={style.avatarContent}>
              <img className={style.avatarImage} src={avatar} />
              <Button onClick={() => setIsAvatarModalOpen(true)} className={style.avatarButton}>
                변경
              </Button>{' '}
            </div>

            <div className={style.buttonBox}>
              <Button type={'primary'} onClick={buttonClick} className={style.button}>
                수정
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
