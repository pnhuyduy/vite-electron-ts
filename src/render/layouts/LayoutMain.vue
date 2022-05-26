<script lang="ts" setup>
import { LayoutHeader, LayoutSidebar } from './components'
</script>

<template>
  <n-layout position="absolute" has-sider>
    <LayoutSidebar />
    <n-layout>
      <LayoutHeader />
    </n-layout>
  </n-layout>
</template>
