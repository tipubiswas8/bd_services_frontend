<template>
    <div class="main-div">
      <RouterLink to="/login">Login</RouterLink>
      <router-link to="/boot-register">Bootstrap Register</router-link>
      <router-link to="/tail-register">Tailwind Register</router-link>
    </div>
</template>


<style scoped>
.main-div {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 8px;
  background-color: antiquewhite;
}
</style>
