<script setup lang="ts">
import { reactive, ref } from "vue";
import Map from "../components/Map.vue";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline";

interface property {
   name: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    category: string,
    lat: number,
    lng: number,
}

const searchBarInput = ref("");

const propertiesList = reactive<property[]>([
  {
    name: "Elmwood Arts Center",
    address: "245 Elmwood Avenue",
    city: "Buffalo",
    state: "NY",
    zip: "14201",
    category: "Cultural Centers > Museum",
    lat: 42.9024,
    lng: -78.8763,
  },
  {
    name: "Hertel Market Hall",
    address: "765 Hertel Avenue",
    city: "Buffalo",
    state: "NY",
    zip: "14216",
    category: "Cultural Centers > Theater",
    lat: 42.9491,
    lng: -78.8589,
  },
  {
    name: "Larkin Office Hub",
    address: "701 Seneca Street",
    city: "Buffalo",
    state: "NY",
    zip: "14210",
    category: "Auxiliary Buildings",
    lat: 42.8746,
    lng: -78.8517,
  },
  {
    name: "Delaware Park Pavilion",
    address: "84 Parkside Avenue",
    city: "Buffalo",
    state: "NY",
    zip: "14214",
    category: "Community Centers",
    lat: 42.9373,
    lng: -78.8524,
  },
  {
    name: "Niagara Innovation Lab",
    address: "1200 Niagara Street",
    city: "Buffalo",
    state: "NY",
    zip: "14213",
    category: "Tech & Research Facility",
    lat: 42.9162,
    lng: -78.8994,
  },
  {
    name: "Buffalo Medical Annex",
    address: "847 Washington Street",
    city: "Buffalo",
    state: "NY",
    zip: "14203",
    category: "Healthcare > Physician Hub",
    lat: 42.8996,
    lng: -78.8658,
  },
]);



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

    <!-- Properties List -->
    <div class="properties-list">
      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in propertiesList" :key="property.name">
            <td>{{ property.name }}</td>
            <td>{{ property.address }}</td>
            <td>{{ property.city }}</td>
            <td>{{ property.state }}</td>
            <td>{{ property.zip }}</td>
            <td>{{ property.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.properties-content {
  max-width: 120rem; /* max-w-7xl */
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

/* Properties Table Styling */
.properties-list {
  margin-top: 1rem;
  background: var(--color-bg-primary);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.properties-list table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-family-primary);
}

.properties-list thead {
  background-color: var(--color-blue);
  font-weight: 600;
  color: var(--color-text-primary);
}

.properties-list th {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.875rem;
  color: var(--color-text-primary);
}

.properties-list td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.875rem;
  color: var(--color-bg-dark);
}

.properties-list tbody tr:hover {
  background-color: var(--color-bg-third);
}
</style>
