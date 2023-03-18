import { defineStore } from 'pinia'
import type { IModal } from '@/stores/types/modal'

export const useModalStore = defineStore('modal', {
  state: (): IModal => ({
    value: false,
    name: ''
  }),
  actions: {
    toggleModal(data: IModal): void {
      this.value = data.value
      this.name = data.name
    }
  }
})
