<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFC
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import TRender from './components/TRender.vue'
const ins = () => {
  console.log('出发了')
}
</script>

<template>
  <router-view />
  <HelloWorld
    msg="Hello Vue 3 + TypeScript + Vite"
    @ins="ins"
  />
  <TRender />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
