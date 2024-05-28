import { ViewDesc, ViewTitle } from '@/enums/text'

import style from '../css/title.module.css'
import ContentsTitle from '@/components/ContentsTitle'
import ContentsTitleDesc from '@/components/ContentsTitleDesc'

export default function FreeNoticeTitle() {
  return (
    <div className={style.titleContainer}>
      <ContentsTitle title={ViewTitle.FREE_NOTICE} />
      <ContentsTitleDesc desc={ViewDesc.FREE_NOTICE_DESC} />
    </div>
  )
}
