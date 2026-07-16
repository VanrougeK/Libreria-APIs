import { ref } from 'vue'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.js'

const user = ref(null)
const isReady = ref(false)

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    const isGoogle = firebaseUser.providerData[0]?.providerId === 'google.com'

    user.value = {
      name: firebaseUser.displayName || null,
      email: firebaseUser.email || null,
      photoURL: firebaseUser.photoURL || null,
      provider: isGoogle ? 'google' : 'email',
      // Esto es lo que se muestra en el navbar:
      displayLabel: isGoogle
        ? (firebaseUser.displayName || firebaseUser.email)
        : firebaseUser.email
    }
  } else {
    user.value = null
  }
  isReady.value = true
})

export function useAuth() {
  const logout = async () => {
    await signOut(auth)
    localStorage.removeItem('userToken')
    window.location.href = '/login'
  }

  return { user, isReady, logout }
}