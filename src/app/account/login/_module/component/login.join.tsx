import { ViewDesc, ViewTitle } from '@/enums/text'

import style from '../css/join.module.css'
import useLink from '@/hooks/useLink'
import { RouteUrl } from '@/enums/url'
import { Button } from 'antd'

export default function LoginJoin() {
  const { onLink } = useLink()

  return (
    <div>
      <span>{ViewDesc.LOGIN_JOIN_DESC}</span>
      <Button onClick={() => onLink(RouteUrl.ACCOUNT_JOIN)} className={style.joinButton}>
        {ViewTitle.JOIN}
      </Button>
    </div>
  )
}
