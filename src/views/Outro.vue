<template>
  <div class="outro">
    <BigTextBox :header="header" :subheader="subheader" class="w-.6" />
  </div>
</template>

<script setup>
import BigTextBox from '../components/BigTextBox.vue'

const subheader = 'STREAM ENDED'
const header = 'THANKS FOR\nWATCHING'
</script>

<style></style>
