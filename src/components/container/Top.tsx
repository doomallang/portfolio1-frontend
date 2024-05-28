import Title from '@/components/container/Title'
import MenuBar from '@/components/container/MenuBar'

import style from './_module/css/top.module.css'
import LoginBar from '@/components/container/LoginBar'

export default function Top() {
  return (
    <>
      <div className={style.topContainer}>
        <Title />
        <MenuBar />
        <LoginBar />
      </div>
    </>
  )
}
