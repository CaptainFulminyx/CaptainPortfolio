<template>
  <section class="skills">
    <h2 class="section-title">Most Used Skills & Techs</h2>

    <div class="skills-container">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-item"
        @click="rotate(index)"
        :class="{ rotated: rotatedSkills[index] }"
      >
        {{ skill }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  skills: Array
})

const rotatedSkills = ref({})

const rotate = (index) => {
  rotatedSkills.value[index] = !rotatedSkills.value[index]
}
</script>