<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useMessage } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router'
import Icon from '@/components/Icon.vue'
const router = useRouter()
const message = useMessage()

const me = ref({
  id: 1,
  name: 'Admin',
  avatar: 'https://avatars.dicebear.com/api/avataaars/xaw.svg',
})

const options = computed(() => [
  { key: 'me', label: `Hey, ${me.value?.name as string}!` },
  { key: 'divider', type: 'divider' },
  { key: 'logout', label: 'Sign out' },
])

const handleOptionsSelect = async (key: unknown): Promise<void> => {
  if ((key as string) === 'logout') message.success('logout')
  else if ((key as string) === 'me')
    message.success(`Welcome back, ${me.value?.name as string}!`)
}
</script>

<template>
  <n-layout-header bordered>
    <n-button text @click="router.go(0)">
      <icon type="refresh" size="20" :depth="2" />
    </n-button>
    <n-space :size="20" align="center" style="line-height: 1">
      <n-tooltip>
        <template #trigger>
          <router-link :to="{ name: 'main.home' }">
            <icon type="help" size="22" :depth="2" />
          </router-link>
        </template>
        Dashboard help
      </n-tooltip>
      <n-dropdown
        placement="bottom-end"
        show-arrow
        :options="options"
        @select="handleOptionsSelect"
      >
        <n-avatar size="small" round :src="me?.avatar" />
      </n-dropdown>
    </n-space>
  </n-layout-header>
</template>

<style scoped>
.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}

.n-button {
  margin-right: 15px;
}

.n-space {
  margin-left: auto;
}
</style>
