<script setup lang='ts'>
import { useStore } from '@/store'
const store = useStore()
console.log(store.state.count)
</script>

<template>
  <div class="container">这是home {{ store.state.count }}</div>
</template>

<style lang="scss" scoped>
.container{
  background: $redColor;
}
</style>
