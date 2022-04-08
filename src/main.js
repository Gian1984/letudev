import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment';
import VueCookieComply from 'vue-cookie-comply';
import 'vue-cookie-comply/dist/style.css'
import i18n from './i18n'
import './index.css'

const app = createApp(App)

app.use(router).use(store).use(createPersistedState).use(VueAxios, axios).use(moment).use(VueCookieComply).use(i18n)

app.mount('#app')
