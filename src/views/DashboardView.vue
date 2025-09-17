<script setup lang="ts">
// Dashboard content only - layout is handled by AppLayout
</script>

<template>
  <div class="dashboard-content">
    <h1 class="dashboard-title">Dashboard</h1>
    <p class="dashboard-subtitle">Welcome to your dashboard!</p>
  </div>
</template>

<style scoped>
.dashboard-content {
  max-width: 1200px;
}

.dashboard-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-bg-dark);
  font-family: var(--font-family-primary);
}

.dashboard-subtitle {
  font-size: 16px;
  color: var(--color-accent);
  margin: 0;
  font-family: var(--font-family-primary);
}
</style>