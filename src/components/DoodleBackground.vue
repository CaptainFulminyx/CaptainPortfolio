<template>
  <div class="doodle-bg"></div>
</template>

<script setup>
  import {
    watch,
    onMounted
  } from 'vue'

  const props = defineProps( {
    isDarkMode: Boolean
  })

  const createDoodleBackground = () => {
    const doodleBg = document.querySelector('.doodle-bg')
    if (!doodleBg) return
    doodleBg.innerHTML = ''

    const colors = props.isDarkMode
    ? ['#8a84ff',
      '#ff7b9c',
      '#5ce1e6',
      '#f0f0f0']: ['#6c63ff',
      '#ff6584',
      '#36d1dc',
      '#333333']

    for (let i = 0; i < 30; i++) {
      const line = document.createElement('div')
      line.className = 'doodle-line'
      line.style.width = `${Math.random() * 100 + 50}px`
      line.style.height = `${Math.random() * 4 + 1}px`
      line.style.top = `${Math.random() * 100}%`
      line.style.left = `${Math.random() * 100}%`
      line.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)]
      line.style.opacity = Math.random() * 0.3 + 0.1
      doodleBg.appendChild(line)
    }
  }

  onMounted(createDoodleBackground)
  watch(() => props.isDarkMode, () => setTimeout(createDoodleBackground, 100))
</script>