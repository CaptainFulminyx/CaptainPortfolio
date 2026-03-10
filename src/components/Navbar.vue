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
            <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          </button>

          <!-- Hamburger (mobile only) -->
          <button class="doodle-btn hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <template v-if="!menuOpen">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </template>
              <template v-else>
                <line x1="18" y1="6"  x2="6" y2="18"/>
                <line x1="6"  y1="6"  x2="18" y2="18"/>
              </template>
            </svg>
          </button>
        </div>

      </div>
    </div>
  </nav>

  <!-- Floating mobile nav — teleported to <body>, outside sticky bar -->
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
