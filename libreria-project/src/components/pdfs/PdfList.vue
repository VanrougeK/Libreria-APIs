<script setup>
import PdfCard from './PdfCard.vue'
import { ref, onMounted } from 'vue'

const pdfs = ref([])

onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/pdfs`)
    pdfs.value = await response.json()
  } catch (error) {
    console.error('Error cargando PDFs:', error)
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