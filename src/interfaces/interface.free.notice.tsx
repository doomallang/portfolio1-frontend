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

interface FreeNoticeComment {
  commentIdx: number
  freeNoticeIdx: number
  content: string
  resAccount: Account
  recommendCount: number
  createDatetime: string
  updateDatetime: string
}

export type { FreeNotice, FreeNoticeComment }
