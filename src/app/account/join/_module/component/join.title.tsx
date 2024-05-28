import style from '../css/title.module.css'
import ContentsTitle from '@/components/ContentsTitle'
import { ViewDesc } from '@/enums/text'

export default function JoinTitle() {
  return (
    <div className={style.titleContainer}>
      <ContentsTitle title={ViewDesc.JOIN_TITLE_DESC} />
    </div>
  )
}
