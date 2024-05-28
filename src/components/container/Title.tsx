import style from './_module/css/title.module.css'
import Image from 'next/image'

export default function Title() {
  return (
    <div className={style.titleContainer}>
      <Image alt={''} width={30} src={'/images/sign.png'} height={30} />
      <div className={style.title}>doomole</div>
    </div>
  )
}
