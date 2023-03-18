<template>
  <steps-template>
    <template #header>
      <div class="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 flex justify-center items-center mb-8">
        <h2>
          Орфография
        </h2>
      </div>
    </template>
    <template #body>
      <p class="text-center">
        Проверьте орфографию. Расставьте знаки препинания
      </p>
    </template>
  </steps-template>
</template>

<script setup lang='ts'>

import StepsTemplate from '@/components/InstructionSteps/StepsTemplate.vue'
</script>

<style scoped>

</style>