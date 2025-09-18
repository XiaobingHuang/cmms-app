<script setup lang="ts">
import Map from "../components/Map.vue"
</script>

<template>
  <div class="properties-content">
    <h1 class="page-title">Properties</h1>
    <Map></Map>
  </div>
</template>

<style scoped>
.properties-content {
  max-width: 1200px;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-bg-dark);
  font-family: var(--font-family-primary);
}

.page-subtitle {
  font-size: 16px;
  color: var(--color-accent);
  margin: 0;
  font-family: var(--font-family-primary);
}
</style>