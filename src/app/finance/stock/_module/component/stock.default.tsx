import StockFormItem from '@/app/finance/stock/_module/component/stock.form.item'
import StockTag from '@/app/finance/stock/_module/component/stock.tag'
import { Form, Table } from 'antd'
import { Stock, StockPrice } from '@/interfaces/interface.finance'
import { stockPriceColumns } from '@/constant/Finance'

export default function StockDefault({ stock }: { stock: Stock }) {
  return (
    <Form
      layout="vertical" // ✅ 세로 레이아웃 권장
      style={{
        height: '80vh',
        overflowY: 'auto',
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex' }}>
        <StockFormItem title={'업종'} data={stock?.sector} />
        <StockFormItem
          title={'PER'}
          data={stock?.per}
          tip={`PER (주가수익비율)은 기업의 <b>주가가 이익 대비 고평가/저평가</b>되었는지를 나타냅니다. <br />
      일반적으로 낮을수록 저평가로 간주되며, 10 이하일 경우 투자 매력도가 높다고 봅니다.`}
        />

        <StockFormItem
          title={'PBR'}
          data={stock?.pbr}
          tip={`PBR (주가순자산비율)은 기업의 주가가 자산가치에 비해 얼마나 높거나 낮은지를 보여주는 지표입니다. <br />
      일반적으로 1보다 낮으면 저평가된 것으로 보며, 성장 가능성과 ROE를 함께 고려해야 합니다.`}
        />
        <StockFormItem
          title={'ROE'}
          data={stock?.roe}
          tip={`ROE (자기자본이익률)은 기업이 투자자로부터 받은 자본을 활용해 <b>얼마나 효율적으로 수익을 냈는지를 나타내는 지표</b>입니다. <br />
      일반적으로 15% 이상이면 매우 효율적인 경영으로 평가되며, PBR과 함께 분석하면 투자 매력도를 더욱 정확하게 판단할 수 있습니다.`}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <StockFormItem
          title={'부채비율'}
          data={stock?.debtRatio}
          tip={`부채비율은 기업의 자본 대비 부채가 얼마나 많은지를 나타내는 재무 안정성 지표입니다. <br />
      일반적으로 100% 이하이면 안정적인 구조로 평가되며, 200% 이상일 경우 재무 리스크가 존재할 수 있습니다.`}
        />
        <StockFormItem title={'시가총액'} data={`${stock?.marketCap}억`} />
        <StockFormItem title={'점수'} data={`${stock?.score}점`} />
      </div>
      <div style={{ marginTop: '2vh' }}>
        <div>
          <StockTag
            text={'거래량'}
            tip={
              '거래량은 하루 동안 해당 종목이 얼마나 많이 거래되었는지를 나타냅니다.<br/>거래량이 급증하면 투자자 관심 증가나 강한 매수·매도 신호일 수 있습니다.'
            }
          />
          <StockTag
            text={'이동평균선'}
            tip={
              'MA(이동평균선)는 일정 기간 동안의 평균 주가를 나타냅니다.<br/>MA5는 단기, MA20은 중기 추세를 판단하는 데 사용됩니다.'
            }
          />
          <StockTag
            text={'볼린저밴드'}
            tip={
              '볼린저 밴드는 주가의 변동성을 기반으로 상단(upper), 하단(lower) 밴드를 그려줍니다.<br/>상단에 가까우면 과열, 하단이면 과매도 상태일 수 있습니다.'
            }
          />
          <StockTag
            text={'수익률'}
            tip={
              '수익률(Return)은 전일 대비 종가가 얼마나 상승 또는 하락했는지를 나타냅니다.<br/>(%) 단위로 표현됩니다.'
            }
          />
          <StockTag
            text={'이동평균수렴확산지표'}
            tip={
              'MACD는 단기와 장기 이동평균선 간의 차이로, 주가 상승 모멘텀의 전환 시점을 파악하는 데 사용됩니다.'
            }
          />
        </div>
        <Table<StockPrice>
          columns={stockPriceColumns}
          dataSource={stock?.stockPrices}
          pagination={false} // ✅ 페이징 제거
          scroll={{ y: 400 }} // ✅ 높이 제한 → 내부 스크롤 생성
          rowKey={'stockPriceUid'}
        />
      </div>
    </Form>
  )
}
