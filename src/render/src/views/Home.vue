<script setup lang="ts">
const sendMessage = (msg: string) => window.api.showDialog(msg)
</script>

<template>
  <n-space>
    Home
    <n-button @click="sendMessage('abc')"> Dialog </n-button>
  </n-space>
</template>

<style lang="scss" scoped></style>
