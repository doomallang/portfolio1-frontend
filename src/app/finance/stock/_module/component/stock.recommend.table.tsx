import { useEffect, useState } from 'react'
import { Stock } from '@/interfaces/interface.finance'
import { Table } from 'antd'
import { stockColumns } from '@/constant/Finance'
import CommonLoading from '@/components/CommonLoading'
import { getRecommendStockList } from '@/api/api.finance'

export default function StockRecommendTable({ clickRow }: { clickRow: Function }) {
  const [stockList, setStockList] = useState<Stock[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getList()
  }, [])

  async function getList() {
    setLoading(true)
    const response = await getRecommendStockList()

    if (response.status === 200) {
      setLoading(false)
      setStockList(response.data)
    }
  }

  return (
    <>
      {loading && <CommonLoading />}
      <label style={{ fontWeight: 'bold', fontSize: 'larger' }}>추천종목</label>
      <Table<Stock>
        columns={stockColumns}
        dataSource={stockList}
        pagination={false} // ✅ 페이징 제거
        scroll={{ y: 400 }} // ✅ 높이 제한 → 내부 스크롤 생성
        rowKey={'stockUid'}
        onRow={(record) => ({
          onClick: () => {
            clickRow(record.stockUid!)
          },
        })}
      />
    </>
  )
}
