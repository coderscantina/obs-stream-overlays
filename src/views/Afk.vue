<template>
  <div class="intro">
    <BigTextBox :header="header" header-class="text-blur shake" :subheader="subheader" />
  </div>
</template>

<script setup>
import BigTextBox from '../components/BigTextBox.vue'

const subheader = 'STEPPING AWAY FOR A MOMENT'
const header = 'BE RIGHT BACK!'
</script>

<style></style>
