<template>
  <section class="portfolio">
    <h2 class="section-title">My Projects</h2>

    <div class="portfolio-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="portfolio-card"
        @mouseenter="hovered = project.id"
        @mouseleave="hovered = null"
        :style="{ transform: hovered === project.id ? 'translateY(-10px)' : '' }"
      >
        <img :src="project.img" />
        <h3>
          {{ project.title }}
          <a v-if="project.link" :href="project.link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ projects: Array })
const hovered = ref(null)
</script>