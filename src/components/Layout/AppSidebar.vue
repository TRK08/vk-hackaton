<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h2 class="text-center mb-8">
        Ultra
      </h2>
    </div>
    <ul class="sidebar__nav">
      <router-link
        to="/"
        custom
        v-slot="{ navigate }"
      >
        <li
          @click="navigate"
          class="sidebar__nav-item"
          :class="{'sidebar__nav-item--active': $route.path === '/'}"
        >
          Посты
        </li>
      </router-link>
      <router-link
        to="/learn"
        custom
        v-slot="{ navigate }"
      >
        <li
          @click="navigate"
          class="sidebar__nav-item"
          :class="{'sidebar__nav-item--active': $route.path === '/learn'}"
        >
          Обучение
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss'>
.sidebar {
  @apply bg-gray-900 py-8 min-w-[200px];
  &__header {
    @apply px-4;
  }
  &__nav {
    @apply flex flex-col gap-1;
    &-item {
      @apply border-l-3 cursor-pointer border-transparent text-neutral-200 py-3 px-7;
      &:hover, &--active {
        @apply border-l-neutral-200 bg-gray-400;
      }
    }
  }
}

</style>