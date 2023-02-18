<template>
  <div class="relative min-h-screen flex justify-center items-center space-x-[130px]">
    <div class="absolute top-3 left-6 cursor-pointer">
      <full-logo class="text-white h-5 w-auto" @click="$router.push('/')"></full-logo>
    </div>

    <div class="relative bg-[url('/img/main-auth.png')] bg-no-repeat bg-contain">
      <img src="/img/main-auth.png" class="invisible" />

      <div class="absolute top-10 -left-9">
        <left-logo></left-logo>
      </div>

      <div class="absolute top-[312px] -right-8">
        <right-logo></right-logo>
      </div>

      <div class="absolute bottom-5 -left-[72px]">
        <bottom-logo></bottom-logo>
      </div>
    </div>

    <div class="w-[400px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FullLogo from '@/assets/logo.svg'
import LeftLogo from '@/assets/left-logo.svg'
import RightLogo from '@/assets/right-logo.svg'
import BottomLogo from '@/assets/bottom-logo.svg'
</script>
