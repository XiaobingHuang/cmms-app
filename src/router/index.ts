import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useUserStore } from "../store/UserStore";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import WorkManagerView from "../views/WorkManagerView.vue";
import WorkRequestsView from "../views/WorkRequestsView.vue";
import PropertiesView from "../views/PropertiesView.vue";
import EquipmentView from "../views/EquipmentView.vue";
import SensorsView from "../views/SensorsView.vue";
import PartsView from "../views/PartsView.vue";
import VendorsView from "../views/VendorsView.vue";
import RiskAssessmentView from "../views/RiskAssessmentView.vue";
import SavingsScoutView from "../views/SavingsScoutView.vue";
import KnowledgeCenterView from "../views/KnowledgeCenterView.vue";

const routes: RouteRecordRaw[] = [
  // Public routes (no layout)
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  
  // Authenticated routes (with layout)
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  
  // Project Hub routes
  {
    path: "/work-manager",
    component: WorkManagerView,
    meta: { requiresAuth: true },
  },
  {
    path: "/work-requests",
    component: WorkRequestsView,
    meta: { requiresAuth: true },
  },
  
  // Assets routes
  {
    path: "/properties",
    component: PropertiesView,
    meta: { requiresAuth: true },
  },
  {
    path: "/equipment",
    component: EquipmentView,
    meta: { requiresAuth: true },
  },
  {
    path: "/sensors",
    component: SensorsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/parts",
    component: PartsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/vendors",
    component: VendorsView,
    meta: { requiresAuth: true },
  },
  
  // Predict & Prevent routes
  {
    path: "/risk",
    component: RiskAssessmentView,
    meta: { requiresAuth: true },
  },
  {
    path: "/savings",
    component: SavingsScoutView,
    meta: { requiresAuth: true },
  },
  {
    path: "/knowledge",
    component: KnowledgeCenterView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore();
  // if (to.meta.requiresAuth && !userStore.currentUser) {
  //   next("/login");
  // } else {
  //   next();
  // }
  next();
});

export default router;
