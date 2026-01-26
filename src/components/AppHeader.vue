<template>
  <header>
    <div class="header-content">
      <div class="logo">CaptainFulminyx</div>

      <button class="theme-toggle" @click="$emit('toggleTheme')">
        <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </div>
  </header>
</template>

<script setup>
defineProps({ isDarkMode: Boolean })
defineEmits(['toggleTheme'])
</script>