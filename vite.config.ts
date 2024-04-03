import vue from "@vitejs/plugin-vue";
import path from "path";
import { ConfigEnv, UserConfig, loadEnv, defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
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
        imports: ["vue"],
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
    ],
  };
};
