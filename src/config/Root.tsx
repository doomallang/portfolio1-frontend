'use client'

import { ReactNode } from 'react'
import Container from '@/config/Container'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

interface Props {
  children: ReactNode
}

export default function Root({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    },
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <Container>{children}</Container>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  )
}
