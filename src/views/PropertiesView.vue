<script setup lang="ts">
import { ref } from "vue";
import Map from "../components/Map.vue";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline"; // Using outline version for UI consistency

const searchBarInput = ref("");
const sortType = ref("name");
const sortOptions = [
  { value: "name", label: "Property Name" },
  { value: "city", label: "City" },
  { value: "zip", label: "Zip" },
];

const downloadData = () => {
  console.log("Downloading property data...");
  // TODO: replace with real CSV / Excel export
};
</script>

<template>
  <div class="properties-content max-w-7xl mx-auto p-4 space-y-4">
    <!-- Top Search / Actions Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <!-- Search bar -->
      <div class="relative w-full sm:w-1/3">
        <input
          v-model="searchBarInput"
          type="text"
          placeholder="Search..."
          class="w-full pl-10 pr-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <MagnifyingGlassIcon
          class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
        />
      </div>

      <!-- Action buttons -->
      <div class="flex items-center gap-3">
        <!-- Filter button -->
        <button
          class="flex items-center gap-2 border rounded-xl px-3 py-2 hover:bg-gray-50 shadow-sm"
        >
          <FunnelIcon class="h-5 w-5" />
        </button>

        <!-- Grid/List view toggle (example) -->
        <button
          class="flex items-center gap-2 border rounded-xl px-3 py-2 hover:bg-gray-50 shadow-sm"
        >
          <Squares2X2Icon class="h-5 w-5" />
        </button>

        <!-- Sort select -->
        <select
          v-model="sortType"
          class="border rounded-xl px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option
            v-for="option in sortOptions"
            :key="option.value"
            :value="option.value"
          >
            Sort by {{ option.label }}
          </option>
        </select>

        <!-- Download button -->
        <button
          @click="downloadData"
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
        >
          <ArrowDownTrayIcon class="h-5 w-5" />
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
  font-family: var(--font-family-primary);
}
</style>
