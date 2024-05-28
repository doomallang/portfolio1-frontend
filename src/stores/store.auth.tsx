import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthStore } from '@/interfaces/interface.store'

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      accountId: '',
      setAccountId: (key: string) => set({ accountId: key }),
      avatar: '',
      setAvatar: (key: string) => set({ avatar: key }),
      path: '',
      setPath: (key: string) => set({ path: key }),
    }),
    {
      name: 'authStorage',
    },
  ),
)

export default useAuthStore
