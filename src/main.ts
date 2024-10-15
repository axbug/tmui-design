import { createSSRApp } from "vue";
import * as Pinia from 'pinia';
import App from "./App.vue";
import tmUi from "./uni_modules/tm-ui";
export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  app.use(tmUi);
  return {
    app,
    Pinia
  };
}
