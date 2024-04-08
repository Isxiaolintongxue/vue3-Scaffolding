import { RouteRecordRaw } from "vue-router";

const testRoute: Array<RouteRecordRaw> = [
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/watchIndex.vue"),
  },
];
export default testRoute;
