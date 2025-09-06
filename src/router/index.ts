import HomePage from '@/pages/HomePage.vue'
import ItemDetailPage from '@/pages/PlantDetailPage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/plants/:id',
    name: 'PlantDetail',
    component: ItemDetailPage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
