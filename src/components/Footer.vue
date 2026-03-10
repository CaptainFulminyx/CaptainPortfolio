<template>
  <footer class="doodle-footer">
    <div class="container">
      © {{ new Date().getFullYear() }} {{ name }} · Built with Vue 3 + Vite
    </div>
  </footer>
</template>

<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
const { name } = portfolioData
</script>
