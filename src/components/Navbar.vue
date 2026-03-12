<template>
  <nav class="doodle-navbar">
    <div class="container container-nav">
      <div class="navbar-inner">

        <!-- Logo -->
        <router-link to="/" class="logo">{{ initials }}</router-link>

        <!-- Desktop nav (inline, hidden on mobile via CSS) -->
        <div class="nav-content">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="doodle-btn"
            :class="{ active: $route.path === link.path }"
          >{{ link.label }}</router-link>
        </div>

        <!-- Actions -->
        <div class="header-actions">
          <!-- Dark mode toggle -->
          <button class="doodle-btn" @click="$emit('toggleDark')" :title="isDark ? 'Light mode' : 'Dark mode'">
            <Icon icon="solar:sun-bold" v-if="isDark" width="24" height="24"/>
            <Icon icon="solar:moon-bold" v-else width="24" height="24" />

          </button>

          <!-- Hamburger (mobile only) -->
          <button class="doodle-btn hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
            <template v-if="!menuOpen">
              
 <Icon icon="material-symbols:menu-rounded"  width="24" height= "24"/>
            </template>
            <template v-else>
            <Icon icon="material-symbols:close-rounded" width="24" height="24" />
              
 
            </template>

          </button>
        </div>

      </div>
    </div>
  </nav>

  <!-- Floating mobile nav — telep orted to <body>, outside sticky bar -->
  <MobileNav
    :open="menuOpen"
    :current-path="$route.path"
    @close="menuOpen = false"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { portfolioData } from '../data/portfolio'
  import { Icon } from '@iconify/vue'
import MobileNav from './MobileNav.vue'

defineProps<{ isDark: boolean }>()
defineEmits(['toggleDark'])

const $route = useRoute()
const menuOpen = ref(false)

const initials = computed(() =>
  portfolioData.name.split(' ').map((n: string) => n[0]).join('')
)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
]
</script>

<style scoped>
/* Desktop nav visible, hamburger hidden */
.nav-content  { display: flex; }
.hamburger    { display: none; }

/* Mobile: hide inline nav, show hamburger */
@media (max-width: 767px) {
  .nav-content { display: none; }
  .hamburger   { display: inline-flex; }
}
</style>
