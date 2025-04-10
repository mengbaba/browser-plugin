import { createApp } from 'vue'
import App from './App.vue'
// import 'virtual:uno.css' // 原子css
import './inject.css'
const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)

const app = createApp(App)
app.mount(root)

