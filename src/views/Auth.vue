<template>
  <div class="flex justify-center items-center h-full">
    <div class="card py-10 px-8">
      <h1 class="">
        Auth in ultra app
      </h1>
      <form
        class="flex flex-col gap-4 items-center mt-8"
        @submit.prevent="logIn"
      >
        <input
          v-model="state.login"
          class="input"
          placeholder="Логин"
        >
        <input
          v-model="state.password"
          class="input"
          type="password"
          placeholder="Пароль"
        >
        <app-button
          primary
          :is-loading="state.isLoading"
        >
          Войти
        </app-button>
      </form>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue'
import AppButton from '@/components/UI-kit/AppButton.vue'

const {login} = useAuthStore()

const state = reactive({
  login: '',
  password: '',
  isLoading: false
})

// TEST CREDENTIALS email: test@test.test password: testtest

const logIn = async () => {
  try {
    state.isLoading = true
    await login(state.login, state.password)
  } catch (e) {
    console.log(e)
  } finally {
    state.isLoading = false
  }
}


</script>

<style lang='scss'>

</style>