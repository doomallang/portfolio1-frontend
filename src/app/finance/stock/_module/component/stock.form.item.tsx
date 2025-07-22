import { Form, Tooltip } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons'

export default function StockFormItem({
  tip,
  title,
  data,
}: {
  tip?: string
  title: string
  data: any
}) {
  return (
    <Form.Item style={{ marginBottom: 8, minWidth: '25%' }}>
      <div style={{ fontWeight: 600, fontSize: 16, color: 'black', marginBottom: 4 }}>
        <label style={{ marginRight: '5px' }}>{title}</label>
        {tip && (
          <Tooltip
            title={
              <div
                style={{
                  maxWidth: 400,
                  whiteSpace: 'normal',
                  lineHeight: 1.5,
                }}
                dangerouslySetInnerHTML={{ __html: tip }}
              ></div>
            }
            color={'cyan'}
          >
            <QuestionCircleFilled />
          </Tooltip>
        )}
      </div>
      <div>{data}</div>
    </Form.Item>
  )
}
