<script setup lang="ts">
import PlantCard from '@/components/plant-card/PlantCard.vue'
import { Button } from '@/components/ui/button'
import { useGardenStore } from '@/stores/garden'
import { Leaf, X } from 'lucide-vue-next'
import { computed } from 'vue'

const gardenStore = useGardenStore()

const plants = computed(() => gardenStore.plants)
const plantCount = computed(() => gardenStore.plantCount)
const isEmpty = computed(() => plantCount.value === 0)
</script>

<template>
  <div class="p-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">My Garden</h1>
      <p v-if="plantCount > 0" class="text-gray-600">
        {{ `${plantCount} plant${plantCount === 1 ? '' : 's'} in your garden` }}
      </p>
    </div>

    <div v-if="isEmpty" class="py-16 flex justify-center flex-col items-center">
      <Leaf class="size-24 text-gray-500" />
      <h3 class="text-lg font-medium text-gray-900 mb-2">Your garden is empty</h3>
      <p class="text-gray-500 mb-6">Start building your collection by adding plants you like!</p>
      <router-link to="/">
        <Button class="bg-green-800/50 hover:bg-green-700/50 cursor-pointer">Browse Plants</Button>
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="plant in plants" :key="plant.id" class="relative group">
        <PlantCard :plant="plant" />
        <button
          @click="gardenStore.removePlant(plant.id)"
          class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full cursor-pointer p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
          aria-label="Remove from garden"
        >
          <X class="size-4" />
        </button>
      </div>
    </div>
  </div>
</template>
