<template>
  <header class="border-b bg-[#f7f6f5] border-gray-200 py-4 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-5 md:px-5 sm:px-2.5 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2">
        <TreePine class="text-green-800" />
        <h1 class="text-gray-800 text-xl font-bold">Bonseye</h1>
      </RouterLink>

      <div class="flex items-center gap-8">
        <RouterLink to="/garden">
          <Button class="bg-green-800 hover:bg-green-700 cursor-pointer relative">
            Garden
            <Leaf />
            <span
              v-if="plantCount > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ plantCount }}
            </span>
          </Button>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useGardenStore } from '@/stores/garden'
import { Leaf, TreePine } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const gardenStore = useGardenStore()
const plantCount = computed(() => gardenStore.plantCount)
</script>
