import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 引入 Vant 及其样式
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 全局注册 Vant
app.use(Vant);

app.mount("#app");
