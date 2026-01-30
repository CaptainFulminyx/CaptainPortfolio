<template>
  <section class="work">
    <h2 class="section-title">My Works</h2>
    <section class="github-section">
      <div class="github-repos-box">
        <h3 class="github-repos-title">Repositories</h3>
        <div
          class="github-repo-item"
          v-for="repo in github.repos"
          :key="repo.id"
          >
          <span class="repo-name">{{ repo.name }}</span>
          <div class="repo-starfork">
            <span class="repo-stars">
              <Icon
                icon="solar:star-bold"
                width="24"
                height="24"
                />
              {{ repo.stars }}
            </span>
            <span class="repo-forks">
              <Icon
                icon="flowbite:code-fork-solid"
                width="24"
                height="24"
                />
              {{ repo.forks }}
            </span>
          </div>
        </div>
      </div>
      <div class="github-languages-box">
        <h3>Languages</h3>
        <ApexChart
          type="pie"
          :options="githubLanguageOptions"
          :series="githubLanguageSeries"
          />
      </div>


    </section>

    <!-- ================= ARTICLES ================= -->
    <section class="articles-section">
      <h2 class="articles-title">Articles</h2>
      <div
        class="article-item"
        v-for="article in mediumArticles"
        :key="article.link"
        >
        <Icon icon="ri:medium-fill" />
        {{ article.title }}
      </div>
    </section>

    <!-- ================= BLOG POSTS ================= -->
    <section class="blog-posts-section">
      <h2 class="blog-posts-title">Blog Posts</h2>
      <div
        class="blog-post-item"
        v-for="post in devtoPosts"
        :key="post.id"
        >
        <Icon icon="lineicons:dev" />
        {{ post.title }}
      </div>
    </section>

    <!-- ================= LEETCODE ================= -->
    <section class="leetcode-section">
      <h2 class="leetcode-title">LeetCode</h2>
      <div class="leetcode-summary">
        <p>
          Total Solved: <strong>{{ leetcode.total }}</strong>
        </p>
        <p>
          Rank: <strong>{{ leetcode.rank }}</strong>
        </p>
        <div class="leetcode-graphbox">
          <ApexChart
            type="pie"
            :options="leetcodeChartOptions"
            :series="leetcodeChartSeries"
            />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
  import {
    ref,
    onMounted,
    nextTick,
    onUnmounted
  } from "vue";
  import {
    Icon
  } from "@iconify/vue";
  import ApexChart from "vue3-apexcharts";

  // CORRECT CalHeatmap imports

  /* ================= CONFIG ================= */
  const GITHUB = "CaptainFulminyx";
  const DEVTO = "captainfulminyx";
  const MEDIUM = "captainfulminyx";
  const LEETCODE = "CaptainFulminyx";

  /* ================= STATE ================= */
  const github = ref( {
    followers: 0, repos: []
  });
  const githubLanguageOptions = ref( {
    labels: []
  });
  const githubLanguageSeries = ref([]);

  const mediumArticles = ref([]);
  const devtoPosts = ref([]);

  const leetcode = ref( {
    total: 0, rank: 0
  });
  const leetcodeChartOptions = ref( {
    labels: ["Easy", "Medium", "Hard"]
  });
  const leetcodeChartSeries = ref([]);

  /* ================= GITHUB BASIC ================= */
  async function loadGitHub() {
    try {
      const user = await fetch(`https://api.github.com/users/${GITHUB}`).then(
        r => r.json()
      );
      github.value.followers = user.followers;

      const repos = await fetch(
        `https://api.github.com/users/${GITHUB}/repos?per_page=50`
      ).then(r => r.json());

      const languageCount = {};
      const filtered = [];

      repos.forEach(repo => {
        if (repo.language) {
          languageCount[repo.language] =
          (languageCount[repo.language] || 0) + 1;
        }

        if (repo.stargazers_count >= 2) {
          filtered.push({
            id: repo.id,
            name: repo.name,
            stars: repo.stargazers_count,
            forks: repo.forks_count
          });
        }
      });

      github.value.repos = filtered.slice(0,
        4);
      githubLanguageOptions.value = {
  labels: Object.keys(languageCount),
  legend: {
    show: true
  }
}

githubLanguageSeries.value = Object.values(languageCount)
    } catch (error) {
      console.error("Failed to load GitHub data:",
        error);
    }
  }

  async function loadDevto() {
    try {
      const posts = await fetch(
        `https://dev.to/api/articles?username=${DEVTO}`
      ).then(r => r.json());
      devtoPosts.value = posts.slice(0,
        4);
    } catch (error) {
      console.error("Failed to load Dev.to posts:",
        error);
    }
  }

  /* ================= MEDIUM ================= */
  async function loadMedium() {
    try {
      const rss = `https://medium.com/feed/@${MEDIUM}`;
      const data = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rss
        )}`
      ).then(r => r.json());
      mediumArticles.value = data.items?.slice(0,
        4) || [];
    } catch (error) {
      console.error("Failed to load Medium articles:",
        error);
    }
  }

  /* ================= LEETCODE ================= */
  async function loadLeetCode() {
    try {
      const data = await fetch(
        `https://leetcode-stats-api.herokuapp.com/${LEETCODE}`
      ).then(r => r.json());
      leetcode.value.total = data.totalSolved;
      leetcode.value.rank = data.ranking ? `#${data.ranking}`: "0";
      leetcodeChartSeries.value = [
        data.easySolved,
        data.mediumSolved,
        data.hardSolved
      ];
    } catch (error) {
      console.error("Failed to load LeetCode data:",
        error);
    }
  }

  /* ================= INIT ================= */
  onMounted(async () => {
    try {
      await Promise.all([
        loadGitHub(),
        loadDevto(),
        loadMedium(),
        loadLeetCode()
      ]);

      await nextTick();
      initHeatmap();

      // Re-initialize on window resize for responsiveness
      window.addEventListener("resize", handleResize);
    } catch (error) {
      console.error("Initialization error:", error);
    }
  });

  // Handle window resize
  function handleResize() {
    if (cal) {
      setTimeout(() => {
        initHeatmap();
      }, 300);
    }
  }

  onUnmounted(() => {
    if (cal) {
      cal.destroy();
      cal = null;
    }
    window.removeEventListener("resize", handleResize);
  });
</script>