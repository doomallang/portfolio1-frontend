import { Spin } from 'antd'

export default function Loading() {
  return (
    <div className={'loading-layout'}>
      <div className={'loading-contents'}>
        <Spin size="large" />
      </div>
    </div>
  )
}
