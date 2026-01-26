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
  import {
    ref,
    computed,
    onMounted
  } from 'vue'

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
    localStorage.setItem('portfolio-theme', isDarkMode.value ? 'dark': 'light')
  }

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = saved === 'dark' || (!saved && prefersDark)
  })

  const name = 'Fulminyx'
  const bio = 'A passionate programmer driven by curiosity and problem-solving, combining analytical thinking with a love for thoughtful design. I enjoy building meaningful digital experiences shaped by patterns, people, and the stories hidden in data.'
  const contactMessage =
  "I'm looking for opportunities where I can contribute..."

  const currentYear = computed(() => new Date().getFullYear())

  const projects = [{
    id: 1,
    title: 'Acode Plugins',
    description: 'A collection of lightweight plugins built for the Acode editor to extend its core functionality and improve everyday developer workflows. Developed using vanilla JavaScript, these plugins focus on simplicity, performance, and seamless integration with the editor’s ecosystem.',
    img: acodepluginimg,
    link: 'https://acode.app/plugin/thunder.plugin.csv_to_table.free'
  },
    {
      id: 2,
      title: 'Web Garden Game',
      description: 'An interactive and visually playful web-based game that allows users to build and customize a colorful digital garden. The project blends engaging UI animations with game-like mechanics to create a relaxing, creative experience in the browser.',
      img: springgame,
      link: 'https://captainfulminyx.github.io/Spring-Garden-Game/'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'A handcrafted personal portfolio designed to reflect creativity through a doodle-inspired visual language and thoughtful interactions.',
      img: portfolioimg
    }]

  const skills = [
    'UI/UX Design',
    'Frontend Development',
    'JavaScript',
    'Vue.js', 'Python', 'Data Science', 'Mechine Learning', 'Git', 'Github', 'Vercel', 'Netlify', 'Acode'
  ]

  const socialLinks = [{
    id: 1,
    icon: 'mdi:github',
    url: 'https://github.com/CaptainFulminyx'
  },
    {
      id: 2,
      icon: 'ic:outline-email',
      url: 'mailto: captainfulminyx@gmail.com'
    },
    {
      id: 3,
      icon: 'ic:baseline-telegram',
      url: 'https://t.me/CaptainFulminyx'
    },
    {
      id: 4,
      icon: 'ri:reddit-line',
      url: 'https://www.reddit.com/user/CaptainFulminyx'
    },
    {
      id: 5,
      icon: 'devicon-plain:leetcode',
      url: 'https://leetcode.com/u/CaptainFulminyx'
    },
    {
      id: 6,
      icon: 'simple-icons:kaggle',
      url: 'https://www.kaggle.com/captainfulminyx'
    },
    {
      id: 7,
      icon: 'mdi:youtube',
      url: 'https://youtube.com/@captainfulminyx'
    },
    {
      id: 8,
      icon: 'ri:medium-line',
      url: 'https://medium.com/@captainfulminyx'
    },
    {
      id: 9,
      icon: 'lineicons:dev',
      url: 'https://dev.to/captainfulminyx'
    },
    {
      id: 10,
      icon: 'simple-icons:peerlist',
      url: 'https://peerlist.io/captainfulminyx'
    },
    {
      id: 11,
      icon: 'simple-icons:sololearn',
      url: 'https://www.sololearn.com/profile/27462394'
    }]
</script>