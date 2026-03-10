<template>
  <div :class="{ 'dark-mode': isDark }">
    <Navbar :is-dark="isDark" @toggle-dark="isDark = !isDark" />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isDark = ref(false)
</script>
