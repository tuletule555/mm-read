import { defineStore } from 'pinia'
import type { User } from '@/api/user/interface'

const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref<User>()

  const setUserInfo = (_userInfo: User) => {
    userInfo.value = _userInfo
  }
  const setToken = (_token: string) => {
    token.value = _token
  }

  return {
    token,
    userInfo,
    setUserInfo,
    setToken,
  }
}, {
  persist: true,
})

export default useUserStore
