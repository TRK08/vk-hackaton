<template>
  <steps-template>
    <template #header>
      <div class="w-full bg-gradient-to-r from-red-200 to-red-600 p-8 flex justify-center items-center mb-8">
        <h2>
          Цензура
        </h2>
      </div>
    </template>
    <template #body>
      <p>
        Постарайтесь не использовать грубую и обесцененную лексику.
        У многих людей подобная лексика вызывается негативные ассоциации. Одни не станут читать комментарий, другие вместо полемики провоцируются на оскорбления и ненависть.
      </p>
    </template>
  </steps-template>
</template>

<script setup lang='ts'>

import StepsTemplate from '@/components/InstructionSteps/StepsTemplate.vue'
</script>

<style scoped>

</style>