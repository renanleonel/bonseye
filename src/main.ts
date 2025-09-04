import '@/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(PrimeVue, { theme: { preset: Aura } })

app.mount('#app')
