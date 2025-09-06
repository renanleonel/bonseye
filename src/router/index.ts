import Garden from '@/pages/garden/Garden.vue'
import Home from '@/pages/home/Home.vue'
import Plant from '@/pages/plant/Plant.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plants/:id',
    name: 'Plant',
    component: Plant,
    props: true,
  },
  {
    path: '/garden',
    name: 'Garden',
    component: Garden,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
