import { ViewTitle } from '@/enums/text'
import { Button } from 'antd'
import { RouteUrl } from '@/enums/url'
import style from '@/app/account/login/_module/css/home.module.css'
import useLink from '@/hooks/useLink'

export default function LoginHome() {
  const { onLink } = useLink()

  return (
    <div className={style.homeButtonContainer}>
      <Button onClick={() => onLink(RouteUrl.HOME)} className={style.joinButton}>
        {ViewTitle.HOME}
      </Button>
    </div>
  )
}
