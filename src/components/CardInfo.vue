<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <div class="w-full h-auto grid">
      <div class="space-y-1">
        <label class="font-semibold text-sm">Card Number</label>
        <input
          type="text"
          placeholder="0123 4567 8910 1112"
          class="w-full border-2 border-gray-300 font-thin text-sm rounded p-2"
        />
      </div>
      <div class="flex space-x-5 pt-3">
        <div class="space-y-1">
          <label for="expirationDate" class="font-semibold text-sm"
            >Expiration Date</label
          >
          <input
            type="text"
            placeholder="MM/YY"
            class="w-full border-2 border-gray-300 font-thin text-sm rounded p-2"
          />
        </div>
        <div class="space-y-1">
          <label for="verify" class="font-semibold text-sm">CVV</label>
          <input
            type="number"
            placeholder="123"
            class="w-full border-2 border-gray-300 font-thin text-sm rounded p-2"
          />
        </div>
      </div>
      <div class="flex items-center space-x-1 pt-3 pb-2">
        <input type="checkbox" name="save" id="save" class="border-gray-300" />
        <span class="text-xs font-extralight text-gray-400"
          >Save card details</span
        >
      </div>
      <RouterLink
        to="/checkout/payments/cardPin"
        class="flex items-center justify-center text-sm font-medium bg-green-400 text-white rounded py-2"
        >Pay USD00.00</RouterLink
      >
    </div>
  </section>
</template>
