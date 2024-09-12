import { useQuery } from '@tanstack/react-query'
import { getGenreList, getNowPlayingList, getPopularList, getUpcomingList } from '@/api/api.movie'

export function useGenreListQuery(): any {
  return useQuery({
    queryKey: ['movie', 'genre'],
    queryFn: () => getGenreList(),
  })
}

export function useNowPlayingListQuery(): any {
  return useQuery({
    queryKey: ['movie', 'nowPlaying'],
    queryFn: () => getNowPlayingList(),
  })
}

export function usePopularListQuery(): any {
  return useQuery({
    queryKey: ['movie', 'popular'],
    queryFn: () => getPopularList(),
  })
}

export function useUpcomingListQuery(): any {
  return useQuery({
    queryKey: ['movie', 'upcoming'],
    queryFn: () => getUpcomingList(),
  })
}
