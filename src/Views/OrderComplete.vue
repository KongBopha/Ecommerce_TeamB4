<script setup>
import { defineProps } from "vue";

const props = defineProps({
  productCode: String,
});
</script>

<template>
  <section>
    <div class="w-full h-screen flex justify-center items-start">
      <div class="w-6/12 h-5/6 flex flex-col justify-center items-center">
        <span class="text-sm font-normal">Thank You For Your Purchase</span>
        <div class="h-40"></div>
        <span class="text-xl font-bold">Order {{ productCode }} Confirmed</span>
        <a
          href=""
          class="w-full bg-green-400 text-white font-semibold rounded py-2 text-center mt-5"
          >Track Order</a
        >
        <a href="" class="text-gray-400 text-xs font-semibold mt-3"
          >Generate Receipt</a
        >
      </div>
    </div>
  </section>
</template>
