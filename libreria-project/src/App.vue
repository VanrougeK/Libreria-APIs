<script setup>
const callback = async (response) => {
  // Este es el token seguro que nos da Google
  const token = response.credential;
  
  // Aquí lo enviamos a tu backend para validarlo
  const res = await fetch('http://localhost:3000/api/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });
  
  const data = await res.json();
  console.log("Respuesta del backend:", data);
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>Librería PDFs</h2>
      <p>Inicia sesión para continuar</p>
      <GoogleLogin :callback="callback" />
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #181818;
}

.login-card {
  background-color: #242424;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

h2 {
  margin-bottom: 0.5rem;
  color: #42b883; /* Verde estilo Vue */
}

p {
  margin-bottom: 2rem;
  color: #a0a0a0;
}
</style>
