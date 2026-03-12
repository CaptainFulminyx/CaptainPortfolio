<template>
  <div class="container" style="padding-top: 6rem; padding-bottom: 4rem;">
    <h2 class="section-title">Get In Touch</h2>

    <div class="contact-section">
      <p>
        I'm currently open to new opportunities. Whether you have a project in mind, a question,
        or just want to say hello — my inbox is always open!
      </p>

      <div class="contact-grid" style="margin-top: var(--space-lg); text-align: left;">

        <!-- Info -->
        <div class="contact-info-card">
          <h3 style="font-size:1.1rem; font-weight:700; margin-bottom: var(--space-sm); color: var(--primary-color);">Find Me At</h3>

        

          <div style="margin-top: var(--space-sm);">

            <div class="social-links" style="justify-content:flex-start;">
              <a v-for="(item, i) in data.socials" :href="item.link" target="_blank" class="social-link" :key="i">
<Icon :icon="item.icon" width="24" height="24" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  

const form = reactive({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  sending.value = true
  await new Promise(r => setTimeout(r, 1500))
  sending.value = false
  submitted.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => submitted.value = false, 5000)
}
</script>
