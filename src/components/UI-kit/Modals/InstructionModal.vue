<template>
  <div class="instruction-modal">
    <component :is="steps[state.currentStep]" />

    <div class="instruction-modal__buttons">
      <div class="justify-self-start">
        <app-button
          class=""
          v-if="state.currentStep > 0"
          primary
          @click="state.currentStep--"
        >
          Назад
        </app-button>
      </div>
      <div class="justify-self-end">
        <app-button
          v-if="state.currentStep < steps.length - 1"
          primary
          @click="state.currentStep++"
        >
          Вперед
        </app-button>
        <app-button
          v-else
          primary
          @click="toggleModal({name: '', value: false})"
        >
          Закрыть
        </app-button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

import {  reactive } from 'vue'
import { useModalStore } from '@/stores/modal'
import AppButton from '@/components/UI-kit/AppButton.vue'
import StepSpelling from '@/components/InstructionSteps/StepSpelling.vue'
import StepInformation from '@/components/InstructionSteps/StepInformation.vue'
import StepPositiveAndNegative from '@/components/InstructionSteps/StepPositiveAndNegative.vue'
import StepCensorship from '@/components/InstructionSteps/StepCensorship.vue'
import StepArguments from '@/components/InstructionSteps/StepArguments.vue'

const {toggleModal} = useModalStore()

const steps = [StepSpelling, StepInformation, StepPositiveAndNegative, StepCensorship, StepArguments]


const state = reactive({
  currentStep: 0
})

</script>

<style lang='scss'>
.instruction-modal {
  @apply w-[700px];

  &__buttons {
    @apply grid grid-cols-2 items-center justify-end gap-4 mt-8 px-8 pb-4 pt-0;
    button {
      @apply w-[150px]
    }
  }
}
</style>