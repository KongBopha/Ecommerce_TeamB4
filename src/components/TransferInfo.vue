<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
import { computed } from "vue";
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

const props = defineProps({
  bank: String,
  bankCode: {
    type: String,
    default: "012-345-678",
  },
  payment: {
    type: String,
    default: "Confirm Payment",
  },
});
</script>

<template>
  <section>
    <div class="w-full h-auto flex justify-center mt-2">
      <div class="w-full h-auto">
        <span class="flex justify-center text-xs font-thin text-gray-400"
          >Transfer USD{{ totalPrice }} to:</span
        >
        <div class="flex-col items-center justify-center py-4 space-y-1">
          <span class="flex justify-center font-bold text-sm">True Money</span>
          <div class="flex justify-center space-x-1">
            <span class="font-bold text-base">{{ bankCode }}</span>
            <i class="pi pi-clone text-gray-300" style="font-size: 13px"></i>
          </div>
        </div>
        <div class="flex justify-center space-x-1 mb-5">
          <span class="text-xs font-thin text-gray-400">Expires in</span>
          <span class="text-red-500 text-xs font-thin">10:00</span>
          <span class="text-xs font-thin text-gray-400">minutes</span>
        </div>
        <RouterLink
          to="/checkout/payments/complete"
          class="flex items-center justify-center text-sm font-medium bg-green-400 text-white rounded py-2"
          >{{ payment }}</RouterLink
        >
      </div>
    </div>
  </section>
</template>
