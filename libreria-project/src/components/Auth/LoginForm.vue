<script setup>
import { useRouter } from 'vue-router'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import { auth } from '../../firebase/firebase.js'

const router = useRouter()

const callback = async (response) => {
  try {
    const credential = GoogleAuthProvider.credential(response.credential)
    const userCredential = await signInWithCredential(auth, credential)

    const idToken = await userCredential.user.getIdToken()

    localStorage.setItem('userToken', idToken)
    console.log('Token de Firebase guardado con éxito.')
    router.push('/library')

  } catch (error) {
    console.error('Error al iniciar sesión con Firebase:', error)
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent>
    <h2>Iniciar sesión</h2>
    <div class="form-group">
      <label for="email">Correo</label>
      <input id="email" type="email" required />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input id="password" type="password" required />
    </div>
    <button type="submit">Entrar</button>

    <div class="google-auth-group">
      <p>O ingresa con:</p>
      <GoogleLogin :callback="callback" />
    </div>
  </form>
</template>