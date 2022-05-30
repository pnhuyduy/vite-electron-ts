<script lang="ts" setup>
import { LayoutHeader, LayoutSidebar } from './components'
</script>

<template>
  <n-layout position="absolute" has-sider>
    <LayoutSidebar />
    <n-layout>
      <LayoutHeader />
      <n-layout-content content-style="padding: 12px 24px">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
