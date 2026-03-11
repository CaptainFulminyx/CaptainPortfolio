<template>
  <div class="skill-bar-row" ref="barRef">
    <div class="skill-bar-label">
      <span>{{ name }}</span>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ name: string }>()


</script>