<template>
  <div class="intro">
    <BigTextBox :header="header" header-class="text-blur shake" :subheader="subheader" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BigTextBox from '../components/BigTextBox.vue'

const headerText = 'BE PATIENT'
const subheaderText = 'ENTERING SENSITIVE INFORMATION'
const randomChars = '~{}[]^#@$%&?!3469'.split('')
const subheader = ref(subheaderText)
const header = ref(headerText)

function getRandomText(target, source, p) {
  const i = Math.floor(Math.random() * source.length)
  const sourceChar = source.charAt(i)
  const char =
    Math.random() < p || sourceChar == ' ' ? sourceChar : randomChars[Math.floor(Math.random() * randomChars.length)]

  return target.substring(0, i) + char + target.substring(i + 1)
}

setInterval(() => {
  header.value = getRandomText(header.value, headerText, 0.9)
}, 500)

setInterval(() => {
  subheader.value = getRandomText(subheader.value, subheaderText, 0.8)
}, 430)
</script>

<style></style>
