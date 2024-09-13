'use client'

import {
  useCatImageQuery,
  useDogImageQuery,
  useFaceImageQuery,
  useYesGifQuery,
} from '@/queries/query.stock'
import { Button, Image, Input } from 'antd'
import { useState } from 'react'
import { getKoeList, getKscList } from '@/api/api.stock'

export default function StockBody() {
  const [stockCode, setStockCode] = useState<string>('')
  const { data, refetch } = useDogImageQuery()
  const { data: data2, refetch: refetch2 } = useCatImageQuery()
  const { data: data3, refetch: refetch3 } = useYesGifQuery()
  const { data: data4, refetch: refetch4 } = useFaceImageQuery()

  async function search() {
    const responseKsc = await getKscList(stockCode)
    const responseKoe = await getKoeList(stockCode)
  }

  console.log(data4)
  return (
    <>
      <div>
        <Input type={'number'} value={stockCode} onChange={(e) => setStockCode(e.target.value)} />
        <Button onClick={search}>조회</Button>
      </div>
      <div>
        {data && <Image alt={'dog'} src={data.url} width={500} height={500} />}
        <Button onClick={refetch}>조회</Button>
        {data2 && <Image alt={'cat'} src={data2.image} width={500} height={500} />}
        <Button onClick={refetch2}>조회</Button>
        {data3 && <Image alt={'cat'} src={data3.image} width={500} height={500} />}
        <Button onClick={refetch3}>조회</Button>
      </div>
    </>
  )
}
