// src/router/index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
  },
];

const modulesFiles = import.meta.glob("./modules/*.ts", { eager: true });

for (const path in modulesFiles) {
  const tmpRoutes = (modulesFiles[path] as any).default;
  routes = [...routes, ...tmpRoutes];
}
/**
 * 创建路由
 */

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ name: "/login" });
  location.reload();
}

export default router;
