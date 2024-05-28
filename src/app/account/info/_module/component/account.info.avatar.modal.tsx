import style from '@/app/account/info/_module/css/view.module.css'
import { ViewTitle } from '@/enums/text'
import { Modal } from 'antd'
import { AvatarType } from '@/constant/AvatarType'

export default function AccountInfoAvatarModal({
  isAvatarModalOpen,
  setIsAvatarModalOpen,
  selectAvatar,
}: {
  isAvatarModalOpen: boolean
  setIsAvatarModalOpen: Function
  selectAvatar: Function
}) {
  const handleCancel = () => {
    setIsAvatarModalOpen(false)
  }

  return (
    <>
      <Modal
        title={ViewTitle.PASSWORD_CHANGE}
        open={isAvatarModalOpen}
        onCancel={handleCancel}
        cancelText={ViewTitle.CANCEL}
        footer={(_, { CancelBtn }) => (
          <>
            <CancelBtn />
          </>
        )}
      >
        {AvatarType.map((item, index) => (
          <div className={style.avatarBorder} key={index} onClick={() => selectAvatar(item)}>
            <img src={item} className={style.avatarImage} />
          </div>
        ))}
      </Modal>
    </>
  )
}
