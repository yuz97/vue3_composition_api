import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import "./style.css";

createApp(App).use(store).use(router).mount("#app");
