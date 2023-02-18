import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import router from './router'
import App from './App.vue'
import { authPlugin } from 'vue3-auth'
import plugins from './plugins'
import './assets/styles/tailwind.css'
import 'element-plus/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(router)
app.use(plugins)
app.use(createHead())
app.use(authPlugin, {
  router,
  baseUrl: import.meta.env.VITE_BASE_URL,
  redirect: {
    login: '/',
    logout: '/',
    home: '/yeu-cau-mo-hub',
  },
  local: {
    endpoints: {
      login: {
        url: '/customers/login',
        method: 'post',
      },
      user: {
        url: '/customers/profile',
        method: 'get',
        propertyName: 'data',
      },
      logout: false,
    },
    token: {
      property: 'token',
      type: 'Bearer',
      name: 'Authorization',
    },
  },
})

app.mount('#app')
