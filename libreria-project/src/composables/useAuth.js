onAuthStateChanged(auth, (firebaseUser) => {
  console.log('DEBUG: onAuthStateChanged disparado. firebaseUser =', firebaseUser)

  if (firebaseUser) {
    const isGoogle = firebaseUser.providerData[0]?.providerId === 'google.com'

    user.value = {
      name: firebaseUser.displayName || null,
      email: firebaseUser.email || null,
      photoURL: firebaseUser.photoURL || null,
      provider: isGoogle ? 'google' : 'email',
      displayLabel: isGoogle
        ? (firebaseUser.displayName || firebaseUser.email)
        : firebaseUser.email
    }
    console.log('DEBUG: user.value seteado a', user.value)
  } else {
    user.value = null
    console.log('DEBUG: user.value seteado a null')
  }
  isReady.value = true
})