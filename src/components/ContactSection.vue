<template>
  <section class="contact-section" id="contact">
    <h2 class="section-title">Get In Touch</h2>

    <p>{{ message }}</p>

    <a
      href="mailto:captainfulminyx@gmail.com"
      class="cta-button"
    >
      Let's Create Together
    </a>
  </section>
</template>

<script setup>
defineProps({
  message: String
})
</script>