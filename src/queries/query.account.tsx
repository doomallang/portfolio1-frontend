import { useQuery } from '@tanstack/react-query'
import { getInfo } from '@/api/api.account'

export function useAccountInfoQuery(accountId: string) {
  return useQuery({
    queryKey: ['account', 'info'],
    queryFn: () => getInfo(accountId),
  })
}
