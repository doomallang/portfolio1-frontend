import style from './_module/css/contents.title.desc.module.css'

export default function ContentsTitleDesc({ desc }: { desc: string }) {
  return <div className={style.contentsTitleDesc}>{desc}</div>
}
