<template>
  <div class="flex w-full h-screen justify-center items-center">
    <h1 class="text-5xl font-bold">404 - Page Not Found!</h1>
  </div>
</template>
<script lang="ts" setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Not Found',
})
</script>
