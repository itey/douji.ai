import store from "@/store/index";
import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style/global.less";
import router from './router';
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
