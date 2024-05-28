import { UserOutlined } from '@ant-design/icons'
import { ViewTitle } from '@/enums/text'

import style from './_module/css/loginbar.module.css'
import useLink from '@/hooks/useLink'
import { Button, Dropdown, MenuProps } from 'antd'
import { RouteUrl } from '@/enums/url'
import useAuthStore from '@/stores/store.auth'

const items: MenuProps['items'] = [
  {
    label: ViewTitle.INFO,
    key: '/account/info',
  },
  {
    label: ViewTitle.LOGOUT,
    key: '/account/logout',
  },
]

export default function LoginBar() {
  const { accountId, avatar } = useAuthStore()
  const { onLink } = useLink()

  const subMenuClick: MenuProps['onClick'] = (e) => {
    onLink(e.key)
  }

  return (
    <>
      {accountId !== '' ? (
        <Dropdown
          className={style.loginContainer}
          menu={{ items, onClick: subMenuClick }}
          placement="bottomRight"
        >
          <Button className={style.loginButton}>
            <img src={avatar} />
            <span>{accountId}</span>
          </Button>
        </Dropdown>
      ) : (
        <Button className={style.loginContainer} onClick={() => onLink(RouteUrl.ACCOUNT_LOGIN)}>
          <UserOutlined />
          <span>{ViewTitle.LOGIN}</span>
        </Button>
      )}
    </>
  )
}
