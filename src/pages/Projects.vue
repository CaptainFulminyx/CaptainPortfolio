<template>
  <div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
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
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
          <a v-if="project.live" :href="project.live" target="_blank" class="doodle-btn doodle-btn-primary" style="font-size:0.78rem; padding: 6px 14px;">
            Live →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { portfolioData as data } from '../data/portfolio'
</script>
