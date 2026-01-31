<template>
  <!-- add .dark-mode here if needed -->
  <section class="favorites">
    <header class="favorites-header">
      <Icon icon="material-symbols:arrow-back-rounded" width="40px" height="40px" @click="$emit('closeFav')" />
      <h1>Favorites</h1>

    </header>

    <!-- Content -->
    <div class="favorites-grid">
      <article class="favorite-card"
        v-for="(fav, index) in favs"
        :key="index">

        <h3>
          <Icon :icon="fav.icon" width="40px" height="40px" />
          {{fav.name}}</h3>
        <p>
          {{fav.desc}}
        </p>
        <a :href="fav.link">
          <Icon icon="majesticons:open" width="20" height="20" />
        </a>
      </article>


    </div>
  </section>
</template>

<script setup>
  import {
    Icon
  } from "@iconify/vue";
  const emit = defineEmits(['closeFav'])

  const favs = [{
    name: 'Acode Editor',
    desc: 'My favourite editor to work from android!',
    icon: 'icon-park-outline:editor',
    link: 'https://acode.app/'
  }, {
    name: 'Stuart Little',
    desc: 'Childhood nostalgia... (Dir. by Rob Minkoff)',
    icon: 'mingcute:movie-line',
    link: 'https://share.google/vQDPPkJjZu4BifVVQ'
  }, {
    name: 'Kabhi Kabhi (A.U.R.)',
    desc: 'Listened more often',
    icon: 'mingcute:music-line',
    link: 'https://share.google/mfgmCmE1QJ8NXWt7V'
  },
  ]

</script>

<style scoped>
</style>