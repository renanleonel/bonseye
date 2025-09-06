<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import type { Plant } from '@/domain/types/plant'
import { capitalize } from 'es-toolkit'
import { useRouter } from 'vue-router'

type Props = {
  plant: Plant
}

const router = useRouter()
const props = defineProps<Props>()

const navigateToItem = (): void => {
  router.push(`/plants/${props.plant.id}`)
}
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    @click="navigateToItem"
  >
    <div class="w-full h-48 bg-gray-50 flex items-center justify-center">
      <img
        :alt="plant.common_name"
        :src="plant.default_image?.original_url"
        class="w-full h-full object-cover transition-transform duration-200"
      />
    </div>
    <div class="p-4">
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">
          {{ plant.common_name }}
        </h3>

        <p class="text-xs italic text-gray-500">{{ plant.other_name[0] }}</p>

        <div class="flex gap-2">
          <Badge v-if="plant.family" class="bg-green-800/50">
            {{ capitalize(plant.family) }}
          </Badge>
          <Badge v-if="plant.genus" class="bg-green-800/50">
            {{ capitalize(plant.genus) }}
          </Badge>
          <Badge v-if="plant.species_epithet" class="bg-green-800/50">
            {{ capitalize(plant.species_epithet) }}
          </Badge>
        </div>
      </div>
    </div>
  </div>
</template>
