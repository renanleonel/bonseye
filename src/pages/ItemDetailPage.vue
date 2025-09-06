<template>
  <div class="min-h-screen">
    <div v-if="item" class="p-8">
      <nav class="flex items-center gap-4 mb-8">
        <button
          @click="router.back()"
          class="bg-none border-none cursor-pointer text-gray-500 p-2 rounded transition-colors hover:bg-gray-100 flex items-center justify-center"
          aria-label="Go back"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col gap-4">
          <div
            class="w-full h-96 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"
          >
            <img :src="item.images[0]" :alt="item.title" class="w-full h-full object-cover" />
          </div>
          <div class="flex gap-4">
            <div
              v-for="(image, index) in item.images.slice(0, 3)"
              :key="index"
              class="w-20 h-20 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center"
            >
              <img
                :src="image"
                :alt="`${item.title} - Image ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <h1 class="text-4xl font-bold text-gray-900 m-0 leading-tight">
            {{ item.title }}
          </h1>

          <div class="flex items-center gap-8">
            <p class="text-gray-900 text-2xl font-medium m-0 leading-8 tracking-wide">
              ${{ item.price }}
            </p>
          </div>

          <p class="text-base leading-relaxed text-gray-600 m-0">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const item = ref<any | null>(null)
</script>
