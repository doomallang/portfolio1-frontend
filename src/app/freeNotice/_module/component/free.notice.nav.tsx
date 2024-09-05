import style from '../css/nav.module.css'
import { Button, Select } from 'antd'
import { HighlightOutlined } from '@ant-design/icons'
import { FreeNoticeSelect } from '@/constant/SelectType'
import useLink from '@/hooks/useLink'
import { RouteUrl } from '@/enums/url'
import { ViewTitle } from '@/enums/text'

export default function FreeNoticeNav({ setSortType }: { setSortType: Function }) {
  const token = localStorage.getItem('token')
  const { onLink } = useLink()

  const handleChange = (value: string) => {
    setSortType(value)
  }

  function movePage() {
    if (token !== null) {
      onLink(RouteUrl.FREE_NOTICE_WRITE)
    } else {
      onLink(RouteUrl.ACCOUNT_LOGIN)
    }
  }

  return (
    <div className={style.navContainer}>
      <div>
        <Button type={'primary'} onClick={movePage}>
          <HighlightOutlined />
          {ViewTitle.FREE_NOTICE_WRITE}
        </Button>
      </div>
      <div>
        <Select
          defaultValue="recent"
          style={{ width: 120 }}
          onChange={handleChange}
          options={FreeNoticeSelect}
        />
      </div>
    </div>
  )
}
