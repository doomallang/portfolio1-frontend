'use client'

import style from '../css/content.module.css'
import { Button, notification } from 'antd'
import { ViewTitle } from '@/enums/text'
import { useEffect } from 'react'
import { useFreeNoticeViewQuery } from '@/queries/query.free.notice'
import useLink from '@/hooks/useLink'
import ContentsTitle from '@/components/ContentsTitle'
import { RouteUrl } from '@/enums/url'
import useErrorStore from '@/stores/store.error'
import { modifyNoticeRecommend } from '@/api/api.free.notice'

export default function FreeNoticeViewContent({ id }: { id: string }) {
  const { setError } = useErrorStore()
  const { data, error, isError, refetch } = useFreeNoticeViewQuery(id)
  const [api, contextHolder] = notification.useNotification()
  const { onLink } = useLink()

  useEffect(() => {
    if (isError) {
      setError(true, error.message)
    }
  }, [isError])

  useEffect(() => {
    refetch()
  }, [id])

  async function noticeRecommend() {
    const token = localStorage.getItem('token')
    if (token != null) {
      const accountId = localStorage.getItem('accountId')
      const response = await modifyNoticeRecommend(id, accountId!)
      if (response.status === 200) {
        refetch()
      }
    } else {
      api.info({
        message: '',
        description: '로그인 후 이용 가능합니다.',
        placement: 'top',
      })
    }
  }

  return (
    <>
      {contextHolder}
      {data && (
        <div className={style.formContainer}>
          <div className={style.titleContainer}>
            <ContentsTitle title={data.data.title} />
          </div>
          <div className={style.contentsContainer}>
            <div dangerouslySetInnerHTML={{ __html: data.data.content }} />
          </div>
          <div className={style.recommend} onClick={noticeRecommend}>
            ☆ {data.data.recommendCount}
          </div>
          <Button
            type="primary"
            className={style.button}
            onClick={() => onLink(RouteUrl.FREE_NOTICE)}
          >
            {ViewTitle.LIST}
          </Button>
        </div>
      )}
    </>
  )
}
