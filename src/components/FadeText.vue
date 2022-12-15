<template>
  <div>
    <span
      v-for="(l, i) in letters"
      :key="key(i)"
      :style="{ 'animation-delay': delay() }"
      class="animate__animated animate__fadeIn animate__faster"
      >{{ l }}</span
    >
  </div>
</template>

<script setup>
import md5 from 'js-md5'
import { computed } from 'vue'

const props = defineProps({
  text: String,
  delay: {
    type: Number,
    default: 500,
  },
})
const letters = computed(() => props.text.split(''))

function key(i) {
  return md5(props.text + i)
}

function delay() {
  const d = props.delay + Math.random() * 750
  return `${d}ms`
}
</script>
