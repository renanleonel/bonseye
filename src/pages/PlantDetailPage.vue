<script setup lang="ts">
import { PlantQueries } from '@/api/queries/plants'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{ id: string }>()

const id = parseInt(props.id)

const getPlantByIdQuery = PlantQueries.useGetPlantById({
  params: { id },
  options: { enabled: id !== null && id !== undefined },
})

const plant = computed(() => getPlantByIdQuery.data.value)
const isLoading = computed(() => getPlantByIdQuery.isLoading.value)
</script>

<template>
  <div class="min-h-screen">
    <div v-if="isLoading">loading...</div>
    <div v-else-if="plant" class="p-8">
      <nav class="flex items-center gap-4 mb-8">
        <button
          @click="router.back()"
          class="bg-none border-none cursor-pointer text-gray-500 p-2 rounded transition-colors hover:bg-gray-100 flex items-center justify-center"
          aria-label="Go back"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div
          class="w-full h-96 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"
        >
          <img
            :src="plant.default_image.original_url"
            :alt="plant.common_name"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex flex-col gap-6">
          <h1 class="text-4xl font-bold text-gray-900 m-0 leading-tight">
            {{ plant.common_name }}
          </h1>

          <p class="text-gray-900 text-2xl italic">
            {{ plant.scientific_name[0] }}
          </p>

          <p class="text-base leading-relaxed text-gray-600 m-0">
            {{ plant.common_name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
