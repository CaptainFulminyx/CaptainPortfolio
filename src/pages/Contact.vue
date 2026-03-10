<template>
  <div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
    <h2 class="section-title">Get In Touch</h2>

    <div class="contact-section">
      <p>
        I'm currently open to new opportunities. Whether you have a project in mind, a question,
        or just want to say hello — my inbox is always open!
      </p>

      <div class="contact-grid" style="margin-top: var(--space-lg); text-align: left;">

        <!-- Info -->
        <div class="contact-info-card">
          <h3 style="font-size:1.1rem; font-weight:700; margin-bottom: var(--space-sm); color: var(--primary-color);">Contact Info</h3>

          <div class="contact-info-item">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0; color:var(--primary-color)">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{{ data.email }}</span>
          </div>

          <div class="contact-info-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="flex-shrink:0; color:var(--text-color)">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <a :href="data.github" target="_blank" style="color:var(--primary-color); text-decoration:none; font-weight:600;">GitHub →</a>
          </div>

          <div class="contact-info-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="flex-shrink:0; color:#0077b5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
            <a :href="data.linkedin" target="_blank" style="color:var(--primary-color); text-decoration:none; font-weight:600;">LinkedIn →</a>
          </div>

          <div style="margin-top: var(--space-sm);">
            <div style="font-size:0.8rem; font-weight:600; opacity:0.5; margin-bottom:var(--space-xs);">Social</div>
            <div class="social-links" style="justify-content:flex-start;">
              <a :href="data.github" target="_blank" class="social-link" title="GitHub">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a :href="data.linkedin" target="_blank" class="social-link" title="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              <a :href="data.twitter" target="_blank" class="social-link" title="Twitter / X">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="contact-form-card">
          <h3 style="font-size:1.1rem; font-weight:700; margin-bottom: var(--space-md); color: var(--primary-color);">Send a Message</h3>

          <form @submit.prevent="handleSubmit">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Name</label>
                <input v-model="form.name" type="text" class="form-input" placeholder="Your Name" required />
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-input" placeholder="your@email.com" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Subject</label>
              <input v-model="form.subject" type="text" class="form-input" placeholder="What's this about?" required />
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea v-model="form.message" class="form-textarea" placeholder="Tell me about your project..." required></textarea>
            </div>

            <transition name="fade">
              <div v-if="submitted" class="form-success">
                ✓ Message sent! I'll get back to you soon.
              </div>
            </transition>

            <button type="submit" class="doodle-btn doodle-btn-primary" :disabled="sending" style="width:100%; justify-content:center;">
              {{ sending ? 'Sending...' : 'Send Message →' }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { portfolioData as data } from '../data/portfolio'

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
