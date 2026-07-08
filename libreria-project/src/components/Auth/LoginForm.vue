<script setup></script>

<template>
  <form class="login-form">
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
  </form>
</template>