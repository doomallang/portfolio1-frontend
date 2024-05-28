interface FreeNotice {
  content: string
  createDatetime: string
  freeNoticeIdx: number
  title: string
  updateDatetime: string
  viewCount: number
  recommendCount: number

  resAccount: Account
}

export type { FreeNotice }
