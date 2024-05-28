import style from '../css/title.module.css'
import ContentsTitle from '@/components/ContentsTitle'
import ContentsTitleDesc from '@/components/ContentsTitleDesc'
import { ViewDesc, ViewTitle } from '@/enums/text'

export default function FreeNoticeViewTitle() {
  return (
    <div>
      <ContentsTitle title={ViewTitle.FREE_NOTICE_VIEW} />
      <ContentsTitleDesc desc={ViewDesc.FREE_NOTICE_VIEW_DESC} />
    </div>
  )
}
