<script setup lang="ts">
import SideBar from '../components/SideBar.vue';
</script>

<template>
    <div class="dashboard-container">
        <SideBar />
        <main class="main-content">
            <h1 class="dashboard-title">Dashboard</h1>
            <p class="dashboard-subtitle">Welcome to your dashboard!</p>
        </main>
    </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg-secondary);
}

.main-content {
  flex: 1;
  padding: 24px;
  background-color: var(--color-bg-secondary);
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