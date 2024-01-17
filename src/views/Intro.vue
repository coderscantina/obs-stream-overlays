<template>
  <div class="intro">
    <div class="intro-content">
      <FadeText :text="title" class="h1 pb-1" />
      <h1 class="text-left display-4 animate__animated animate__fadeIn animate__delay-2s">
        <div class="text-blur-animated">
          <div class="shake">
            {{ subtitle }}
          </div>
        </div>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { formatSeconds } from '../utils/format'
import FadeText from '../components/FadeText.vue'

const start = ref(Date.now())
const title = 'STREAM BOOTING...'
const duration = ref(0)
const subtitle = computed(() => {
  if (duration.value < -5 * 1000) {
    return 'SOON™'
  }

  return formatSeconds(Math.max(0, duration.value) / 1000)
})

fetch('config.json')
  .then((r) => r.json())
  .then(({ start: s }) => (start.value = Date.parse(s)))

const timer = setInterval(() => {
  duration.value = start.value - new Date().getTime()
}, 500)

onBeforeUnmount(() => clearInterval(timer))
</script>

<style>
.text-left {
  text-align: left;
}
</style>
