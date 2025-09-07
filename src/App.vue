<script setup lang="ts">
import Header from '@/components/header/HeaderMenu.vue'
import { Analytics } from '@vercel/analytics/vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Analytics />

  <div class="bg-[#F7F6F5] min-h-screen h-full">
    <Header />
    <main id="app" class="max-w-6xl mx-auto">
      <RouterView />
    </main>
  </div>
</template>
