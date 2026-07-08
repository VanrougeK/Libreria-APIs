<script setup>
import Navbar from './components/Layout/Navbar.vue'
import Footer from './components/Layout/Footer.vue'
</script>

<template>
  <div id="app">
    <Navbar />

    <main class="app-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>