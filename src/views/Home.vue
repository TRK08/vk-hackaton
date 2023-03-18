<template>
  <div>
    <h1 class="mb-10">
      Посты
    </h1>
    <div class="cards grid grid-cols-3 gap-4">
      <div
        class="card cursor-pointer hover:bg-primary-600"
        v-for="i in 15"
        :key="i"
        @click="router.push(`comments/${i}`)"
      >
        <icon-comment class="w-10 h-10 fill-white mb-4" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloremque dolores facilis fugit, nobis quod voluptates? Consequuntur dolor, ducimus et exercitationem id possimus ratione. Ad corporis debitis earum nesciunt sint.</p>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import IconComment from "@/assets/icons/comment.svg"
import router from '@/router'




</script>

<style scoped>

</style>