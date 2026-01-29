<template>
  <section class="developer-dashboard">
    <h1>Developer Analytics Dashboard</h1>
    <p class="subtitle">GitHub · Blog Posts · Medium · LeetCode</p>

  <section class="dashboard">
  <h1 class="dashboard-title">Developer Analytics</h1>
  <p class="dashboard-subtitle">
    GitHub · Blogs · Medium · LeetCode
  </p>

  <div class="dashboard-grid">

    <div class="dashboard-card">
      <div class="dashboard-card-header">
        <h2><i class="fab fa-github"></i> GitHub</h2>
        <a :href="github.url" class="dashboard-link" target="_blank">View →</a>
      </div>

      <div class="dashboard-stats">
        <div class="dashboard-stat">
          <div class="dashboard-stat-value">{{ github.repos }}</div>
          <div class="dashboard-stat-label">Repos</div>
        </div>
        <div class="dashboard-stat">
          <div class="dashboard-stat-value">{{ github.followers }}</div>
          <div class="dashboard-stat-label">Followers</div>
        </div>
      </div>

      <div class="dashboard-chart">
        <ApexChart
          v-if="languageChartOptions.series.length"
          type="radar"
          height="260"
          :options="languageChartOptions"
          :series="languageChartOptions.series"
        />
      </div>
    </div>

    <!-- Repeat same pattern for Dev.to / Medium / LeetCode -->

  </div>

  <div class="dashboard-footer">
    API powered · Auto updated · Doodle UI
  </div>
</section>

    <footer>
      Real-time Analytics · Auto Updated · API Powered
    </footer>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ApexChart from 'vue3-apexcharts'

const GITHUB = 'CaptainFulminyx'
const DEVTO = 'captainfulminyx'
const LEETCODE = 'CaptainFulminyx'
const MEDIUM_USER = 'captainfulminyx'

const github = ref({
  repos: 0,
  stars: 0,
  followers: 0,
  lastPush: '—',
  recentRepos: [],
  url: '#'
})

const devto = ref({
  count: 0,
  totalReactions: 0,
  totalComments: 0,
  posts: [],
  url: '#'
})

const medium = ref({
  articles: [],
  totalClaps: 0
})

const leetcode = ref({
  total: 0,
  rank: '—',
  acceptanceRate: 0,
  url: '#'
})

const languageChartOptions = ref({ series: [], xaxis: { categories: [] } })
const leetcodeChartOptions = ref({ series: [], labels: ['Easy', 'Medium', 'Hard'] })
const mediumTimelineOptions = ref({ series: [] })

onMounted(() => {
  loadGitHub()
  loadDevto()
  loadMedium()
  loadLeetCode()
})

async function loadGitHub() {
  const user = await fetch(`https://api.github.com/users/${GITHUB}`).then(r => r.json())
  github.value.repos = user.public_repos
  github.value.followers = user.followers
  github.value.url = user.html_url
}

async function loadDevto() {
  const posts = await fetch(`https://dev.to/api/articles?username=${DEVTO}`).then(r => r.json())
  devto.value.posts = posts.slice(0, 4)
  devto.value.count = posts.length
  devto.value.totalReactions = posts.reduce((s, p) => s + p.public_reactions_count, 0)
  devto.value.totalComments = posts.reduce((s, p) => s + p.comments_count, 0)
  devto.value.url = `https://dev.to/${DEVTO}`
}

async function loadMedium() {
  const rss = `https://medium.com/feed/@${MEDIUM_USER}`
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}`)
  const data = await res.json()
  medium.value.articles = data.items.slice(0, 3)
}

async function loadLeetCode() {
  const data = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE}`).then(r => r.json())
  leetcode.value.total = data.totalSolved
  leetcode.value.rank = data.ranking ? `#${data.ranking}` : '—'
  leetcode.value.acceptanceRate = data.acceptanceRate?.toFixed(1) || 0
  leetcode.value.url = `https://leetcode.com/${LEETCODE}`
}

function formatDate(d) {
  return new Date(d).toLocaleDateString()
}

function truncateText(t, l) {
  return t?.length > l ? t.slice(0, l) + '…' : t
}
</script>