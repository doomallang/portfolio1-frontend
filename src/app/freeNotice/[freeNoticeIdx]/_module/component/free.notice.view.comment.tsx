import { useFreeNoticeCommentQuery } from '@/queries/query.free.notice'
import { useEffect, useState } from 'react'
import useErrorStore from '@/stores/store.error'

import style from '../css/comment.module.css'
import { Avatar, Button, Card, Input, List, notification } from 'antd'
import { ViewTitle } from '@/enums/text'
import { addFreeNoticeComment, modifyCommentRecommend } from '@/api/api.free.notice'
import { FreeNoticeComment } from '@/interfaces/interface.free.notice'
import { calDate } from '@/util/common'

export default function FreeNoticeViewComment({ id }: { id: string }) {
  const { setError } = useErrorStore()
  const token = localStorage.getItem('token')
  const [content, setContent] = useState('')
  const { data, error, isError, refetch } = useFreeNoticeCommentQuery(id)
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    if (isError) {
      setError(true, error.message)
    }
  }, [isError])

  async function addComment() {
    if (content !== '' && token !== null) {
      const accountId = localStorage.getItem('accountId')
      const response = await addFreeNoticeComment(id, content, accountId!)
      if (response.status === 200) {
        refetch()
      }
    }
  }

  async function commentRecommend(commentIdx: number) {
    if (token !== null) {
      const accountId = localStorage.getItem('accountId')
      const response = await modifyCommentRecommend(commentIdx.toString(), accountId!)
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
      <div className={style.commentContainer}>
        <Card style={{ width: '100%' }}>
          <Input
            id={'accountId'}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={
              token === null
                ? '댓글을 쓰려면 로그인 후 이용 가능합니다.'
                : '타인에게 피해를 주는 댓글은 작성하지 마세요.'
            }
            disabled={token === null}
          />
          <Button onClick={addComment} className={style.button}>
            {ViewTitle.WRITE_COMMENT}
          </Button>
        </Card>
        {data && (
          <List
            dataSource={data.data}
            locale={{
              emptyText: <></>,
            }}
            renderItem={(item: FreeNoticeComment) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.resAccount.avatar} />}
                  title={item.resAccount.nickname}
                  description={
                    <div className={style.contentContainer}>
                      <div>
                        <div className={style.datetime}>
                          {calDate(item.createDatetime) > 0
                            ? calDate(item.createDatetime) + '일전'
                            : '방금'}
                        </div>
                        <div className={style.content}>{item.content}</div>
                      </div>
                      <div
                        className={style.recommend}
                        onClick={() => commentRecommend(item.commentIdx)}
                      >
                        ♡ {item.recommendCount}
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </>
  )
}
