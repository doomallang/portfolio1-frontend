import { Modal, Tabs } from 'antd'
import { useEffect, useState } from 'react'
import { Stock } from '@/interfaces/interface.finance'
import StockDefault from '@/app/finance/stock/_module/component/stock.default'
import StockNews from '@/app/finance/stock/_module/component/stock.news'

import style from '../css/detail.modal.module.css'
import { getNowStockPrice, getStock } from '@/api/api.finance'

export default function StockDetailModal({
  open,
  setOpen,
  stockUid,
}: {
  open: boolean
  setOpen: Function
  stockUid: number
}) {
  const [stock, setStock] = useState<Stock>()
  useEffect(() => {
    getData(stockUid)
  }, [stockUid])

  async function getData(stockUid: number) {
    if (stockUid !== 0) {
      const response = await getStock(stockUid)

      if (response.status === 200) {
        setStock(response.data)
      }
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (stock?.code) {
      // 최초 1회 즉시 호출
      getPrice(stock.code)

      // 30초마다 반복 호출
      interval = setInterval(() => {
        getPrice(stock.code!)
      }, 30000)
    }

    // 언마운트 시 clear
    return () => clearInterval(interval)
  }, [stock?.code])

  async function getPrice(stockCode: string) {
    const response = await getNowStockPrice(stockCode)

    if (response.status === 200) {
      setStock({
        ...stock,
        nowPrice: response.data.price,
        diffPrice: response.data.diffPrice,
        diffRate: response.data.diffRate,
      })
    }
  }

  return (
    <>
      <Modal
        title={
          stock ? (
            <div>
              <div>
                {stock.name} ({stock.code})
              </div>
              <div style={{ fontSize: '14px', fontWeight: 'normal' }}>
                {`${stock.nowPrice}원`}
                <span
                  style={{ marginLeft: '10px' }}
                  className={stock.diffPrice?.includes('+') ? style.stockUp : style.stockDown}
                >{`(${stock.diffPrice}원 / ${stock.diffRate})`}</span>
              </div>
            </div>
          ) : (
            ''
          )
        }
        open={open && stock !== undefined}
        onCancel={() => setOpen(false)}
        footer={null}
        width="80vw" // ✅ 90% of viewport width
        style={{ top: 20 }} // 스크롤 가능 영역
      >
        <Tabs
          defaultActiveKey="1"
          destroyInactiveTabPane
          items={[
            {
              key: '1',
              label: '기본 정보',
              children: <StockDefault stock={stock!} />,
            },
            {
              key: '2',
              label: '관련 뉴스',
              children: stock && <StockNews stockName={stock.name!} />,
            },
          ]}
        />
      </Modal>
    </>
  )
}
