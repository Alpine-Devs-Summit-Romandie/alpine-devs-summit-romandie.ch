import { createApp } from 'vue'

import App from './App.vue'
import router from '@/plugins/vue-router.ts'
import pinia from "@/plugins/pinia.ts";
import vuetify from "@/plugins/vuetify.ts";
import i18n from "@/plugins/vue-i18n.ts"
import './styles/variables.scss';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
