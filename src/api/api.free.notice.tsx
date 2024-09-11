import HttpClient from '@/util/httpClient'
import { ApiUrl } from '@/enums/url'

/** 자유게시판 목록 */
export async function getFreeNoticeList(page: number, sortType: string, searchText: string) {
  const response = await HttpClient.get(ApiUrl.FREE_NOTICE_LIST, {
    page: `${page}`,
    sortType: sortType,
    searchText: searchText,
  })

  return response
}

/** 이미지 등록 */
export async function addImage(data: File) {
  const formData = new FormData()
  formData.append('image', data)

  const response = await HttpClient.filePost(ApiUrl.FREE_NOTICE_IMAGE, formData)

  return response
}

/** 게시글 등록 */
export async function addFreeNotice(
  freeNoticeIdx: string,
  title: string,
  content: string,
  accountId: string,
) {
  const data = {
    freeNoticeIdx: freeNoticeIdx,
    title: title,
    content: content,
    accountId: accountId,
  }
  return await HttpClient.post(ApiUrl.FREE_NOTICE_WRITE, data)
}

export async function getFreeNotice(freeNoticeIdx: string) {
  return await HttpClient.get(ApiUrl.FREE_NOTICE_VIEW, {
    freeNoticeIdx: freeNoticeIdx,
  })
}

export async function getFreeNoticeComment(freeNoticeIdx: string) {
  return await HttpClient.get(ApiUrl.FREE_NOTICE_COMMENT, {
    freeNoticeIdx: freeNoticeIdx,
  })
}

export async function addFreeNoticeComment(
  freeNoticeIdx: string,
  content: string,
  accountId: string,
) {
  const data = {
    freeNoticeIdx: freeNoticeIdx,
    content: content,
    accountId: accountId,
  }

  return await HttpClient.post(ApiUrl.FREE_NOTICE_COMMENT, data)
}

export async function modifyCommentRecommend(commentIdx: string, accountId: string) {
  const data = {
    commentIdx: commentIdx,
    accountId: accountId,
  }

  return await HttpClient.put(ApiUrl.COMMENT_RECOMMEND, data)
}

export async function modifyNoticeRecommend(freeNoticeIdx: string, accountId: string) {
  const data = {
    freeNoticeIdx: freeNoticeIdx,
    accountId: accountId,
  }

  return await HttpClient.put(ApiUrl.FREE_NOTICE_RECOMMEND, data)
}
