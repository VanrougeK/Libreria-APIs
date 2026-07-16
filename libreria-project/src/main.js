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
  clientId: '718294780350-apbajtl21lhljek5n05d2fk3b6q0n3nv.apps.googleusercontent.com'
})

app.mount('#app')