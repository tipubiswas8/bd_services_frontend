<template>
  <button @click="toggleTheme">Toggle Theme</button>
  <div class="bg-yellow-800 text-white">
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-red-800 p-4 m-2">01</div>
      <div class="bg-red-800 p-4 m-2">02</div>
      <div class="bg-red-800 p-4 m-2">03</div>
      <div class="bg-red-800 p-4 m-2">04</div>
      <div class="bg-red-800 p-4 m-2">05</div>
      <div class="bg-red-800 p-4 m-2">06</div>
      <div class="bg-red-800 p-4 m-2">07</div>
      <div class="bg-red-800 p-4 m-2">08</div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
}

// Optional: Set theme on mount
onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})
</script>
