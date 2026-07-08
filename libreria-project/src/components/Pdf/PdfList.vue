<script setup>
import PdfCard from './PdfCard.vue'
import { pdfs } from '@/data/pdf_info.js'
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