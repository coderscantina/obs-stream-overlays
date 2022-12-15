<template>
  <div class="intro">
    <BigTextBox :header="header" :subheader="subheader" />
  </div>
</template>

<script setup>
import BigTextBox from '../components/BigTextBox.vue'

const subheader = 'STEPPING AWAY FOR A MOMENT'
const header = 'BE RIGHT BACK!'
</script>

<style></style>
