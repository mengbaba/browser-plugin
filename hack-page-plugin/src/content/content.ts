console.log('load hack script')
import { createApp } from 'vue'
import './inject.css'
import App from './App.vue'
const root = document.createElement('div')
root.id = 'h-dom'
document.body.append(root)
const app = createApp(App)
app.mount(root)



