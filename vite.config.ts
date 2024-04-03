import vue from "@vitejs/plugin-vue";
import path from "path";
import { ConfigEnv, UserConfig } from "vite";
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
    plugins: [vue()],
  };
};
