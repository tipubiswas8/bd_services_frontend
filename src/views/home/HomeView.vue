<script setup lang="ts">
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
import LandingPage from '@/views/landing/LandingPage.vue';
</script>
<template>
  <main>
    <header-view />
    <landing-page />
    <router-view />
    <footer-view />
  </main>
</template>
