import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App)
  .use(ElementPlus)
  .use(pinia)
  .use(router)
  .mount('#app')
