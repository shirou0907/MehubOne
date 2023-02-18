<template>
  <div class="h-[56px] px-4 py-2 border border-divide-lighter rounded">
    <div class="text-xs text-secondary-text bg-white">{{ title }}</div>
    <input
      class="outline-none w-full font-semibold text-primary-text"
      :value="modelValue"
      :title="title"
      :type="type"
      :readonly="readonlyEnabled"
      autocomplete="off"
      @focus="readonlyEnabled = false"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ modelValue: string; type?: string; title?: string }>()

defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
}>()

const readonlyEnabled = ref(true)
</script>
