<template>
  <div>
    <div :class="textClass">
      <span
        v-for="(l, i) in letters"
        :key="key(i, l)"
        :style="{ 'animation-delay': delay() }"
        class="animate__animated animate__fadeIn animate__faster"
        >{{ l }}</span
      >
    </div>
  </div>
</template>

<script setup>
import md5 from 'js-md5'
import { computed } from 'vue'

const props = defineProps({
  text: String,
  myKey: String,
  textClass: String,
  delay: {
    type: Number,
    default: 500,
  },
})
const letters = computed(() => props.text.split(''))

function key(i, l) {
  return md5(props.myKey + i + l)
}

function delay() {
  const d = props.delay + Math.random() * 500
  return `${d}ms`
}
</script>
