<template>
  <div class="comments">
    <h1 class="mb-4">
      Комментарии
    </h1>

    <div class="card mb-4 bg-primary-600">
      Чем меньше значение оценки, тем выше рейтинг комментария!
    </div>
    <template v-if="currentPost">
      <div
        v-for="item in currentPost.comments"
        :key="item.text"
        class="card mb-4 flex gap-4"
      >
        <div class="">
          <label class="mb-2 block">Оценка</label>
          <span class="mr-2 block text-center">{{ item.score }}</span>
        </div>
        <div class="">
          <label class="mb-2 block">Текст комментария</label>
          <p
            class="mb-4"
            v-html="item.text"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang='ts'>

import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'
import { useRoute } from 'vue-router'

const {currentPost} = storeToRefs(usePostsStore())
const {setCurrentPost} = usePostsStore()
const route = useRoute()

setCurrentPost(+route.params.id)


</script>

<style scoped>

</style>