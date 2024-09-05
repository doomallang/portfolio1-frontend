interface AuthStore {
  accountId: string
  setAccountId: (key: string) => void
  avatar: string
  setAvatar: (key: string) => void
  path: string
  setPath: (key: string) => void
}

interface ErrorStore {
  isError: boolean
  message: string
  setError: (isError: boolean, message: string) => void
}

export type { AuthStore, ErrorStore }
