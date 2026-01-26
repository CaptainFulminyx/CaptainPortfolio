<template>
  <header>
    <div class="header-content">
      <div class="logo">
        CaptainFulminyx
      </div>

      <button class="theme-toggle" @click="$emit('toggleTheme')">
        <Icon :icon="isDarkMode ? 'solar:sun-bold': 'solar:moon-bold'" width="30px" height="30px" />

      </button>
    </div>
  </header>
</template>

<script setup>
  import {
    Icon
  } from '@iconify/vue'
  defineProps( {
    isDarkMode: Boolean
  })
  defineEmits(['toggleTheme'])
</script>