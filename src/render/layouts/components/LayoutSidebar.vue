<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { computed, h, ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { navigationItem } from '@/layouts/navigation'
import { navigation } from '@/layouts/navigation'
import Icon from '@/components/Icon.vue'

const route = useRoute()
const menus = ref(navigation)

const mapping = (items: navigationItem[]): MenuOption[] => {
  return items.map((item: navigationItem) => ({
    ...item,
    key: item.name,
    label:
      item.name != null
        ? () => h(RouterLink, { to: item }, { default: () => item.label })
        : item.label,
    icon: item.icon != null ? () => h(Icon, { type: item.icon }) : undefined,
    children: item.children && mapping(item.children),
  }))
}

const currentKey = ref<string>('')
const expandedKeys = ref<string[]>([])
const options = computed(() => (menus.value ? mapping(menus.value) : []))

const routeMatched = (menu: navigationItem): boolean => {
  return (
    route.name === menu.name &&
    (menu.params == null ||
      JSON.stringify(route.params) === JSON.stringify(menu.params))
  )
}

const matchExpanded = (items: navigationItem[]): boolean => {
  let matched = false
  for (const item of items) {
    if (item.children != null)
      matchExpanded(item.children) && expandedKeys.value.push(item.name)

    if (routeMatched(item)) {
      currentKey.value = item.name
      matched = true
    }
  }

  return matched
}

watchEffect(() => menus.value && matchExpanded(menus.value))
</script>

<template>
  <n-layout-sider
    :width="220"
    :native-scrollbar="false"
    :collapsed-width="48"
    collapse-mode="width"
    show-trigger="arrow-circle"
    bordered
  >
    <n-menu
      :value="currentKey"
      :default-expanded-keys="expandedKeys"
      :options="options"
      :root-indent="18"
      @update:value="
        k => {
          currentKey = k
        }
      "
    />
  </n-layout-sider>
</template>
