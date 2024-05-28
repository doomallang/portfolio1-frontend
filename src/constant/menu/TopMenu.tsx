import { MenuProps } from 'antd'
import { ViewTitle } from '@/enums/text'

type MenuItem = Required<MenuProps>['items'][number]

const menuItems: MenuItem[] = [
  {
    label: ViewTitle.FREE_NOTICE,
    key: 'freeNotice',
  },
  {
    label: ViewTitle.Q_AND_A,
    key: 'qna',
  },
]

export { menuItems }
