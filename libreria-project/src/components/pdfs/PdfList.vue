<script setup>
import PdfCard from './PdfCard.vue'
import { ref, onMounted } from 'vue'

const pdfs = ref([])

onMounted(async () => {
  try {
    const API_URL = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000' 
      : 'https://libreria-apis.onrender.com';

    const token = localStorage.getItem('userToken');

    const response = await fetch(API_URL + '/pdfs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (response.ok) {
      pdfs.value = await response.json();
    } else {
      console.warn('El servidor respondió con un error (ej. 401). Asegúrate de haber iniciado sesión.');
    }
  } catch (error) {
    console.error('Error cargando PDFs:', error);
  }
})
</script>

<template>
  <section class="pdf-list">
    <PdfCard
      v-for="pdf in pdfs"
      :key="pdf.id"
      :title="pdf.title"
      :author="pdf.author"
      :date="pdf.date"
      :id="pdf.id"
    />
  </section>
</template>