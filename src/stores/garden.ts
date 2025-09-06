import type { Plant } from '@/domain/types/plant'
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  STORAGE_KEYS,
} from '@/lib/local-storage'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useGardenStore = defineStore('garden', () => {
  const plants = ref<Plant[]>([])

  const initializeFromStorage = () => {
    const storedPlants = getStorageItem(STORAGE_KEYS.GARDEN_PLANTS, [])
    if (Array.isArray(storedPlants)) {
      plants.value = storedPlants
    }
  }

  initializeFromStorage()

  watch(
    plants,
    (newPlants) => {
      setStorageItem(STORAGE_KEYS.GARDEN_PLANTS, newPlants)
    },
    { deep: true },
  )

  const plantCount = computed(() => plants.value.length)
  const plantIds = computed(() => plants.value.map((plant) => plant.id))
  const isPlantInGarden = computed(() => (plantId: number) => plantIds.value.includes(plantId))

  const addPlant = (plant: Plant) => {
    if (!isPlantInGarden.value(plant.id)) {
      plants.value.push(plant)
    }
  }

  const removePlant = (plantId: number) => {
    const index = plants.value.findIndex((plant) => plant.id === plantId)
    if (index > -1) {
      plants.value.splice(index, 1)
    }
  }

  const togglePlant = (plant: Plant) => {
    if (isPlantInGarden.value(plant.id)) {
      removePlant(plant.id)
    } else {
      addPlant(plant)
    }
  }

  const clearGarden = () => {
    plants.value = []
  }

  const clearStorage = () => {
    removeStorageItem(STORAGE_KEYS.GARDEN_PLANTS)
    plants.value = []
  }

  return {
    plants,
    plantIds,
    plantCount,
    isPlantInGarden,
    addPlant,
    removePlant,
    togglePlant,
    clearGarden,
    clearStorage,
  }
})
