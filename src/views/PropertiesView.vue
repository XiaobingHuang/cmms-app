<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import Map from "../components/Map.vue";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/outline";

const searchBarInput = ref("");

const selectedProperty = ref();

const propertiesList = reactive([
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
  {
    name: "Elmwood Food Hall",
    address: "730 Elmwood Avenue",
    city: "Buffalo",
    state: "NY",
    zip: "14222",
    category: "Dining > Food Hall",
    lat: 42.9203,
    lng: -78.8767,
  },
  {
    name: "West Side Community Center",
    address: "203 Rhode Island Street",
    city: "Buffalo",
    state: "NY",
    zip: "14213",
    category: "Community Centers",
    lat: 42.9089,
    lng: -78.8924,
  },
  {
    name: "Niagara Riverside Park",
    address: "200 Niagara Street",
    city: "Buffalo",
    state: "NY",
    zip: "14213",
    category: "Parks & Recreation",
    lat: 42.9195,
    lng: -78.9041,
  },
  {
    name: "Buffalo Tech Hub",
    address: "500 Seneca Street",
    city: "Buffalo",
    state: "NY",
    zip: "14204",
    category: "Tech & Research Facility",
    lat: 42.8828,
    lng: -78.8663,
  },
  {
    name: "Canalside Pavilion",
    address: "44 Prime Street",
    city: "Buffalo",
    state: "NY",
    zip: "14202",
    category: "Entertainment > Event Space",
    lat: 42.8779,
    lng: -78.8791,
  },
  {
    name: "Buffalo History Museum Annex",
    address: "One Museum Court",
    city: "Buffalo",
    state: "NY",
    zip: "14216",
    category: "Cultural Centers > Museum",
    lat: 42.9334,
    lng: -78.8781,
  },
  {
    name: "University Plaza Medical",
    address: "350 Bailey Avenue",
    city: "Buffalo",
    state: "NY",
    zip: "14215",
    category: "Healthcare > Clinic",
    lat: 42.9542,
    lng: -78.8136,
  },
  {
    name: "East Side Food Co-op",
    address: "852 Broadway",
    city: "Buffalo",
    state: "NY",
    zip: "14212",
    category: "Dining > Grocery",
    lat: 42.8968,
    lng: -78.8412,
  },
  {
    name: "Buffalo Startup Garage",
    address: "27 Chandler Street",
    city: "Buffalo",
    state: "NY",
    zip: "14207",
    category: "Innovation > Co-Working",
    lat: 42.9448,
    lng: -78.8922,
  },
  {
    name: "RiverWorks Event Center",
    address: "359 Ganson Street",
    city: "Buffalo",
    state: "NY",
    zip: "14203",
    category: "Entertainment > Event Space",
    lat: 42.8753,
    lng: -78.8615,
  },
  {
    name: "Medical Corridor Hub",
    address: "937 Main Street",
    city: "Buffalo",
    state: "NY",
    zip: "14203",
    category: "Healthcare > Research Center",
    lat: 42.9012,
    lng: -78.8668,
  },
  {
    name: "Downtown Innovation Loft",
    address: "501 Washington Street",
    city: "Buffalo",
    state: "NY",
    zip: "14203",
    category: "Tech & Research Facility",
    lat: 42.8859,
    lng: -78.8721,
  },
  {
    name: "Frank Lloyd Wright Center",
    address: "125 Jewett Parkway",
    city: "Buffalo",
    state: "NY",
    zip: "14214",
    category: "Cultural Centers > Museum",
    lat: 42.9397,
    lng: -78.8441,
  },
  {
    name: "South Buffalo Recreation Hub",
    address: "200 Cazenovia Street",
    city: "Buffalo",
    state: "NY",
    zip: "14210",
    category: "Parks & Recreation",
    lat: 42.8504,
    lng: -78.8319,
  },
]);

const filteredPropertiesList = computed(() => {
  const query = searchBarInput.value.trim().toLowerCase();

  if (!query) return propertiesList;

  return propertiesList.filter((property) =>
    property.name.toLowerCase().includes(query) ||
    property.address.toLowerCase().includes(query) ||
    property.city.toLowerCase().includes(query) ||
    property.zip.includes(query)
  );
});


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
    <Map :properties="filteredPropertiesList" :selectedProperty="selectedProperty"/>

    <!-- Properties List -->
    <div class="properties-list">
      <div class="table-container">
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
            <tr v-for="property in filteredPropertiesList" :key="property.name" @click="selectedProperty = property">
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
  border: 1px solid var(--color-border);
}

.properties-list .table-container {
  max-height: 450px; 
  overflow-y: auto;
}

.properties-list table {
  position: sticky;
  top: 0;
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-family-primary);
}

.properties-list thead {
  position: sticky;
  top: 0;
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
