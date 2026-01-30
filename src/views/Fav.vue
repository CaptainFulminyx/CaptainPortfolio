<template>
  <!-- add .dark-mode here if needed -->
  <section class="favorites">
    <header class="favorites-header">


      <a href="/" class="back-link" aria-label="Back to home">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" /><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" /></svg>
      </a>
      <h1>Favorites</h1>

    </header>

    <!-- Content -->
    <div class="favorites-grid">
      <article class="favorite-card">
        <h3>Editor</h3>
        <ul>
          <li>Acode Editor</li>
        </ul>
      </article>

      <article class="favorite-card">
        <h3>Song</h3>
        <ul>
          <li>Husn (by Anuv Jain)</li>

        </ul>
      </article>

      <article class="favorite-card">
        <h3>Movie</h3>
        <ul>
          Stuart Little (Dir. by Rob Minkoff)
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
  import {
    Icon
  } from "@iconify/vue";
</script>

<style scoped>
  /* ===============================
   DESIGN TOKENS (LOCAL)
================================ */
  .favorites {
    --bg-color: #f9f9f9;
    --text-color: #333333;
    --primary-color: #6c63ff;
    --secondary-color: #ff6584;
    --accent-color: #36d1dc;
    --card-bg: #ffffff;
    --border-color: #333333;
    --shadow-color: rgba(0, 0, 0, 0.1);

    --doodle-border: clamp(2px, 0.3vw, 3px) solid var(--border-color);
    --doodle-radius: clamp(15px, 2vw, 20px)
    clamp(5px, 1vw, 5px)
    clamp(15px, 2vw, 20px)
    clamp(5px, 1vw, 5px);
    --doodle-shadow: clamp(4px, 0.8vw, 8px)
    clamp(4px, 0.8vw, 8px)
    0px
    var(--shadow-color);

    --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
    --space-sm: clamp(0.5rem, 1vw, 1rem);
    --space-md: clamp(1rem, 2vw, 1.5rem);
    --space-lg: clamp(1.5rem, 3vw, 2.5rem);
    --space-xl: clamp(2rem, 4vw, 3.5rem);

    --transition-speed: 0.4s;

    font-family: "Poppins", sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    min-height: 100vh;
    padding: var(--space-lg);
    transition:
    background-color var(--transition-speed),
    color var(--transition-speed);
  }

  /* Dark mode (optional toggle) */
  .favorites.dark-mode {
    --bg-color: #121212;
    --text-color: #f0f0f0;
    --primary-color: #8a84ff;
    --secondary-color: #ff7b9c;
    --accent-color: #5ce1e6;
    --card-bg: #1e1e1e;
    --border-color: #f0f0f0;
    --shadow-color: rgba(255, 255, 255, 0.1);
  }

  /* ===============================
   BACK LINK
================================ */
  .back-link {
    display: inline-flex;
    font-size: 1.8rem;
    color: var(--text-color);
    text-decoration: none;
    margin-bottom: var(--space-md);
    opacity: 0.7;
    transition:
    opacity var(--transition-speed),
    transform var(--transition-speed);
  }

  .back-link:hover {
    opacity: 1;
    transform: translateX(-6px);
    color: var(--primary-color);
  }

  /* ===============================
   HEADER
================================ */
  .favorites-header {
    margin-bottom: var(--space-xl);
    display: flex;
  }

  .favorites-header h1 {
    font-size: clamp(2rem, 4vw, 2.6rem);
    font-weight: 600;
  }

  .favorites-header p {
    margin-top: var(--space-xs);
    opacity: 0.75;
  }

  /* ===============================
   GRID & CARDS
================================ */
  .favorites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-md);
  }

  .favorite-card {
    background: var(--card-bg);
    border: var(--doodle-border);
    border-radius: var(--doodle-radius);
    box-shadow: var(--doodle-shadow);
    padding: var(--space-md);
    transition: transform var(--transition-speed);
  }

  .favorite-card:hover {
    transform: translateY(-6px) rotate(-0.2deg);
  }

  .favorite-card h3 {
    margin-bottom: var(--space-sm);
    color: var(--primary-color);
  }

  .favorite-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .favorite-card li {
    padding: 0.25rem 0;
    opacity: 0.85;
  }
</style>