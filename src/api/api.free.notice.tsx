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
export async function addFreeNotice(freeNoticeIdx: string, title: string, content: string) {
  const data = {
    freeNoticeIdx: freeNoticeIdx,
    title: title,
    content: content,
  }
  const response = await HttpClient.post(ApiUrl.FREE_NOTICE_WRITE, data)

  return response
}

export async function getFreeNotice(freeNoticeIdx: string) {
  const response = await HttpClient.get(ApiUrl.FREE_NOTICE_VIEW, {
    freeNoticeIdx: freeNoticeIdx,
  })

  return response
}
