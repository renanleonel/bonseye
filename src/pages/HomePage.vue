<script setup lang="ts">
import ProductCard from '@/components/ItemCard.vue'
import type { Item } from '@/types'

const items: Item[] = [{ id: 1, title: '', price: 0, description: '', images: [] }]
</script>

<template>
  <div class="p-10 space-y-8">
    <input
      type="text"
      placeholder="Search items"
      class="p-2 border rounded w-full border-gray-400"
      aria-label="Search items"
    />

    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:gap-4 sm:grid-cols-1"
    >
      <ProductCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
