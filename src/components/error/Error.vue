<script setup lang="ts">
defineProps<{ message?: string }>()
</script>

<template>
  <div class="text-center p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
    <p class="text-gray-600 mb-6">
      {{ message || 'Please try again.' }}
    </p>
    <div class="space-x-4">
      <slot />
    </div>
  </div>
</template>
