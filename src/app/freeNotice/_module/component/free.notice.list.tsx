'use client'

import style from '../css/list.module.css'
import { Avatar, List, Pagination, PaginationProps } from 'antd'
import { FreeNotice } from '@/interfaces/interface.free.notice'
import { HeartOutlined, MehOutlined } from '@ant-design/icons'
import useLink from '@/hooks/useLink'
import { RouteUrl } from '@/enums/url'
import { removeTag } from '@/util/common'

export default function FreeNoticeList({
  count,
  contents,
  setPage,
}: {
  count: number
  contents: FreeNotice[]
  setPage: Function
}) {
  const { onLink } = useLink()
  const onChangePage: PaginationProps['onChange'] = (page) => {
    setPage(page)
  }

  return (
    <div className={style.listContainer}>
      <List
        dataSource={contents}
        renderItem={(item) => (
          <List.Item onClick={() => onLink(`${RouteUrl.FREE_NOTICE}/${item.freeNoticeIdx}`)}>
            <List.Item.Meta
              avatar={<Avatar src={item.resAccount.avatar} />}
              title={<div>{item.title}</div>}
              description={
                <div>
                  {removeTag(item.content).length > 30
                    ? removeTag(item.content).substring(0, 30) + '...'
                    : removeTag(item.content)}
                </div>
              }
            />
            <div>
              <span className={style.viewCount}>
                <MehOutlined />
                {item.viewCount}
              </span>
              <span>
                <HeartOutlined />
                {item.recommendCount}
              </span>
            </div>
          </List.Item>
        )}
      />
      <Pagination total={count} onChange={onChangePage} />
    </div>
  )
}
