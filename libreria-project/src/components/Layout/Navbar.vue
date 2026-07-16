<script setup>
import { useAuth } from '@/composables/useAuth.js'

// Aquí extraemos el usuario y la función logout que creó tu compañero
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
        <div class="user-profile">
          <img 
            v-if="user.photoURL" 
            :src="user.photoURL" 
            alt="Perfil" 
            class="profile-pic" 
            referrerpolicy="no-referrer" 
          />
          <span class="navbar-user">Hola, {{ user.displayName || 'Usuario' }}</span>
          
          <button type="button" class="logout-btn" @click="logout">Cerrar sesión</button>
        </div>
      </template>
    </nav>
  </header>
</template>