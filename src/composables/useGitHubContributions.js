// src/composables/useGitHubContributions.js
import { ref, onMounted } from 'vue'

export function useGitHubContributions(username, token) {
  const info = ref([])
  const loading = ref(true)

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  onMounted(async () => {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    const json = await res.json()
    const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks

    info.value = weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
      }))
    )
    loading.value = false
  })

  return { info, loading }
}