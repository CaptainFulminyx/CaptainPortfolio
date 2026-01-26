<template>
  <section class="hero">
    <div class="hero-content">
      <h1><span>{{ name }}</span></h1>
      <div class="hero-image">
        <div class="doodle-avatar floating">
          <img src="@/assets/img.jpg" />
        </div>
      </div>
    </div>

    <div class="hero-content" id="social">
      <p>{{ bio }}</p>
      <div class="social-links">
        <a
          v-for="link in socialLinks"
          :key="link.id"
          :href="link.url"
          target="_blank"
          class="social-link"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  name: String,
  bio: String,
  socialLinks: Array
})
</script>