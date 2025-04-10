import { createApp } from 'vue'
import App from './App.vue'
import './inject.css'
const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)
const app = createApp(App)
app.mount(root)
console.log('load content')
// 触发重排 解决动态引入脚本 css 并未显示问题
requestAnimationFrame(() => {
    const body = document.body;
    body.style.opacity = '0';
    requestAnimationFrame(() => {
        body.style.opacity = '1';
    });
});