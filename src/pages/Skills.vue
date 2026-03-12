<template>
  <div class="container" style="padding-top: 6rem; padding-bottom: 4rem;">

     <ContributionHeatmap :data="info" />
    <h2 class="section-title">Skills & Tools</h2>

    <!-- Pill cloud -->
    <div class="skills-container" style="margin-bottom: var(--space-xl);">
      <span v-for="skill in allSkills" :key="skill" class="skill-item">{{ skill }}</span>
    </div>

    <!-- Category skill bars -->
    <div class="skills-grid">
      <div class="skills-category">
        <div class="category-title">Languages</div>
        <SkillBar
          v-for="s in data.skills.languages"
          :key="s.name"
          :name="s.name"
          
        />
      </div>

    
      <div class="skills-category">
        <div class="category-title">Frontend</div>
        <SkillBar
          v-for="s in data.skills.frontend"
          :key="s.name"
          :name="s.name"
          
        />
      </div>

      <div class="skills-category">
        <div class="category-title">Backend</div>
        <SkillBar
          v-for="s in data.skills.backend"
          :key="s.name"
          :name="s.name"
          
        />
      </div>

      <div class="skills-category">
        <div class="category-title">DevOps & Tools</div>
        <SkillBar
          v-for="s in data.skills.tools"
          :key="s.name"
          :name="s.name"
          
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { portfolioData as data } from '../data/portfolio'
import SkillBar from '../components/SkillBar.vue'
  
  // @ts-ignore
import {useGitHubContributions} from '../composables/useGitHubContributions.js'
// @ts-ignore
import ContributionHeatmap from '../components/ContributionHeatmap.vue'
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const { info, loading } = useGitHubContributions('CaptainFulminyx', token);

const allSkills = computed(() => [
  ...data.skills.languages.map(s => s.name),
  ...data.skills.frontend.map(s => s.name),
  ...data.skills.backend.map(s => s.name),
  ...data.skills.tools.map(s => s.name),
])
</script>
