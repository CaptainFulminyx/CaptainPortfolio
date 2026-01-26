<template>
  <footer>
    <p>
      © {{ year }} CaptainFulminyx.
      All rights reserved. Handcrafted with creativity.
    </p>
  </footer>
</template>

<script setup>
defineProps({
  year: Number
})
</script>