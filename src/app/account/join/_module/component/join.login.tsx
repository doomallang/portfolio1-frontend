import { ViewDesc, ViewTitle } from '@/enums/text'
import { RouteUrl } from '@/enums/url'
import style from '../css/login.module.css'
import useLink from '@/hooks/useLink'
import { Button } from 'antd'

export default function JoinLogin() {
  const { onLink } = useLink()

  return (
    <>
      <div>
        <span>{ViewDesc.JOIN_LOGIN_DESC}</span>
        <Button onClick={() => onLink(RouteUrl.ACCOUNT_LOGIN)} className={style.loginButton}>
          {ViewTitle.LOGIN}
        </Button>
      </div>
    </>
  )
}
