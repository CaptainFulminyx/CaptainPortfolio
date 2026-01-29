<template>
  <header class="header">
    <div class="logo">
      CaptainFulminyx
    </div>

    <div class="header-actions">
      <button class="menu-toggle" @click="$emit('openMenu')">
        <Icon
          :icon="isOpen ? 'material-symbols:close-rounded': 'material-symbols:menu-rounded'"
          width="30px"
          height="30px"
          />
      </button>
    </div>

    <Transition name="menu">
      <div v-if="isOpen" class="nav-content">
        <RouterLink class="a" to="/work">
          <div class="nav-link">
            Work
          </div>
        </RouterLink>
        <div class="nav-link">
          Favourites
        </div>

        <button class="theme-toggle" @click="$emit('toggleTheme')">
          <Icon
            :icon="isDarkMode ? 'solar:sun-bold': 'solar:moon-bold'"
            width="30px"
            height="30px"
            />
        </button>
      </div>
    </Transition>
  </header>
</template>

<script setup>
  import {
    Icon
  } from '@iconify/vue'
  import {
    RouterLink
  } from 'vue-router'
  defineProps( {
    isDarkMode: Boolean,
    isOpen: Boolean,
  })
  defineEmits(['toggleTheme', 'openMenu'])
</script>

<style scoped>
  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: top;
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .menu-enter-active {
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transition-duration: 0.3s;
  }

  .menu-leave-active {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.2s;
  }

  .menu-enter-from {
    transform: translateY(-12px);
    opacity: 0;
  }

  .menu-leave-to {
    transform: translateY(-8px);
    opacity: 0;
  }

  .menu-enter-to,
  .menu-leave-from {
    transform: translateY(0);
    opacity: 1;
  }
</style>