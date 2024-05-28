interface AuthStore {
  accountId: string
  setAccountId: (key: string) => void
  avatar: string
  setAvatar: (key: string) => void
  path: string
  setPath: (key: string) => void
}

export type { AuthStore }
