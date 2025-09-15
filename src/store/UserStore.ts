import { defineStore } from 'pinia'
import type { User } from '../types/User'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null
  }),
  actions: {
    login(username: string, password: string) {
      if (username === 'admin' && password === 'password') {
        this.currentUser = {
          id: 1,
          username,
          token: 'fake-jwt-token'
        }
        return true
      }
      return false
    },
    logout() {
      this.currentUser = null
    }
  }
})
