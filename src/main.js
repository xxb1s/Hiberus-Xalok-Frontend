import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import VueTailwindDatepicker from 'vue-tailwind-datepicker';

const app = createApp(App)

const i18n = createI18n({
  locale: 'es',
  messages: {
    en,
    es
  }
})

app.use(router)
app.use(i18n)
app.use(VueTailwindDatepicker)
app.mount('#app')
