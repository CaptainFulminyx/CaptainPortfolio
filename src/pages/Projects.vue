<template>
  <div class="container" style="padding-top: 6rem; padding-bottom: 4rem;">
    <h2 class="section-title">My Projects</h2>

    <div class="portfolio-grid">
      <div
        v-for="project in data.projects"
        :key="project.id"
        class="portfolio-card"
      >
        <!-- Color blob accent -->
        <div style="position:absolute;top:-10px;right:-10px;width:50px;height:50px;border-radius:50%;opacity:0.15;" :style="{ background: project.color }"></div>

        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>

        <div class="card-tags">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="card-tag"
            :style="{ borderColor: project.color, color: project.color }"
          >{{ tag }}</span>
        </div>

        <div class="card-links">
          <a v-if="project.github" :href="project.github" target="_blank" class="doodle-btn" style="font-size:0.78rem; padding: 6px 14px;">
        <Icon icon="mdi:github" width="24" height="24" />
            Code
          </a>
          <a v-if="project.live" :href="project.live" target="_blank" class="doodle-btn doodle-btn-primary" style="font-size:0.78rem; padding: 6px 14px;">
            Live   <Icon icon="majesticons:open" width="24" height="24" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { portfolioData as data } from '../data/portfolio'
import { Icon } from '@iconify/vue'
</script>
