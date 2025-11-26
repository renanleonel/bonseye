<template>
  <div class="py-8">
    <div class="mb-8">
      <div class="h-10 bg-gray-200 rounded w-48 mb-2 animate-pulse" />
      <div class="h-6 bg-gray-200 rounded w-64 animate-pulse" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="i in 8" :key="i" class="bg-white rounded-xl shadow-md">
        <div class="w-full h-48 bg-gray-200 animate-pulse" />
        <div class="p-4">
          <div class="space-y-2">
            <div class="h-6 bg-gray-200 rounded animate-pulse" />
            <div class="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div class="flex gap-2">
              <div class="h-5 bg-gray-200 rounded w-16 animate-pulse" />
              <div class="h-5 bg-gray-200 rounded w-20 animate-pulse" />
              <div class="h-5 bg-gray-200 rounded w-14 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
