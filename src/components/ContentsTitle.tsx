import style from './_module/css/contents.title.module.css'

export default function ContentsTitle({ title }: { title: string }) {
  return <div className={style.contentsTitle}>{title}</div>
}
