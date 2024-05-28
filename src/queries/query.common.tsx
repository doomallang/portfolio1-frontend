import { useQuery } from '@tanstack/react-query'
import { validToken } from '@/api/api.common'

export function useValidTokenQuery(): any {
  console.log('useValidTokenQuery')
  return useQuery({
    queryKey: ['valid', 'token'],
    queryFn: () => validToken(),
  })
}
