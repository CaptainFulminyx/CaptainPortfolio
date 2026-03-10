<template>
  <div class="skill-bar-row" ref="barRef">
    <div class="skill-bar-label">
      <span>{{ name }}</span>
      <span>{{ level }}%</span>
    </div>
    <div class="skill-bar-track">
      <div class="skill-bar-fill" :style="{ width: animated ? level + '%' : '0%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{ name: string; level: number }>()

const barRef = ref<HTMLElement>()
const animated = ref(false)

const { stop } = useIntersectionObserver(barRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    setTimeout(() => { animated.value = true }, 100)
    stop()
  }
}, { threshold: 0.3 })
</script>
