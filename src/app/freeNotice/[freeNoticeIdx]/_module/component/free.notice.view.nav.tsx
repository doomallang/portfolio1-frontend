import style from '../css/nav.module.css'
import { Button } from 'antd'
import { HighlightOutlined } from '@ant-design/icons'
import useLink from '@/hooks/useLink'
import { RouteUrl } from '@/enums/url'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FreeNoticeViewNav() {
  const [token, setToken] = useState('')

  const { freeNoticeIdx } = useParams()
  const { onLink } = useLink()

  useEffect(() => {
    setToken(localStorage.getItem('token')!)
  }, [token])

  return (
    <div className={style.navContainer}>
      <div>
        {token && token!.length > 0 && (
          <Button
            type={'primary'}
            onClick={() => onLink(`${RouteUrl.FREE_NOTICE_WRITE}/${freeNoticeIdx}`)}
          >
            <HighlightOutlined />
            수정하기
          </Button>
        )}
      </div>
    </div>
  )
}
