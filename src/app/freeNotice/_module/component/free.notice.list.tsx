'use client'

import style from '../css/list.module.css'
import { Avatar, List } from 'antd'
import { FreeNotice } from '@/interfaces/interface.free.notice'
import { HeartOutlined, MehOutlined } from '@ant-design/icons'
import useLink from '@/hooks/useLink'
import { RouteUrl } from '@/enums/url'
import { removeTag } from '@/util/common'

export default function FreeNoticeList({
  contents,
  page,
}: {
  contents: FreeNotice[]
  page: number
}) {
  const { onLink } = useLink()

  return (
    <div className={style.listContainer}>
      <List
        dataSource={contents}
        renderItem={(item) => (
          <List.Item
            onClick={() => onLink(`${RouteUrl.FREE_NOTICE}/${item.freeNoticeIdx}?page=${page}`)}
          >
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
    </div>
  )
}
