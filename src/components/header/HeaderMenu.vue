<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Leaf, TreePine } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="border-b bg-[#F7F6F5] border-gray-200 py-4 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-5 md:px-5 sm:px-2.5 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2">
        <TreePine class="text-green-800" />
        <h1 class="text-gray-800 text-xl font-medium">Bonseye</h1>
      </RouterLink>

      <div class="flex items-center gap-8">
        <RouterLink to="/garden">
          <Button
            data-cy="button-garden"
            class="bg-green-800/50 hover:bg-green-700/50 cursor-pointer relative"
          >
            Garden
            <Leaf />
          </Button>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
