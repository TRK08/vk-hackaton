<template>
  <div class="learn">
    <h1>Обучение</h1>

    <div class="learn__wrap">
      <div
        class="card learn__item"
        @click="openModal('instruction')"
      >
        <icon-instruction />
        <h2>Как написать лучший комментарий?</h2>
      </div>
      <div class="card learn__item">
        <icon-instruction />
        <h2>Попробуй написать комментарий</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import IconInstruction from '@/assets/icons/instruction.svg'
import { useModalStore } from '@/stores/modal'

const {toggleModal} = useModalStore()


const openModal = (name: string) => {
  toggleModal({
    name,
    value: true
  })
}

</script>

<style lang='scss'>
.learn {
  &__wrap {
    @apply mt-8 grid grid-cols-2 gap-10
  }
  &__item {
    @apply h-[300px] flex flex-col items-center justify-center cursor-pointer transition-all duration-200;
    svg {
      @apply w-16 h-16 mb-8 fill-neutral-200;
    }
    &:hover {
      @apply bg-primary-600
    }
  }
}
</style>