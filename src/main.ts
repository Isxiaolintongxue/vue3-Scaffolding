import { createApp } from "vue";
import App from "./App.vue";
import "virtual:svg-icons-register";
import router from "@/router";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
