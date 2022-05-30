import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'main',
    path: '/',
    component: () => import('@/layouts/LayoutMain.vue'),
    children: [
      {
        path: '/',
        name: 'main.home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/',
        name: 'main.about',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
]

export default routes
