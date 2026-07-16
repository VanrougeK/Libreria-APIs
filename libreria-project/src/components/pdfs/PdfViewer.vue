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

const embedUrl = computed(() => {
  if (!pdf.value?.url) return null
  const match = pdf.value.url.match(/id=([a-zA-Z0-9_-]+)/)
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`
  }
  return null
})
</script>

<template>
  <div class="pdf-viewer">
    <header class="pdf-viewer-toolbar">
      <h2>{{ pdf?.title }}</h2>
    </header>

    <div class="pdf-viewer-canvas">
      <embed
        v-if="embedUrl"
        :src="embedUrl"
        type="application/pdf"
        width="100%"
        height="100%"
      />
      <p v-else>No se pudo cargar la vista previa de este documento.</p>
    </div>
  </div>
</template>