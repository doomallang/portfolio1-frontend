'use client'

import FreeNoticeTitle from '@/app/freeNotice/_module/component/free.notice.title'

import style from './_module/css/body.module.css'
import FreeNoticeList from '@/app/freeNotice/_module/component/free.notice.list'
import { useFreeNoticeListQuery } from '@/queries/query.free.notice'
import { useEffect, useState } from 'react'
import FreeNoticeNav from '@/app/freeNotice/_module/component/free.notice.nav'

export default function FreeNoticeBody() {
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [sortType, setSortType] = useState('recent')

  const { data, isSuccess, refetch } = useFreeNoticeListQuery(page, sortType, searchText)

  useEffect(() => {
    refetch()
  }, [sortType, page])

  return (
    <div className={style.bodyContainer}>
      {data && (
        <>
          <FreeNoticeTitle />
          <FreeNoticeNav setSortType={setSortType} />
          <FreeNoticeList count={data.data.count} contents={data.data.list} setPage={setPage} />
        </>
      )}
    </div>
  )
}
