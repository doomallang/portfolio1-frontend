import { useQuery } from '@tanstack/react-query'
import {
  getCatImage,
  getDogImage,
  getFaceImage,
  getKoeList,
  getKscList,
  getYesGif,
} from '@/api/api.stock'

export function useKoeListQuery(stockCode: string): any {
  return useQuery({
    queryKey: ['stock', 'koe'],
    queryFn: () => getKoeList(stockCode),
  })
}

export function useKscListQuery(stockCode: string): any {
  return useQuery({
    queryKey: ['stock', 'ksc'],
    queryFn: () => getKscList(stockCode),
  })
}

export function useDogImageQuery(): any {
  return useQuery({
    queryKey: ['dog', 'image'],
    queryFn: () => getDogImage(),
  })
}

export function useCatImageQuery(): any {
  return useQuery({
    queryKey: ['cat', 'image'],
    queryFn: () => getCatImage(),
  })
}

export function useYesGifQuery(): any {
  return useQuery({
    queryKey: ['yes', 'gif'],
    queryFn: () => getYesGif(),
  })
}

export function useFaceImageQuery(): any {
  return useQuery({
    queryKey: ['face', 'image'],
    queryFn: () => getFaceImage(),
  })
}
