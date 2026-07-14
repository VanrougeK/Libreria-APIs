<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'

const route = useRoute()

const pdfs = ref([])

onMounted(async () => {
  const response = await fetch('http://localhost:3000/pdfs')
  pdfs.value = await response.json()
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