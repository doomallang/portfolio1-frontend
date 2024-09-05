'use client'

import style from './_module/css/body.module.css'
import FreeNoticeViewContent from '@/app/freeNotice/[freeNoticeIdx]/_module/component/free.notice.view.content'
import FreeNoticeViewNav from '@/app/freeNotice/[freeNoticeIdx]/_module/component/free.notice.view.nav'
import FreeNoticeViewComment from '@/app/freeNotice/[freeNoticeIdx]/_module/component/free.notice.view.comment'
import { useParams } from 'next/navigation'

export default function FreeNoticeViewBody() {
  const { freeNoticeIdx } = useParams()

  return (
    <div className={style.bodyContainer}>
      <FreeNoticeViewNav />
      <FreeNoticeViewContent id={freeNoticeIdx.toString()} />
      <FreeNoticeViewComment id={freeNoticeIdx.toString()} />
    </div>
  )
}
