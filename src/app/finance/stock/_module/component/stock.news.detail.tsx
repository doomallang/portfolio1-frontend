import { Button, Modal } from 'antd'

export default function StockNewsDetail({
  open,
  setOpen,
  link,
}: {
  open: boolean
  setOpen: Function
  link: string
}) {
  return (
    <Modal
      title={''}
      open={open && link !== ''}
      onCancel={() => setOpen(false)}
      footer={null}
      width="30vw" // ✅ 90% of viewport width
      style={{ top: '50%' }} // 스크롤 가능 영역
    >
      <p>이 뉴스는 외부 사이트에서 제공되며, iframe으로 열 수 없습니다.</p>
      <Button type="primary" href={link} target="_blank" rel="noopener noreferrer">
        기사 원문 새 창으로 보기
      </Button>
    </Modal>
  )
}
