<template>
  <div class="ms-grid ms-grid-cols-12 ms-gap-5">
    <div class="ms-col-span-12 ms-md:col-span-3 ms-lg:col-span-2 ms-bg-pink-500">
      div-1
    </div>
    <div class="ms-col-span-12 ms-md:col-span-6 ms-lg:col-span-7">
      <div class="ms-grid ms-grid-cols-12 ms-gap-2">
        <div class="ms-col-span-6 ms-bg-green-500">div-2/1</div>
        <div class="ms-col-span-6 ms-bg-gray-500">div-2/2</div>
      </div>
      <div class="ms-grid ms-grid-cols-12 ms-gap-2">
        <div class="ms-col-span-12 ms-bg-orange-500">div-2/3</div>
      </div>
    </div>
    <div class="ms-col-span-12 ms-md:col-span-3 ms-lg:col-span-3 ms-bg-blue-500">
      div-3
    </div>
  </div>
  <br>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const services = ref({});

onMounted(()=>{

  const response = axios.get('');
  console.log(response);

});

</script>
