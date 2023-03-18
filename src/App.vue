<template>
  <app-layout>
    <router-view />
  </app-layout>

  <app-modal v-if="value" />
</template>

<script setup lang="ts">

import AppLayout from '@/components/Layout/AppLayout.vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import AppModal from '@/components/UI-kit/Modals/AppModal.vue'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modal'

const {authStateChange} = useAuthStore();
const {value} = storeToRefs(useModalStore())

onMounted(() => {
  authStateChange()
})
</script>

<style lang='scss'>
</style>