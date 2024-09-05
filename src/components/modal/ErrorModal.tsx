import { Button, Modal } from 'antd'
import useErrorStore from '@/stores/store.error'

export default function ErrorModal() {
  const { isError, message, setError } = useErrorStore()
  function closeModal() {
    setError(false, '')
  }

  return (
    <Modal
      title={'서버 오류'}
      onCancel={closeModal}
      open={isError}
      onOk={closeModal}
      footer={[
        <Button key="confirm" onClick={closeModal}>
          확인
        </Button>,
      ]}
    >
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </Modal>
  )
}
