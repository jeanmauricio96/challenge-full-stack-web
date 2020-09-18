import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import StudentRegister from "../components/StudentRegister.vue";
import EditStudent from "../components/EditStudent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "StudentRegister",
    component: StudentRegister,
  },
  {
    path: "/edit",
    name: "EditStudent",
    component: EditStudent,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
