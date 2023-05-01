import { createRouter, createWebHistory } from "vue-router";

// make all paths and names lowercase for consistency
const routes = [
  {
    // Changed to default to the login screen
    path: "/",
    name: "login",
    component: () => import("../components/userLogin.vue"),
  },
  {
    // Alternative path to the login screen
    path: "/userlogin",
    name: "userlogin",
    component: () => import("../components/userLogin.vue"),
  },
  {
    // Added Route for Manage Services
    path: "/services",
    name: "services",
    component: () => import("../components/Services.vue"),
  },
  {
    // Ability to add
    path: "/addService",
    name: "addService",
    component: () => import("../components/addService.vue"),
  },
  {
    // Ability to edit
    path: "/editService/:id",
    name: "editService",
    props: true,
    props: (route) => ({ id: route.params.id }),
    component: () => import("../components/editService.vue"),
  },
  {
    // Added Route for dashboard
    path: "/dashboard",
    name: "dashboard",
    props: true,
    component: () => import("../components/homePage.vue"),
  },
  {
    path: "/intakeform",
    name: "intakeform",
    props: true,
    component: () => import("../components/intakeForm.vue"),
  },
  {
    path: "/findclient",
    name: "findclient",
    component: () => import("../components/findClient.vue"),
  },
  {
    path: "/updateEvent/:id",
    name: "updateEvent",
    props: true,
    component: () => import("../components/updateEvent.vue"),
  },
  {
    path: "/eventform",
    name: "eventform",
    component: () => import("../components/eventForm.vue"),
  },
  {
    path: "/findevents",
    name: "findevents",
    component: () => import("../components/findEvents.vue"),
  },
  {
    path: "/eventdetails/:id",
    name: "eventdetails",
    props: true,
    component: () => import("../components/eventDetails.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
