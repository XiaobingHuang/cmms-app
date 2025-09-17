<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppLayout from './components/AppLayout.vue';

const route = useRoute();

const shouldShowLayout = computed(() => {
  return route.meta.requiresAuth === true;
});
</script>

<template>
  <AppLayout v-if="shouldShowLayout">
    <router-view />
  </AppLayout>
  <router-view v-else />
</template>

<style scoped>
</style>
