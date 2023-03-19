<template>
  <div>
    <h1 class="mb-10">
      Посты
    </h1>
    <div
      v-if="posts"
      class="cards grid grid-cols-3 gap-4 "
    >
      <div
        class="card cursor-pointer hover:bg-primary-600"
        v-for="(item, idx) in posts"
        :key="idx"
        @click="toPostComments(idx)"
      >
        <icon-comment class="w-10 h-10 fill-white mb-4" />
        <p>{{ item.text }}</p>
      </div>
    </div>
    <app-spinner
      v-else
      class="w-20 h-20 mx-auto my-0"
    />
  </div>
</template>

<script setup lang="ts">
import IconComment from '@/assets/icons/comment.svg'
import router from '@/router'
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'
import AppSpinner from '@/components/UI-kit/AppSpinner.vue'

const {setCurrentPost} = usePostsStore()
const { posts } = storeToRefs(usePostsStore())


const toPostComments = (idx: number) => {
  setCurrentPost(idx)
  router.push(`comments/${idx}`)
}
</script>

<style scoped></style>
