<template>
  <steps-template>
    <template #header>
      <div class="w-full bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 p-8 flex justify-center items-center mb-8">
        <h2>
          Аргументы
        </h2>
      </div>
    </template>
    <template #body>
      <p>
        Структурируйте свои аргументы. Длинный комментарий разбейте на абзацы.
        Сплошной поток текста никто читать не будет. Если Ваш комментарий не является кратким и лаконичным, постарайтесь использовать структуризацию текста, чтобы облегчить восприятие комментария.
      </p>
    </template>
  </steps-template>
</template>

<script setup lang='ts'>

import StepsTemplate from '@/components/InstructionSteps/StepsTemplate.vue'
</script>

<style scoped>

</style>