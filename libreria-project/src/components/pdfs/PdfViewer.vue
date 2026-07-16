<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'

const route = useRoute()
const pdfs = ref([])

onMounted(async () => {
  try {
    const token = localStorage.getItem('userToken')

    const response = await fetch(`${import.meta.env.VITE_API_URL}/pdfs`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    pdfs.value = await response.json()
  } catch (error) {
    console.error("Error en el visor, cargando PDFs: ", error)
  }
})

const pdf = computed(() =>
  pdfs.value.find(p => Number(p.id) === Number(route.params.id))
)
</script>

<template>
  <div class="pdf-viewer">
    <header class="pdf-viewer-toolbar">
      <h2>{{ pdf?.title }}</h2>
    </header>

    <div class="pdf-viewer-canvas">
      <embed
        v-if="pdf"
        :src="pdf.file"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>