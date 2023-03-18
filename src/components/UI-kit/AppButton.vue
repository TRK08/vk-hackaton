<template>
  <button
    class="button"
    :class="{'button--primary' : props.primary}"
  >
    <app-spinner
      v-if="props.isLoading"
      class="w-6 h-6 my-0 mx-auto"
    />
    <span v-else>
      <slot />
    </span>
  </button>
</template>

<script setup lang='ts'>

import AppSpinner from '@/components/UI-kit/AppSpinner.vue'

interface IProps {
  primary: boolean,
  isLoading?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  isLoading: false
})

</script>

<style lang='scss'>
.button {
  @apply px-4 py-2 rounded-lg w-full;
  &--primary {
    @apply bg-primary-600
  }
}
</style>