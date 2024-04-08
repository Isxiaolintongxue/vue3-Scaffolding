import { RouteRecordRaw } from "vue-router";

const testRoute: Array<RouteRecordRaw> = [
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index.vue"),
  },
];
export default testRoute;
