<template>
  <div class="layout">
    <app-sidebar v-if="$route.path !== '/auth'" />
    <div class="layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>

import AppSidebar from '@/components/Layout/AppSidebar.vue'
</script>

<style lang='scss'>
.layout {
  @apply flex min-h-screen;

  &__content {
    @apply w-full p-8 bg-gray-950;
  }
}
</style>