import { MovieApi } from '@/enums/url'

async function movieApi(url: string, method: string) {
  const uri = MovieApi.HOST + url
  const response = await fetch(uri, {
    method: method,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTcyNjA5OGMzNDNkYWEwN2I1MWEzMmM0ZWE0ZmM3YSIsIm5iZiI6MTcyNjA0MjY2Ny4wMTY0OTksInN1YiI6IjY2ZTE1MWE4NjQ2NTRmYzY1OWFmZTdmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FM2FLSWiCP4MjSyG668Y2g4NJkAkERri3N__8kZ3TvE',
    },
  })

  if (response.status === 200) {
    return response.json()
  }
}

/** 장르 리스트 */
export async function getGenreList() {
  return movieApi(MovieApi.GENRE, 'GET')
}

/** 현재 상영 리스트 */
export async function getNowPlayingList() {
  return movieApi(MovieApi.NOW_PLAYING, 'GET')
}

/** 인기 리스트 */
export async function getPopularList() {
  return movieApi(MovieApi.POPULAR, 'GET')
}

export async function getUpcomingList() {
  return movieApi(MovieApi.UPCOMING, 'GET')
}
