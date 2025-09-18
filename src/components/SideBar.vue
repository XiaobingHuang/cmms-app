<script setup lang="ts">
import { ref } from "vue";
import { useRouter} from "vue-router"
import { 
  ChartBarIcon, 
  ClipboardDocumentListIcon, 
  Cog6ToothIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  WifiIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  ChevronDownIcon
} from "@heroicons/vue/24/outline"

interface NavItem {
    label: string;
    icon?: any;
    route?: string;
    children?: NavItem[];
}

const router = useRouter();

const userName = "Jeffrey Huang";

const companyName = "";

const activeTab = ref("Dashboard");

const navSections = ref<NavItem[]>([
  {
    label: "PropertyOS",
    children: [
      { label: "Dashboard", icon: ChartBarIcon, route: "/dashboard" }
    ]
  },
  {
    label: "Project Hub",
    children: [
      { label: "Work Manager", icon: ClipboardDocumentListIcon, route: "/work-manager" },
      { label: "Work Requests", icon: Cog6ToothIcon, route: "/work-requests" }
    ]
  },
  {
    label: "Assets",
    children: [
      { label: "Properties", icon: MapPinIcon, route: "/properties" },
      { label: "Equipment", icon: BuildingOfficeIcon, route: "/equipment" },
      { label: "Sensors", icon: WifiIcon, route: "/sensors" },
      { label: "Parts & Supplies", icon: WrenchScrewdriverIcon, route: "/parts" },
      { label: "Vendors", icon: UserIcon, route: "/vendors" }
    ]
  },
  {
    label: "Predict & Prevent",
    children: [
      { label: "Risk Assessment", icon: ClockIcon, route: "/risk" },
      { label: "Savings Scout", icon: MagnifyingGlassIcon, route: "/savings" },
      { label: "Knowledge Center", icon: BookOpenIcon, route: "/knowledge" }
    ]
  }
]);


function navigate(route: string | undefined, label: string) {
  if (route) {
    router.push(route);
    activeTab.value = label; // Update the active tab when navigating
  }
}

</script>

<template>
  <aside class="sidebar">
    <div class="user-info">
        <div class="user-name">{{ userName }}</div>
        <div class="company-info">
            <span class="company-name">{{ companyName }}</span>
        </div>
    </div>
    <nav class="navigation">
        <div v-for="navSection in navSections" :key="navSection.label" class="nav-section">
            <h3 class="section-title">{{ navSection.label }}</h3>
            <ul class="nav-list">
                <li
                    v-for="item in navSection.children"
                    :key="item.label"
                    class="nav-item"
                    :class="{ 'active': item.label === activeTab }"
                    @click="navigate(item.route, item.label)"
                >
                    <component :is="item.icon" class="nav-icon" />
                    <span class="nav-label">{{ item.label }}</span>
                </li>
            </ul>
        </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 256px;
  min-height: 100vh;
  background-color: var(--color-bg-sidebar);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-family: var(--font-family-primary);
}

.user-info {
  margin-bottom: 32px;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--color-text-primary);
}

.company-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.company-name {
  font-size: 14px;
  color: var(--color-text-muted);
}

.chevron-icon {
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
}

.navigation {
  flex: 1;
}

.nav-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  padding: 0 4px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  margin-bottom: 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
}

.nav-item:hover {
  background-color: var(--color-hover);
}

.nav-item.active {
  background-color: var(--color-active);
}

.nav-icon {
  width: 20px;
  height: 20px;
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.nav-item.active .nav-icon {
  color: var(--color-text-primary);
}

.nav-label {
  color: var(--color-text-secondary);
  font-weight: 500;
}

.nav-item.active .nav-label {
  color: var(--color-text-primary);
}
</style>