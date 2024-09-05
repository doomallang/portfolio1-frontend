import { Button, Modal } from 'antd'

export default function NoticeModal({
  isModalOpen,
  setIsModalOpen,
  title,
  desc,
}: {
  isModalOpen: boolean
  setIsModalOpen: Function
  title: string
  desc: string
}) {
  return (
    <Modal
      title={<div dangerouslySetInnerHTML={{ __html: title }} />}
      onCancel={() => setIsModalOpen(false)}
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      footer={[
        <Button key="confirm" onClick={() => setIsModalOpen(false)}>
          확인
        </Button>,
      ]}
    >
      <div dangerouslySetInnerHTML={{ __html: desc }} />
    </Modal>
  )
}
