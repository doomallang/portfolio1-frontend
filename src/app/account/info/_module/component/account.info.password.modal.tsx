import { ErrorDesc, ErrorTitle, ViewDesc, ViewTitle } from '@/enums/text'
import style from '@/app/account/info/_module/css/view.module.css'
import { Input, Modal } from 'antd'
import { useState } from 'react'
import { validatePass } from '@/util/common'
import { aesEncrypt } from '@/util/aesUtil'
import { passwordChange } from '@/api/api.account'

export default function AccountInfoPasswordModal({
  isModalOpen,
  setIsModalOpen,
  openNotification,
  accountIdx,
}: {
  isModalOpen: boolean
  setIsModalOpen: Function
  openNotification: Function
  accountIdx?: number
}) {
  const [prevPassword, setPrevPassword] = useState('')
  const [nextPassword, setNextPassword] = useState('')

  function onChangePrevPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPrevPassword(e.target.value)
  }

  function onChangeNextPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setNextPassword(e.target.value)
  }

  const handleCancel = () => {
    setPrevPassword('')
    setNextPassword('')
    setIsModalOpen(false)
  }

  async function handleOk() {
    if (!validatePass(nextPassword)) {
      openNotification(ErrorTitle.PASSWORD_ERROR, ErrorDesc.PASSWORD_ERROR_DESC)
    } else {
      const encPrevPassword = aesEncrypt(prevPassword)
      const encNextPassword = aesEncrypt(nextPassword)
      const response = await passwordChange(accountIdx!, encPrevPassword, encNextPassword)
      if (response.status !== 200) {
        openNotification(ErrorTitle.PASSWORD_ERROR, response.message)
      } else {
        openNotification(ViewTitle.SUCCESS, ViewDesc.SUCCESS_DESC)
        handleCancel()
      }
    }
  }

  return (
    <Modal
      title={ViewTitle.PASSWORD_CHANGE}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={ViewTitle.CHANGE}
      cancelText={ViewTitle.CANCEL}
    >
      <div className={style.modalInput}>
        <div>현재 비밀번호</div>
        <Input
          type={'password'}
          value={prevPassword}
          onChange={onChangePrevPassword}
          placeholder={ViewDesc.PASSWORD_PLACE_HOLDER}
        />
      </div>
      <div className={style.modalInput}>
        <div>변경할 비밀번호</div>
        <Input
          type={'password'}
          value={nextPassword}
          onChange={onChangeNextPassword}
          placeholder={ViewDesc.PASSWORD_PLACE_HOLDER}
        />
      </div>
    </Modal>
  )
}
