import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 引用所有样式
import { DatePicker, TimePicker, Select } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(store).use(router).use(ElementPlus);
app.use(DatePicker).use(TimePicker).use(Select);
app.mount("#app");
