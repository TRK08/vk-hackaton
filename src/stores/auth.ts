import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { auth } from '../../firabase.config'
import type { IAuth } from '@/stores/types/auth'
export const useAuthStore = defineStore('auth', {
  state: (): IAuth => ({
    user: {
      isLoggedIn: false,
      email: null
    }
  }),

  actions: {
    async register(email: string, password: string) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
    },

    async login(email: string, password: string) {
      try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response)
        this.router.push('/')
      } catch (e) {
        console.log(e)
      }
    },

    async signOut() {
      try {
        await signOut(auth)
        await this.router.push('/auth')
      } catch (e) {
        console.log(e)
      }
    },

    authStateChange() {
      onAuthStateChanged(auth, (user) => {
        this.user.isLoggedIn = !!user
      })
    }
  },

  getters: {}
})
