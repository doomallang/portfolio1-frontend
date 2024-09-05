'use client'

import style from './_module/css/body.module.css'
import LoginForm from '@/app/account/login/_module/component/login.form'
import LoginTitle from '@/app/account/login/_module/component/login.title'
import LoginJoin from '@/app/account/login/_module/component/login.join'
import LoginHome from '@/app/account/login/_module/component/login.home'

export default function LoginBody() {
  return (
    <div className={style.loginContainer}>
      <div>
        <LoginTitle />
        <LoginForm />
        <LoginJoin />
        <LoginHome />
      </div>
    </div>
  )
}
