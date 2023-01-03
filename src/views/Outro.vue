<template>
  <div class="outro">
    <div class="big-text-box">
      <FadeText :text="subheader" class="h1 display-1 pb-1" />
      <div class="text-blur crack h1 display-3">
        <div class="opacity-0">{{ header }}</div>
        <FadeText :text="header" class="before" />
        <FadeText :text="header" class="middle" />
        <FadeText :text="header" class="after" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FadeText from '../components/FadeText.vue'
import BigTextBox from '../components/BigTextBox.vue'

const subheader = 'STREAM ENDED'
const header = 'THANKS FOR\nWATCHING!'
</script>

<style></style>
