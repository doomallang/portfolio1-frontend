import style from '../css/title.module.css'
import ContentsTitle from '@/components/ContentsTitle'
import { ViewDesc, ViewTitle } from '@/enums/text'
import ContentsTitleDesc from '@/components/ContentsTitleDesc'

export default function FreeNoticeWriteTitle() {
  return (
    <div className={style.titleContainer}>
      <ContentsTitle title={ViewTitle.FREE_NOTICE_WRITE} />
      <ContentsTitleDesc desc={ViewDesc.FREE_NOTICE_WRITE_DESC} />
    </div>
  )
}
