import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '662300337306-tkhfkqatcogg9kloo177l1vemnbui3lr.apps.googleusercontent.com'
})

app.mount('#app')
