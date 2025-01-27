<script setup>
import { RouterView, RouterLink, useRoute } from "vue-router";
import { computed } from "vue";
import OrderComponent from "@/components/OrderComponent.vue";
import { useStore } from "@/stores/store";

const data = useStore();

const subtotalPrice = computed(() => {
  return data.cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity * (1 - item.discount / 100),
    0
  );
});

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

const route = useRoute();
const currentRoute = computed(() => route.fullPath);
</script>

<template>
  <section>
    <div class="w-full h-screen grid grid-cols-2">
      <div class="w-full h-screen flex justify-center items-center">
        <div class="w-9/12 h-5/6 p-4">
          <h2 class="font-bold text-lg">Payment</h2>
          <hr class="bg-gray-200 h-[2px] mt-2" />
          <h5 class="font-semibold text-sm mt-4">Pay With:</h5>
          <div
            class="flex items-center space-x-5 gap-1 text-gray-500 text-sm font-normal mt-2"
          >
            <RouterLink
              :to="'/checkout/payments/card'"
              class="flex items-center space-x-1"
              ><input
                type="radio"
                name="payment"
                value="Card"
                :checked="currentRoute === '/checkout/payments/card'"
              /><label for="Card">Card</label></RouterLink
            >
            <RouterLink
              :to="'/checkout/payments/bank'"
              class="flex items-center space-x-1"
              ><input
                type="radio"
                name="payment"
                value="Bank"
                :checked="currentRoute === '/checkout/payments/bank'"
              /><label for="Bank">Bank</label></RouterLink
            >
            <RouterLink
              :to="'/checkout/payments/transfer'"
              class="flex items-center space-x-1"
              ><input
                type="radio"
                name="payment"
                value="Transfer"
                :checked="currentRoute === '/checkout/payments/transfer'"
              /><label for="Transfer">Transfer</label></RouterLink
            >
          </div>
          <!-- Components -->
          <div class="py-3"><RouterView /></div>
          <span class="text-xs text-gray-400 font-thin"
            >Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.</span
          >
        </div>
      </div>
      <div class="w-full h-screen flex justify-center items-center bg-gray-100">
        <div class="w-9/12 h-5/6 p-4">
          <h2 class="font-bold text-xl">Order Summary</h2>
          <hr class="bg-gray-400 h-[2px] mt-2" />
          <OrderComponent
            v-for="item in data.cartItems"
            :key="item.id"
            :image="item.image"
            :name="item.title"
            :price="item.price"
            :quantity="item.quantity"
          />
          <hr class="bg-gray-400 h-[2px]" />
          <div class="flex items-center space-x-2 py-3">
            <input
              type="text"
              placeholder="Gift or discount code"
              class="w-full border-2 border-gray-300 bg-white font-thin text-sm rounded p-2"
            />
            <button
              class="text-white bg-gray-400 rounded text-base font-extralight py-2 px-5"
            >
              Apply
            </button>
          </div>
          <hr class="bg-gray-400 h-[2px]" />
          <div class="py-3 space-y-2">
            <div class="flex justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>${{ subtotalPrice }}</span>
            </div>
            <div class="flex justify-between text-sm font-medium">
              <span>Delivery</span>
              <span>$2.50</span>
            </div>
          </div>
          <hr class="bg-gray-400 h-[2px]" />
          <div class="flex justify-between py-3">
            <div class="flex flex-col">
              <span class="text-sm font-light">Total</span>
              <span class="text-gray-400 text-xs font-thin"
                >Including $1.50 in taxes</span
              >
            </div>
            <div>
              <span class="font-semibold text-2xl">${{ totalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
