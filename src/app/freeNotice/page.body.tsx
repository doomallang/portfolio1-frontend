'use client'

import FreeNoticeTitle from '@/app/freeNotice/_module/component/free.notice.title'

import style from './_module/css/body.module.css'
import FreeNoticeList from '@/app/freeNotice/_module/component/free.notice.list'
import { useFreeNoticeListQuery } from '@/queries/query.free.notice'
import { useEffect, useState } from 'react'
import FreeNoticeNav from '@/app/freeNotice/_module/component/free.notice.nav'
import { Pagination, PaginationProps } from 'antd'
import useErrorStore from '@/stores/store.error'
import { useSearchParams } from 'next/navigation'

export default function FreeNoticeBody() {
  const searchParams = useSearchParams()
  const [page, setPage] = useState<number>(Number(searchParams.get('page')) || 1)
  const [searchText, setSearchText] = useState('')
  const [sortType, setSortType] = useState('recent')

  const { setError } = useErrorStore()

  const { data, error, isError, refetch } = useFreeNoticeListQuery(page, sortType, searchText)

  useEffect(() => {
    if (isError) {
      setError(true, error.message)
    }
  }, [isError])

  useEffect(() => {
    refetch()
  }, [sortType, page])

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setPage(page)
  }

  return (
    <>
      {data && (
        <div className={style.bodyContainer}>
          <FreeNoticeTitle />
          <FreeNoticeNav setSortType={setSortType} />
          <FreeNoticeList contents={data.data.list} page={page} />
          <div className={style.pageContainer}>
            <Pagination total={data.data.count} onChange={onChangePage} current={page} />
          </div>
        </div>
      )}
    </>
  )
}
