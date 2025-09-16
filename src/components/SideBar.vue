<script setup lang="ts">
import { ref } from "vue";
import { useRouter} from "vue-router"

interface NavItem {
    label: string;
    icon?: string;
    route?: string;
    children?: NavItem[];
}

const router = useRouter();

const userName = "John Smith";

const companyName = "Smith & Co";

const navSections = ref<NavItem[]>([
  {
    label: "PropertyOS",
    children: [
      { label: "Dashboard", icon: "📊", route: "/dashboard" }
    ]
  },
  {
    label: "Project Hub",
    children: [
      { label: "Work Manager", icon: "📝", route: "/work-manager" },
      { label: "Work Requests", icon: "📂", route: "/work-requests" }
    ]
  },
  {
    label: "Assets",
    children: [
      { label: "Properties", icon: "🗺️", route: "/properties" },
      { label: "Equipment", icon: "📦", route: "/equipment" },
      { label: "Sensors", icon: "📡", route: "/sensors" },
      { label: "Parts & Supplies", icon: "🛠️", route: "/parts" },
      { label: "Vendors", icon: "👤", route: "/vendors" }
    ]
  },
  {
    label: "Predict & Prevent",
    children: [
      { label: "Risk Assessment", icon: "⚠️", route: "/risk" },
      { label: "Savings Scout", icon: "🔍", route: "/savings" },
      { label: "Knowledge Center", icon: "📚", route: "/knowledge" }
    ]
  }
]);


function navigate(route: string | undefined) {
  if (route) router.push(route);
}

</script>

<template>
  <aside class="w-64 min-h-screen bg-[#0d2b3e] text-white flex flex-col p-4">
    <div>
        {{ userName, companyName }}
    </div>
    <nav>
        <div v-for="navSection in navSections" :key="navSection.label">
            <h3>
                {{ navSection.label }}
            </h3>
            <ul>
                <li
                    v-for="item in navSection.children"
                    :key="item.label"
                    @click="navigate(item.route)"
                >
                <span v-if="item.icon">{{ item.icon }}</span>
                <span>{{ item.label }}</span>
            </li>
            </ul>
        </div>

       
    </nav>
  </aside>
</template>

<style scoped>

</style>