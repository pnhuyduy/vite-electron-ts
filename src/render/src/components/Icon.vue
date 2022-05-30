<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import {
  AddOutline as add,
  Bug as bug,
  ChatbubbleEllipsesOutline as comments,
  SpeedometerOutline as dashboard,
  AlertCircleOutline as fallback,
  FlaskOutline as flask,
  LogoGithub as github,
  HelpCircleOutline as help,
  Home as home,
  Mail as mail,
  ImagesOutline as media,
  Moon as moon,
  NotificationsOutline as notifications,
  NewspaperOutline as pages,
  HardwareChipOutline as plugins,
  CreateOutline as posts,
  RefreshOutline as refresh,
  SettingsOutline as settings,
  SunnyOutline as sun,
  ColorPaletteOutline as themes,
  BuildOutline as tools,
  PersonCircleOutline as user,
  PeopleOutline as users,
} from '@vicons/ionicons5'
import { Facebook as facebook, Telegram as telegram } from '@vicons/fa'
import { PlusOutlined as plus } from '@vicons/antd'

const props = defineProps({
  ...NIcon.props,
  type: {
    type: String,
    default: 'fallback',
  },
})

const icons = {
  refresh,
  dashboard,
  posts,
  pages,
  media,
  users,
  user,
  comments,
  themes,
  plugins,
  tools,
  settings,
  flask,
  add,
  help,
  notifications,
  github,
  fallback,
  bug,
  mail,
  telegram,
  facebook,
  plus,
  home,
  moon,
  sun,
}

type IconTypes = keyof typeof icons

const icon = icons[props.type as IconTypes]
</script>

<template>
  <n-icon v-bind="props">
    <icon />
  </n-icon>
</template>
