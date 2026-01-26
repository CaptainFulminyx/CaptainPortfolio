<template>
  <div :class="['doodle-portfolio', { 'dark-mode': isDarkMode }]">
    <DoodleBackground :isDarkMode="isDarkMode" />

    <div class="container">
      <AppHeader
        :isDarkMode="isDarkMode"
        @toggleTheme="toggleTheme"
      />

      <HeroSection
        :name="name"
        :bio="bio"
        :socialLinks="socialLinks"
      />

      <PortfolioSection :projects="projects" />

      <SkillsSection :skills="skills" />

      <ContactSection :message="contactMessage" />

      <AppFooter :year="currentYear" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import DoodleBackground from '@/components/DoodleBackground.vue'

import acodepluginimg from '@/assets/acodeplugin.jpg'
import springgame from '@/assets/springgame.jpg'
import portfolioimg from '@/assets/portfolio.jpg'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('portfolio-theme', isDarkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('portfolio-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDarkMode.value = saved === 'dark' || (!saved && prefersDark)
})

const name = 'Fulminyx'
const bio = 'A passionate programmer driven by curiosity and problem-solving...'
const contactMessage =
  "I'm looking for opportunities where I can contribute..."

const currentYear = computed(() => new Date().getFullYear())

const projects = [
  {
    id: 1,
    title: 'Acode Plugins',
    description: 'Plugins for Acode editor...',
    img: acodepluginimg,
    link: 'https://acode.app/plugin/thunder.plugin.csv_to_table.free'
  },
  {
    id: 2,
    title: 'Web Garden Game',
    description: 'An engaging colourful game...',
    img: springgame,
    link: 'https://captainfulminyx.github.io/Spring-Garden-Game/'
  },
  {
    id: 3,
    title: 'Mobile App UI',
    description: 'My web portfolio with delightful UI.',
    img: portfolioimg
  }
]

const skills = [
  'UI/UX Design',
  'Frontend Development',
  'Illustration',
  'Animation',
  'Responsive Design',
  'JavaScript',
  'Vue.js',
  'React',
  'Figma'
]

const socialLinks = [
  { id: 1, icon: 'fab fa-github', url: 'https://github.com' },
  { id: 2, icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
  { id: 3, icon: 'fab fa-dribbble', url: 'https://dribbble.com' },
  { id: 4, icon: 'fab fa-behance', url: 'https://behance.net' },
  { id: 5, icon: 'fas fa-envelope', url: 'mailto: captainfulminyx@gmail.com' }
]
</script>