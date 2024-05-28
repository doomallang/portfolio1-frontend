'use client'

import style from './_module/css/body.module.css'
import JoinTitle from '@/app/account/join/_module/component/join.title'
import JoinForm from '@/app/account/join/_module/component/join.form'
import JoinLogin from '@/app/account/join/_module/component/join.login'

export default function JoinBody() {
  return (
    <div className={style.joinContainer}>
      <div>
        <JoinTitle />
        <JoinForm />
        <JoinLogin />
      </div>
    </div>
  )
}
