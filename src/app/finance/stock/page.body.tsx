'use client'

import { Select, Table } from 'antd'
import { Fragment, useEffect, useState } from 'react'

import style from './_module/css/body.module.css'
import { Stock } from '@/interfaces/interface.finance'
import CommonLoading from '@/components/CommonLoading'
import { stockColumns } from '@/constant/Finance'
import StockRecommendTable from '@/app/finance/stock/_module/component/stock.recommend.table'
import StockDetailModal from '@/app/finance/stock/_module/component/stock.detail.modal'
import StockChat from '@/app/finance/stock/_module/component/stock.chat'
import { getStockList } from '@/api/api.finance'

export default function FinanceStockBody({ sectorList }: { sectorList: string[] }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [stockUid, setStockUid] = useState(0)
  const [loading, setLoading] = useState(false)
  const [sector, setSector] = useState<string>(sectorList[0])
  const [stockList, setStockList] = useState<Stock[]>([])
  const handleChange = (value: string) => {
    setSector(value)
  }

  useEffect(() => {
    getList(sector)
  }, [sector])

  async function getList(sector: string) {
    setLoading(true)
    const response = await getStockList(sector)

    if (response.status === 200) {
      setLoading(false)
      setStockList(response.data)
    }
  }

  function clickRow(stockUid: number) {
    setStockUid(stockUid)
    setModalOpen(true)
  }

  return (
    <>
      {loading && <CommonLoading />}
      <StockDetailModal open={modalOpen} setOpen={setModalOpen} stockUid={stockUid} />
      <div className={style.container}>
        <div>
          <label style={{ marginRight: '10px' }}>섹터</label>
          <Select onChange={handleChange} style={{ width: '50%' }} value={sector}>
            {sectorList.map((item, index) => (
              <Fragment key={index}>
                <Select.Option value={item}>{item}</Select.Option>
              </Fragment>
            ))}
          </Select>
          <Table<Stock>
            columns={stockColumns}
            dataSource={stockList}
            rowKey={'stockUid'}
            onRow={(record) => ({
              onClick: () => {
                clickRow(record.stockUid!)
              },
            })}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <div className={style.recommendContainer}>
            <StockRecommendTable clickRow={clickRow} />
          </div>
          <div className={style.chatContainer}>
            <StockChat />
          </div>
        </div>
      </div>
    </>
  )
}
