<template>
  <div class="main-div">
    <RouterLink to="/bootstrap">Custom Bootstrap</RouterLink>
    <RouterLink to="/tailwind">Custom Tailwind</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <router-link to="/contact">Contact us</router-link>
  </div>
</template>


<style scoped>
.main-div {
  display: flex;
  align-items: center;
  margin-top: 90vh;
  justify-content: space-around;
  background-color: lightsteelblue;
}
</style>
