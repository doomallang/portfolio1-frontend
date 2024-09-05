import { useQuery } from '@tanstack/react-query'
import { getFreeNotice, getFreeNoticeComment, getFreeNoticeList } from '@/api/api.free.notice'

export function useFreeNoticeListQuery(page: number, sortType: string, searchText: string) {
  return useQuery({
    queryKey: ['freeNotice', 'list'],
    queryFn: () => getFreeNoticeList(page, sortType, searchText),
  })
}

export function useFreeNoticeViewQuery(freeNoticeIdx: string) {
  return useQuery({
    queryKey: ['freeNotice', 'view'],
    queryFn: () => getFreeNotice(freeNoticeIdx),
  })
}

export function useFreeNoticeCommentQuery(freeNoticeIdx: string) {
  return useQuery({
    queryKey: ['freeNotice', 'comment'],
    queryFn: () => getFreeNoticeComment(freeNoticeIdx),
  })
}
