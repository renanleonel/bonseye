<script setup lang="ts">
import type { Item } from '@/types'
import { useRouter } from 'vue-router'

interface Props {
  item: Item
}

const props = defineProps<Props>()

const router = useRouter()

const navigateToItem = (): void => {
  router.push(`/items/${props.item.id}`)
}
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    @click="navigateToItem"
  >
    <div class="w-full h-48 bg-gray-50 flex items-center justify-center">
      <img
        :alt="item.title"
        :src="item.images[0]"
        class="w-full h-full object-cover transition-transform duration-200"
      />
    </div>
    <h3 class="text-lg font-semibold">
      {{ item.title }}
    </h3>
  </div>
</template>
