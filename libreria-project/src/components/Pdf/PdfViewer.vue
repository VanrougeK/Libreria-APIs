<script setup>
import { useRoute } from 'vue-router'
import { pdfs } from '@/data/pdf_info.js'
import { computed } from 'vue'

const route = useRoute()
const pdf = computed(() => pdfs.find(p => p.id === Number(route.params.id)))
</script>

<template>
  <div class="pdf-viewer">
    <header class="pdf-viewer-toolbar">
      <h2>{{ pdf?.title }}</h2>
    </header>
    <div class="pdf-viewer-canvas">
      <!-- Aquí el PDF real se renderiza con embed/iframe o una librería como pdf.js -->
      <embed v-if="pdf" :src="pdf.file" type="application/pdf" width="100%" height="100%" />
    </div>
  </div>
</template>