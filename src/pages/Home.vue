<template>
  <div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-available">
          <span class="dot"></span>
          Available for opportunities
        </div>

        <h1>
          Hi, I'm <span class="highlight">{{ data.name }}</span>
        </h1>

        <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--primary-color);">
          {{ data.title }}
        </p>
        <p>{{ data.subtitle }}</p>

        <div class="hero-cta">
          <router-link to="/projects" class="doodle-btn doodle-btn-primary">
            View My Work 
          </router-link>
          <router-link to="/contact" class="doodle-btn">
            Get In Touch
          </router-link>
        </div>
      </div>

      <div class="hero-image">
        <div class="doodle-avatar floating">
          <img class="avatar-initials" src="../assets/me.jpg"  width="100%" height="100%" style="object-fit:cover;"/>
        </div>

      </div>
    </section>

    <!-- Featured Projects preview -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 class="section-title">Featured Projects</h2>
      <div class="portfolio-grid">
        <div
          v-for="project in featuredProjects"
          :key="project.id"
          class="portfolio-card"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="card-tags">
            <span v-for="tag in project.tags" :key="tag" class="card-tag">{{ tag }}</span>
          </div>
          <div class="card-links">
            <a v-if="project.github" :href="project.github" target="_blank" class="doodle-btn" style="font-size:0.78rem; padding: 5px 12px;">
                <Icon icon="mdi:github" width="24" height="24" />
            Code
            </a>
            <a v-if="project.live" :href="project.live" target="_blank" class="doodle-btn doodle-btn-primary" style="font-size:0.78rem; padding: 5px 12px;">
  Live   <Icon icon="majesticons:open" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
      <div style="text-align:center;">
        <router-link to="/projects" class="doodle-btn doodle-btn-primary">
          View All Projects         <Icon icon="mingcute:right-fill" width="24" height="24" />
        </router-link>
      </div>
    </section>

    <!-- Skills preview -->
    <section style="margin-bottom: var(--space-2xl);">
      <h2 class="section-title">Technologies I Use</h2>
      <div class="skills-container">
        <span
          v-for="skill in allSkills"
          :key="skill"
          class="skill-item"
        >{{ skill }}</span>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { portfolioData as data } from '../data/portfolio'
    import { Icon } from '@iconify/vue'

const initials = computed(() =>
  data.name.split(' ').map((n: string) => n[0]).join('')
)

const featuredProjects = computed(() => data.projects.filter(p => p.featured))

const allSkills = computed(() => [
  ...data.skills.languages.map(s => s.name),
  ...data.skills.frontend.map(s => s.name),
  ...data.skills.backend.map(s => s.name),
  ...data.skills.tools.map(s => s.name),
])
</script>


