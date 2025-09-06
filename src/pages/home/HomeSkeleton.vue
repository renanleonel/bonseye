<script setup lang="ts">
import PlantCardSkeleton from '@/components/plant-card/PlantCardSkeleton.vue'
import { Input } from '@/components/ui/input'

const SKELETONS_AMOUNT = 8
</script>

<template>
  <div class="p-10 space-y-8">
    <div class="flex gap-4">
      <Input
        disabled
        type="text"
        aria-label="Search plants"
        placeholder="Search plants..."
        class="focus-visible:ring-green-800/20"
      />
    </div>

    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:gap-4 sm:grid-cols-1"
    >
      <PlantCardSkeleton v-for="i in SKELETONS_AMOUNT" :key="i" />
    </div>
  </div>
</template>
