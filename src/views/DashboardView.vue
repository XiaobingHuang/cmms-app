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
  background-color: #f8f9fa;
}

.main-content {
  flex: 1;
  padding: 24px;
  background-color: #f8f9fa;
}

.dashboard-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1a1a1a;
  font-family: system-ui, -apple-system, sans-serif;
}

.dashboard-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
}
</style>