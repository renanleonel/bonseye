import Garden from '@/pages/garden/GardenPage.vue'
import Home from '@/pages/home/HomePage.vue'
import Plant from '@/pages/plant/PlantPage.vue'
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
