<template>
  <div class="big-text-box">
    <FadeText my-key="subheader" :text="subheader" class="h1 display-1 pb-1" />
    <FadeText
      :text="header"
      :class="headerClass"
      my-key="header"
      class="h1 display-3"
      text-class="text-blur-animated"
    />
  </div>
</template>

<script setup>
import FadeText from './FadeText.vue'

const props = defineProps({
  header: String,
  headerClass: String,
  subheader: String,
})
</script>

<style></style>
