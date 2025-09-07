<script setup lang="ts">
import { PlantQueries } from '@/api/queries/plants'
import PlantCard from '@/components/plant-card/PlantCard.vue'
import { Input } from '@/components/ui/input'
import HomeSkeleton from '@/pages/home/HomeSkeleton.vue'
import { debounce } from 'es-toolkit'
import { computed, onMounted, ref, watch } from 'vue'

const searchQuery = ref('')
const debouncedSearchQuery = ref('')

const debouncedUpdate = debounce((value: string) => {
  debouncedSearchQuery.value = value
}, 300)

watch(searchQuery, (newValue) => debouncedUpdate(newValue))

const listPlantsQuery = PlantQueries.useInfiniteListPlantsQuery({
  params: computed(() => ({ q: debouncedSearchQuery.value || undefined })),
})

console.log(listPlantsQuery.data.value)

const plants = computed(() => listPlantsQuery.data.value?.pages.flatMap((page) => page.data) ?? [])
const isLoading = computed(() => listPlantsQuery.isLoading.value)

const loadMoreTrigger = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!loadMoreTrigger.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && listPlantsQuery.hasNextPage.value) {
        listPlantsQuery.fetchNextPage()
      }
    },
    { rootMargin: '200px' },
  )

  observer.observe(loadMoreTrigger.value)
})
</script>

<template>
  <div v-if="isLoading">
    <HomeSkeleton />
  </div>

  <div v-else class="p-10 space-y-8">
    <div class="flex gap-4">
      <Input
        type="text"
        v-model="searchQuery"
        placeholder="Search plants..."
        aria-label="Search plants"
        class="focus-visible:ring-green-800/20"
      />
    </div>

    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:gap-4 sm:grid-cols-1"
    >
      <PlantCard v-for="plant in plants" :key="plant.id" :plant="plant" />
    </div>

    <div ref="loadMoreTrigger" class="h-10" />
  </div>
</template>
