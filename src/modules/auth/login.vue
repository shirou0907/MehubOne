<template>
  <form class="flex flex-col space-y-4" @submit.prevent="onSubmit">
    <div>
      <span class="text-2xl font-semibold text-primary-text">Sign in</span>
    </div>

    <div class="text-sm text-primary-text">Please sign in before request an invite</div>

    <base-input v-model="state.username" title="Email"></base-input>

    <base-input v-model="state.password" title="Password" type="password"></base-input>

    <div class="relative">
      <button
        v-loading="loading"
        class="h-[56px] p-4 w-full outline-none border border-divide-lighter rounded text-white bg-primary font-semibold"
        type="submit"
      >
        Sign in
      </button>
    </div>

    <button class="text-xs text-primary text-left" @click="$router.push('/quen-mat-khau')">Forgot password</button>

    <div class="border-t w-full"></div>

    <div class="text-sm text-primary-text text-center">Don't have an account?</div>

    <div
      class="h-[56px] p-4 w-full outline-none border border-divide-lighter rounded text-center cursor-pointer text-primary bg-divide-lighter font-semibold"
      @click="$router.push('/dang-ky')"
    >
      Sign up
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useAuth } from 'vue3-auth'
import { ElNotification } from 'element-plus'
import BaseInput from './components/base-input.vue'

useHead({
  title: 'Đăng nhập',
})

const { login } = useAuth()

const loading = ref(false)
const state = reactive({
  username: '',
  password: '',
})

const onSubmit = async () => {
  try {
    loading.value = true
    await login(state)
  } catch (e: any) {
    console.log('login.vue -> onSubmit: ', e)

    ElNotification({
      title: 'Error',
      message: e?.data?.status?.message,
      type: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>

<route>
  {
    "name": "login",
    "path": "/",
    "meta": {
      "layout": "auth",
    }
  }
</route>
