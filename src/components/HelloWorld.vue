<script setup lang='ts'>
import { ref } from 'vue'
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['ins'])
const count = ref(0)
const ins = () => {
  count.value++
  emit('ins')
}
</script>

<template>
  <div>
    {{ msg }}
    {{ count }}
  </div>
  <button @click="ins">
    点击+1
  </button>
</template>

<style scoped>
</style>
