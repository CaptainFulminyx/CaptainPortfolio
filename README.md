# 🚀 Vue 3 Portfolio

A modern, glassmorphism-design portfolio built with **Vue 3 + TypeScript + Vite + Tailwind CSS**.

Converted from React/TSX to Vue 3 Composition API.

## ✨ Features

- 🎨 **Glassmorphism Design** – Glass-effect UI with gradient accents
- 🌊 **Smooth Animations** – `@vueuse/motion` for page and element transitions
- 📱 **Fully Responsive** – Mobile-first layout
- 🔀 **Vue Router** – Smooth page transitions with client-side routing
- 🎯 **Skill Bars** – Scroll-triggered animated progress bars
- 📬 **Contact Form** – Ready to wire up to your Flask backend

## 🛠️ Tech Stack

| Category | Tech |
|----------|------|
| Framework | Vue 3 (Composition API) |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | @vueuse/motion |
| Utilities | @vueuse/core |
| Routing | Vue Router 4 |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📝 Customization

Edit **`src/data/portfolio.ts`** to update all your personal info:

```ts
export const portfolioData = {
  name: "Your Name",         // ← Change this
  title: "Your Title",       // ← Change this
  email: "you@email.com",    // ← Change this
  github: "...",
  linkedin: "...",
  projects: [...],           // ← Add your projects
  skills: {...},             // ← Update skill levels
}
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.vue       # Top navigation
│   ├── SkillBar.vue     # Animated skill bar
│   └── Footer.vue       # Footer
├── pages/
│   ├── Home.vue         # Hero section
│   ├── About.vue        # About + education
│   ├── Projects.vue     # Projects showcase
│   ├── Skills.vue       # Skills grid
│   └── Contact.vue      # Contact form
├── router/
│   └── index.ts         # Vue Router config
├── data/
│   └── portfolio.ts     # 📝 ALL YOUR DATA HERE
├── App.vue
├── main.ts
└── style.css
```

## 🌐 Deployment

### Vercel
```bash
npm run build
# Deploy the `dist/` folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the `dist/` folder to Netlify
```

---

Made with ❤️ using Vue 3
