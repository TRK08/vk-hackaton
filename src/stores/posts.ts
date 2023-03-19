import { defineStore } from 'pinia'
import type { IPosts, post } from '@/stores/types/posts'

export const usePostsStore = defineStore('posts', {
  state: (): IPosts => ({
    posts: null,
    currentPost: null
  }),
  actions: {
    async loadPosts() {
      const json = await import('../posts.json')
      setTimeout(() => {
        this.posts = json.data as post[]
      }, 1000)
    },

    async setCurrentPost(idx: number) {
      const json = await import('../posts.json')
      const current = json.data[idx] as post
      current.comments = current.comments.sort((a, b) => a.score - b.score)
      this.currentPost = current
    }
  },

  getters: {}
})
