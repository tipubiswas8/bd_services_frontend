<script setup lang="ts">
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
</script>
<template>
  <main>
    <header-view />
    <router-view />
    <footer-view />
  </main>
</template>
