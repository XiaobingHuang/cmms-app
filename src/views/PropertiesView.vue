<script setup lang="ts">
import { ref } from "vue";
import Map from "../components/Map.vue";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline";

const searchBarInput = ref("");

const downloadData = () => {
  console.log("Downloading property data...");
};
</script>

<template>
  <div class="properties-content">
    <!-- Top Search / Actions Bar -->
    <div class="actions-bar">
      <!-- Search bar -->
      <div class="search-container">
        <input
          v-model="searchBarInput"
          type="text"
          placeholder="Search..."
          class="primary-input"
        />
        <MagnifyingGlassIcon class="search-icon" />
      </div>

      <!-- Action buttons -->
      <div class="button-group">
        <button class="secondary-button">
          <FunnelIcon class="icon" />
        </button>

        <button class="secondary-button">
          <Squares2X2Icon class="icon" />
        </button>

        <button @click="downloadData" class="primary-button">
          <ArrowDownTrayIcon class="icon" />
          <span>Download</span>
        </button>
      </div>
    </div>

    <!-- Map -->
    <Map />
  </div>
</template>

<style scoped>
.properties-content {
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: var(--font-family-primary);
}

.actions-bar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .actions-bar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.search-container {
  position: relative;
  width: 100%;
}

@media (min-width: 640px) {
  .search-container {
    width: 33%;
  }
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 0.625rem;
  width: 1rem;
  height: 1rem;
  color: #9ca3af;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}


</style>
