<template>
  <canvas ref="canvas" />
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)
const fontSize = 15
const drops = []
const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ{}[]/$#@%^*+/|{}[]/$#@%^*+/|'.split('')

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  const columns = window.innerWidth / fontSize
  ctx.font = `normal ${fontSize - 3}px 'Fira Code'`

  for (let i = 0; i < columns; i++) {
    drops[i] = (-Math.random() * window.innerHeight) / 15
  }

  setInterval(function draw() {
    ctx.shadowColor = '#000000'
    ctx.fillStyle = 'rgba(0, 0, 0, .09)'
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.shadowBlur = 10
    for (let i = 0; i < drops.length; i++) {
      const char = letters[Math.floor(Math.random() * letters.length)]
      ctx.fillStyle = '#db2777'
      ctx.shadowColor = '#ffffff'
      ctx.fillText(char, i * fontSize, drops[i] * fontSize)
      ctx.shadowColor = '#db2777'
      ctx.fillText(char, i * fontSize, drops[i] * fontSize)
      drops[i]++
      if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.9) {
        drops[i] = 0
      }
    }
  }, 70)
})
</script>

<style scoped>
canvas {
  font-family: 'comic sans';
  position: fixed;
  left: 0;
  top: 0;
}
</style>
