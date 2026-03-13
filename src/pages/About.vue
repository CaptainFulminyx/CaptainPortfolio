<template>
  <div class="container" style="padding-top: 6rem; padding-bottom: 4rem;">
    <h2 class="section-title">About Me</h2>

    <!-- Top: Avatar + Bio -->
    <div class="about-top">
      <div class="about-avatar-col">
        <div class="doodle-avatar floating" style="max-width: 260px;">
        <img class="avatar-initials" src="../assets/me.jpg"  width="100%" height="100%" style="object-fit:cover;"/>
        </div>
        <div class="stats-row" style="margin-top: 1rem; max-width: 260px; margin-left: auto; margin-right: auto;">
          <div class="stat-card">
            <span class="stat-value">{{ data.projects.length }}+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">4+</span>
            <span class="stat-label">Years</span>
          </div>
        </div>
      </div>

      <div class="about-bio-col">
        <div class="about-bio-card">
          <p>{{ data.about.description }}</p>

          <div style="margin-bottom: var(--space-md);">
            <div class="contact-info-item" style="margin-bottom: 8px;">
              
<Icon icon="material-symbols:mail-outline-rounded" width="24" height="24" />
                           <a :href="`mailto:`+data.email" target="_blank" style="color: var(--primary-color); text-decoration: none;">{{data.email}}</a>
            </div>
            <div class="contact-info-item">
<Icon icon="mdi:github" width="24" height="24" />
              <a :href="data.github" target="_blank" style="color: var(--primary-color); text-decoration: none;">GitHub Profile</a>
            </div>
          </div>

          
        </div>
      </div>
    </div>

    <!-- Education & Experience -->
    <div class="timeline-grid">
      <div class="timeline-section">
        <h2>
        <Icon icon="boxicons:education" width="24" height="24" />
          Education
        </h2>
        <div class="timeline-items">
          <div v-for="edu in data.about.education" :key="edu.degree" class="timeline-card">
            <h3>{{ edu.degree }}</h3>
            <div class="institution">{{ edu.institution }}</div>
            <div class="year">{{ edu.year }}</div>
            <p>{{ edu.description }}</p>
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <h2>
          <Icon icon="material-symbols:work-outline" width="24" height="24" />
          Experience
        </h2>
        <div class="timeline-items">
          <div v-for="exp in data.about.experience" :key="exp.role" class="timeline-card" style="border-left-color: var(--secondary-color);">
            <h3>{{ exp.role }}</h3>
            <div class="institution" style="color: var(--secondary-color);">{{ exp.company }}</div>
            <div class="year">{{ exp.year }}</div>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { portfolioData as data } from '../data/portfolio'
    import { Icon } from '@iconify/vue'

const initials = computed(() =>
  data.name.split(' ').map((n: string) => n[0]).join('')
)


</script>
