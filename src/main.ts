import '@/assets/style/css/my-custom-bootstrap.css';
import '@/assets/style/css/ms-custom-tailwind.css';

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
