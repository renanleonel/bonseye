<script setup lang="ts">
import Header from '@/components/header/HeaderMenu.vue'
import { Analytics } from '@vercel/analytics/vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Analytics />

  <div class="bg-[#F7F6F5] min-h-screen h-full px-5 md:px-10 lg:px-20">
    <Header />
    <main id="app" class=" ">
      <RouterView />
    </main>
  </div>
</template>
