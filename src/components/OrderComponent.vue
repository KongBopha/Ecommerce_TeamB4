<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: String,
  name: String,
  price: String,
  quantity: String,
});
</script>

<template>
  <section>
    <div class="flex py-3">
      <img :src="image" class="w-16 h-16 border rounded border-gray-200" />
      <div class="flex flex-col ml-2">
        <span class="text-sm font-semibold">{{ name }}</span>
      </div>
      <div class="flex flex-col ml-auto">
        <span class="text-base font-normal">${{ price }}</span>
        <span class="text-gray-400 font-normal text-sm"
          >Qty: {{ quantity }}</span
        >
      </div>
    </div>
  </section>
</template>
