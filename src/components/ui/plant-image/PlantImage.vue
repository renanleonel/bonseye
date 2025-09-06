<script setup lang="ts">
import { Leaf } from 'lucide-vue-next'
import { computed, ref } from 'vue'

type Props = {
  alt: string
  class?: string
  imageUrl?: string
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 'lg',
})

const showPlaceholder = ref(!props.imageUrl)
const hasError = ref(false)

const iconClass = computed(() => {
  const sizeMap = {
    sm: 'size-8',
    md: 'size-12',
    lg: 'size-16',
    xl: 'size-24',
  }

  return sizeMap[props.iconSize]
})

const imageClass = computed(() => {
  return props.class || 'w-full h-full object-cover'
})

const handleImageError = () => {
  hasError.value = true
  showPlaceholder.value = true
}

const handleImageLoad = () => {
  hasError.value = false
  showPlaceholder.value = false
}
</script>

<template>
  <div
    class="relative w-full h-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden"
  >
    <Leaf v-if="showPlaceholder" :class="iconClass" class="text-gray-400" />
    <img
      v-else
      :src="imageUrl"
      :alt="alt"
      :class="imageClass"
      @error="handleImageError"
      @load="handleImageLoad"
    />
  </div>
</template>
