<script setup>
import PdfCard from './PdfCard.vue'
import { ref, onMounted } from 'vue'

const pdfs = ref([])

const cargarPdfs = async () => {
  try {
    const API_URL = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000' 
      : 'https://libreria-apis.onrender.com';

    const token = localStorage.getItem('userToken');

    if (!token) {
      return;
    }

    const response = await fetch(API_URL + '/pdfs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'x-token': token,
        'token': token
      }
    });
    
    if (response.ok) {
      pdfs.value = await response.json();
    } else {
      console.warn('Error de respuesta:', response.status);
    }
  } catch (error) {
    console.error('Error cargando PDFs:', error);
  }
}

onMounted(() => {
  // Primer intento inmediato
  cargarPdfs();

  // Segundo intento de respaldo tras 800ms por si el localStorage estaba escribiéndose
  setTimeout(() => {
    if (pdfs.value.length === 0) {
      cargarPdfs();
    }
  }, 800);
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