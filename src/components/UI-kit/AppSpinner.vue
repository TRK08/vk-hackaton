<template>
  <div class="spinner">
    <svg
      :class="`spinner-icon`"
      viewBox="0 0 50 50"
    >
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      />
    </svg>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss'>

.spinner {
  &-icon {
    @apply stroke-neutral-200 animate-spin duration-500;
    .path {
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}



</style>