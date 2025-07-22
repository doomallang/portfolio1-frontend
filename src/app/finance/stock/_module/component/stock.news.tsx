import { useEffect, useState } from 'react'
import { News } from '@/interfaces/interface.finance'
import { List } from 'antd'

import style from '../css/news.module.css'
import StockNewsDetail from '@/app/finance/stock/_module/component/stock.news.detail'
import { getNewsList } from '@/api/api.finance'

export default function StockNews({ stockName }: { stockName: string }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [newsList, setNewsList] = useState<News[]>([])
  const [link, setLink] = useState('')

  useEffect(() => {
    if (stockName) {
      getData(stockName)
    }
  }, [stockName])

  async function getData(stockName: string) {
    const response = await getNewsList(stockName)

    if (response.status === 200) {
      setNewsList(response.data)
    }
  }

  function formatPubDate(pubDate: string): string {
    const date = new Date(pubDate)
    const yyyy = date.getFullYear()
    const MM = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    const HH = String(date.getHours()).padStart(2, '0')
    const mm = String(date.getMinutes()).padStart(2, '0')
    const ss = String(date.getSeconds()).padStart(2, '0')

    return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}`
  }

  function decodeHtmlEntities(html: string): string {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  function clickNews(link: string) {
    setLink(link)
    setModalOpen(true)
  }

  return (
    <>
      <StockNewsDetail open={modalOpen} setOpen={setModalOpen} link={link} />
      <div className={style.listContainer}>
        {newsList.map((item) => (
          <div key={item.title} className={style.itemCard} onClick={() => clickNews(item.link!)}>
            <h3>{decodeHtmlEntities(item.title!)}</h3>
            <p style={{ fontSize: '12px', color: '#666', textAlign: 'right' }}>
              {formatPubDate(item.pubDate!)}
            </p>
            <p style={{ fontSize: '13px', marginTop: '8px' }}>
              {decodeHtmlEntities(item.description!.slice(0, 60))}...
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
