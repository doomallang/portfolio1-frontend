import { MenuProps } from 'antd'
import { ViewTitle } from '@/enums/text'

type MenuItem = Required<MenuProps>['items'][number]

const menuItems: MenuItem[] = [
  {
    label: ViewTitle.FREE_NOTICE,
    key: 'freeNotice?page=1',
  },
  {
    label: ViewTitle.Q_AND_A,
    key: 'qna',
  },
  {
    label: ViewTitle.MOVIE,
    key: 'movie',
  },
  {
    label: ViewTitle.STOCK,
    key: 'stock',
  },
]

export { menuItems }
