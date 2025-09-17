<script setup lang="ts">
import SideBar from './SideBar.vue';
</script>

<template>
  <div class="app-layout">
    <SideBar />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg-secondary);
}

.main-content {
  flex: 1;
  padding: 24px;
  background-color: var(--color-bg-secondary);
  overflow-y: auto;
}
</style>