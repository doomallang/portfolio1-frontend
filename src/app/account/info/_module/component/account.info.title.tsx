import ContentsTitle from '@/components/ContentsTitle'
import ContentsTitleDesc from '@/components/ContentsTitleDesc'
import { ViewDesc, ViewTitle } from '@/enums/text'

import style from '../css/title.module.css'

export default function AccountInfoTitle() {
  return (
    <div className={style.titleContainer}>
      <ContentsTitle title={ViewTitle.ACCOUNT_INFO} />
      <ContentsTitleDesc desc={ViewDesc.ACCOUNT_INFO_TITLE_DESC} />
    </div>
  )
}
