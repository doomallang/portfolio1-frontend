'use client'

import AccountInfoView from '@/app/account/info/_module/component/account.info.view'
import AccountInfoTitle from '@/app/account/info/_module/component/account.info.title'

import style from './_module/css/body.module.css'

export default function AccountInfoBody() {
  return (
    <>
      <div className={style.bodyContainer}>
        <AccountInfoTitle />
        <AccountInfoView />
      </div>
    </>
  )
}
