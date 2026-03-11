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
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>{{ data.email }}</span>
            </div>
            <div class="contact-info-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <a :href="data.github" target="_blank" style="color: var(--primary-color); text-decoration: none;">GitHub Profile →</a>
            </div>
          </div>

          <div class="personality-tags">
            <span v-for="tag in personalityTags" :key="tag" class="personality-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Education & Experience -->
    <div class="timeline-grid">
      <div class="timeline-section">
        <h2>
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color: var(--primary-color);">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
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
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color: var(--secondary-color);">
            <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
          </svg>
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

const initials = computed(() =>
  data.name.split(' ').map((n: string) => n[0]).join('')
)

const personalityTags = [
  'Problem Solver', 'Team Player', 'Quick Learner',
  'Open Source', 'UI/UX Focused', 'Detail Oriented'
]
</script>
