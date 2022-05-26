<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: '',
    }
  },
})
</script>

<template>
  <div class="flex justify-center mb-5">
    <img class="logo" alt="Vue logo" src="./assets/vite.svg" />
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <img class="logo" alt="Vue logo" src="./assets/electron.png" />
  </div>
  <HelloWorld :msg="msg" />
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
.logo {
  width: 150px;
  margin-right: 20px;
}
</style>
