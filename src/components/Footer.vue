<template>
  <footer class="doodle-footer">
    <div class="container">
      © {{ new Date().getFullYear() }} {{ name }} · Built with <Icon icon="mdi:heart" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
import { Icon } from '@iconify/vue'
const { name } = portfolioData
</script>
