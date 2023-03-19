<template>
  <steps-template>
    <template #header>
      <div class="w-full bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-8 flex justify-center items-center mb-8">
        <h2>
          Оценка
        </h2>
      </div>
    </template>
    <template #body>
      <p>
        Отметьте положительные и отрицательные стороны. Старайтесь быть объективными.
        Если целью комментария (даже негативного) не является провокацией или обычным желанием нагрубить, старайтесь привести примеры, подтверждающие мнение. Возможно ссылки на специалистов в данном вопросе. С другой стороны, жизнь состоит из полутонов, не бывает белого без чёрного и наоборот, даже в самом плохом фильме, может оказаться неплохая актриса 2-го плана или не самый плохой звукорежиссер.
      </p>
    </template>
  </steps-template>
</template>

<script setup lang='ts'>

import StepsTemplate from '@/components/InstructionSteps/StepsTemplate.vue'
</script>

<style scoped>

</style>