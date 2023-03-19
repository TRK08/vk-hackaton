<template>
  <steps-template>
    <template #header>
      <div class="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 p-8 flex justify-center items-center mb-8">
        <h2>
          Орфография
        </h2>
      </div>
    </template>
    <template #body>
      <p>
        Проверьте орфографию. Расставьте знаки препинания.
        Психологами установлено, что грамотная речь и отсутствие ошибок притягивает взгляд других пользователей и не вызывает у них отторжения при чтении, даже если мнение не совпадает с их собственным.
      </p>
    </template>
  </steps-template>
</template>

<script setup lang='ts'>

import StepsTemplate from '@/components/InstructionSteps/StepsTemplate.vue'
</script>

<style scoped>

</style>