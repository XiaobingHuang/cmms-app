<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import SideBar from './SideBar.vue';

const isSidebarOpen = ref(false);

const closeSidebarOnDesktop = () => {
  if (window.innerWidth >= 768) {
    isSidebarOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', closeSidebarOnDesktop);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', closeSidebarOnDesktop);
});
</script>

<template>
  <div class="app-layout" :class="{ 'sidebar-open': isSidebarOpen }">
    <SideBar
      :is-open="isSidebarOpen"
      @navigate="isSidebarOpen = false"
    />
    <div
      v-if="isSidebarOpen"
      class="sidebar-backdrop"
      @click="isSidebarOpen = false"
    />
    <main class="main-content">
      <button
        type="button"
        class="menu-toggle"
        aria-label="Toggle navigation"
        :aria-expanded="isSidebarOpen"
        aria-controls="app-sidebar"
        @click="isSidebarOpen = !isSidebarOpen"
      >
        <span class="menu-bar" />
        <span class="menu-bar" />
        <span class="menu-bar" />
      </button>
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

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--color-bg-sidebar);
  background-color: var(--color-bg-primary);
  color: var(--color-bg-sidebar);
  cursor: pointer;
  margin-bottom: 16px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.menu-toggle:focus-visible,
.menu-toggle:hover {
  background-color: var(--color-bg-third);
}

.menu-bar {
  width: 18px;
  height: 2px;
  background-color: currentColor;
  border-radius: 9999px;
}

.sidebar-backdrop {
  display: none;
}

@media (max-width: 768px) {
  .app-layout {
    position: relative;
  }

  .main-content {
    padding: 16px;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .app-layout.sidebar-open .sidebar-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(2px);
    z-index: 900;
  }
}
</style>
