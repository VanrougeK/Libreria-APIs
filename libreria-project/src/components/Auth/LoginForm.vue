<script setup>
const callback = async (response) => {
  const token = response.credential;
  
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });
    
    const data = await res.json();
    console.log("Respuesta del backend:", data);
    
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
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
      <GoogleLogin 
      :callback="callback"
      popup-type="TOKEN" />
    </div>
  </form>
</template>