<script setup lang='ts'>
import { getDog } from '@/api/dog'
import type { dogType } from '@/api/types/dog'
import { onMounted, ref } from '@vue/runtime-core'
const dog = ref<dogType>()
onMounted(async () => {
  const res = await getDog()
  dog.value = res
})
</script>

<template>
  <div>
    <img :src="dog?.message" alt="">
  </div>
</template>

<style scoped>
</style>
