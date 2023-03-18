<template>
  <div
    class="modal"
    @click="toggleModal({name: '', value: false})"
  >
    <div
      class="modal__content"
      @click.stop
    >
      <component :is="modals[name]" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import InstructionModal from '@/components/UI-kit/Modals/InstructionModal.vue'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'

const { name } = storeToRefs(useModalStore())
const { toggleModal } = useModalStore()

const modals = {
  instruction: InstructionModal
}

</script>

<style lang='scss'>
.modal {
  @apply w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center;
  &__content {
    @apply bg-gray-900 rounded-xl overflow-hidden;
  }
}

</style>