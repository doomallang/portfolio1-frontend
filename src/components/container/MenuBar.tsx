import { Menu, MenuProps } from 'antd'
import { useState } from 'react'
import { menuItems } from '@/constant/menu/TopMenu'

import style from './_module/css/menubar.module.css'
import useLink from '@/hooks/useLink'

export default function MenuBar() {
  const [current, setCurrent] = useState('mail')
  const { onLink } = useLink()

  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    onLink(`/${e.key}`)
  }

  return (
    <Menu
      className={style.menuContainer}
      onClick={onClickMenu}
      selectedKeys={[current]}
      items={menuItems}
      mode={'horizontal'}
    />
  )
}
