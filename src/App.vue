<script setup lang="ts">
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-[#f7f6f5] min-h-screen">
    <Header />
    <main id="app" class="max-w-6xl mx-auto">
      <RouterView />
    </main>
  </div>
</template>
