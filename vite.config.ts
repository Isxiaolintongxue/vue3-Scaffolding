import vue from "@vitejs/plugin-vue";
import path from "path";
import { ConfigEnv, UserConfig, loadEnv, defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    //别名配置
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "pinia"],
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
        },
        resolvers: [ElementPlusResolver(), IconsResolver()],
        vueTemplate: true, //是否在 vue 模版中自动导入
        dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ["ep"], //element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          }),
        ],
        dts: path.resolve(pathSrc, "types", "components.d.ts"),
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        //define global scss variable
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: Number(env.Vite_App_PORT),
      open: true,
      proxy: {
        [env.Vite_APP_BASE_API]: {
          target: "http://vapi.youlai.tech",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
  };
};
