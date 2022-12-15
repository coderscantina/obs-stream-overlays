<template>
  <div class="big-text-box">
    <FadeText :text="subheader" class="h1 display-1 pb-1" />
    <FadeText :text="header" class="h1 display-3" />
  </div>
</template>

<script setup>
import FadeText from './FadeText.vue'

const props = defineProps({
  header: String,
  subheader: String,
})
</script>

<style></style>
