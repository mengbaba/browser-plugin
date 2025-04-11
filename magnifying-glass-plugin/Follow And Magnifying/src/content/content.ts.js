import { createApp } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
import App from "/src/content/App.vue.js";
import "/src/content/inject.css.js";
const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);
const app = createApp(App);
app.mount(root);
console.log("load content");
requestAnimationFrame(() => {
  const body = document.body;
  body.style.opacity = "0";
  requestAnimationFrame(() => {
    body.style.opacity = "1";
  });
});
