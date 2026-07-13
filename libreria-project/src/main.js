import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Asegúrate de importar tu router
import vue3GoogleLogin from 'vue3-google-login'

// Importar tus estilos globales si los tienes
import './assets/main.css'

const app = createApp(App)

app.use(router)

// Aquí pones tu ID real de Google
app.use(vue3GoogleLogin, {
  clientId: '662300337306-tkhfkqatcogg9kloo177l1vemnbui3lr.apps.googleusercontent.com'
})

app.mount('#app')