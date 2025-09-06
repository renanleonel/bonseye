<script setup lang="ts">
import { PlantQueries } from '@/api/queries/plants'
import PlantCard from '@/components/PlantCard.vue'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { debounce } from 'es-toolkit'
import { computed, ref, watch } from 'vue'

const searchQuery = ref('')
const debouncedSearchQuery = ref('')

const debouncedUpdate = debounce((value: string) => {
  debouncedSearchQuery.value = value
}, 300)

watch(searchQuery, (newValue) => debouncedUpdate(newValue))

const listPlantsQuery = PlantQueries.useListPlantsQuery({
  params: computed(() => ({ q: debouncedSearchQuery.value || undefined })),
})

const plants = computed(() => listPlantsQuery.data.value?.data)
const isLoading = computed(() => listPlantsQuery.isLoading.value)
</script>

<template>
  <div class="p-10 space-y-8">
    <div class="flex gap-4">
      <Input
        v-model="searchQuery"
        type="text"
        placeholder="Search plants..."
        aria-label="Search plants"
      />

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple"> Apple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div v-if="isLoading">loading...</div>

    <div
      v-else
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:gap-4 sm:grid-cols-1"
    >
      <PlantCard v-for="plant in plants" :key="plant.id" :plant="plant" />
    </div>
  </div>
</template>
