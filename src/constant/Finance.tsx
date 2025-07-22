import { TableProps } from 'antd'
import { Stock, StockPrice } from '@/interfaces/interface.finance'

export const stockColumns: TableProps<Stock>['columns'] = [
  {
    title: '주식명',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '코드',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'PER',
    dataIndex: 'per',
    key: 'per',
  },
  {
    title: 'PBR',
    dataIndex: 'pbr',
    key: 'pbr',
  },
  {
    title: 'ROE',
    dataIndex: 'roe',
    key: 'roe',
  },
  {
    title: '부채비율',
    dataIndex: 'debtRatio',
    key: 'debtRatio',
  },
  {
    title: '시가총액',
    dataIndex: 'market_cap',
    key: 'marketCap',
  },
  {
    title: '점수',
    dataIndex: 'score',
    key: 'score',
  },
]

export const stockPriceColumns: TableProps<StockPrice>['columns'] = [
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date',
    render: (date: [number, number, number]) => {
      if (!Array.isArray(date) || date.length !== 3) return '-'
      const [year, month, day] = date
      return (
        <div style={{ fontSize: '12px' }}>
          {`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`}
        </div>
      )
    },
  },
  {
    title: '시작가',
    dataIndex: 'open',
    key: 'open',
  },
  {
    title: '최고가',
    dataIndex: 'high',
    key: 'high',
  },
  {
    title: '최저가',
    dataIndex: 'low',
    key: 'low',
  },
  {
    title: '종가',
    dataIndex: 'close',
    key: 'close',
  },
  {
    title: '거래량',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: '이평5',
    dataIndex: 'ma5',
    key: 'ma5',
  },
  {
    title: '이평10',
    dataIndex: 'ma10',
    key: 'ma10',
  },
  { title: '이평20', dataIndex: 'ma20', key: 'ma20' },
  {
    title: '볼린져상단',
    dataIndex: 'upper',
    key: 'upper',
    render: (data?: number) => {
      return typeof data === 'number' ? data.toFixed(1) : '-'
    },
  },
  {
    title: '볼린져하단',
    dataIndex: 'lower',
    key: 'lower',
    render: (data?: number) => {
      return typeof data === 'number' ? data.toFixed(1) : '-'
    },
  },
  {
    title: '수익률',
    dataIndex: 'ret',
    key: 'ret',
    render: (rate?: number) => {
      return <div>{typeof rate === 'number' ? rate.toFixed(3) : '-'}</div>
    },
  },
  {
    title: '상승추세',
    dataIndex: 'isTrendingUp',
    key: 'isTrendingUp',
  },
]
