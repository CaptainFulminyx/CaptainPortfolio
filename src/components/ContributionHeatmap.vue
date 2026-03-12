<template>
  <div class="heatmap-wrapper">
    <!-- Header -->
    <div class="heatmap-header">
      <span class="heatmap-title">{{ totalContributions }} contributions in the last year</span>
      <div class="heatmap-legend">
        <span class="legend-label">Less</span>
        <div
          v-for="(color, i) in colorScale"
          :key="i"
          class="legend-cell"
          :style="{ background: color }"
        />
        <span class="legend-label">More</span>
      </div>
    </div>

    <!-- Grid -->
    <div class="heatmap-scroll">
      <div class="heatmap-grid">
        <!-- Month labels -->
        <div class="month-labels">
          <span
            v-for="(month, i) in monthLabels"
            :key="i"
            class="month-label"
            :style="{ gridColumnStart: month.col }"
          >
            {{ month.name }}
          </span>
        </div>

        <!-- Day labels + Cells -->
        <div class="grid-body">
          <div class="day-labels">
            <span class="day-label" style="grid-row: 2">Mon</span>
            <span class="day-label" style="grid-row: 4">Wed</span>
            <span class="day-label" style="grid-row: 6">Fri</span>
          </div>

          <div class="cells-grid">
            <template v-for="(week, wi) in grid" :key="wi">
              <div
                v-for="(day, di) in week"
                :key="di"
                class="heatmap-cell"
                :class="{ empty: !day, active: day && day.count > 0 }"
                :style="day ? { background: getCellColor(day.count), '--delay': `${(wi * 7 + di) * 3}ms` } : {}"
                @mouseenter="day && showTooltip($event, day)"
                @mouseleave="hideTooltip"
              />
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Tooltip -->
    <Teleport to="body">
      <div
        v-if="tooltip.visible"
        class="heatmap-tooltip"
        :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }"
      >
        <strong>{{ tooltip.count }} contributions</strong>
        <span>{{ tooltip.date }}</span>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'

// ─── Props ────────────────────────────────────────────────────────────────────
const props = defineProps({
  // Array of { date: 'YYYY-MM-DD', count: Number }
  data: {
    type: Array,
    default: () => [],
  },
  // 5-stop color scale: index 0 = empty, 1–4 = low→high intensity
  colorScale: {
    type: Array,
    default: () => [
      'rgba(255,255,255,0.05)', // 0 contributions
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353',               // max contributions
    ],
  },
  // Total weeks to render (~53 = 1 year)
  totalWeeks: {
    type: Number,
    default: 53,
  },
})

// ─── Helpers ──────────────────────────────────────────────────────────────────
function toYMD(date) {
  return date.toISOString().split('T')[0]
}

function addDays(date, n) {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d
}

// ─── Build week grid ──────────────────────────────────────────────────────────
// Returns a 2D array [week][day 0–6], each cell is { date, ymd, count } or null
const grid = computed(() => {
  const map = Object.fromEntries(props.data.map((e) => [e.date, e.count]))

  const today = new Date()
  const startDate = addDays(today, -(props.totalWeeks * 7 - 1))
  // Snap to the nearest past Sunday so the grid aligns columns cleanly
  const snapStart = addDays(startDate, -startDate.getDay())

  const result = []
  let current = new Date(snapStart)

  for (let w = 0; w < props.totalWeeks; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const inRange = current >= startDate && current <= today
      const ymd = toYMD(current)
      week.push(inRange ? { date: formatDate(current), ymd, count: map[ymd] ?? 0 } : null)
      current = addDays(current, 1)
    }
    result.push(week)
  }
  return result
})

// ─── Month labels ─────────────────────────────────────────────────────────────
const monthLabels = computed(() => {
  const labels = []
  const seen = new Set()
  grid.value.forEach((week, wi) => {
    for (const day of week) {
      if (!day) continue
      const d = new Date(day.ymd)
      const key = `${d.getFullYear()}-${d.getMonth()}`
      if (!seen.has(key)) {
        seen.add(key)
        labels.push({ name: d.toLocaleString('default', { month: 'short' }), col: wi + 1 })
      }
      break
    }
  })
  return labels
})

// ─── Stats ────────────────────────────────────────────────────────────────────
const totalContributions = computed(() => props.data.reduce((s, d) => s + d.count, 0))
const maxCount = computed(() => Math.max(1, ...props.data.map((d) => d.count)))

// ─── Color mapping ────────────────────────────────────────────────────────────
function getCellColor(count) {
  if (count === 0) return props.colorScale[0]
  const ratio = count / maxCount.value                          // 0–1
  const idx = Math.ceil(ratio * (props.colorScale.length - 2)) // maps to 1–4
  return props.colorScale[Math.min(idx, props.colorScale.length - 1)]
}

// ─── Date formatting ──────────────────────────────────────────────────────────
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
  })
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
const tooltip = reactive({ visible: false, x: 0, y: 0, count: 0, date: '' })

function showTooltip(event, day) {
  const rect = event.target.getBoundingClientRect()
  tooltip.visible = true
  tooltip.x = rect.left + rect.width / 2
  tooltip.y = rect.top - 8 + window.scrollY
  tooltip.count = day.count
  tooltip.date = day.date
}

function hideTooltip() {
  tooltip.visible = false
}
</script>

