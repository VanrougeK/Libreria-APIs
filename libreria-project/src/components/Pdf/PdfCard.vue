<script setup>
defineProps({
  id: [Number, String],
  title: String,
  author: String,
  date: String
})
</script>

<template>
  <article class="pdf-card">
    <div class="pdf-card-thumbnail"></div>
    <h3 class="pdf-card-title">{{ title }}</h3>
    <p class="pdf-card-meta">{{ author }} — {{ date }}</p>
    <router-link :to="`/pdf/${id}`">Ver documento</router-link>
  </article>
</template>