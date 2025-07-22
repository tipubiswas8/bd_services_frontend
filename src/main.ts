// import '@/assets/style/css/custom-bootstrap.css';
// import '@/assets/style/css/custom-tailwind.css';
import '@/assets/style/css/my-custom-bootstrap.css';
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify()

app.use(router)
app.use(pinia)
app.use(vuetify)

app.mount('#app')
