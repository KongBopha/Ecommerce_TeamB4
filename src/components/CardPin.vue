<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "@/stores/store";

const data = useStore();

const totalPrice = computed(() => {
  return data.cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity * (1 - item.discount / 100) +
      2.5 +
      1.5,
    0
  );
});
</script>

<template>
  <section>
    <div class="w-full h-auto mt-3">
      <div class="flex justify-center">
        <span class="font-light text-sm"
          >Enter your 4-digit card pin to confirm this payment</span
        >
      </div>
      <div class="flex justify-center gap-3 pt-5 pb-7">
        <input
          type="text"
          maxlength="1"
          class="w-8 h-8 text-center border border-gray-400 rounded shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
        />
        <input
          type="text"
          maxlength="1"
          class="w-8 h-8 text-center border border-gray-400 rounded shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
        />
        <input
          type="text"
          maxlength="1"
          class="w-8 h-8 text-center border border-gray-400 rounded shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
        />
        <input
          type="text"
          maxlength="1"
          class="w-8 h-8 text-center border border-gray-400 rounded shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <RouterLink
        to="/checkout/payments/complete"
        class="flex items-center justify-center text-sm font-medium bg-green-400 text-white rounded py-2"
        >Pay USD{{ totalPrice }}</RouterLink
      >
    </div>
  </section>
</template>
