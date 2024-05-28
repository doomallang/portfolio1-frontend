'use client'

import style from './_module/css/body.module.css'
import FreeNoticeViewContent from '@/app/freeNotice/[freeNoticeIdx]/_module/component/free.notice.view.content'
import FreeNoticeViewNav from '@/app/freeNotice/[freeNoticeIdx]/_module/component/free.notice.view.nav'

export default function FreeNoticeViewBody() {
  return (
    <div className={style.bodyContainer}>
      <FreeNoticeViewNav />
      <FreeNoticeViewContent />
    </div>
  )
}
