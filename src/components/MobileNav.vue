<template>
  <Teleport to="body">
    <!-- Backdrop / shadow zone — clicking it closes the menu -->
    <Transition name="backdrop">
      <div
        v-if="open"
        class="mobile-nav-backdrop"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Floating nav panel -->
    <Transition name="nav-panel">
      <div v-if="open" class="mobile-nav-panel">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="doodle-btn mobile-nav-link"
          :class="{ active: currentPath === link.path }"
          @click="$emit('close')"
        >
          {{ link.label }}
        </router-link>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ open: boolean; currentPath: string }>()
defineEmits(['close'])

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
]
</script>

<style>
/* ── Backdrop ── */
.mobile-nav-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

/* ── Floating panel ── */
.mobile-nav-panel {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: calc(100% - 2rem);
  max-width: 420px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;

  background: var(--card-bg, #fff);
  border: var(--doodle-border, 2px solid #333);
  border-radius: var(--doodle-radius, 20px 5px 20px 5px);
  box-shadow:
    8px 8px 0px var(--shadow-color, rgba(0,0,0,0.12)),
    0 20px 60px rgba(0, 0, 0, 0.18);
}

.mobile-nav-link {
  width: 100%;
  justify-content: center;
  font-size: 1rem;
}

/* ── Backdrop transition ── */
.backdrop-enter-active,
.backdrop-leave-active { transition: opacity 0.3s ease; }
.backdrop-enter-from,
.backdrop-leave-to    { opacity: 0; }

/* ── Panel transition: drop-in from slightly above ── */
.nav-panel-enter-active {
  transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.nav-panel-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.nav-panel-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-12px) scale(0.97);
}
.nav-panel-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px) scale(0.97);
}
</style>
