<template>
  <canvas ref="canvas" />
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)
const fontSize = 12
const drops = []
const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ{}[]/$#@%^*+/|{}[]/$#@%^*+/|'.split('')

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  const columns = window.innerWidth / fontSize

  for (let i = 0; i < columns; i++) {
    drops[i] = (-Math.random() * window.innerHeight) / 2
  }

  setInterval(function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)'
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)]
      ctx.fillStyle = '#db2777'
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)
      drops[i]++
      if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.9) {
        drops[i] = 0
      }
    }
  }, 50)
})
</script>

<style scoped>
canvas {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
