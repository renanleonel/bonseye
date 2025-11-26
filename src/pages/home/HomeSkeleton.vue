<script setup lang="ts">
import PlantCardSkeleton from '@/components/plant-card/PlantCardSkeleton.vue'

const SKELETONS_AMOUNT = 8
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:gap-4 sm:grid-cols-1"
  >
    <PlantCardSkeleton v-for="i in SKELETONS_AMOUNT" :key="i" />
  </div>
</template>
