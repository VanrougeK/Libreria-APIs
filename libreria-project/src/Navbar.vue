<script setup>
import { useAuth } from '@/composables/useAuth.js'

const { user, logout } = useAuth()
</script>

<template>
  <header class="navbar">
    <div class="navbar-brand">
      <h1>Mi Librería PDF</h1>
    </div>
    <nav class="navbar-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/library">Librería</router-link>
      <router-link v-if="!user" to="/login">Ingresar</router-link>
      <template v-else>
        <span class="navbar-user">Hola, {{ user.name }}</span>
        <button type="button" @click="logout">Cerrar sesión</button>
      </template>
    </nav>
  </header>
</template>