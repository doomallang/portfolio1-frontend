import { create } from 'zustand'
import { ErrorStore } from '@/interfaces/interface.store'

const useErrorStore = create<ErrorStore>()((set) => ({
  isError: false,
  message: '',
  setError: (isError: boolean, message: string) =>
    set((state) => {
      state.isError = isError
      state.message = message
      return { ...state }
    }),
}))

export default useErrorStore
