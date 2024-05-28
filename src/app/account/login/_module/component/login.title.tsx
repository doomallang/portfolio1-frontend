import style from '../css/title.module.css'
import { ViewDesc } from '@/enums/text'
import ContentsTitle from '@/components/ContentsTitle'

export default function LoginTitle() {
  return (
    <>
      <div className={style.titleContainer}>
        <ContentsTitle title={ViewDesc.LOGIN_TITLE_DESC} />
      </div>
    </>
  )
}
