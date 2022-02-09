import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Refresh",
    name: "Refresh",
    component: () => import("../views/Refresh.vue"),
  },
  {
    path: "/Help",
    name: "Help",
    component: () => import("../views/Help.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/MyTransitions",
    name: "Transitions",
    component: () => import("../views/MyTransitions.vue"),
  },
  {
    path: "/AddNewTransition",
    name: "NewTransition",
    component: () => import("../views/AddingNewTransition.vue"),
  },






  {
    path: "/Overview",
    name: "Overview",
    component: () => import("../components/TaskTransitionMettingsComponents/NavbarComponents/Overview.vue")
  },

  {
    path: "/ActivityLog",
    name: "Activity",
    component: () => import("../components/TaskTransitionMettingsComponents/NavbarComponents/ActivityLog.vue")
  },
  {
    path: "/Members",
    name: "members",
    component: () => import("../components/TaskTransitionMettingsComponents/NavbarComponents/Members.vue")
  },
  {
    path: "/Accesses",
    name: "accesses",
    component: () => import("../components/TaskTransitionMettingsComponents/NavbarComponents/Accesses.vue")
  },
  {
    path: "/Tasks",
    name: "tasks",
    component: () => import("../components/TaskTransitionMettingsComponents/NavbarComponents/Tasks.vue")
  },
  {
    path: "/Assets",
    name: "assets",
    component: () => import("../components/TaskTransitionMettingsComponents/NavbarComponents/Assets.vue")
  },


  {
    path: "/TaskTransitionsMettings",
    name: "CreateNewTask",
    component: () => import("../views/TaskTransitionsMettings.vue"),
  },



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
