<script setup lang="ts">
import { PlantQueries } from '@/api/queries/plants'
import ItemCard from '@/components/ItemCard.vue'
import { debounce } from 'es-toolkit'
import { computed, ref, watch } from 'vue'

const searchQuery = ref('')
const debouncedSearchQuery = ref('')

const debouncedUpdate = debounce((value: string) => {
  debouncedSearchQuery.value = value
}, 300)

watch(searchQuery, (newValue) => debouncedUpdate(newValue))

const listPlantsQuery = PlantQueries.useListPlantsQuery({
  params: () => ({
    q: debouncedSearchQuery.value || undefined,
  }),
})

const plants = computed(() => listPlantsQuery.data.value?.data)
const isLoading = computed(() => listPlantsQuery.isLoading.value)
</script>

<template>
  <div class="p-10 space-y-8">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search plants..."
      class="p-2 border rounded w-full border-gray-400"
      aria-label="Search plants"
    />

    <div v-if="isLoading">loading...</div>

    <div
      v-else
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:gap-4 sm:grid-cols-1"
    >
      <ItemCard v-for="plant in plants" :key="plant.id" :plant="plant" />
    </div>
  </div>
</template>
