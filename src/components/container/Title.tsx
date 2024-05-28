import style from './_module/css/title.module.css'
import { RouteUrl } from '@/enums/url'
import { ViewTitle } from '@/enums/text'
import { Image } from 'antd'
import useLink from '@/hooks/useLink'
import Link from 'antd/es/typography/Link'

export default function Title() {
  const { onLink } = useLink()

  return (
    <Link className={style.titleContainer} onClick={() => onLink(RouteUrl.ROOT)}>
      <Image width={30} preview={false} src={'/images/sign.png'} />
      <div className={style.title}>{ViewTitle.TITLE}</div>
    </Link>
  )
}
